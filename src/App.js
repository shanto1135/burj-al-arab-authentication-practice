// import React, { createContext, useState } from 'react';
import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import AuthProvider from './Context/AuthProvider';
import Register from './components/Register/Register';
import PrivetRoute from './Privet/PrivetRoute';
import PrivetComponents from './components/Privets/PrivetComponents';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <AuthProvider>
      <Router>
          <Header/>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/logout">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <PrivetRoute path="/pvtcomponents">
              <PrivetComponents/>
            </PrivetRoute>
            
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/*">
              <NotFound />
            </Route>

          </Switch>
      </Router>
      </AuthProvider>
  );
}

export default App;
