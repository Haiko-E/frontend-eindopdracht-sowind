import React from 'react';
import { Route } from 'react-router';

function LoggedinRoute({ children, Loggedin, ...rest }) {
  return <div>{Loggedin && <Route {...rest}>{children}</Route>}</div>;
}

export default LoggedinRoute;
