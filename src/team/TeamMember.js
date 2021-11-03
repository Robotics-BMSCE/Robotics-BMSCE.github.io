import React from 'react';
import './TeamMember.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

const TeamMember = props => {
    return (
        <div className="team-member-container">
            <img src={props.img} alt={props.name} className="team-member-img" />
            <h4 className="team-member-h4">{props.name}</h4>
            <h5 className="team-member-h5">{props.post}</h5>
            <p className="team-member-p"><FontAwesomeIcon icon={faEnvelopeSquare} /> {props.email}</p>
        </div>
    );
};

export default TeamMember;