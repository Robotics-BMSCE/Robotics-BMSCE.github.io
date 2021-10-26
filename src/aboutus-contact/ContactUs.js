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
                    <a href="https://www.google.com" rel="noreferrer" target="_blank"><img src="https://raw.githubusercontent.com/Robotics-BMSCE/WebsiteData/main/images/contact-logo/Instagram_icon.png?token=ARS2W3CL4DBN5V4CDTAZ6UDBPAUNK" alt="Instagram" className="icon-insta" /></a>
                    <span className="contact-span" />
                    <a href="https://www.google.com" rel="noreferrer" target="_blank"><img src="https://raw.githubusercontent.com/Robotics-BMSCE/WebsiteData/main/images/contact-logo/linkedin-512.png?token=ARS2W3GU7YITUXMRVV4CDZ3BPAUPY" alt="LinkedIn" className="icon-linkedin" /></a>
                </div>
            </div>
            <ContactForm />
        </div>
    );
};

export default ContactUs;