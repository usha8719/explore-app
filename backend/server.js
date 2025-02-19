import mongoose, { connect, model } from 'mongoose';
import express, { json } from 'express';
import cors from 'cors';

const app = express();
const port = 3001;

app.use(json());
app.use(cors());

connect('mongodb+srv://bhumika871999:8719@cluster0.gd32opn.mongodb.net/contactFormDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a mongoose schema
const contactSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  mobile: String,
});

// Create a mongoose model
const Contact = model('Contact', contactSchema);

// Handle form submissions
app.post('/contact', async (req, res) => {
  const { fname, lname, email, mobile } = req.body;

  if (!fname || !lname || !email || !mobile) {
    return res.json({ success: false, message: 'Please fill in all the required fields!' });
  }

  try {
    const contact = new Contact({ fname, lname, email, mobile });
    await contact.save();
    res.json({ success: true, message: 'Form submitted successfully!' });
  } catch (error) {
    console.error('Error saving contact form data:', error);
    //changing the message
    res.json({ success: false, message: 'Error submitting form. Please try again!' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
