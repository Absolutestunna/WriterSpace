import React, { Component } from 'react';
import logo from './logo.svg';
import NavBar from './pages/navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        {this.props.children}
      </div>
    );
  }
}

export default App;
