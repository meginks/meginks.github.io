import React from 'react';
import Menu from './Menu.js';
import SocialMenu from './SocialMenu'

function App() {
    return (
      <div id="app">
        <div>
       <Menu />
       </div>
        <div className="definition">
        <div> <h1 className="fontFellEnglish name" >Megan Jones </h1></div>
        
        <div className="offset-def">
        <p className="fontAlegreya"><strong>|ˈmɛɡən ˈdʒoʊnz |</strong> <em className="fontAlegreya">noun</em> <br></br> <sup>1</sup>Software developer.  <sup>2</sup>Writer.  <sup>3</sup>Human. </p> 
        </div>
        </div>
        
      </div>
    );
  }
  
  export default App;
  