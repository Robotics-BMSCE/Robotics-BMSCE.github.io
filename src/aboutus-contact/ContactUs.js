import React from 'react';
import './ContactUs.css';
import ContactForm from './ContactForm';

const ContactUs = () => {
    const email = "robotics@bmsce.ac.in";
    const phno = "+91-7259027418";
    return ( 
        <div className="contactus-container center">
            <h1 className="contactus-h1">Contact Us</h1>
            <h2 className="contactus-h2">BMSCE Robotics Club</h2>
            <div className="not-header center">
                <div className="email-phno">
                    <h3 className="contactus-h3">{email}</h3>
                    <h3 className="contactus-h3">{phno}</h3>
                </div>
                <div className="icon-div">
                    <a href="https://www.google.com" rel="noreferrer" target="_blank"><img src="https://github.com/rajaryan18/Robotics-Images/blob/main/images/contactus/Instagram_icon.png?raw=true" alt="insta" className="icon-insta" /></a>
                    <span className="contact-span" />
                    <a href="https://www.google.com" rel="noreferrer" target="_blank"><img src="https://github.com/rajaryan18/Robotics-Images/blob/main/images/contactus/linkedin-512.png?raw=true" alt="linkedin" className="icon-linkedin" /></a>
                    <span className="contact-span" />
                    <a href="https://www.google.com" rel="noreferrer" target="_blank"><img src="https://github.com/rajaryan18/Robotics-Images/blob/main/images/contactus/icons8-github-30.png?raw=true" alt="github" className="icon-github" /></a>
                </div>
            </div>
            <ContactForm />
        </div>
    );
};

export default ContactUs;