import React from 'react';
import Menu from './Menu.js';
import {Rail, Grid} from 'semantic-ui-react';
import SocialMenu from './SocialMenu'
import ink1 from '../svg/ink1.svg';
import ink2 from '../svg/ink2.svg';
import ink3 from  '../svg/ink3.svg';

function App() {
    return (
      <div id="app">
        <header></header>
          <Grid>
        <Grid.Column>
        <Rail position="left">
       <Menu />
       </Rail>
      <div className="splat">
       <img src={ink1} alt="ink" />
       </div>
        <div className="definition">
        <div> <h1 className="fontFellEnglish name" >Megan Jones </h1></div>
        
        <div className="offset-def">
        <p className="fontAlegreya"><strong>|ˈmɛɡən ˈdʒoʊnz |</strong> <em className="fontAlegreya">noun</em> <br></br> <sup>1</sup>Software developer.  <sup>2</sup>Writer.  <sup>3</sup>Human. </p> 
        </div>
        </div>
        </Grid.Column>
        </Grid>
        <footer className="footer">
          <p>
          designed by Megan Jones &copy; 2019 
          </p>
          </footer>
      </div>
    );
  }
  
  export default App;
  