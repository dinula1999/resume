import React from "react";
import './styles.css';

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
            <div className="projects">

              <div className="container">
                  <div className="row project">
                  <h4>Sudoku solver</h4>
                  <p>Sudoku solver app made using only Vanilla Javascript.
                      Check it out <a href="https://dinulajay.github.io/sudoku-solver" target="_blank" rel="noReferrer">here</a>
                  </p>
                  </div>
                  
              </div>

            </div>
          </Route>

          <Route path="/articles">
          
            <div className="articles">

              <div className="container">
                  <div className="row article">
                      <h4>How to implement a graph</h4>
                      <p>Here I will walk you through the 2 ways graphs are implemented. AdjecentcyList and AdjecentcyMatrix</p>
                  </div>
              </div>
            <br />
            THIS SECTION IS STILL IN DEVELOPMENT
            </div>

          </Route>
          <Route path="/contact">
            <div className="nav-item about">
             
              <p>Here's my email</p>
              <p>dinulaisiwara10@gmail.com</p>
              <h3>or</h3>
              <a href = "mailto:dinulaisiwara10@gmail.com">
  Send an email directly
  </a>
            
       </div>
          </Route>
          <Route path="/">
            <div className="nav-item about">
              
              <h3>I'm a developer based in Colombo</h3>
  
              <p>
                  <b>I do front end and back end web development.</b>
                  Been doing front end development for more than a year now. And enjoy Javascript.
              </p>
  
              <p>
              So if you're interested contact me.
              </p>
  
          </div>
          </Route>
        </Switch>

      </div>
    </Router>
  );
}
