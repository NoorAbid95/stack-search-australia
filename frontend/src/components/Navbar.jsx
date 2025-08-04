import React from "react";
import { Link } from "react-router-dom";
import stackSearchLogo from "../assets/stackSearchLogo.jpg";

const Navbar = () => {
  return (
    <nav className="w-full mb-10">
      <div className="flex items-center p-6 ml-4">
          <img
            src={stackSearchLogo}
            alt="Stack Search Logo"
            className="h-12 w-auto"
          />
      </div>
    </nav>
  );
};

export default Navbar;
