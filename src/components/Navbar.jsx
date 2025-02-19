import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import image from "../assets/image.png";
import { FaBars, FaTimes } from "react-icons/fa";
import "../index.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/">
        <img src={image} alt="Logo" className="logo" />
      </Link>

      {/* Hamburger Menu Icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Nav Links (Hidden by Default on Small Screens) */}
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" onClick={() => setMenuOpen(false)}>Search</NavLink>
        <NavLink to="/upload" onClick={() => setMenuOpen(false)}>Upload</NavLink>
        <NavLink to="/history" onClick={() => setMenuOpen(false)}>History</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
