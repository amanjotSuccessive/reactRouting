import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDom from 'react-dom';
import SignUp from '../imports/ui/signUp'
import NotFound from '../imports/ui/notFound';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import bb, { createBrowserHistory } from 'history';
import Dashboard from '../imports/ui/dashboard';
import About from '../imports/ui/about';
import Home from '../imports/ui/home';
import Login from '../imports/ui/login';
console.log(bb, '--crea', createBrowserHistory())
const browserHistory = createBrowserHistory();
const unauthPages = ['/', '/Login', '/signup']
const authPages = ['/links']
const onEnterPublicPage = () => {
  if(Meteor.userId()){

  }
}
const routes = (
  <Router>
    <Switch>
      <Route path='/login/' component={Login} />
      <Route path='/dashboard' component={Dashboard} />
      <Route path='/about/' component={About} />
      <Route path="/signup/" component={SignUp} onEnter={onEnterPublicPage}/>
      <Route path='/home' component={Home} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);
Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  const pathName = window.location.href
  console.log('---->', pathName)
  console.log('--->', isAuthenticated);

  if (isAuthenticated  && /Login/.test(pathName)  ) {
    //browserHistory.push('/dashboard')
    browserHistory.replace('/dashboard')
  }
})

Meteor.startup(() => {
  ReactDom.render(routes, document.getElementById('main-render'));
});
