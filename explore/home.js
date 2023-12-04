
import express from 'express';
import { static as expressStatic } from 'express'; // Use an alias for the static function
import { join, dirname } from 'path';
import { Storage } from '@google-cloud/storage';
import { fileURLToPath } from 'url';

const app = express();
const port = process.env.PORT || 3001;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configure Google Cloud Storage
const storage = new Storage({
    projectId: 'explore-around-404904',
    keyFilename: './cloud.json',
});


app.use(express.static(join(__dirname, 'client/build')));


// Define the route that returns the public links to images
app.get('/image-links', (req, res) => {
  
  const bucket = storage.bucket('aboutimg');

  const imageLinks = [
    bucket.file('kayaking').publicUrl(),
    bucket.file('food').publicUrl(),
    bucket.file('travel').publicUrl(),
  ];

  res.json(imageLinks);
});

// Serve your React app for any other routes
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'client/build/about.jsx'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
