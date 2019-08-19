import React from 'react'; 
import {Icon} from 'semantic-ui-react';
import Menu from './Menu';
import Frasier from '../images/frasier-reading.jpg';
import SocialMenu from './SocialMenu';


function Contact() {
    return (
        <>
        <Menu />
        <div className="text-container">
        <div>
       <Icon name="comment alternate outline" size="huge" className="fontFellEnglish" />
        </div>
        <h1 className="heading">Contact</h1> 
        <img src={Frasier} alt="cat reading a book" className="avatar-me" />
        <p>Find me on social media or send me an email.</p>
        <div className="social-container">
          <a target="_blank" href="https://medium.com/@meganjones.dev"> <Icon name="medium" size="big" /></a>
          <a target="_blank" href="https://www.linkedin.com/in/megan-jones123/"><Icon name="linkedin square" size="big" /></a>
          <a target="_blank" href="https://twitter.com/meg_inks"> <Icon name="twitter square" size="big" /></a>
          <a target="_blank" href="https://github.com/meginks"><Icon name="github square" size="big" /></a>
          <a target="_blank" href="mailto:meganjones.dev@gmail.com"><Icon name="mail square" size="big"/></a> 
        </div> 
        </div>
        <div className="home-footer">
          <p className="center-paragraph">Megan Jones &copy; 2019 </p>
          </div>
        </> 
    )

}

export default Contact;