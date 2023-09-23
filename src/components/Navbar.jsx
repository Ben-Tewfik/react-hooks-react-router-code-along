import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "dodgerBlue",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
    <div>
      <NavLink
        exact
        to="/"
        style={linkStyles}
        activeStyle={{ background: "darkblue" }}
      >
        Home
      </NavLink>
      <NavLink
        exact
        to="/about"
        style={linkStyles}
        activeStyle={{ background: "darkblue" }}
      >
        About
      </NavLink>
      <NavLink
        exact
        to="/login"
        style={linkStyles}
        activeStyle={{ background: "darkblue" }}
      >
        login
      </NavLink>
      <NavLink
        exact
        to="/signup"
        style={linkStyles}
        activeStyle={{ background: "darkblue" }}
      >
        Sign Up
      </NavLink>
      <NavLink
        exact
        to="/messages"
        style={linkStyles}
        activeStyle={{ background: "darkblue" }}
      >
        Messages
      </NavLink>
    </div>
  );
}
export default NavBar;
