<<<<<<< HEAD
import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useUserContext } from "../context/user_context";

const PrivateRoute = ({ children, ...rest }) => {
  const { myUser } = useUserContext();
  return (
    <Route
      {...rest}
      render={() => {
        return myUser ? children : <Redirect to='/'></Redirect>;
      }}
    ></Route>
  );
};
export default PrivateRoute;

//rest operator in fun com is not as spreed operator but it gives us the rest of the item..and you can name it anything you want but but its better to name it rest
=======
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
// will remove later
import { useUserContext } from '../context/user_context';

const PrivateRoute = () => {
  return <h4>Private Route</h4>;
};
export default PrivateRoute;
>>>>>>> 37651a5598fe43d1c5dafd76c15c0e8d61bbe6a3
