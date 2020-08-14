import React from 'react';
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter as Router } from 'react-router-dom';
import Table from './components/Table';
import Jumbo from './components/Jumbo'

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
      </Router>
      <Jumbo />

      <Table />

    </div>
  );
}

export default App;
