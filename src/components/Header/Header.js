import React, { useContext, useEffect, useState } from 'react';
import Logo from '../../assets/Slice 1.svg';
import './Header.css';
import dummydata from '../../data/Spotsearch/dummydata.json';
import { getAuth } from '@firebase/auth';
import { AuthContext } from '../../context/AuthProvider';

const Header = ({ setSearchResult }) => {
  const { isLoggedin, setIsLoggedin } = useContext(AuthContext);
  const [searchInput, setSearchInput] = useState('');
  const auth = getAuth();

  function onChangeHandler(e) {
    setSearchInput(e.target.value);
  }

  function onSubmitHandler(e) {
    e.preventDefault();

    //! later vervangen voor de axios data
    setSearchResult(dummydata);
  }

  useEffect(() => {
    isLoggedin && setIsLoggedin(auth.currentUser.displayName);
  }, [isLoggedin]);

  return (
    <div className='header'>
      <img src={Logo} alt='Logo' />
      <span>{isLoggedin && auth.currentUser.displayName}</span>
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
