import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProfileFormPage from "./pages/ProfileFormPage/ProfileFormPage";
import { useState } from "react";
import UserProfilePage from "./pages/UserProfilePage/UserProfilePage";

function App() {
  const [inputsObj, setInputsObj] = useState({
    // availability:[]
  });

  const handleInputs = (e) => {
    const clone = inputsObj;
    clone[e.target.name] = e.target.value;
    setInputsObj(clone);
    // console.log(e)
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputsObj);
    alert("form submitted");
  };
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
            <ProfileFormPage
              handleSubmit={handleSubmit}
              handleInputs={handleInputs}
              inputsObj={inputsObj}
            />
          </Route>

          <Route path="/userprofile">
            <UserProfilePage
              handleSubmit={handleSubmit}
              handleInputs={handleInputs}
              inputsObj={inputsObj}
            />
          </Route>
        </Switch>
      </Router>

      {/* <Footer /> */}
    </>
  );
}

export default App;
