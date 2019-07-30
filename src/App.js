import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Home from './components/Home.js';
import About from './components/About.js';
import Projects from './components/Projects.js';

const App = () => {
  return (
    <div>
      <Route exact path="/" component={() => <Home />} /> 
      <Route exact path="/about" component={() => <About />} />
      <Route exact path="/projects" component={() => <Projects />} />
    </div>
  )
}

export default App;