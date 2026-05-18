import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify-around p-5 bg-violet-600 ">
      <h3>MYWEB 3</h3>
      <div>
        <Link className="m-3"  to="/">Home</Link>
        <Link className="m-3" to="/Contact">Contact</Link>
        <Link className="m-3" to="/About">About</Link>
      </div>
    </div>
  );
};

export default NavBar;
