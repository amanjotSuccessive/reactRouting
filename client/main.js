import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDom from 'react-dom';
import SignUp from '../imports/ui/signUp'
import NotFound from '../imports/ui/notFound';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history';
import dom from 'react-router-dom';
console.log('====',dom)
window.createBrowserHistory = createBrowserHistory;
const routes = (
  <Router>
    <Switch>
      <Route path="/signup/" component={SignUp} />

      <Route component={NotFound} />
    </Switch>
  </Router>
);


Meteor.startup(() => {
  ReactDom.render(routes, document.getElementById('main-render'));
});
