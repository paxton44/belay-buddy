import './App.css';
import Home from "./pages/Home"
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
   <>
         {/* <Header /> */}

      <Router>
        <Switch>
          {/* <Route path="/login">
            <UserLogin />
          </Route> */}

          <Route path="/">
            <Home />
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
