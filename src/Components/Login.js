import React from 'react';
import '../assets/login.scss';


export default function Login (props) {
    return (
      <div className='login'>
        <h2 className='login__title'>Login</h2>

        <div className='login__input'>
          <input  type='text' name='login' value={props.login} placeholder='Enter login' onChange = { (e) => {props.hendlerInputLogin(e)} } />
        </div>

        <div className='login__input'>
          <input  type='password' name='pass' value={props.pass} placeholder='Enter password' onChange = { (e) => {props.hendlerInputPass(e)} } />
        </div>

       <button className='login__btn' onClick={ () => {props.auth()} }>Login</button>       
        
       
      </div>

    )
  }

