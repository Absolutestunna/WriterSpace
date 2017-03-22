import React, { Component } from 'react';
import NavBar from './pages/navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="App">
          <NavBar />
          {this.props.children}
        </div>
      </div>


    );
  }
}

export default App;
