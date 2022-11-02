import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  
  return (
    <div className="sidebar">
      <NavLink to="/home" className="item" style={{textDecoration:"none"}}>
        Home
      </NavLink>
      <NavLink to="/" className="item" style={{textDecoration:"none"}}>
        Add Scenario
      </NavLink>
      <NavLink to="/Scenarios" className="item" style={{textDecoration:"none"}}>
        All Scenarios
      </NavLink>
      <NavLink to="Vehicle" className="item" style={{textDecoration:"none"}}>
        All Vehicie
      </NavLink>
    </div>
  );
};

export default Navbar;
