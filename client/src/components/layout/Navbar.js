import React, { Component } from "react";
import { Link } from "react-router-dom";


class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed" style={{marginright: "35vw" }} >
        <nav className="z-depth-0" >
          <div className="nav-wrapper rgb(102, 95, 95)" style={{backgroundColor:"  rgb(102, 95, 95)"}}>
            <Link
              to="/"
              className="col s5 brand-logo center black-text"
              style={{
                fontFamily: "monospace",
                fontSize: 40,
                color:"white",
                
              }}
            >
              <i className="material-icons" style={{color:"goldenrod"}}>rate_review</i>
             TUBASITE
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;