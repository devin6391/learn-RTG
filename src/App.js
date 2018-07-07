import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppBar from "./packages/basic/app-bar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/basic" component={AppBar} />
        </div>
      </Router>
    );
  }
}

export default App;
