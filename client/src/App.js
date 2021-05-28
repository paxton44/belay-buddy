import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProfileFormPage from "./pages/ProfileFormPage/ProfileFormPage";
import { useState } from "react";
import UserProfilePage from "./pages/UserProfilePage/UserProfilePage";
import LandingPage from "./pages/LandingPage/LandingPage"

function App() {
  
  
  return (
    <>
      <Router>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>

          <Route exact path="/">
            <HomePage />
          </Route>

          <Route path="/createprofile">
            <ProfileFormPage />
          </Route>

          <Route path="/userprofile">
            <UserProfilePage />
          </Route>

          <Route path="/landingpage">
            <LandingPage />
          </Route>
        </Switch>
      </Router>

      {/* <Footer /> */}
    </>
  );
}

export default App;
