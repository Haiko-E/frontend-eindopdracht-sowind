import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import styles from './Loginpage.module.css';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const auth = getAuth();
  const { setIsLoggedin } = useContext(AuthContext);

  // onsubmit wordt er ingelogd via firebase, context wordt op true gezet
  function onFormSubmit(data) {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredentials) => {
        console.log(userCredentials);
        history.push('/');
        setIsLoggedin(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className={styles.login}>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <label htmlFor='email'>E-mail</label>
        <input type='email' {...register('email')} />
        <label htmlFor='password'>Password</label>
        <input type='password' {...register('password')} />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default Login;

//TODO validatieregels toevoegen en tonen aan de gebruiker
