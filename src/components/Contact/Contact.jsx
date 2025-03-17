import React from 'react';
import { Element } from 'react-scroll';
import './Contact.css';

function Contact() {
  return (
    <Element name="contact-section">
      <div className='main' style={{ backgroundColor: 'burlywood', padding: '50px 20px', textAlign: 'center' }}>
        
        <h1>Contact Me</h1>

        <div className="contact-container" style={{ maxWidth: '500px', margin: 'auto' }}>
          <form action="https://getform.io/f/bnlqjxzb" method="POST" className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="number">Phone Number</label>
              <input type="tel" id="number" name="number" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4" required></textarea>
            </div>
            <button type="submit" className="btn-submit">Submit</button>
          </form>
        </div>
        
        

      </div>
    </Element>
  );
}

export default Contact;
