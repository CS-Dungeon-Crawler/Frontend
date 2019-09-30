import React from 'react';
import { Route } from 'react-router-dom';



import './App.css';
import './CSS/loginRegNav.css'


import Navbar from './components/Navbar'
import Login from './components/Login';
import Register from './components/Register';
import Movement from './components/Movement'
import DungeonMap from './components/Map';


function App() {
  return (
    <div className="App">
      <div className="mainTitleDiv">
        {/* <Route path = '/' component={Navbar} /> */}
        <h1 className="mainTitle">Dungeon Crawler</h1>}
        {localStorage.getItem('token') ? null :
              <Route path = '/' component={Navbar} />}
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        {/* <Route path="/game" component={Movement} /> */}
        <Route path='/map' component={DungeonMap} />
      </div>
    </div>
  );
}

export default App
