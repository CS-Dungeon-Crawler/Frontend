import React from 'react';
import { Route } from 'react-router-dom';

import Login from './components/login'
import MainSplash from './components/mainSplash.js'



import './App.css';
import { Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Login from './components/Login';
import Register from './components/Register';
import Movement from './components/Movement'

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      {/* <h1>Dungeon Crawler</h1> */}
      {/* <Login/> */}
      <Route path='/' exact component={Login}/>
      <Route path='/mainSplash' component={MainSplash}/>
=======
      <Navbar />
      <h1>Dungeon Crawler</h1>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/game" component={Movement} />
>>>>>>> ac5c8645d477dd624904769f51800c8e3acc2923
    </div>
  );
}

export default App
