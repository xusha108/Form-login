import React, { Component } from 'react';
import '../assets/Contacts.scss';

export default class Contacts extends Component {
  render() {
    return (
      <div className='contacts'>
        <h2 className='login__title'>Contacts</h2>

        <div className='login__input'>          
          <input type='text' placeholder='search'></input>
        </div>

        <div>person1</div>
        <div>person2</div>
        <div>person3</div>
        <div>person4</div>
        <div>person5</div>        
        
      </div>
    )
  }
}
