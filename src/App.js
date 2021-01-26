import React from 'react';
import {BrowserRouter, Switch, Route, NavLink, Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

import './App.css';
import About from './containers/About/About';
import Projects from './containers/Projects/Projects';
import Landing from './containers/Landing/Landing';
import Contact from './containers/Contact/Contact';

const app = props => {
  const linkStyle = {
    textDecoration: 'none',
    color: 'black',
    fontSize: '22px',
    margin: '15px',
  };

  const activeLinkStyle = {
    textDecoration: 'underline',
    fontSize: '24px'
  }

  return (
  <BrowserRouter>
    <div className="App">
      {/*<Button variant="contained" color="primary">Click Me</Button> */}       
        <NavLink to="/" exact style={linkStyle} activeStyle={activeLinkStyle}>Shane Stephenson</NavLink>
        <NavLink to="/projects" style={linkStyle} activeStyle={activeLinkStyle}>Projects</NavLink>
        <NavLink to="/about" style={linkStyle} activeStyle={activeLinkStyle}>About</NavLink>
        <NavLink to="/contact" style={linkStyle} activeStyle={activeLinkStyle}>Contact</NavLink>
      
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/" onlyActiveOnIndex component={Landing}/>
      </Switch>
    </div>
  </BrowserRouter>
  );
};


export default app;
