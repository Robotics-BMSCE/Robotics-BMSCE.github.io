import React, { useState } from 'react';
import axios from 'axios';
import './ContactForm.css';

const url = "https://sheet.best/api/sheets/17fe63f9-5a90-475e-b816-5bd8ec47effb";
const ContactForm = () => {
    const [mess, setMess] = useState();
    const [data, setData] = useState({
        message: "",
        email: "",
        name: ""
    }); 
    const {message, email, name} = data;
    const onChangeHandler = e => {  //stores the data from form everytime something has been entered
        setData({ ...data, [e.target.name] : e.target.value});
    }
 
    const onSubmitHandler = async e => {
        e.preventDefault();
        console.log(data);
        axios.post(url, data).then(res => console.log(res));  //post request for google sheets
        setData({
            name: "",
            email: "",
            message: ""
        });
        setMess("Message sent!");  //to tell the user that the message has been sent successfully
    };

    return (
        <div className="contactform-container">
            <form name="google-sheet" onSubmit={onSubmitHandler}>
                <div className="name-email">
                    <div className="form-group">
                        
                        <input value={name} id="name" name="name" className="form-control" onChange={onChangeHandler} placeholder="Enter your name" required />
                    </div>
                    <div class="form-group">
                        
                        <input type="email" id="email" value={email} onChange={onChangeHandler} name="email" className="form-control" placeholder="Enter your email address" required />
                    </div>
                </div>
                <div class="form-group">
                   
                    <textarea id="message" value={message} onChange={onChangeHandler} name="message" className="form-control-textarea" placeholder="Enter your message" rows="3" required></textarea>
                </div>
                <div>
                    <button className="submit-button" type="submit">Send</button>
                </div>
                {mess && <p className="center">{mess}</p>}
            </form>
        </div>
    );
};

export default ContactForm;