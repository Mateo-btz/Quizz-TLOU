import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Firebase, { FirebaseContext } from './Firebase';
import { BrowserRouter as Router} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={new Firebase()}>
    <Router>
    <App />
    </Router>
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


