//REACT
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

//STYLE
import styles from './Signuppage.module.css';

//FIREBASE
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../Firebase';

const Signuppage = () => {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState('');
  const history = useHistory();

  // wanneer gesubmit voeg de data in de firebasefunctie,
  // en maak een Array in firebase met favorieten en last visited
  function onFormSubmit(data) {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredentials) => {
        console.log(userCredentials);
        updateProfile(auth.currentUser, { displayName: data.username })
          .then(() => {
            console.log('signed up', auth.currentUser.displayName);
            history.push('/login');
          })
          .catch((error) => console.log(error.message));
        setDoc(doc(db, 'users', userCredentials.user.uid), {
          Favorite: [],
          'Last visited': [],
        });
      })

      .catch((error) => {
        console.log(error.message);
        setError(error.code);
      });
  }

  return (
    <div className={styles.signup}>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <div className={styles.input}>
          <label htmlFor='username'>Username</label>
          <input type='text' {...register('username')} />
        </div>
        <div className={styles.input}>
          <label htmlFor='email'>E-mail</label>
          <input type='email' {...register('email')} />
        </div>
        <div className={styles.input}>
          <label htmlFor='password'>Password</label>
          <input type='password' {...register('password')} />
          {error && <p>{error}</p>}
        </div>
        <button type='submit'>Signup</button>
      </form>
    </div>
  );
};

export default Signuppage;
