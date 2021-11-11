import React from 'react';
import './AboutPage.css';
import Divisions from './Divisions';
import ContactUs from './ContactUs';

const aboutDescription = "You would be lying if you said that you didn't find Sophia the humanoid cool to say at the very least. Did you know that she's a citizen of Saudi Arabia?? Want to know the what, why and how of robotics?Want to explore the vast field of robotics, meet awesome people and build the coolest bots. Why then, the BMSCE Robotics Club is the right place! We are a student body which takes interest in various competitions year while long. Check out more about our competitions on the Events page! Dive deep into the learning process and participate in nation wide competitions, all while growing with your peers. We strongly believe in teamwork, dedication, and of course, learning! So, get ready to join this amazing and talented team to hone your skills and get sucked into the exciting and ever-expanding world of robotics."
const aboutDescription2 = "Start simple, create incredible";
const cciDescription = "We aim to learn about robot control using different programming languages and explore  Artificial Intelligence, Machine Learning. We also take interest in Image processing, Robot Vision as well as Robotic Operating Systems";
const edpDescription = "Our goal is to learn about circuit and PCB designing with EMI/EMC, exploring various actuators and sensors, exploring IoT for the robot and understanding the fields of Embedded Systems, Battery management systems and Multiphysics for Sensor Design.";
const mdfDescription = "We aim to learn about robot kinematics, mechanical designs and Control systems. We also take interest in learning simulation Robot kinematics, chassis designing for robots and the various softwares required for modelling and designing.";

const AboutPage = () => {
    return (
        <React.Fragment>
            <div className="about-page-container">
                <div className="team-div"> 
                    <img src={'https://github.com/Robotics-BMSCE/WebsiteData/blob/main/images/about%20us/ClubPhoto.jpg?raw=true'} alt="team" className="team" />
                </div>
                <hr /> 
                <div className="aboutus-container">
                    <h1 className="aboutus-h1">About Us</h1>
                    <p className="aboutus-p">{aboutDescription}</p><br />
                    <p className="aboutus-p">{aboutDescription2}</p>
                </div>
                <hr />
                <div className="team-div"> 
                    <img src={'https://github.com/Robotics-BMSCE/WebsiteData/blob/main/images/about%20us/aboutUs3.gif?raw=true'} alt="team" className="team" />
                </div>
                <div className="division-div">   {/* About the three divisions, i.e., CCI/EDP/MDF */}
                    <Divisions img={'https://github.com/rajaryan18/Robotics-Images/blob/main/images/tree.jpg?raw=true'} fullName="Computational Control and Intelligence" des={cciDescription} />
                    <Divisions img={'https://github.com/rajaryan18/Robotics-Images/blob/main/images/tree.jpg?raw=true'} fullName="Electronic Design and Processing" des={edpDescription} />
                    <Divisions img={'https://github.com/rajaryan18/Robotics-Images/blob/main/images/tree.jpg?raw=true'} fullName="Mechanical Design and Fabrication" des={mdfDescription} />
                </div>
            </div>
            <hr />

            <ContactUs />
        </React.Fragment>

    );
};

export default AboutPage;
