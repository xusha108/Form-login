import React, { Component } from 'react';
import '../assets/Login.scss';
import {Link} from 'react-router-dom';

export default class Login extends Component {
  render() {
    return (
      <div className='login'>
        <h2 className='login__title'>Login</h2>

        <div className='login__input'>
          <input  type='text' placeholder='Enter yor name'></input>
        </div>

        <div className='login__input'>
          <input  type='text' placeholder='Enter password'></input>
        </div>

        <Link to={'/contacts'}><button className='login__btn'>Login</button></Link>         
        
      </div>
    )
  }
}
