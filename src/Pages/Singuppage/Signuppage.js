import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { useHistory } from 'react-router-dom';

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
      })

      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className='signup'>
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
