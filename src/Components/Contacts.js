import React, { Component } from 'react';
import axios from 'axios';
import '../assets/contacts.scss';
import AddContact from './AddContact';
import SearchContact from './SearchContact';

export default class Contacts extends Component {
  state = {
    persons: [], 
    searchValue: '', 
    filteredPersons: [],  
    showModal: false,       
    newPerson: {
      firstName:'',
      lastName:'',
      phone:'',
      email:''
    }         
  }

  componentDidMount() {
    axios
    .get('http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')
    .then(res => {      
        this.setState({ persons: res.data })
        //console.log('personsState', this.state.persons)    
    })
    .catch((error) => {
      console.log(error)
    })
  }

 hendlerContact  = (target) => {  
    this.setState( {[target.name]: target.value } )    
  }

 addContact  = () => {
  let newPerson = {...this.state.newPerson}
  newPerson.firstName = this.state.firstName
  newPerson.lastName = this.state.lastName
  newPerson.phone = this.state.phone
  newPerson.email = this.state.email
 
   this.setState({
     persons: [...this.state.persons, {id: Date.now(), ...newPerson}]
    })

  this.setState({ 
        firstName:'',
        lastName:'',
        phone:'',
        email:''
      })
    }       
      

  onChangeModalState  = () => {    
    this.setState( {showModal: !this.state.showModal} ); 
  }

  removeContact  = (id) => {
    const persons = this.state.persons
    const removeId = persons.filter(item => item.id !== id);
    this.setState({ persons: removeId });     
  };

  dataSearch  = (e) => {  
    this.setState ( {searchValue: e.target.value} )
  }

  render() { 
    const {persons, searchValue} = this.state;
    let fileredContacts = persons.filter( (contact)=> {
      return contact.firstName.toLowerCase().indexOf(searchValue) !== -1 ||
        contact.lastName.toLowerCase().indexOf(searchValue) !== -1
    })

    return (
      <div className='contacts'>
        <h2 className='login__title'>Contacts</h2>

        <SearchContact        
          dataSearch={this.dataSearch} 
          value={this.state.searchValue}       
        />        

        <AddContact 
          active={this.state.showModal}
          name={this.state.firstName}
          surname={this.state.lastName}
          email={this.state.email}
          phone={this.state.phone}
          onChangeModalState={this.onChangeModalState}
          addContact={this.addContact}
          hendlerContact={this.hendlerContact}
        />        

        <button className='add-btn' onClick={() => {this.onChangeModalState()}}>&#10010;</button>

        {fileredContacts.map((item, index) => {
            return (              
              <div className='contacts__list' key={`person-${index}`}>               
                <input className='item' type='text' placeholder={item.firstName}></input>
                <input className='item' type='text' placeholder={item.lastName}></input>
                <input className='item' type='text' placeholder={item.phone}></input>
                <input className='item' type='text' placeholder={item.email}></input> 
                <button className='del-btn' onClick={() => {this.removeContact(item.id)}}>&#10006;</button>              
                <button className='del-btn' onClick={() => {this.editContact(item.id)}}>&#9998;</button>              
              </div>
            );
          })}       

      </div>
    )
  }
}
