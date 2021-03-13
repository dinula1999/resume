import React from "react";
import './styles.css';
import About from '../about';
import Contact from '../contact';
import Articles from "../articles";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// import {
//   CSSTransition,
//   TransitionGroup,
// } from 'react-transition-group';


export default function Navbar() {

  return (
    <Router>
      <div>
        <nav>
        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}><span>About</span></Link>
        <Link to="/projects" style={{ textDecoration: 'none', color: 'black' }}><span>Projects</span></Link>
        <Link to="/articles" style={{ textDecoration: 'none', color: 'black' }}><span>Articles</span></Link>
        <Link to="/contact" style={{ textDecoration: 'none', color: 'black' }}><span>Contact me</span></Link>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

    <Switch>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/articles">
            <Articles />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <About />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

function Projects() {
  return <h2>COMING SOON</h2>;
}