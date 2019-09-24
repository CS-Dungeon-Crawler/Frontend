import React from 'react';
import { Route } from 'react-router-dom';

import Login from './components/login'
import MainSplash from './components/mainSplash.js'



import './App.css';

function App() {
  return (
    <div className="App">
      {/* <h1>Dungeon Crawler</h1> */}
      {/* <Login/> */}
      <Route path='/' exact component={Login}/>
      <Route path='/mainSplash' component={MainSplash}/>
    </div>
  );
}

export default App;
