// REACT
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

//STYLE
import styles from './Footer.module.css';

//CONTEXT
import { AuthContext } from '../../context/AuthProvider';

//FIREBASE
import { getAuth, signOut } from '@firebase/auth';

const Footer = () => {
  const auth = getAuth();
  const { isLoggedin } = useContext(AuthContext);
  const history = useHistory();

  function logout() {
    signOut(auth).then(() => history.push('/'));
  }
  return (
    <div className={styles.footer}>
      {isLoggedin && <span>{auth.currentUser.displayName}</span>}
      {isLoggedin && <button onClick={() => logout()}>Logout</button>}
    </div>
  );
};

export default Footer;
