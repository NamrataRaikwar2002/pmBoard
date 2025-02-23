import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";


const Navbar = () => {
 
  const userEmail = localStorage.getItem("userEmail");
  const userName = userEmail?.substring(0, userEmail.lastIndexOf("@"));
  if (userName) {
    localStorage.setItem("userName", userName);
  }




  return (
    <nav className="navbar">
      <Link to="/" className="text-link">
        <div className="nameWithLogo">
          {/* <img src="/fevicon.ico" alt="logo" className="logoImg" /> */}
          <h3>PM-Dasboard</h3>
        </div>
      </Link>
      <div className="nav_rightside">
        <Link to="/" className="nav_link">
          Dashboard
        </Link>
        <Link to="/category-page" className="nav_link">
          Projects
        </Link>
        <Link to="/category-page" className="nav_link">
          Client
        </Link>
        <Link to="/category-page" className="nav_link">
          Time
        </Link>
        
      </div>
      {
        <p className="userName cursorPointer">
          <i className="fa-solid fa-right-to-bracket"></i>
          Hi, user
        </p>
      }
    </nav>
  );
};

export { Navbar };
