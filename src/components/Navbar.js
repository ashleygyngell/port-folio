import React from 'react';

function Navbar() {
  return (
    <header data-scroll-section>
      <nav className="navbar-wrapper">
        <ul className="navbar-items">
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#skills">SKILLS</a>
          </li>

          <li>
            <a href="#projects">PROJECTS</a>
          </li>

          <li>
            <a href="#experience">EXPERIENCE</a>
          </li>

          <li>
            <a href="#interests">INTERESTS</a>
          </li>

          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
