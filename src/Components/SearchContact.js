import React from 'react';
import '../assets/login.scss';

export default function SearchContact (props) {
    return (
      <div className='login__input'>          
          <input 
            type='text'
            placeholder='search...'
            value={props.search}
            onChange={ (e) => {props.dataSearch(e)}
          } 
          />
        </div>
    )
  }
