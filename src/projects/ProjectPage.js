import React, { useState } from 'react';
import './ProjectPage.css';
import ProjectItem from './ProjectItem';
import data from './data.json';
import Modal from '../helpers/Modal';
import Button from '../helpers/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';

const ProjectPage = () => {
    const [showModal, setShowModal] = useState(false);
    const [projectName, setProjectName] = useState();
    const [projectImg, setProjectImg] = useState();
    const [projectDesc, setProjectDesc] = useState();
    const [projectBy, setProjectBy] = useState();
    const [projectDoc, setProjectDoc] = useState();

    const onButtonClick = (id) => {
        const x = data.projects.find(p => p.id === id);
        setProjectName(x.name);
        setProjectImg(x.img);
        setProjectDesc(x.desc);
        setProjectBy(x.by);
        setProjectDoc(x.doc);
        setShowModal(true);
    };
    const closeModalHandler = () => setShowModal(false);

    return (
        <React.Fragment>
            {/* Contains everything that you want to show on the modal that pops up */}
            <Modal  
                show={showModal}
                onCancel={closeModalHandler}
                header={projectName}
                contentClass="place-item__modal-content"
                footerClass="footer_project"
                footer={<Button danger onClick={closeModalHandler}>CLOSE</Button>}
            >
                <div className="map-container center">
                    <img src={projectImg} alt={projectName} className="img-project" />
                    <p className="project-p">{projectDesc}</p>
                    <p> <FontAwesomeIcon icon={faFile} /> <a href={projectDoc} rel="noreferrer" target="_blank">{projectDoc}</a></p>
                    <div className="contribution">
                        <h4 className="project-h4">Contributions from: </h4>
                        <p className="contribution-p">
                            {projectBy && projectBy.map(a => {
                                return <p className="by-p">{a}</p>
                            })} 
                        </p>
                    </div>
                </div>
            </Modal>
            <div className="project-page-container">
                <h1 className="project-h1">PROJECT SECTION</h1>
                <div className="projects">
                {data.projects.map(p => {
                    return <ProjectItem name={p.name} img={p.img} id={p.id} clickButton={onButtonClick} />
                })}    
                </div>
            </div>
        </React.Fragment>
    );
};

export default ProjectPage;