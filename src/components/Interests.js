import React from 'react';

function Interests() {
  return (
    <>
      <div data-scroll-section>
        {
          <section className="interests-wrapper" id="interests">
            <h1>INTERESTS</h1>
            <div className="interests-text">
              <div className="theatre">
                <p>
                  I love theatre &amp; music, regularly attending music venues
                  &amp; The West End.
                </p>
              </div>
              <div className="sports">
                <p>
                  On the weekends you can find me having a kickabout or playing
                  a frisbee game called bottle bash.
                </p>
              </div>
              <div className="languages">
                <p>
                  I have recently reignited my love for Spanish on DuoLingo -
                  200 Days and Counting!
                </p>
              </div>
              <div className="cycling">
                <p>
                  During the first lockdown, I built my own bike from scratch
                  &amp; plan to cycle from London to Amsterdam in 2023.
                </p>
              </div>
            </div>
          </section>
        }
      </div>
    </>
  );
}

export default Interests;
