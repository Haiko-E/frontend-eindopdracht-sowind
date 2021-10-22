import React from 'react';

const Login = () => {
  return (
    <div className='login'>
      <form action=''>
        <label htmlFor='email'>E-mail</label>
        <input type='text' name='email' id='email' />
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' id='password' />
      </form>
    </div>
  );
};

export default Login;
