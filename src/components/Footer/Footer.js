import React, { useContext } from 'react';
import styles from './Footer.module.css';
import { getAuth, signOut } from '@firebase/auth';
import { AuthContext } from '../../context/AuthProvider';
import { useHistory } from 'react-router-dom';

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
