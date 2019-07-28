import React from 'react';
import Menu from './Menu.js';
import SocialMenu from './SocialMenu';

function App() {
    return (
      <div id="app">
      <Menu />
        <div className="text-container">
        <div className="divider"></div>
        <h1 className="heading">Blog</h1>
        
        <div className="divider"></div>
        <h1 className="heading">Other Publications</h1> 
        <div className="divider"></div>
        </div>
        <SocialMenu />
      </div>
    );
  }
  
  export default App;
  