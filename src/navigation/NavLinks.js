import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavLinks.css';

const NavLinks = () => {

  return (
    <React.Fragment>
      <ul className="nav-links">
        <li>
          <NavLink to="/" exact>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">
            ABOUT US
          </NavLink>
        </li>
        <li>
          <NavLink to="/events">
            EVENTS
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects">
            PROJECTS
          </NavLink>
        </li>
        <li>
          <NavLink to="/team">
            TEAM
          </NavLink>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default NavLinks;
