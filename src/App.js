import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Home from './components/Home.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Menu from './components/Menu';
import SocialMenu from './components/SocialMenu';

const App = () => {
  return (
    <div>
      <Menu />
      <Route exact path="/" component={() => <Home />} /> 
      <Route exact path="/about" component={() => <About />} />
      <Route exact path="/projects" component={() => <Projects />} />
      <footer className="footer">
          <p>
          Megan Jones &copy; 2019 | 
          </p>
          <SocialMenu />
      </footer> 
    </div>
  )
}

export default App;