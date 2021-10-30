import React, { useContext, useState } from 'react';
import Logo from '../../assets/Slice 1.svg';
import styles from './Header.module.css';
import dummydata from '../../data/Spotsearch/dummydata.json';
import { getAuth, signOut } from '@firebase/auth';
import { AuthContext } from '../../context/AuthProvider';
import { useHistory } from 'react-router-dom';

const Header = ({ setSearchResult }) => {
  const auth = getAuth();
  const history = useHistory();
  const { isLoggedin } = useContext(AuthContext);
  const [searchValue, setSearchValue] = useState('');

  // update local state
  function onChangeHandler(e) {
    setSearchValue(e.target.value);
  }

  // voert de zoekfunctie uit en push data naar App.js state
  function onSubmitHandler(e) {
    e.preventDefault();

    //TODO later vervangen voor de axios data
    setSearchResult(dummydata);
    history.push(`/searchresult/${searchValue}`);
  }

  // logout en zet context naar false
  function logout() {
    signOut(auth);
  }

  return (
    <div className={styles.header}>
      <img src={Logo} alt='Logo' />
      {isLoggedin && <span>{auth.currentUser.displayName}</span>}
      {isLoggedin && <button onClick={() => logout()}>Logout</button>}
      <div>
        <form onSubmit={onSubmitHandler}>
          <label htmlFor='search'> Search</label>
          <input
            onChange={onChangeHandler}
            value={searchValue}
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
