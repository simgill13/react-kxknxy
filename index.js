import React, { Component } from "react";
import { render } from "react-dom";
import React from "react";
import Login from "./Login";
import DashBoard from './Dashboard'
import PrivateRoute from './PrivateRoute';
import {useAuth} from './useAuth'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import "./style.css";




const App = () => {
  const {isAuthenticated} = useAuth();
  
  return (
    <Router>
      <PrivateRoute
        exact
        path="/"
        isAuthenticated={isAuthenticated}
        component={DashBoard}
      />
      <Route path="/login" component={()=><Login  isAuthenticated={isAuthenticated}/>} />
    </Router>
  );
};

render(<App />, document.getElementById("root"));
