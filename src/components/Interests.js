import React from 'react';

function Interests() {
  return (
    <>
      <div data-scroll-section>
        {
          <section className="interests-wrapper" id="interests">
            <h2>INTERESTS</h2>
            <div className="theatre">
              <p>
                I love live theatre and music, regularly attending Brixton
                Academy &amp; the West End.
              </p>
            </div>
            <div className="sports">
              <p>
                I enjoy spending my weekends kicking a ball about with my
                friends &amp; playing a frisbee game called bottle bash.
              </p>
            </div>
            <div className="languages">
              <p>
                I have recently revisited my love for Spanish by teaching myself
                on DuoLingo - 200 Days and Counting!
              </p>
            </div>
            <div className="cycling">
              <p>
                During the first lockdown, I built my own bike from scratch
                &amp; plan to cycle from London to Amsterdam in 2023.
              </p>
            </div>
          </section>
        }
      </div>
    </>
  );
}

export default Interests;
