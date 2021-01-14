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
