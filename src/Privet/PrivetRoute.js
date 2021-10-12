import React, { useContext, createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivetRoute = ({ children, ...rest }) => {
    let history = useHistory();
    let location = useLocation();
    let auth = useAuth();
    const {users} = useAuth()
    return (
        <Route
          {...rest}
          render={({ location }) =>
            users.email ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: location }
                }}
              />
            )
          }
        />
      );
};

export default PrivetRoute;