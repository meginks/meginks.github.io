import React from 'react';
import Menu from './Menu';
import {Icon, Image, Card, Divider} from 'semantic-ui-react';
import ink7 from '../svg/ink7.svg';
import sacvan from '../images/vittimacapitalistica.jpg';
import quill1 from '../svg/quill1.svg';
import ink5 from '../svg/ink5.svg';
import SocialMenu from './SocialMenu';

function Writing() {
    return (
      <div>
        <div className="text-container">
        <div>
        <Icon name="pencil alternate" size="huge" className="fontFellEnglish" /> 
        </div>
        <h1 className="heading">Writing</h1> 
          <div className="project-group">
            <Card.Group itemsPerRow="2" stackable> 
            <Card>
                <Card.Content>
                  <Image src="https://miro.medium.com/max/875/1*B_7lJQZsJbrSOlrs_yDJjg.jpeg" alt="person writing at computer" /> 
                  <Card.Description>
                  <div className="text-container">
             <p className="paragraph">
            <span className="fontFellEnglish2">From Literature to Web Development: My first 6 weeks at Lambda School</span>
            </p>
            <p className="paragraph">
            ". . . I’ve always been a relatively pragmatic person — a 'doer' so to speak. Reading and talking about what I was reading wasn’t enough for me. I wanted to build something."
            </p>
            <Divider horizontal><Icon name="right quote" /></Divider>
            <p className="paragraph">
              Read the full text <em><a target="_blank" href="https://medium.com/@meganjones.dev/from-literature-to-web-dev-b489fd9637e3">here</a></em>.
            </p>
        </div>
                  </Card.Description>
                </Card.Content>
              </Card>

              <Card>
                <Card.Content className="flex-center">
                  <Image src={sacvan} alt="Bartolomeo Vanzetti" /> 
                  <Card.Description>
                  <div className="text-container">
             <p className="paragraph">
            <span className="fontFellEnglish2">90 Years Later: Bartolomeo Vanzetti's Letters Revisited</span>
            </p>
            <p className="paragraph">
            "90 years after Sacco and Vanzetti’s infamous executions, it is time for a fresh look at their letters
and a new edition of them. Although the most recent edition of Sacco’s and Vanzetti’s English
letters, The Letters of Sacco and Vanzetti edited by Gardner Jackson and Marion Frankfurter, is
riddled with errors and omissions, it has had an indelible impact on the mythos and historical
understanding of the Sacco and Vanzetti case. In part because of that edition, Sacco and Vanzetti
have been presented as mirror characters whose lives were necessarily intertwined together
instead of as individuals whose fates were only linked by the actions of the State. Both Sacco’s
and Vanzetti’s narratives are worthy of study apart from considerations of culpability or fairness
of their trial, but this has not often been done. The first step in reconsidering the men and their
case is a new, complete and unedited edition of Vanzetti’s letters, apart from Sacco’s."
            </p>
            <Divider horizontal><Icon name="right quote" /></Divider>
            <p className="paragraph">
              Read the full text <em><a target="_blank" href="https://pdfs.semanticscholar.org/dba9/4cff44e3fc71c49ac9239c1ce4806ca565dd.pdf">here</a></em>.
            </p>
        </div>
                  </Card.Description>
                </Card.Content>
              </Card>
              </Card.Group> 
              </div>
        </div>
        <div className="splatter2">
            <img src={ink7} alt="inksplat" />
          </div>
      </div>
    );
  }
  
  export default Writing;
  