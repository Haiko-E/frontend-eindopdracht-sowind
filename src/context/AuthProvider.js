import React, { createContext, useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
// deze context houd bij of er gebruiker is ingelogd of niet.
export const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
  const auth = getAuth();
  const [isLoggedin, setIsLoggedin] = useState('pending');

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('USER LOGGED IN', user);
        setIsLoggedin(true);
      } else {
        console.log('USER SIGNED OUT');
        setIsLoggedin(false);
      }
    });
    return () => {
      setIsLoggedin('pending');
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedin: isLoggedin, setIsLoggedin: setIsLoggedin }}
    >
      {isLoggedin === 'pending' ? <p>loading....</p> : children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
