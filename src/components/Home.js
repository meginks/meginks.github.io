import React from 'react';
import Menu from './Menu.js';
import {Rail, Grid} from 'semantic-ui-react';
import SocialMenu from './SocialMenu'
import ink1 from '../svg/ink1.svg';
import ink2 from '../svg/ink2.svg';
import ink3 from  '../svg/ink3.svg';
import ink4 from '../svg/ink4.svg';
import ink5 from '../svg/ink5.svg';
import ink6 from '../svg/ink6.svg';
import ink7 from '../svg/ink7.svg';
import quill1 from '../svg/quill1.svg';

function App() {
    return (
      <div id="app">
          <Grid>
        <Grid.Column>
        <Rail position="left">
       <Menu />
       </Rail>
       <img src={ink6} alt="ink" className="splatter3" />
        <div className="definition">
      
        <div> <h1 className="fontFellEnglish name" >Megan Jones </h1></div>
        
        <div className="offset-def">
        <p className="fontAlegreya"><strong>|ˈmɛɡən ˈdʒoʊnz |</strong> <em className="fontAlegreya">noun</em> <br></br> <sup>1</sup>Software developer.  <sup>2</sup>Writer.  <sup>3</sup>Human. </p> 
        </div>
        </div>
        <img src={ink7} alt="ink spot" className="splatter"/>
        </Grid.Column>
        </Grid>
        <footer className="footer">
          <p>
          Megan Jones &copy; 2019 
          </p> 
          <img src={ink5} alt="ink" className="ink" />
          </footer>
      </div>
    );
  }
  
  export default App;
  