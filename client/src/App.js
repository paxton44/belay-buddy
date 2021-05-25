import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfileFormPage from "./pages/ProfileFormPage"

function App() {
  return (
   <>
         {/* <Header /> */}

      <Router>

        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>

          <Route path="/">
            <HomePage />
          </Route>

          <Route path="/createprofile">
            <ProfileFormPage />
          </Route>

          {/* <Route path="/mystack">
            <MyStack />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route> */}
        </Switch>
      </Router>

      {/* <Footer /> */}
   </>
  );
}

export default App;
