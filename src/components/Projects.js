import React from 'react';

function Projects() {
  return (
    <>
      <section className="projects-wrapper" id="projects">
        <h2>PROJECTS</h2>
        <div className="lyricle">
          <h3>Lyricle</h3>
          <h5>Solo Project, 7 Days</h5>
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
        </div>

        <div className="discoverly">
          <h3>Discover.ly</h3>
          <h5>Group Project, 10 Days</h5>
          <p>
            <ul>
              <li>
                A spin-off of the viral Wordle game, rooted in Python, Django
                and a PostgreSQL database.
              </li>
              <li>
                .Users are given clues of song lyrics to guess the title of the
                song.
              </li>
              <li>
                Features a register and login feature with the ability to create
                or join leagues with friends.
              </li>
              <li>
                Consumes an external API, demanding a wealth of string
                manipulation and automation.
              </li>
            </ul>
          </p>
        </div>

        <div className="cryptmocash">
          <h3>CryptMo CAsh</h3>
          <h5>Paired Project, 2 Days</h5>
          <p>
            <ul>
              <li>
                A cryptocurrency conversion site, built using React, with a
                Bulma CSS framework and consumes an external API.
              </li>
              <li>
                This was my first experience at paired programming,
                collaborating on one computer using VSCode&apos;s Live Share
                feature, combining our strengths and building on our weaknesses.
              </li>
            </ul>
          </p>
        </div>

        <div className="seipermarioman">
          <h3>SEIper Mario-Man</h3>
          <h5>Solo Project, 5 Days</h5>
          <p>
            <ul>
              <li>A grid based game written in JavaScript, CSS and HTML.</li>
              <li>
                A hybrid of the Super-Mario and Pacman games, consolidating 3
                weeks of JavaScript.
              </li>
            </ul>
          </p>
        </div>
      </section>
    </>
  );
}

export default Projects;
