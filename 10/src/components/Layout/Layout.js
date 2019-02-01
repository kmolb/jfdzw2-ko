import React, { Component, Fragment } from "react";

import "./Layout.css";


import NavBar from './../Navbar';
import Home from './../Home';
import Contact from './../Contact';

import { BrowserRouter as Router, Route } from "react-router-dom";

class Layout extends Component {
  render() {
    return <div className="Layout">
      <Router>
        <Fragment>
          <Route path="/" component={NavBar} />
          <Route path="/" exact component={Home} />
          <Route path="/contact" component={Contact} />
          
        </Fragment>
      </Router>
    </div>;
  }
}
export default Layout;