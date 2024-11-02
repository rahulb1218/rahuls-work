// src/ContactPage.js

import React from 'react';
import './ContactPage.css'
function ContactPage() {
  return (
    <div className="contact-container">
      <div className="contact">
        <div className='contact-item'>
          <h1 style={{ marginTop: '30px' }}>
            Contact
          </h1>


          <div className="hbox">
            <a className='contact-heading' href="mailto:rahulb1218@gmail.com" style={{paddingBottom: '15px'}}>
            Email
            </a>

          </div>

          <div className="hbox">
            <a className='contact-subheading' href="mailto:rahulb1218@gmail.com" style={{paddingLeft: '20px'}}>
            rahulb1218@gmail.com
            </a>
 
          </div>

          <div className="hbox">
            <a href="www.linkedin.com/in/rahulb1218" className='contact-heading'>
            LinkedIn
            </a>

          </div>

          <div className="hbox">
            <a href="https://github.com/rahulb1218" className='contact-heading'>
            GitHub
            </a>

          </div>






        </div>
      </div>
      <div className="floor"></div>
    </div>
  );
}

export default ContactPage;
