import React from 'react';
import {BrowserRouter, Switch, Route, Redirect, NavLink, Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

import './App.css';
import Header from './components/UI/Header/Header';
import Running from './containers/Running/Running';
import Home from './containers/Home/Home';

const app = props => (
  <BrowserRouter>
    <div className="App">
      <Header />
      <Button variant="contained" color="primary">Click Me</Button>
      <ul>
        <li><Link to="/running">Running</Link></li>
      </ul>
      <Switch>
        <Route exact path="/running" component={Running} />
        <Route exact path="/" component={Home} />
        <Redirect from="/all-courses" to="/"/>
      </Switch>
    </div>
  </BrowserRouter>
);


export default app;
