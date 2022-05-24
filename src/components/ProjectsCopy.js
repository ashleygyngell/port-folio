import React from 'react';

function ProjectsCopy() {
  return (
    <>
      <div data-scroll-container>
        <section class="project-text" data-scroll-section id="pin">
          <div
            class="image-pop1"
            id="one"
            data-scroll
            data-scroll-sticky
            data-scroll-target="#pin"
            data-scroll-speed="3"
          >
            <h2>Lyricle</h2>
            <h1>
              Solo | Seven days{' '}
              <a
                href="https://github.com/ashleygyngell/lyricle-frontend"
                target="_blank"
                rel="noreferrer"
              >
                <i className=" fa-brands fa-3x fa-github"></i>
              </a>
            </h1>
            <div>
              <p>
                A spin-off of the viral Wordle game, rooted in Python, Django
                and a PostgreSQL database.
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
                Features a register and login feature with the ability to create
                or join leagues with friends.
              </p>
            </div>
            <br />
            <div>
              <p>
                Consumes an external API, demanding a wealth of string
                manipulation and automation.
              </p>
            </div>
          </div>

          <div class="image-pop" id="three" data-scroll data-scroll-speed="-5">
            <img
              id="lyricle-screenshot-2"
              src="https://res.cloudinary.com/dj7e2jadx/image/upload/v1652961675/lyricle_screenshot_ipad.png"
              alt=""
            />
          </div>
          <div class="image-pop" id="two" data-scroll data-scroll-speed=".3">
            <img
              id="lyricle-screenshot-1"
              src="https://res.cloudinary.com/dj7e2jadx/image/upload/v1652961642/lyricle_screenshot_iphone.png"
              alt=""
            />
          </div>
          <div class="image-pop" id="four" data-scroll data-scroll-speed="-8">
            <img
              id="lyricle-screenshot-3"
              src="https://res.cloudinary.com/dj7e2jadx/image/upload/v1652961642/lyricle_screenshot_phone.png"
              alt=""
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default ProjectsCopy;
