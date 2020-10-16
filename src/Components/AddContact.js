import React, { Component } from 'react'
import '../assets/login.scss';
import '../assets/modal.scss';

export default class AddContact extends Component {

  handleNameChange = (e) => {
    this.setState({firstName: e.target.value})
    console.log('firstName', e.target.value)
  }

  handleSurnameChange = (e) => {
    this.setState({lastName: e.target.value})
  }

  handlePhoneChange = (e) => {
    this.setState({phone: e.target.value})
  }

  handleEmailChange = (e) => {
    this.setState({email: e.target.value})
  }

  render() {
    let toggleClass = (this.props.active) ? 'modal active' : 'modal';    
  
    return (
      <div className={toggleClass}>
        <div className='modal__content'>
          <h2 className='login__title'>Add contact</h2>
          <button className='del-btn' onClick={() => {this.props.onChangeModalState()}}>&#10006;</button>

          <div className='login__input'>
            <input  type='text' name='firstName'  placeholder='Enter first name' onChange={this.handleNameChange} />
          </div>

          <div className='login__input'>
            <input  type='text' name='lastName'  placeholder='Enter last name' onChange={ this.handleSurnameChange} />
          </div>

          <div className='login__input'>
            <input  type='text' name='phone'  placeholder='Enter phone' onChange={this.handlePhoneChange}  />
          </div>

          <div className='login__input'>
            <input  type='email' name='email'  placeholder='Enter email' onChange={this.handleEmailChange}   />
          </div>

        <button className='login__btn'
          name={this.props.firstName}
          surname={this.props.lastName}
          email={this.props.email}
          phone={this.props.phone}
          onClick={ () => {this.props.addContact()} }       
        >
          Add Contact
        </button> 

        </div>
      </div>
    )
  }
}

