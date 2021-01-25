import React from 'react';
import {BrowserRouter, Switch, Route, NavLink, Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

import './App.css';
import About from './containers/About/About';
import Projects from './containers/Projects/Projects';

const app = props => (
  <BrowserRouter>
    <div className="App">
      {/*<Button variant="contained" color="primary">Click Me</Button> */}  

      <ul>
        <li><NavLink to="/" activeStyle={{ color: 'red' }} >Shane Stephenson</NavLink></li>
        <li><NavLink to="/about" activeStyle={{ color: 'red' }}>About</NavLink></li>
        <li><NavLink to="/projects" activeStyle={{ color: 'red' }}>Projects</NavLink></li>
      </ul>
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route  path="/"/>
      </Switch>
    </div>
  </BrowserRouter>
);


export default app;
