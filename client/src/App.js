import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import LoginComponent from "./components/LoginComponent"

import "./App.css"
import UserLogin from "./pages/UserLogin";


function App() {
  return (
    <Router>
      <div>
        {/* <Nav /> */}
        
        
        <Switch>

        <Route path="/">
            <UserLogin />
          </Route>

          <Route exact path={["/", "/books"]}>
            <Books />
          </Route>
          <Route exact path="/books/:id">
            <Detail />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
