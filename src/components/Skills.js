import React from 'react';

function Skills() {
  return (
    <>
      <section className="skills-wrapper" id="skills">
        <h2>SKILLS</h2>
        <div className="skills-grid">
          <div>
            <h3>Languages &amp; Frameworks</h3>
            <p>
              JavaScript, React, Python, Node, Express, CSS, SASS, Bulma, HTML
            </p>
          </div>
          <div>
            <h3>Databases</h3>
            <p>SQL, PostgreSQL, MongoDB</p>
          </div>
          <div>
            <h3>Management &amp; Deployment</h3>
            <p>
              Git, GitHub, REST API's, Postman, Command Line, Heroku, Netlify
            </p>
          </div>
          <div>
            <h3>Methodologies</h3>
            <p>
              Agile Development, KanBan, Entity Relationship Diagrams,
              Wireframing
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
