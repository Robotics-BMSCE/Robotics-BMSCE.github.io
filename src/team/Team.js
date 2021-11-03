import React from 'react';
import './Team.css';
import TeamMember from './TeamMember';
import data from './team-data.json';

const Team = () => {
    return (
        <div className="team-container">
            <h1 className="team-h1">Club Incharge</h1>
            <div className="faculty-div center">
                {data.faculty.map(f => 
                    <TeamMember name={f.name} post={f.post} email={f.email} img={f.img} />)
                }
            </div>
            <hr />
            <h1 className="team-h1">Committee Members</h1>
            <div className="team-div center">
                {data.committee.map(f => 
                    <TeamMember name={f.name} post={f.division} email={f.email} img={f.img} />)
                }
            </div>
            <hr />
            <h1 className="team-h1">Club Members</h1>
            <div className="team-div center">
                {data.club.map(f => 
                <h5 className="team-member-h6">{f.name}</h5>)
                }
            </div>
        </div>
    );
}

export default Team;