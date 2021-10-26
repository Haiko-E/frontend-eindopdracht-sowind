import React, { useContext } from 'react';
import styles from './Homepage.module.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import Favoritespage from '../Favorites/Favoritespage';

const Homepage = () => {
  const { isLoggedin } = useContext(AuthContext);

  if (isLoggedin) {
    return <Favoritespage />;
  }
  if (!isLoggedin) {
    return (
      <div className={styles.homepage}>
        <button>
          <Link to='/login'>Login</Link>
        </button>
        <button>
          <Link to='/signup'>Signup</Link>
        </button>
      </div>
    );
  }
};

export default Homepage;
