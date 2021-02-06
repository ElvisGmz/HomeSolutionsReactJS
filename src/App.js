import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <NavBar />
          <Home />
        </Route>
        <Route path="/admin" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
