 
import axios from 'axios'

export const register = newUser => {
  console.log('newUser', newUser)
  return axios
    .post('http://localhost:4242/users/register', {
      login: newUser.login,
      email: newUser.email,
      password: newUser.password
    })
    .then(response => {
      // console.log('Registered')
    })

}

export const login = user => {  
  console.log(user)
  return axios
    .post('http://localhost:4242/users/login', {
      login: user.login,
      password: user.password
    })
    .then(response => {
      console.log(response)
      localStorage.setItem('usertoken', response.data.token)
      return response.data.token

    })
    .catch(err => {
      // console.log(err)
    })
}

export const getProfile = user => {
  return axios
    .get('users/profile', {
      
    })
    .then(response => {
      // console.log(response)
      return response.data
    })
    .catch(err => {
      // console.log(err)
    })
}