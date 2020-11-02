import React, { Component } from 'react'
import '../assets/login.scss';
import '../assets/modal.scss';

export default class AddContact extends Component {

  render() {
    let toggleClass = (this.props.active) ? 'modal active' : 'modal';    
  
    return (
      <div className={toggleClass}>
        <div className='modal__content'>
          <h2 className='login__title'>Add contact</h2>
          <button className='del-btn' onClick={() => {this.props.onChangeModalState()}}>&#10006;</button>

          <div className='login__input'>
            <input  
             type='text' 
             name='firstName' 
             value={this.props.name || ''} 
             placeholder='Enter first name' 
             onChange={ (el) => this.props.hendlerContact(el.target) } 
            />
          </div>

          <div className='login__input'>
            <input  
              type='text' 
              name='lastName'  
              value={this.props.surname || ''} 
              placeholder='Enter last name' 
              onChange={ (el) => this.props.hendlerContact(el.target)} 
            />
          </div>

          <div className='login__input'>
            <input  
              type='text' 
              name='phone'  
              value={this.props.phone || ''} 
              placeholder='Enter phone' 
              onChange={(el) => this.props.hendlerContact(el.target)}  
            />
          </div>

          <div className='login__input'>
            <input  
              type='email'
              name='email' 
              value={this.props.email || ''}  
              placeholder='Enter email' 
              onChange={(el) => this.props.hendlerContact(el.target)}   
            />
          </div>

        <button 
          className='login__btn'  
          onClick={ () => this.props.addContact() } 
          >
          Add Contact
        </button> 

        </div>
      </div>
    )
  }
}

