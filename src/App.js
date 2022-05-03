import React from "react"
import logo from './logo.svg';
import './App.css';
import BuyPage from './BuyPage'
import NavBar from './NavBar'
import Home from './Home'
import DataPage from './DataPage'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react"
import { Switch } from "react-router-dom";
function App() {

  return (
  <div className="App">
    <Router>
      <div className="App">
        <header>
          <NavBar />
        </header>
        <main>
          <Switch>
            <Route  path='/datapage'>
              <DataPage />
            </Route>
            <Route exact path='/buypage'>
              <BuyPage/>
            </Route>
            <Route  path='/'>
              <Home />
            </Route>
            
          </Switch>
        </main>
      </div>
    </Router> 
  </div>
  );
}

export default App;
