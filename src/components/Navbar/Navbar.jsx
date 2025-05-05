import React from 'react';
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav>
        <h1>Portfolio</h1>
        <div></div>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
