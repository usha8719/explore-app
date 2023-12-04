import React, { useState } from 'react';
import axios from 'axios';
import './contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    mobile: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:3001/contact', formData);
      if (response.data.success) {
        alert('Form submitted successfully!');
      } else {
        alert('Error submitting form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section id="contact">
      <div className="contact-page">
      <nav>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="Contact.html">Contact</a></li>
        </ul>
      </nav>

      <h1>Contact Us</h1>
      <p>For a customized list, please submit your details. Our team will contact you soon.</p>
        <form>
        <label htmlFor="fname" className="label-text">
          First name*:
        </label>
        <input
          type="text"
          id="fname"
          name="fname"
          value={formData.fname}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="lname" className="label-text">
          Last name*:
        </label>
        <input
          type="text"
          id="lname"
          name="lname"
          value={formData.lname}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="email" className="label-text">
          Email Id*:
        </label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="mobile" className="label-text">
          Mobile*:
        </label>
        <input
          type="text"
          id="mobile"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
        />
        <br />
        <p>Best Time to Contact: </p>
        <input type="radio" id="mrng" />
        <label htmlFor="mrng" className="label-radio">
          09:30AM - 12:00PM
        </label>
        <br />
        <input type="radio" id="noon" />
        <label htmlFor="noon" className="label-radio">
          12:00PM - 03:00PM
        </label>
        <br />
        <input type="radio" id="evng" />
        <label htmlFor="evng" className="label-radio">
          03:00PM - 06:00PM
        </label>
        <br />
        <br />
          <button onClick={handleSubmit} type="button" className="button">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;


