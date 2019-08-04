import React from 'react';
import Menu from './Menu.js';
import SocialMenu from './SocialMenu';
import {Grid, Segment} from 'semantic-ui-react';
import quill1 from '../svg/quill1.svg';
import ink1 from '../svg/ink1.svg';

function App() {
    return (
      <div>
    <Grid>
        <Grid.Column>
          <div className="splatter2">
            <img src={ink1} alt="inksplat" />
          </div>
        <div className="fontAlegreya2 text-container">
            <div>
            <img src="https://avatars3.githubusercontent.com/u/38929577?s=460&v=4" alt="Megan Jones" className="avatar-me" />
            </div>
            <h1 className="heading">My Story</h1>
            <p>
            <span className="fontFellEnglish">F</span>or as long as I can remember, I've always been fascinated by language. As a child, I tried to learn as many other languages as I could (human ones that is), so in addition to increasing my ability to communicate with others with whom I would otherwise be unable, I learned how to learn syntax and structure. It was only a matter of time before that linguistic interest would extend to computer languages as well. Now, I'm particularly interested in the intersections between natural and computer languages.
            </p>
            <p>
            Before becoming a software developer, I received my Bachelor's degree in Comparative Literature and English from Indiana University Bloomington, my Master's degree in English Literature from the University of Kansas, and a certificate in Technical Writing from Bellevue College. I also have 6 years of experience teaching English as a second language to both children and adults, and I taught writing and composition at the university-level for two years. I also have experience managing a winning state election campaign in a competitive district. I currently attend Lambda School's Full Stack Web Development and Computer Science program, which I am projected to finish in early October 2019.
           </p>
        </div>
        </Grid.Column>
        </Grid>
      </div>
    );
  }
  
  export default App;
  