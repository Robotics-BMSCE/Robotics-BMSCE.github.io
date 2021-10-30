import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavLinks.css';

const NavLinks = () => {

  return (
    <React.Fragment>
      <ul className="nav-links">
        <li>
          <NavLink to={process.env.PUBLIC_URL + '/'} exact>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to={process.env.PUBLIC_URL + '/about'}>
            ABOUT US
          </NavLink>
        </li>
        <li>
          <NavLink to={process.env.PUBLIC_URL + '/events'}>
            EVENTS
          </NavLink>
        </li>
        <li>
          <NavLink to={process.env.PUBLIC_URL + '/projects'}>
            PROJECTS
          </NavLink>
        </li>
        <li>
          <NavLink to={process.env.PUBLIC_URL + '/team'}>
            TEAM
          </NavLink>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default NavLinks;
