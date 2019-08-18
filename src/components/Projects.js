import React from 'react';
import Menu from './Menu';
import {Icon, Image, Card, Divider} from 'semantic-ui-react';
import ink7 from '../svg/ink7.svg';
import ink5 from '../svg/ink5.svg';
import SocialMenu from './SocialMenu';

function App() {
    return (
      <div>
        <div className="text-container">
        <div>
       <Icon name="code branch" size="huge" className="fontFellEnglish" />
        </div>
        <h1 className="heading">Projects</h1> 
          <div className="project-group">
            <Card.Group itemsPerRow="2" stackable> 
              <Card>
                     <Card.Content>   
                  <Card.Description>
                  <Image src="https://images.unsplash.com/photo-1560574188-6a6774965120?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="engine"/>
            
                <div className="text-container">
                  <p className="paragraph">
            <span className="fontFellEnglish2">Recruiter Rules</span> is a rule engine for recruiters that I made with a team of 2 other developers as a part of Lambda School's 5-week capstone experience (Labs). In the app, a user can log in, create a set of rules or conditions under which a candidate's information can be sent to the contacts of their choice. Then, that user can input a candidate's information and it will automatically be emailed to the correct person according to that person's own rules as specified in their rule engine. 
            </p>
            <p className="paragraph"> We used React and Semantic UI on the frontend, Node and Express on the backend, Postgres for our database, and Firebase OAuth for our authentication. We also implemented nodemailer and json-rules-engine. In addition to collaborating across the stack, my main contribution was in getting our email system to work and to render the candidate's data in a human-readable, paragraph form. 
            </p>
            <Divider horizontal><Icon name="code" /></Divider>
            <p className="paragraph">
            See <em><a href="https://github.com/labs13-recruiter-rule" target="_blank">the code </a></em> and <em><a href="https://recruiterrules.com" target="_blank">the deployed site.</a></em>
            </p>
            </div>
                  </Card.Description>
                </Card.Content>
              </Card>

              <Card>
                <Card.Content>
                  <Image src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=1050&q=80" alt="grading" /> 
                  <Card.Description>
                  <div className="text-container">
             <p className="paragraph">
            <span className="fontFellEnglish2">Life GPA</span> is an task management app that I created in the span of one week with a team of 4 other students at Lambda School. I created the frontend portion using React, Redux and CSS. This was the first real project I had created using React, so I think it really cemented my knowledge of how state operates in it.
            </p> 
            <p className="paragraph">
              If I were to go back and improve the app, I would improve the timing, the design, and the way that the GPA is calculated so that it's a smoother user experience.
            </p>
            <Divider horizontal><Icon name="code" /></Divider>
            <p className="paragraph">
            See <em><a href="https://github.com/lifegpa/life-gpa-react-app" target="_blank">the code </a></em> and <em><a href="http://lifegpabuildweek.netlify.com/" target="_blank">the deployed site.</a></em>
            </p>
        </div>
                  </Card.Description>
                </Card.Content>
              </Card>
              <Card>
                <Card.Content>
                  <Image src="https://images.unsplash.com/photo-1485815457792-d1a966f9bde0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="ink pen" /> 
                  <Card.Description>
                  <div className="text-container">
             <p className="paragraph">
            <span className="fontFellEnglish2">This Site</span> is also a project of mine. At the risk of being too meta -- you know, adding my portfolio as a project on my portfolio -- I'm including it here. I designed and created it using a combination of React, vanilla CSS, and Semantic UI. The trickiest part was probably figuring out the CSS animations to make the ink spill on the page, but I had a lot of fun making it.
            </p> 
            <Divider horizontal><Icon name="code" /></Divider>
            <p className="paragraph">
            See <em><a href="https://github.com/meginks/portfolio-site" target="_blank">the code </a></em>and click around for the deployed site because you're already here.
            </p>
        </div>
                  </Card.Description>
                </Card.Content>
              </Card>
              </Card.Group> 
              </div>
        </div>
        <div className="splatter2">
            <img src={ink5} alt="inksplat" />
          </div>
      </div>
    );
  }
  
  export default App;
  