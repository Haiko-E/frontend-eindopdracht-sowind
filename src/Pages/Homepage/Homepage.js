import React, { useContext } from 'react';
import './Homepage.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Homepage = () => {
  const { isLoggedin, setIsLoggedin } = useContext(AuthContext);

  if (isLoggedin) {
    return <div>Logged in user</div>;
  } else {
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
  }
};

export default Homepage;
