import React, { Component } from 'react';
import NavBar from './pages/Navbar/navbar';

import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App container">
          <NavBar />
          <div className="row body">
            <div className="col s12 m8 push-m2">
              {this.props.children}
            </div>
          </div>
        </div>
    );
  }
}

export default App;
