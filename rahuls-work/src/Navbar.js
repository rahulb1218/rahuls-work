// src/Navbar.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-menu">
        <li>
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/education" className={({ isActive }) => (isActive ? 'active' : '')}>
            Education
          </NavLink>
        </li>
        <li>
          <NavLink to="/experience" className={({ isActive }) => (isActive ? 'active' : '')}>
            Experience
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/technical-skills" className={({ isActive }) => (isActive ? 'active' : '')}>
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
            Contact
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/extras" className={({ isActive }) => (isActive ? 'active' : '')}>
            Extras
          </NavLink>
        </li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
