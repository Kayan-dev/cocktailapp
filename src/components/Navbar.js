import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <NavLink
        activeStyle={{
          color: "red",
          fontWeight: "bold",
        }}
        exact={true}
        to="/"
      >
        Cocktail Categories
      </NavLink>
      <NavLink
        activeStyle={{
          color: "red",
          fontWeight: "bold",
        }}
        exact={true}
        to="/images"
      >
        Cocktail Images
      </NavLink>
    </div>
  );
}
