import React, { Component } from 'react';
import axios from 'axios';
import '../assets/contacts.scss';
import AddContact from './AddContact';
import DataSearch from './DataSearch';


export default class Contacts extends Component {
  state = {
    persons: [],
    searchPersons: [],
    showModal: false, 


    firstName:'',
    lastName:'',
    phone:'',
    email:'',      
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

 addContact  = () => {  
   this.setState( {firstname: this.state.firstName } ) 
   console.log('firstname',this.state.firstName)
   console.log('lastName',this.state.lastName)
  
  
    // if (this.state.persons.value !== "") {
    //   let newItem = {
    //     text: this.state.persons.value,
    //     id: Date.now()
    //   };   
    //   this.setState((prevState) => {
    //     return { persons: prevState.persons.concat(newItem) };
    //   }); 
    // }       
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
    const filter = this.state.persons.filter(result => {
      return result.firstName.toLowerCase().search(e.target.value.toLowerCase()) !== -1 || 
          result.lastName.toLowerCase().search(e.target.value.toLowerCase()) !== -1      
    })    
    this.setState( {persons: filter} );     
  }

  render() {  
    return (
      <div className='contacts'>
        <h2 className='login__title'>Contacts</h2>

        <DataSearch
          dataSearch={this.dataSearch}        
        />        

        <AddContact 
          active={this.state.showModal}
          name={this.state.firstName}
          surname={this.state.lastName}
          email={this.state.email}
          phone={this.state.phone}
          onChangeModalState={this.onChangeModalState}
          addContact={this.addContact}
        />

        <button className='add-btn' onClick={() => {this.onChangeModalState()}}>&#10010;</button>

        {this.state.persons.map((item, index) => {
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
