import React from 'react';

function Skills() {
  return (
    <>
      <div data-scroll-section>
        {
          <section className="skills-wrapper" id="skills">
            <h1>SKILLS</h1>
            <div className="skills-grid">
              <div>
                <h2>Languages &amp; Frameworks</h2>
                <p>JavaScript React Python Node Express CSS SASS Bulma HTML</p>
              </div>
              <div>
                <h2>Databases</h2>
                <p>SQL PostgreSQL MongoDB</p>
              </div>
              <div>
                <h2>Management &amp; Deployment</h2>
                <p>Git GitHub REST API's Postman Heroku Netlify</p>
              </div>
              <div>
                <h2>Methodologies</h2>
                <p>
                  Agile-Development KanBan Entity-Relationship-Diagrams
                  Wireframing
                </p>
              </div>
            </div>
          </section>
        }
      </div>
    </>
  );
}

export default Skills;
