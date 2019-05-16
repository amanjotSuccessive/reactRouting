import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDom from 'react-dom';
import SignUp from '../imports/ui/signUp'
import NotFound from '../imports/ui/notFound';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import bb, { createBrowserHistory } from 'history';
import Dashboard from '../imports/ui/dashboard';
import About from '../imports/ui/about';
import Home from '../imports/ui/home';
import Login from '../imports/ui/login';
import Link from '../imports/ui/link';
const browserHistory = createBrowserHistory();
const unauthPages = ['/', '/Login', '/signup']
const authPages = ['/links']
import Users from '../imports/api/users';
import { Links } from '../imports/api/links';
import LinksList from '../imports/ui/linksList'
const onEnterPublicPage = () => {
  if (Meteor.userId()) {

  }
}
const routes = (
  <Router>
    <Switch>
      <Route path='/login/' component={Login} />
      <Route path='/dashboard' component={Dashboard} />
      <Route path='/about/' component={About} />
      <Route path='/link/' component={Link} />
      <Route path="/signup/" component={SignUp} onEnter={onEnterPublicPage} />
      <Route path='/home' component={Home} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

var ctx = 'myChart';

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  const pathName = window.location.href
  console.log('---->', pathName)
  console.log('--->', isAuthenticated);
  console.log('rrrrr', isAuthenticated && /Login/.test(pathName))
  if (isAuthenticated && /Login/.test(pathName)) {
    //browserHistory.push('/dashboard')
    browserHistory.replace('/dashboard')
  }
  //else browserHistory.replace('/signup')
})

Meteor.startup(() => {
  ReactDom.render(routes, document.getElementById('main-render'));
});