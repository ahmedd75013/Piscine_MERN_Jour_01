import React, { Component } from 'react';
import {BrowserRouter as Router ,Route } from 'react-router-dom'

import Navbar from './Component/Navbar'
import Index from './Component/Index'
import Login from './Component/Login'
import Register from './Component/Register'
import Profile from './Component/Profile'

class App extends Component {
  render() {
    return (
         <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" Component={Index} />
          <div className="container">
            <Route exact path="/register" Component={Register} />
            <Route exact path="/login" Component={Login} />
            <Route exact path="/profile" Component={Profile} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
