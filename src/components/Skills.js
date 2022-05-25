import React from 'react';

window.onload = function () {
  const skillsTransition = document.querySelector('#skills');
  skillsTransition.onmouseover = function (e) {
    document.body.style.background = '#0a0c64';
    document.body.style.color = 'green';
    document.body.style.transition = 'all 0.2s ease-in';
  };
  skillsTransition.onmouseout = function (e) {
    document.body.style.background = '#FFFFFF';
    document.body.style.color = '#000000';
    document.body.style.transition = 'all 0.2s ease-in';
  };
};
function Skills() {
  return (
    <>
      <div data-scroll-section>
        {
          <section className="skills-wrapper" id="skills">
            <h1>SKILLS</h1>
            <div className="skills-grid">
              <div>
                <div className="skill">
                  <i className="devicon-html5-plain"></i>
                </div>
                <p className="">HTML</p>
              </div>
              <div>
                <div className="skill">
                  <i className="devicon-css3-plain"></i>
                </div>
                <p>CSS</p>
              </div>
              <div>
                <div className="skill">
                  <i className="devicon-javascript-plain"></i>{' '}
                </div>
                <p>JavaScript</p>
              </div>
              <div>
                <div className="skill">
                  <i className="devicon-react-original"></i>{' '}
                </div>
                <p>React</p>
              </div>
              <div>
                <div className="skill">
                  <i className="devicon-python-plain"></i>{' '}
                </div>
                <p>Python</p>
              </div>
              <div>
                <div className="skill">
                  <i className="devicon-django-plain"></i>{' '}
                </div>
                <p>Django</p>
              </div>
              <div>
                <div className="skill">
                  <i className="devicon-postgresql-plain"></i>{' '}
                </div>
                <p>PostgreSQL</p>
              </div>
              <div>
                <div className="skill">
                  <i className="devicon-nodejs-plain"></i>{' '}
                </div>
                <p>Node.js</p>
              </div>
              <div>
                <div className="skill">
                  <i className="devicon-npm-original-wordmark"></i>{' '}
                </div>
                <p>npm</p>
              </div>
              <div>
                <div className="skill">
                  <i className="devicon-express-original"></i>{' '}
                </div>
                <p>Express</p>
              </div>
              <div>
                <div className="skill">
                  <i className="devicon-mongodb-plain"></i>{' '}
                </div>
                <p>MongoDB</p>
              </div>
              <div>
                <div className="skill">
                  <i className="devicon-github-original"></i>{' '}
                </div>
                <p>GitHub</p>
              </div>

              <div>
                <div className="skill">
                  <i className="devicon-heroku-original"></i>{' '}
                </div>
                <p>Heroku</p>
              </div>
              <div>
                <div className="skill">
                  <i className="iconify" data-icon="simple-icons:netlify"></i>{' '}
                </div>
                <p>Netlify</p>
              </div>
              <div>
                <div className="skill">
                  <i className="devicon-vscode-plain"></i>{' '}
                </div>
                <p>VSCode</p>
              </div>
              <div>
                <div className="skill">
                  <i className="devicon-git-plain"></i>{' '}
                </div>
                <p>Git</p>
              </div>
              <div>
                <div className="skill">
                  <i className="devicon-sass-plain"></i>{' '}
                </div>
                <p>Sass</p>
              </div>
              <div>
                <div className="skill">
                  <i className="devicon-bulma-plain"></i>{' '}
                </div>
                <p>Bulma</p>
              </div>

              <div>
                <div className="skill">
                  <i className="devicon-slack-plain"></i>
                </div>
                <p>Slack</p>
              </div>
              <div>
                <div className="skill">
                  <i className="devicon-trello-plain"></i>
                </div>
                <p>Trello</p>
              </div>
            </div>

            <h1 className="project-title">PROJECTS</h1>
          </section>
        }
      </div>
    </>
  );
}

export default Skills;
