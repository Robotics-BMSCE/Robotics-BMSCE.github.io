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
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" exact>
            <AboutPage />
          </Route>
          <Route path="/events" exact>
            <EventPage />
          </Route>
          <Route path="/projects" exact>
            <ProjectPage />
          </Route>
          <Route path="/team" exact>
            <Team />
          </Route>  
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
