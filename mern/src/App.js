import React, { Component } from 'react';
import {BrowserRouter as Router ,Route } from 'react-router-dom'

import Navbar from './component/Navbar';
import List from './component/List';
import Edit from './component/Edit';
import Create from './component/Create';


import Landing from './component/Landing'
import Login from './component/Login'
import Register from './component/Register'
import Profile from './component/Profile'
import Show from './component/Show'


class App extends Component {
  render() {
    return (
         <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
          <Route exact path="/show" component={Show} />
          <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
          <Route exact path="/list" component={List} />
            <Route exact path="/edit/:id" component={Edit} />
            <Route exact path="/create" component={Create} />
          
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
