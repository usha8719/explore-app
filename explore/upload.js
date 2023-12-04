// server.js
import express from 'express';
import multer from 'multer';
import { Storage } from '@google-cloud/storage';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

const storage = new Storage({
  projectId: 'explore-around-404904',
  keyFilename: './cloud.json',
});

const bucket = storage.bucket('featuredlist');

const upload = multer({
  storage: multer.memoryStorage(),
});

app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No file received.' });
    }

    const blob = bucket.file(req.file.originalname);
    const blobStream = blob.createWriteStream();

    blobStream.on('error', (err) => {
      console.error('Error uploading to Google Cloud Storage:', err);
      return res.status(500).json({ success: false, message: 'Error uploading file.' });
    });

    blobStream.on('finish', () => {
      res.json({ success: true, message: 'File uploaded successfully!' });
    });

    blobStream.end(req.file.buffer);
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({ success: false, message: 'Error uploading file. Please try again.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
