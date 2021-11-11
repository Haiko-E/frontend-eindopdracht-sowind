//REACT
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//STYLE
import styles from './Homepage.module.css';

//CONTEXT
import { AuthContext } from '../../context/AuthProvider';

//COMPONENTS / PAGES
import Favoritespage from '../Favorites/Favoritespage';

const Homepage = ({ setSpot }) => {
  const { isLoggedin } = useContext(AuthContext);

  if (isLoggedin) {
    return <Favoritespage setSpot={setSpot} />;
  }
  if (!isLoggedin) {
    return (
      <div className={styles.homepage}>
        <h4>Login or Sign-up</h4>
        <button>
          <Link to='/login'>Login</Link>
        </button>
        <p>or</p>
        <button>
          <Link to='/signup'>Signup</Link>
        </button>
      </div>
    );
  }
};

export default Homepage;
