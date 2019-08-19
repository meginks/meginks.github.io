import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Home from './components/Home.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Writing from './components/Writings';
import Contact from './components/Contact';

const App = () => {
  return (
    <div id="app">
      <Route exact path="/" component={() => <Home />} /> 
      <Route exact path="/about" component={() => <About />} />
      <Route exact path="/projects" component={() => <Projects />} />
      <Route exact path="/writing" component={() => <Writing />} />
      <Route exact path="/contact" component={() => <Contact />} />
    </div>
  )
}

export default App;