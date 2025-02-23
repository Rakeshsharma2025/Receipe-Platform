import React, { useState } from 'react';
import './ContactUs.css'; // Importing the ContactUs.css for styling

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [recipeWants, setRecipeWants] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ name, email, recipeWants, feedback });
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Recipe Wants:</label>
          <input type="text" value={recipeWants} onChange={(e) => setRecipeWants(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Feedback:</label>
          <textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
