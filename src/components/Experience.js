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
              <h4>Full Time, 'Software Engineering Immersive' Bootcamp</h4>
              <h5>Jan '22 - Apr '22</h5>
              <br />
              <p>
                A 12 week immersive course that helped strengthen &amp; further
                my programming knowledge (Especially in JavaScript, React.js
                &amp; MERN).
              </p>
              <p>
                Consumed &amp; Implemented external APIs, Modeled &amp; Stored
                data in SQL and noSQL databases.
              </p>
              <p>
                I learnt to build full-stack apps individually &amp; within
                groups.
              </p>
              <p>
                Involved daily stand-ups, online lessons, labs, paired-coding,
                daily homeworks &amp; four projects.
              </p>
            </div>
            <br />
            <div className="socialfiltar">
              <h2>Socialfilt.ar</h2>
              <h4>AR Company</h4>
              <h5>May '20 - May '21</h5>
              <br />
              <p>
                Created an augemented reality company utilising Meta&apos;s
                SparkAR studio.
              </p>
              <p>Delivered digital content for businesses during lockdown.</p>
            </div>
            <br />
            <div className="actor">
              <h2>Film &amp; Stage</h2>
              <h4>Professional Actor</h4>
              <h5>Jun '16 - Mar '20</h5>
              <br />
              <p>
                Work includes: BBC&apos;s War &amp; Peace, Mastercard, Orange,
                Mars, Arts Theatre, Arcola Theatre.
              </p>
              <p>
                Developed my creative &amp; empathy skills with a capacity to
                engage &amp; connect in front of a live audience.
              </p>
              <p>
                Crafted my ability to take direction &amp; deliver content under
                the extreme pressure of big studio sets &amp; time sensitive
                operations.
              </p>
            </div>
          </section>
        }
      </div>
    </>
  );
}

export default Experience;
