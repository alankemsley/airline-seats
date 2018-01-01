import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Aircraft from './components/Aircraft/Aircraft';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-content">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <main className="App-main">
            <h1 className="App-title">SELECT SEAT</h1>
            <Aircraft />
          </main>
        </div>
        <footer className="App-footer">
          <p>MADE BY ALAN KEMSLEY</p>
        </footer>
      </div>
    );
  }
}

export default App;
