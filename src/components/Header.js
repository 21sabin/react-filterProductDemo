import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
export default class Header extends Component {
  render() {
    return (
      <div>
        <ul className="header">
          <li>
            <Link className="link" to="/">Home</Link>
          </li>
          <li>
            <Link className="link" to="/About">About</Link>
          </li>
          <li>
            <Link className="link" to="/filter">Filter</Link>
          </li>
        </ul>
      </div>
    );
  }
}
