import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDom from 'react-dom';
import SignUp from '../imports/ui/signUp'
import NotFound from '../imports/ui/notFound';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { createBrowserHistory } from 'history';
import Dashboard from '../imports/ui/dashboard';

window.createBrowserHistory = createBrowserHistory;
const routes = (
  <Router>
    <Switch>
      <Route path='/dashboard' component={Dashboard}/>
      <Route path="/signup/" component={SignUp} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);


Meteor.startup(() => {
  ReactDom.render(routes, document.getElementById('main-render'));
});
