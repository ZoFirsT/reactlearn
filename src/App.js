import './App.css';
import React from 'react'
import Navbar from './components/navbar'

import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar>
          
        </Navbar>
      </div>
    </Router>
  );
}

export default App;
