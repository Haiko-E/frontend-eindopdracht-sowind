import React from 'react';
import './Homepage.css';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className='homepage'>
      <button>
        <Link to='/login'>Login</Link>
      </button>
      <button>
        <Link to='/signup'>Signup</Link>
      </button>
    </div>
  );
};

export default Homepage;
