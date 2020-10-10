import React, { Component } from 'react';
import axios from 'axios';
import '../assets/contacts.scss';

import SearchBar from './SearchBar'

export default class Contacts extends Component {
  state = {
    persons: [],   
  }

  componentDidMount() {
    axios
    .get('http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')
    .then(res => {      
        this.setState({ persons: res.data })
        console.log('personsState', this.state.persons)    
    })
    .catch((error) => {
      console.log(error)
    })
  }

  removeContact  = (id) => {   
    console.log('remove item', id)
    const persons = this.state.persons
    const removeId = persons.filter(item => item.id !== id);
    this.setState({ persons: removeId });     
  };

  render() {  
    return (
      <div className='contacts'>
        <h2 className='login__title'>Contacts</h2>

        <SearchBar />


        <button className='add-btn'>&#10010;</button>

        {this.state.persons.map((item, index) => {
            return (
              
              <div className='contacts__list' key={`person-${index}`}>               
                <input className='item' type='text' placeholder={item.firstName}></input>
                <input className='item' type='text' placeholder={item.lastName}></input>
                <input className='item' type='text' placeholder={item.phone}></input>
                <input className='item' type='text' placeholder={item.email}></input> 
                <button className='del-btn' onClick={() => {this.removeContact(item.id)}}>&#10006;</button>              
              </div>
            );
          })}             
        
      </div>
    )
  }
}
