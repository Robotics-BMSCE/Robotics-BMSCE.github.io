import React from 'react';
import './ProjectItem.css';
import Button  from '../helpers/Button';

const ProjectItem = props => {

    return (
        <div className="project-container">
            <img className="project-img" src={props.img} alt={props.name} />
            <h3 className="projectitem-h3">{props.name}</h3>
            <Button onClick={() => props.clickButton(props.id)}>Know More</Button>
        </div>
    );
};

export default ProjectItem;