import React from 'react';
import { Route } from 'react-router-dom';



import './App.css';


import Navbar from './components/Navbar'
import Login from './components/Login';
import Register from './components/Register';
import Movement from './components/Movement'
import Map from './components/Map';


function App() {
  return (
    <div className="App">
      <h1>Dungeon Crawler</h1>
      {localStorage.getItem('jwt') ? null : <Navbar />}
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/game" component={Movement} />
      <Route path='/map' component={Map} />
    </div>
  );
}

export default App
