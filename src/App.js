import React, { Component } from "react";
import "./App.css";
import Layout from "./Component/Layout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Layout />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
