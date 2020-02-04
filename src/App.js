import React, { Component } from 'react';
import './App.css';
import Layout from './Layout';
import { BrowserRouter, withRouter } from "react-router-dom";






class App extends Component {

  render() {

    return (
      <BrowserRouter>
        <div className="App">

          <Layout />
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
