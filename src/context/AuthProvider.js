import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
  const [isLoggedin, setIsLoggedin] = useState(false);

  return (
    <AuthContext.Provider
      value={{ isLoggedin: isLoggedin, setIsLoggedin: setIsLoggedin }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
