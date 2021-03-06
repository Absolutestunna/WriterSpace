import React, { Component } from 'react';
import NavBar from './pages/Navbar/navbar';

import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App container">
          <NavBar />
          <section className="row body">
            <div className="col s12">
              {this.props.children}
            </div>
          </section>
        </div>
    );
  }
}

export default App;
