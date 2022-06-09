import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import BrewPage from './components/BrewPage';
import Home from './components/Home';
import FoodPage from './components/FoodPage';
// Page & Component Imports
import Navbar from './components/Navbar'







// styles
import './style.css';


export default class App extends Component {
  render() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route exact path='/' component={Home}/>
        {/* <Route path='/about' component={About}/>
        <Route path='/Contact' component={Contact}/> */}
        <Route path='/food' component={FoodPage} />
        <Route path='/brew' component={BrewPage} />

      </Router>
    </div>
  );
}
}