import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/create">
          <li>Add Twoot</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
