import React, { Component } from 'react';
import Home from './components/Home';
import City from './City';

var currentLocation = window.location;

class App extends Component {
  render() {
    return <Home city={City} location={window.location} />;
  }
}

export default App;
