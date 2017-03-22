import React, { Component } from 'react';
import NavBar from './pages/navbar';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App container">
          <NavBar />
          {this.props.children}
        </div>

    );
  }
}

export default App;
