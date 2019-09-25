import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Login from './components/Login';
import Register from './components/Register';
import Movement from './components/Movement'

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Dungeon Crawler</h1>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/game" component={Movement} />
    </div>
  );
}

export default App
