import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import ExtraPage from "./components/ExtraPage";
import About from "./components/About";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Authentication from "./components/Authentication";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/login">
          <Authentication />
        </Route>
        <Route exact path="/dashboard">
          <ExtraPage />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/user">
          <Home />
        </Route>
        <Redirect from="*" to="/" />
      </Switch>
      <Footer />
    </div>
  );
}
export default App;
