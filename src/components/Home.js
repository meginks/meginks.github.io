import React from 'react';
import {Rail, Icon, Grid} from 'semantic-ui-react';
import Menu from './Menu';
import SocialMenu from './SocialMenu';
import ink6 from '../svg/ink6.svg';
import ink7 from '../svg/ink7.svg';
import megan from '../images/megwithsunflower2.jpg';


function App() {
    return (
        <>
        <Menu /> 
        <div>
          <img src={ink7} alt="inksplat" className="splatter3" />
        <div className="definition">
        <h1 className="fontFellEnglish name" >Megan Jones </h1>
        <div className="offset-def">
        <p className="fontAlegreya def"><strong>|ˈmɛɡən ˈdʒoʊnz |</strong> <em className="fontAlegreya">noun</em> <br></br> <sup>1</sup>Software developer.  <sup>2</sup>Writer.  <sup>3</sup>Human. </p> 
        </div>
        </div>
        </div>
        <div className="home-footer">
          <p className="center-paragraph">Megan Jones &copy; 2019 </p>
          </div>
        </>
    );
  }
  
  export default App;
  