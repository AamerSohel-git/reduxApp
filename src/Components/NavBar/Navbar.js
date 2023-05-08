import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { Badge } from "@mui/material";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItem = useSelector((state)=> state.rootReducer.cartItem);
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">PRODUCTS</NavLink>
        </li>
        <li>
          <NavLink to="/men">MEN</NavLink>
        </li>
        <li>
          <NavLink to="/women">WOMEN</NavLink>
        </li>
        <li>
          <NavLink to="/jewel">JEWELERY</NavLink>
        </li>
        <li>
          <NavLink to="/electronic">ELECTRONIC</NavLink>
        </li>
        
      </ul>
    </div>
  );
};

export default Navbar;