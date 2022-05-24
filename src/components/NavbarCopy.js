import React from 'react';

function Navbar() {
  return (
    <>
      <div data-scroll-section>
        {
          <section className="navbar-wrapper fadeInUp4" id="navbar">
            <ul className="navbar-items">
              <li>
                <a href="#about" data-scroll-to>
                  ABOUT
                </a>
              </li>
              <li>
                <a href="#skills" data-scroll-to>
                  SKILLS
                </a>
              </li>

              <li>
                <a href="#projects" data-scroll-to>
                  PROJECTS
                </a>
              </li>

              <li>
                <a href="#experience" data-scroll-to>
                  EXPERIENCE
                </a>
              </li>

              <li>
                <a href="#interests" data-scroll-to>
                  INTERESTS
                </a>
              </li>

              <li>
                <a href="#contact" data-scroll-to>
                  CONTACT
                </a>
              </li>
            </ul>
          </section>
        }
      </div>
    </>
  );
}

export default Navbar;
