import React from 'react';

function Hero() {
  return (
    <>
      <div data-scroll-section>
        {
          <section className="hero-section" id="hero">
            <h1 className="name-title fadeInUp1">ASHLEY GYNGELL</h1>
            <a href="#about" data-scroll-to>
              <img
                data-scroll
                data-scroll-direction="horizontal"
                data-scroll-speed="-3"
                data-scroll-position="top"
                data-scroll-target="#about"
                className=" fadeInUp2"
                id="ashley-gyngell-avatar"
                src="https://res.cloudinary.com/dj7e2jadx/image/upload/v1652981470/ashley-gyngell-avatar1.png"
                alt="ashley-gyngell-avatar"
              />
            </a>
            <h5
              className="role-title fadeInUp3"
              // data-scroll
              // data-scroll-direction="horizontal"
              // data-scroll-speed="3"
            >
              Junior Software Engineer
            </h5>
            <h6
              className="role-title fadeInUp4"

              // data-scroll
              // data-scroll-direction="horizontal"
              // data-scroll-speed="3"
            >
              <em>(Site in development)</em>
            </h6>
          </section>
        }
      </div>
    </>
  );
}

export default Hero;
