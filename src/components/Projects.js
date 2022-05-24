import React from 'react';

function Projects() {
  return (
    <>
      <div data-scroll-container>
        {
          <section className="projects-wrapper" id="projects">
            <h1>PROJECTS</h1>
            <br />

            {/* LYRICLE */}
            <div data-scroll-section className="lyricle" id="lyricle">
              <div
                className="project-text"
                data-scroll
                data-scroll-sticky
                data-scroll-target="#lyricle"
              >
                <a
                  href="https://www.playlyricle.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h2>Lyricle</h2>
                </a>
                <a
                  href="https://github.com/ashleygyngell/lyricle-frontend"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className=" fa-brands fa-4x fa-github"></i>
                </a>
                <br />
                <h1> Solo | Seven days</h1>
                <br />
                <p>
                  A spin-off of the viral 'Wordle' game, rooted in Python,
                  Django &amp; an PostgreSQL database.
                </p>

                <p>
                  Features register &amp; login functionality, with users able
                  to create &amp; join leagues.
                </p>

                <p>
                  Consumes an external API, demanding a wealth of string
                  manipulation &amp; automation.
                </p>

                <br />
              </div>
              <a
                data-scroll
                data-scroll-direction="vertical"
                data-scroll-speed="-4"
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
                data-scroll-speed="-3"
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
                data-scroll-speed="-2"
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

            {/* DISCOVERLY */}
            <div data-scroll-section className="discoverly" id="discoverly">
              <div
                className="project-text"
                data-scroll
                data-scroll-sticky
                data-scroll-target="#discoverly"
              >
                <a
                  href="https://discoverly.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h2>Discover.ly</h2>
                </a>
                <a
                  href="https://github.com/ashleygyngell/discoverly"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className=" fa-brands fa-4x fa-github"></i>
                </a>
                <br />
                <h1>Group | Ten days</h1>
                <br />
                <p>
                  An activity logging social site using the MERN stack with CRUD
                  functionality. Users can discover &amp; share locations for
                  outdoor activities.
                </p>

                <p>
                  As a group we worked full-stack. My responsibilities were JWT
                  authentication, response status codes &amp; the
                  registration/login pages.
                </p>

                <br />
              </div>
              <a
                data-scroll
                data-scroll-direction="vertical"
                data-scroll-speed="-6"
                data-scroll-target="#discoverly-screenshot-ipad"
                href="https://discoverly.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  id="discoverly-screenshot-ipad"
                  src="https://res.cloudinary.com/dj7e2jadx/image/upload/v1653050567/discoverly_screenshot_ipad1.png"
                  alt="discoverly-screenshot-ipad"
                />
              </a>
              <a
                data-scroll
                data-scroll-direction="vertical"
                data-scroll-speed="-4"
                href="https://discoverly.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  id="discoverly-screenshot-ipad2"
                  src="https://res.cloudinary.com/dj7e2jadx/image/upload/v1653058064/discoverly_screenshot_ipad2.png"
                  alt="discoverly-screenshot-ipad2"
                />
              </a>

              <a
                data-scroll
                data-scroll-direction="vertical"
                data-scroll-speed="-2"
                href="https://discoverly.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  id="discoverly-screenshot-phone"
                  src="https://res.cloudinary.com/dj7e2jadx/image/upload/v1653057739/discoverly_screenshot_iphone1.png"
                  alt="discoverly-screenshot-phone"
                />
              </a>
            </div>

            {/* CRYPTMOCASH */}
            <div data-scroll-section className="cryptmocash" id="cryptmocash">
              <div
                className="project-text"
                data-scroll
                data-scroll-sticky
                data-scroll-target="#cryptmocash"
              >
                <a
                  href="https://cryptmo-cash.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h2>CryptMo CAsh</h2>
                  <a
                    href="https://github.com/ashleygyngell/CryptMo-CAsh"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className=" fa-brands fa-4x fa-github"></i>
                  </a>
                </a>
                <br />
                <h1>Pair | Two Days</h1>
                <br />
                <p>
                  A cryptocurrency conversion site, built using React, with a
                  Bulma CSS framework &amp; consumes an external API.
                </p>
              </div>
              <a
                data-scroll
                data-scroll-direction="vertical"
                data-scroll-speed="-4"
                href="https://cryptmo-cash.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  id="cryptmocash-screenshot-ipad2"
                  src="https://res.cloudinary.com/dj7e2jadx/image/upload/v1653165600/cryptmocash-screenshot-ipad2.png"
                  alt="cryptmocash-screenshot-ipad2"
                />
              </a>
              <a
                data-scroll
                data-scroll-direction="vertical"
                data-scroll-speed="-3"
                href="https://cryptmo-cash.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  id="cryptmocash-screenshot-ipad"
                  src="https://res.cloudinary.com/dj7e2jadx/image/upload/v1653163547/cryptmocash-screenshot-ipad.png"
                  alt="cryptmocash-screenshot-ipad"
                />
              </a>

              <a
                data-scroll
                data-scroll-direction="vertical"
                data-scroll-speed="-2"
                data-scroll-position="top"
                data-scroll-target="#cryptmocash-screenshot-ipad"
                href="https://cryptmo-cash.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  id="cryptmocash-screenshot-iphone"
                  src="https://res.cloudinary.com/dj7e2jadx/image/upload/v1653165214/cryptmocash-screenshot-iphone.png"
                  alt="discoverly-screenshot-iphone"
                />
              </a>
            </div>

            {/* SEIPERMARIOMAN */}
            <div
              data-scroll-section
              className="seipermarioman"
              id="seipermarioman"
            >
              <div
                className="project-text"
                data-scroll
                data-scroll-sticky
                data-scroll-target="#seipermarioman"
              >
                <a
                  href="https://ashleygyngell.github.io/SEI-PER-MARIO-MAN/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h2>'SEI'per Mario Man</h2>
                </a>
                <a
                  href="https://github.com/ashleygyngell/SEI-PER-MARIO-MAN"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className=" fa-brands fa-4x fa-github"></i>
                </a>
                <br />
                <h1>Solo | Five Days</h1>
                <br />
                <p>A grid based game written in JavaScript, CSS &amp; HTML.</p>
              </div>

              {/* <a
                data-scroll
                data-scroll-direction="vertical"
                data-scroll-speed="2"
                href="https://ashleygyngell.github.io/SEI-PER-MARIO-MAN/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  id="seipermarioman-screenshot-mac2"
                  src="https://res.cloudinary.com/dj7e2jadx/image/upload/v1653170501/seipermarioman-screenshot-mac2.png"
                  alt="seipermarioman-screenshot-mac2"
                />
              </a> */}

              <a
                data-scroll
                data-scroll-direction="vertical"
                data-scroll-speed="-4"
                data-scroll-target="#seipermarioman"
                href="https://ashleygyngell.github.io/SEI-PER-MARIO-MAN/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  id="seipermarioman-screenshot-mac1"
                  src="https://res.cloudinary.com/dj7e2jadx/image/upload/v1653167094/seipermarioman-screenshot-mac.png"
                  alt="seipermarioman-screenshot-mac1"
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
