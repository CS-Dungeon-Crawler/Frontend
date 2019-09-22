import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'

import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <h1>Dungeon Crawler</h1>
      
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </div>
  );
}

export default App
