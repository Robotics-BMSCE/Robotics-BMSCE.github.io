//To add data, search for the json files in every folder and add data in that particular format.

import './index.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import MainNavigation from './navigation/MainNavigation';
import Home from './home-page/Home';
import AboutPage from './aboutus-contact/AboutPage';
import EventPage from './events/EventPage';
import Team from './team/Team';
import ProjectPage from './projects/ProjectPage';

const App = () => {
  return (
    <>
      <Router>
        <MainNavigation />
        <Switch>
          <Route path={process.env.PUBLIC_URL + '/'} exact>
            <Home />
          </Route>
          <Route path={process.env.PUBLIC_URL + '/about'} exact>
            <AboutPage />
          </Route>
          <Route path={process.env.PUBLIC_URL + '/events'} exact>
            <EventPage />
          </Route>
          <Route path={process.env.PUBLIC_URL + '/projects'} exact>
            <ProjectPage />
          </Route>
          <Route path={process.env.PUBLIC_URL + '/team'} exact>
            <Team />
          </Route>  
          <Redirect to={process.env.PUBLIC_URL + '/'} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
