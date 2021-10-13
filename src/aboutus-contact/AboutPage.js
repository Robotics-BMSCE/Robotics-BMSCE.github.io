import React from 'react';
import './AboutPage.css';
import Divisions from './Divisions';
import ContactUs from './ContactUs';

const aboutDescription = "The main objective here is to build robots to participate in the ROBOCON INDIA competition and subsequently qualify for the international level. IIT Delhi has an exemplary track record in this competition. We won it in the year 2007 and represented INDIA in the International ROBOCON Competition. Over the years, our robots, both manual and automatic, have been highly appreciated at the competition. The Indian leg of the competition is held in the month of March every year";

const AboutPage = () => {
    return (
        <React.Fragment>
            <div className="about-page-container">
                <div className="team-div"> 
                    <img src={'https://github.com/rajaryan18/Robotics-Images/blob/main/images/tree.jpg?raw=true'} alt="team" className="team" />
                </div>
                <hr />
                <div className="aboutus-container">
                    <h1 className="aboutus-h1">About Us</h1>
                    <p className="aboutus-p">{aboutDescription}</p>
                </div>
                <hr />
                <div className="team-div"> 
                    <img src={'https://github.com/rajaryan18/Robotics-Images/blob/main/images/tree.jpg?raw=true'} alt="team" className="team" />
                </div>
                <div className="division-div">
                    <Divisions img={'https://github.com/rajaryan18/Robotics-Images/blob/main/images/tree.jpg?raw=true'} fullName="Computational Control and Intelligence" des={aboutDescription} />
                    <Divisions img={'https://github.com/rajaryan18/Robotics-Images/blob/main/images/tree.jpg?raw=true'} fullName="Electronic Design and Processing" des={aboutDescription} />
                    <Divisions img={'https://github.com/rajaryan18/Robotics-Images/blob/main/images/tree.jpg?raw=true'} fullName="Mechanical Design and Fabrication" des={aboutDescription} />
                </div>
            </div>
            <hr />

            <ContactUs />
        </React.Fragment>

    );
};

export default AboutPage;
