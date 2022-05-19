import React from 'react';

function Experience() {
  return (
    <>
      <div data-scroll-section>
        {
          <section className="experience-wrapper" id="experience">
            <h1>EXPERIENCE</h1>
            <br />
            <div className="generalassembly">
              <h2>General Assembly</h2>
              <h3>Full Time, 'Software Engineering Immersive' Bootcamp</h3>
              <h5>Jan '22 - Apr '22</h5>
              <p>
                <ul>
                  <li>
                    A 12 week immersive course that helped strengthen and
                    further my programming knowledge (Especially in JavaScript,
                    React.js and MERN).
                  </li>
                  <li>
                    Consumed &amp; Implemented external APIs, Modeled and Stored
                    data in SQL and noSQL databases.
                  </li>
                  <li>
                    I learnt to build full-stack apps individually and within
                    groups.
                  </li>
                  <li>
                    Involved daily stand-ups, online lessons, labs,
                    paired-coding, daily homeworks and four projects.
                  </li>
                </ul>
              </p>
            </div>
            <br />
            <div className="socialfiltar">
              <h2>Socialfilt.ar</h2>
              <h3>AR Company</h3>
              <h5>May '20 - May '21</h5>
              <p>
                <ul>
                  <li>
                    Created an augemented reality company utilising Meta&apos;s
                    SparkAR studio.
                  </li>
                  <li>
                    Delivered digital content for businesses during lockdown.
                  </li>
                </ul>
              </p>
            </div>
            <br />
            <div className="actor">
              <h2>Film &amp; Stage</h2>
              <h3>Professional Actor</h3>
              <h5>Jun '16 - Mar '20</h5>
              <p>
                <ul>
                  <li>
                    Work includes: BBC&apos;s War &amp; Peace, Mastercard,
                    Orange, Mars, Arts Theatre, Arcola Theatre.
                  </li>
                  <li>
                    Developed my creative and empathy skills with a capacity to
                    engage and connect in front of a live audience.
                  </li>
                  <li>
                    Crafted my ability to take direction and deliver content
                    under the extreme pressure of big studio sets and time
                    sensitive operations.
                  </li>
                </ul>
              </p>
            </div>
          </section>
        }
      </div>
    </>
  );
}

export default Experience;
