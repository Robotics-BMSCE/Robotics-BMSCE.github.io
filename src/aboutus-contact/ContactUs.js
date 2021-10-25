import React from 'react';
import './ContactUs.css';
import ContactForm from './ContactForm';

const ContactUs = () => {
    const email = "robotics.bmsce@gmail.com"; 
    return ( 
        <div className="contactus-container center">
            <h1 className="contactus-h1">Contact Us</h1>
            <hr className="hr-contactus" /> {/* The underline for Contact Us */}
            <h2 className="contactus-h2">BMSCE Robotics Club</h2>
            <div className="not-header center">
                <div className="email-phno">
                    <h3 className="contactus-h3">{email}</h3>
                </div>
                <div className="icon-div">  {/* Social media handles */}
                    <a href="https://www.google.com" rel="noreferrer" target="_blank"><img src="https://github.com/rajaryan18/Robotics-Images/blob/main/images/contactus/Instagram_icon.png?raw=true" alt="insta" className="icon-insta" /></a>
                    <span className="contact-span" />
                    <a href="https://www.google.com" rel="noreferrer" target="_blank"><img src="https://github.com/rajaryan18/Robotics-Images/blob/main/images/contactus/linkedin-512.png?raw=true" alt="linkedin" className="icon-linkedin" /></a>
                </div>
            </div>
            <ContactForm />
        </div>
    );
};

export default ContactUs;