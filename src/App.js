import React, { Component } from 'react';
import axios from 'axios';

import Login from './Components/Login';
import Contacts from './Components/Contacts';


export default class App extends Component {

  state = {
    isLogin: true,
    
    user: {
      login: '',
      pass: ''
    }
  }

  auth = () => {
    console.log('login', this.state.user.login)
    console.log('pass', this.state.user.pass)
    axios
    .get('http://localhost:3000/posts/login.json')
    .then(res => {      
      console.log('res', res.data.users)
      // this.setState({ persons: res.data })
      // sessionStorage.setItem('id_token', res.token) 

        if ( this.isAuth(this.state.user, res.data.users) ) {

            //setState isLogin: true
        }         
      })
      .catch((error) => {
        console.log(error)
      })
    }

    hendlerInputLogin = (e) => {
      const {login, value} = e.target     
      this.setState( {[login]: value} )
      console.log('login:', value)      
    }

    
    hendlerInputPass = (e) => {
      const {pass, value} = e.target
      this.setState( {[pass]: value} )
      console.log('pass:', value)
    }  
  
    isAuth = (user, users) => {
      // users.find( )
      // return false
      console.log('isAuth')  
    }

    render() {
      return this.state.isLogin ? <Contacts /> :
      <Login
        auth={this.auth}
        hendlerInputLogin={this.hendlerInputLogin}
        hendlerInputPass={this.hendlerInputPass}
      />
     
  }
}



