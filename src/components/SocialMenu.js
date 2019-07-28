import React from 'react';
import {Icon} from 'semantic-ui-react';

function App() {
    return (
        <div className="text-container footer">
          <h1 className="fontAlegreya">Look me up elsewhere. . . </h1>
          <div>
          <a target="_blank" href="https://medium.com/@meganjones.dev"> <Icon name="medium" size="large" /></a>
          <a target="_blank" href="https://www.linkedin.com/in/megan-jones123/"><Icon name="linkedin square" size="large" /></a>
          <a target="_blank" href="https://twitter.com/meg_inks"> <Icon name="twitter square" size="large" /></a>
          <a target="_blank" href="https://github.com/meginks"><Icon name="github square" size="large" /></a>
          <a target="_blank" href="mailto:meganjones.dev@gmail.com"><Icon name="mail square" size="large" /></a>
          </div>
        </div>
    );
  }
  
  export default App;
  