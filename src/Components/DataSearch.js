import React from 'react';
import '../assets/login.scss';

export default function DataSearch (props) {
    return (
      <div className='login__input'>          
          <input 
            type='text'
            placeholder='search...'
            onChange={ (e) => {props.dataSearch(e)} } 
          />
        </div>
    )
  }
