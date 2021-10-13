import React from 'react';
import './EventPage.css';
import Event from './Event';
import events from './events-data.json';

const EventPage = () => {
    return (
        <div className="eventpage-container">
            <h3 className="eventpage-h3">Upcoming Events</h3>
            {events.upcoming.map(e => {
                return <Event type={true} image={e.image} desc={e.desc} date={e.date} time={e.time} link={e.link} title={e.title} platform={e.platform} />
            })}
            <hr />
            <h3 className="eventpage-h3">Past Events</h3>
            {events.past.map(e => {
                return <Event type={false} image={e.image} desc={e.desc} date={e.date} time={e.time} link={e.link} title={e.title} platform={e.platform} />
            })}
        </div>
    );
};

export default EventPage;