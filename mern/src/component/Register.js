import React, { Component } from 'react'
import { register } from './UserFunctions'

class Register extends Component {
  constructor() {
    super()
    this.state = {
      login: '',
      email: '',
      password: '',
    
      
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const newUser = {
      login: this.state.login,
      email: this.state.email,
      password: this.state.password,

     
    }

    register(newUser).then(res => {
      this.props.history.push(`/login`)
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Register</h1>
              <div className="form-group">
                <label htmlFor="login">Login</label>
               <input type="text" placeholder="Enter Username" name="login" requiredvalue={this.state.login} onChange={this.onChange}/>
              </div>
              <div className="form-group">
                <label htmlFor="name">email</label>
                <input type="email"className="form-control"name="email"placeholder="Enter your email"value={this.state.email}onChange={this.onChange}/>
              </div>
              <div className="form-group">
                <label htmlFor="password"> password</label>
                <input type="password"className="form-control"name="password"placeholder="Enter password"value={this.state.password} onChange={this.onChange}/>
              </div>
             
              <button
                type="submit" className="btn btn-lg btn-primary btn-block">Register!</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Register