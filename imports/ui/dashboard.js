import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './home';
import About from './about';
import Topics from './topics';
export default function Dashboard() {
    return (
      <Router>
      {   <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>
  
          <div />
  
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
        </div> }
      </Router>
    );
  }