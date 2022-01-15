import React from 'react';
import './Divisions.css';

const Divisions = props => {
    return (
        <div className="division-container neumorphic-shadows">
            {/* <img className="division-img" src={props.img} alt={props.name} /> */}
            <h3 className="division-h3">{props.fullName}</h3>
            <p className="division-p">{props.des}</p>
        </div>
    );
};

export default Divisions;