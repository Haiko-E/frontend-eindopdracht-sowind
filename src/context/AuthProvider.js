//REACT
import React, { createContext, useState, useEffect } from 'react';

//FIREBASE
import { getAuth, onAuthStateChanged } from 'firebase/auth';

// deze context houd bij of er gebruiker is ingelogd of niet.
export const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
  const auth = getAuth();
  const [isLoggedin, setIsLoggedin] = useState('pending');

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedin(true);
      } else {
        setIsLoggedin(false);
      }
    });
    return () => {
      setIsLoggedin('pending');
    };
  }, [auth]);

  return (
    <AuthContext.Provider
      value={{ isLoggedin: isLoggedin, setIsLoggedin: setIsLoggedin }}
    >
      {isLoggedin === 'pending' ? <p>loading....</p> : children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
