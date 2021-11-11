//REACT
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

//STYLE
import styles from './Loginpage.module.css';

//CONTEXT
import { AuthContext } from '../../context/AuthProvider';

//FIREBASE
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState('');
  const history = useHistory();
  const auth = getAuth();
  const { setIsLoggedin } = useContext(AuthContext);

  // onsubmit wordt er ingelogd via firebase, context wordt op true gezet
  function onFormSubmit(data) {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        history.push('/');
        setIsLoggedin(true);
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.code);
      });
  }

  return (
    <div className={styles.login}>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <div className={styles.input}>
          <label htmlFor='email'>E-mail</label>
          <input type='email' {...register('email')} />
        </div>
        <div className={styles.input}>
          <label htmlFor='password'>Password</label>
          <input type='password' {...register('password')} />
          {error && <p>{error}</p>}
        </div>

        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default Login;
