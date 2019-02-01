import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
  render(){
    return <div className="nav">
      <Link to="/">Home </Link>
      <Link to="/contact">Kontakt </Link>
      <Link to="/">Koszyk </Link>
    </div>
  }
}

export default Navbar;