import React from 'react';
import '../assets/contacts.scss';

export default  function SearchBar(props){

  // const dataSearch = e => {
  //   const value = e.target.value.toLowerCase();
  
  //   const filter = data.filter(user => {
  //     return user.name.toLowerCase().includes(value);
  //   });


  return (
    <div className='login__input'>          
      <input 
        type='text'
        placeholder='search...'
        //onChange={dataSearch}

       />
    </div>
    )
  }
