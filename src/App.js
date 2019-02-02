import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FilterTableProduct from './components/FilterTableProduct'

class App extends Component {
  
  render() {

    return (
      <div className="App">
          <FilterTableProduct />
      </div>
    );
  }
}

export default App;
