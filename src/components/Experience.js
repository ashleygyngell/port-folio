import React from 'react';

function Experience() {
  return (
    <>
      <div data-scroll-section>
        {
          <section className="experience-wrapper" id="experience">
            <h1>EXPERIENCE</h1>

            <br />
            <div className="experience-text">
              <div className="generalassembly">
                <h2>General Assembly</h2>
                <h4>Jan '22 - Apr '22</h4>
                <p>
                  12 Week, <strong>(Full Time)</strong> Software Engineering
                  Bootcamp.
                </p>
                <p>
                  Furthered my programming knowledge especially in
                  <strong> JavaScript, React.js</strong> &amp;{' '}
                  <strong>MERN</strong>.
                </p>

                <p>
                  Stored data in<strong> SQL</strong> &amp;{' '}
                  <strong>noSQL</strong> databases.
                </p>
                <p>
                  Consumed external <strong> APIs.</strong>
                  <p></p>Built four full-stack apps individually &amp; paired.
                </p>
                <p>
                  Involved daily stand-ups, online lessons, labs, paired-coding
                  &amp; daily homeworks
                </p>
              </div>

              <div className="socialfiltar">
                <h2>Socialfilt.ar</h2>
                <h4>May '20 - May '21</h4>

                <br />
                <p>
                  Created an augemented reality company utilising Meta&apos;s
                  SparkAR studio.
                </p>
                <p>Delivered digital content for businesses during lockdown.</p>
              </div>

              <div className="actor">
                <h2>Professional Actor</h2>
                <h4>Jun '16 - Mar '20</h4>

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
                  Crafted my ability to take direction &amp; deliver content
                  under the extreme pressure of big studio sets &amp; time
                  sensitive operations.
                </p>
              </div>
            </div>
          </section>
        }
      </div>
    </>
  );
}

export default Experience;
