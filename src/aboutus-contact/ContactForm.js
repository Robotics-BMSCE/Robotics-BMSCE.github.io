import React, { useState } from 'react';
import axios from 'axios';
import './ContactForm.css';

const url = "https://sheet.best/api/sheets/ec76a63a-617f-47e1-98d5-dc15ba0f4196";
const ContactForm = () => {

    const [data, setData] = useState({
        message: "",
        email: "",
        name: ""
    });
    const {message, email, name} = data;
    const onChangeHandler = e => {
        setData({ ...data, [e.target.name] : e.target.value});
    }

    const onSubmitHandler = async e => {
        e.preventDefault();
        console.log(data);
        axios.post(url, data).then(res => console.log(res));
        setData({
            name: "",
            email: "",
            message: ""
        });
        alert("Sucessful");
    };

    return (
        <div className="contactform-container">
            <form name="google-sheet" onSubmit={onSubmitHandler}>
                <div className="name-email">
                    <div className="form-group">
                        <label htmlFor="name1" className="form-label">Name</label>
                        <input value={name} id="name" name="name" className="form-control" onChange={onChangeHandler} placeholder="Enter your name" required />
                    </div>
                    <div class="form-group">
                        <label htmlFor="email1" className="form-label">Email</label>
                        <input type="email" id="email" value={email} onChange={onChangeHandler} name="email" className="form-control" placeholder="Enter your email address" required />
                    </div>
                </div>
                <div class="form-group">
                    <label htmlFor="message" className="form-label form-label-textarea">Message</label>
                    <textarea id="message" value={message} onChange={onChangeHandler} name="message" className="form-control-textarea" placeholder="Enter your message" rows="3" required></textarea>
                </div>
                <div>
                    <button className="submit-button" type="submit">Send</button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;