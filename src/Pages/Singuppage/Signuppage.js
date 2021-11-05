import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
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

  const history = useHistory();

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
          Favorites: [],
          'Last visited': [],
        });
      })

      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className={styles.signup}>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <label htmlFor='username'>username</label>
        <input type='text' {...register('username')} />
        <label htmlFor='email'>E-mail</label>
        <input type='email' {...register('email')} />
        <label htmlFor='password'>Password</label>
        <input type='password' {...register('password')} />
        <button type='submit'>Signup</button>
      </form>
    </div>
  );
};

export default Signuppage;
