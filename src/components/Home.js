import React from 'react';
import {Rail, Grid} from 'semantic-ui-react';
import ink6 from '../svg/ink6.svg';
import ink7 from '../svg/ink7.svg';

function App() {
    return (
      <div className="home">
          <Grid>
        <Grid.Column>
       <img src={ink6} alt="ink" className="splatter3" />
        <div className="definition">
        <div> <h1 className="fontFellEnglish name" >Megan Jones </h1></div>
        
        <div className="offset-def">
        <p className="fontAlegreya def"><strong>|ˈmɛɡən ˈdʒoʊnz |</strong> <em className="fontAlegreya">noun</em> <br></br> <sup>1</sup>Software developer.  <sup>2</sup>Writer.  <sup>3</sup>Human. </p> 
        </div>
        </div>
        <img src={ink7} alt="ink spot" className="splatter"/>
        </Grid.Column>
        </Grid>
      </div>
    );
  }
  
  export default App;
  