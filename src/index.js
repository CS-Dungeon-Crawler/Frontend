import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'

// import { Provider } from 'react-redux'
// import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
// import logger from 'redux-logger'

import './index.css';
import App from './App';

// import reducer from './reducers'

// const store = createStore(
//   reducer,
//   applyMiddleware(thunk, logger)
// )

ReactDOM.render(
    <Router>
      <App />
    </Router>, document.getElementById('root'));

