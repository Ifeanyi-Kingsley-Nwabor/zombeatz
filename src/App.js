import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import About from "./components/About";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Authentication from "./components/Authentication";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Authentication />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>
        <Redirect from="*" to="/" />
      </Switch>
      <Footer />
    </div>
  );
}
export default App;
