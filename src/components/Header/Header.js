import React, { useState } from 'react';
import Logo from '../../assets/Slice 1.svg';
import './Header.css';
import dummydata from '../../data/Spotsearch/dummydata.json';

const Header = ({ setSearchResult }) => {
  const [searchInput, setSearchInput] = useState('');

  function onChangeHandler(e) {
    setSearchInput(e.target.value);
  }

  function onSubmitHandler(e) {
    e.preventDefault();

    //! later vervangen voor de axios data
    setSearchResult(dummydata);
  }

  return (
    <div className='header'>
      <img src={Logo} alt='Logo' />
      <div>
        <form onSubmit={onSubmitHandler}>
          <label htmlFor='search'> Search</label>
          <input
            onChange={onChangeHandler}
            value={searchInput}
            type='text'
            name='search'
            id='search'
          />
        </form>
      </div>
    </div>
  );
};

export default Header;
