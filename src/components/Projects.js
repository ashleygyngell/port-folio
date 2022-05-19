import React from 'react';

function Projects() {
  return (
    <>
      <div data-scroll-section>
        {
          <section className="projects-wrapper" id="projects">
            <h1>PROJECTS</h1>

            {/* LYRICLE */}
            <div className="lyricle">
              <div className="project-text">
                <a
                  href="https://www.playlyricle.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h2
                    data-scroll-sticky
                    data-scroll-target="lyicle"
                    data-scroll-offset="200"
                  >
                    Lyricle
                  </h2>
                </a>

                <h3>Solo Project (7 Days)</h3>
                <a
                  href="https://github.com/ashleygyngell/lyricle-frontend"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className=" fa-brands fa-2x fa-github"></i>
                </a>

                <div>
                  A spin-off of the viral Wordle game, rooted in Python, Django
                  and a PostgreSQL database.
                </div>
                <br />
                <div>
                  Users are given clues of song lyrics to guess the title of the
                  song.
                </div>
                <br />
                <div>
                  Features a register and login feature with the ability to
                  create or join leagues with friends.
                </div>
                <br />
                <div>
                  Consumes an external API, demanding a wealth of string
                  manipulation and automation.
                </div>
                <br />
              </div>
              <a
                data-scroll
                data-scroll-direction="vertical"
                data-scroll-speed=".2"
                data-scroll-position="top"
                data-scroll-target="#lyricle-screenshot-ipad"
                href="https://www.playlyricle.com"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  id="lyricle-screenshot-ipad"
                  src="https://res.cloudinary.com/dj7e2jadx/image/upload/v1652961675/lyricle_screenshot_ipad.png"
                  alt="lyricle-screenshot-ipad"
                />
              </a>
              <a
                data-scroll
                data-scroll-direction="vertical"
                data-scroll-speed="2"
                href="https://www.playlyricle.com"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  id="lyricle-screenshot-mac"
                  src="https://res.cloudinary.com/dj7e2jadx/image/upload/v1652961642/lyricle_screenshot_iphone.png"
                  alt="lyricle-screenshot-2"
                />
              </a>
              <a
                data-scroll
                data-scroll-direction="vertical"
                data-scroll-speed="10"
                href="https://www.playlyricle.com"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  id="lyricle-screenshot-phone"
                  src="https://res.cloudinary.com/dj7e2jadx/image/upload/v1652961642/lyricle_screenshot_phone.png"
                  alt="lyricle-screenshot-phone"
                />
              </a>
            </div>
            <div className="discoverly" id="discoverly">
              <a
                href="https://discoverly.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <h3>Discover.ly</h3>
              </a>
              <a
                href="https://github.com/ashleygyngell/discover.ly"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-2x fa-github"></i>
              </a>
              <h3>
                Group Project <br />
                10 Days
              </h3>
              <p>
                <ul>
                  <li>
                    An activity logging social site using MERN with CRUD
                    functionality.
                  </li>
                  <li>
                    As a group we worked full-stack, including functionality and
                    styling.
                  </li>
                  <li>
                    The focus of my branches were to build the registration page
                    with JWT authentication and create the landing page.
                  </li>
                </ul>
              </p>
              <a
                data-scroll
                data-scroll-direction="horizontal"
                href="https://discoverly.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  id="discoverly-screenshot-ipad"
                  src="https://res.cloudinary.com/dj7e2jadx/image/upload/v1652865731/discoverly_screenshot_1_fx9cl2.png"
                  alt="discoverly-screenshot"
                  width="400"
                  height="400"
                />
              </a>
            </div>
            <div className="cryptmocash">
              <a
                href="https://cryptmo-cash.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <h3>CryptMo CAsh</h3>
              </a>
              <a
                href="https://github.com/ashleygyngell/CryptMo-CAsh"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-2x fa-github"></i>
              </a>
              <h3>
                Paired Project
                <br /> 2 Days
              </h3>
              <p>
                <ul>
                  <li>
                    A cryptocurrency conversion site, built using React, with a
                    Bulma CSS framework and consumes an external API.
                  </li>
                  <li>
                    This was my first experience at paired programming,
                    collaborating on one computer using VSCode&apos;s Live Share
                    feature, combining our strengths and building on our
                    weaknesses.
                  </li>
                </ul>
              </p>
              <a
                href="https://cryptmo-cash.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dj7e2jadx/image/upload/v1652862917/cryptmocash_screenshot_1_rhysnb.png"
                  alt="cryptmocash-screenshot"
                  width="400"
                  height="400"
                />
              </a>
            </div>
            <div className="seipermarioman">
              <a
                href="https://ashleygyngell.github.io/SEI-PER-MARIO-MAN/"
                target="_blank"
                rel="noreferrer"
              >
                <h3>'SEI'per Mario-Man</h3>
              </a>
              <a
                href="https://github.com/ashleygyngell/SEI-PER-MARIO-MAN"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-2x fa-github"></i>
              </a>
              <h3>
                Solo Project <br /> 5 Days
              </h3>
              <p>
                <ul>
                  <li>
                    A grid based game written in JavaScript, CSS and HTML.
                  </li>
                  <li>
                    A hybrid of the Super-Mario and Pacman games, consolidating
                    3 weeks of JavaScript.
                  </li>
                </ul>
              </p>
              <a
                href="https://ashleygyngell.github.io/SEI-PER-MARIO-MAN/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dj7e2jadx/image/upload/v1652865742/seipermario-screenshot-1_cwozkz.png"
                  alt="seipermarioman-screenshot"
                  width="400"
                  height="400"
                />
              </a>
            </div>
          </section>
        }
      </div>
    </>
  );
}

export default Projects;
