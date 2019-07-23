import React from 'react';
import Home from './components/Home';

import './App.css';
import {Route} from 'react-router-dom';

function App() {
  return (
    <div>
     <Route exact path="/" component={Home}/>
    </div>
  );
}

export default App;
