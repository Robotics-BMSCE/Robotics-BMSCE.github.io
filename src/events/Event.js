import React from 'react';
import './Event.css';
import Button from '../helpers/Button';

const Event = props => {
    return (
        <div className="event-container">  {/* type = true for upcoming and type = false for past */}
            <div className="event-img">
                <img src={props.image} alt={props.title} className="event-image" />
            </div>
            <div className="event-info">  {/* first checks if the particular prop is empty or not. if it has a value, we display it */}
                <h1 className="event-h1">{props.title}</h1>
                <h4 className="event-date">{props.date} | {props.time}</h4>
                {props.speaker && <p className="event-platform">Speaker: {props.speaker}</p>}
                {props.desc && <p className="event-p">{props.desc}</p>}
                {props.platform && <p className="event-platform">Platform: {props.platform}</p>}
                {props.type && props.link && <Button href={props.link} target="_blank">Register Now</Button>}
                {!props.type && props.link && <Button href={props.link} target="_blank">Watch Replay</Button>}
            </div>
        </div>
    );
};

export default Event;