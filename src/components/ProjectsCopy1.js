import React from 'react';

function ProjectsCopy() {
  return (
    <>
      <div data-scroll-container>
        <section class="project-text" data-scroll-section id="pin1">
          <div
            class="image-pop1"
            id="one"
            data-scroll
            data-scroll-sticky
            data-scroll-target="#pin1"
          >
            <a
              href="https://www.playlyricle.com"
              target="_blank"
              rel="noreferrer"
            >
              <h2>Lyricle</h2>
            </a>
            <a
              href="https://github.com/ashleygyngell/lyricle-frontend"
              target="_blank"
              rel="noreferrer"
            >
              <i className=" fa-brands fa-4x fa-github"></i>
            </a>{' '}
            <h1>Solo | Seven Days </h1>{' '}
            <div>
              <p>
                A spin-off of the viral 'Wordle' game, rooted in Python, Django
                &amp; an PostgreSQL database.
              </p>
            </div>
            <br />
            <div>
              <p>
                Users are given clues of song lyrics to guess the title of the
                song.
              </p>
            </div>
            <br />
            <div>
              <p>
                Features register &amp; login functionality, with users able to
                create &amp; join leagues.
              </p>
            </div>
            <br />
            <div>
              <p>
                Consumes an external API, demanding a wealth of string
                manipulation &amp; automation.
              </p>
            </div>
          </div>
          <div class="image-pop" data-scroll data-scroll-speed="-8">
            <a
              href="https://www.playlyricle.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                id="lyricle-screenshot-2"
                src="https://res.cloudinary.com/dj7e2jadx/image/upload/v1652961675/lyricle_screenshot_ipad.png"
                alt=""
              />
            </a>
          </div>
          <div class="image-pop" data-scroll data-scroll-speed="-8">
            <a
              href="https://www.playlyricle.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                id="lyricle-screenshot-3"
                src="https://res.cloudinary.com/dj7e2jadx/image/upload/v1652961642/lyricle_screenshot_phone.png"
                alt=""
              />
            </a>
          </div>
          <div class="image-pop" data-scroll data-scroll-speed="-7">
            <a
              href="https://www.playlyricle.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                id="lyricle-screenshot-1"
                src="https://res.cloudinary.com/dj7e2jadx/image/upload/v1652961642/lyricle_screenshot_iphone.png"
                alt=""
              />
            </a>
          </div>
          <div class="placeholder" data-scroll data-scroll-speed="0">
            <a
              href="https://www.playlyricle.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                id="lyricle-screenshot-1"
                src="https://res.cloudinary.com/dj7e2jadx/image/upload/v1652961642/lyricle_screenshot_iphone.png"
                alt=""
              />
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

export default ProjectsCopy;
