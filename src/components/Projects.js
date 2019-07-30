import React from 'react';
import Menu from './Menu';
import {Icon} from 'semantic-ui-react';
import SocialMenu from './SocialMenu';


function App() {
    return (
      <div id="app">
      <Menu />
        <div className="text-container">
        <div>
       <Icon name="code branch" size="huge" className="fontFellEnglish" />
        </div>
        <h1 className="heading">Projects</h1>
        <div >
          
               
            <div className="text-container">
            <p className="paragraph">
            <span className="fontFellEnglish2">Recruiter Rules</span> is a rule engine for recruiters that I made with a team of 2 other developers as a part of Lambda School's 5-week capstone experience (Labs). In the app, a user can log in, create a set of rules or conditions under which a candidate's information can be sent to the contacts of their choice. Then, that user can input a candidate's information and it will automatically be emailed to the correct person according to that person's own rules as specified in their rule engine. 
            </p>
            <p className="paragraph"> We used React and Semantic UI on the frontend, Node and Express on the backend, Postgres for our database, and Firebase OAuth for our authentication. We also implemented nodemailer and json-rules-engine. In addition to collaborating across the stack, my main contribution was in getting our email system to work and to render the candidate's data in a human-readable, paragraph form. 
            </p>
            <p className="paragraph">
            For further reading and reference: See <em><a href="https://github.com/labs13-recruiter-rule" target="_blank">the code </a></em> and <em><a href="https://recruiterrules.com" target="_blank">the deployed site.</a></em>
            </p>
            
            </div>
        
        </div>
        <div className="text-container">
            <p className="paragraph">
            <span className="fontFellEnglish2">Black Hole</span> is a note taking app that I created in the span of one week with a team of 3 other students at Lambda School. I created the backend of the application using Node and Express.
            </p>
            <p className="paragraph">
            For further reading and reference: See <em><a target="_blank" href="https://github.com/april-blackhole-lambda/backend">the code. </a></em>
            </p>
        </div>
        <div className="text-container">
           
            <p className="paragraph">
            <span className="fontFellEnglish2">Life GPA</span> is an task management app that I created in the span of one week with a team of 4 other students at Lambda School. I created the frontend portion using React and CSS. 
            </p>
            <p className="paragraph">
            For further reading and reference: See <em><a href="https://github.com/lifegpa/life-gpa-react-app" target="_blank">the code </a></em> and <em><a href="http://lifegpabuildweek.netlify.com/" target="_blank">the deployed site.</a></em>
            </p>
        </div>
        <div className="text-container">
        
            <p className="paragraph">
            <span className="fontFellEnglish2">International Rural School Report</span> is a resource management application for rural schools that I created in the span of one week with a team of 5 other students at Lambda School. I created the marketing page for the app using HTML, CSS (Less) and vanilla Javascript. I also wrote all of the copy.
            </p>
            <p className="paragraph">
            For further reading and reference: See <em><a href="https://github.com/internation-rural-school-report/irsr-marketing-page-mj" target="_blank">the code </a></em> and <em><a href="https://silly-fermi-9306d2.netlify.com/" target="_blank">the deployed site.</a></em>
            </p>
        </div>
        </div>
        <SocialMenu />
      </div>
    );
  }
  
  export default App;
  