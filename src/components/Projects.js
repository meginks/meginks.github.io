import React from 'react';
import Menu from './Menu';
import {Accordion} from 'semantic-ui-react';
import SocialMenu from './SocialMenu';


function App() {
    return (
      <div id="app">
      <Menu />
        <div className="text-container">
            <h1 className="heading">Recruiter Rules</h1>
            <p className="paragraph">
                Recruiter Rules is a rule engine for recruiters that I made with a team of 2 other developers as a part of Lambda School's 5-week capstone experience.
            </p>
        </div>
        <div className="text-container">
            <h1 className="heading">Black Hole</h1>
            <p className="paragraph">
                Black Hole is a note taking app that I created in the span of one week with a team of 3 other students at Lambda School. I created the entire backend of the application using Node and Express.
            </p>
        </div>
        <div className="text-container">
            <h1 className="heading">Life GPA</h1>
            <p className="paragraph">
                Life GPA is an task management app that I created in the span of one week with a team of 4 other students at Lambda School. I created the entire frontend portion using React and CSS. 
            </p>
        </div>
        <div className="text-container">
            <h1 className="heading">International Rural School Report</h1>
            <p className="paragraph">
                International Rural School Report is a resource management application for rural schools that I created in the span of one week with a team of 5 other students at Lambda School. I created the marketing page for the app using HTML, CSS (Less) and vanilla Javascript. I also wrote all of the copy.
            </p>
        </div>
        <SocialMenu />
      </div>
    );
  }
  
  export default App;
  