import React from 'react';

// import Navbar from './components/Navbar';
import NavbarCopy from './components/NavbarCopy';
import Hero from './components/Hero';
import Contact from './components/Contact';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
// import ProjectsCopy1 from './components/ProjectsCopy1';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Interests from './components/Interests';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { useRef } from 'react';

const toTop = document.querySelector('.to-top');

window.onscroll = function () {
  if (window.scrollY >= 500) {
    toTop.style.opacity = '1';
  } else {
    toTop.style.opacity = '0';
  }
};

function App() {
  const containerRef = useRef(null);
  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        smoothMobile: true,
        smoothTablet: true,

        // ... all available Locomotive Scroll instance options
      }}
      watch={
        [
          //..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
        ]
      }
      data-scroll
      containerRef={containerRef}
    >
      <header>{/* <Navbar /> */}</header>
      <main data-scroll-container ref={containerRef}>
        <NavbarCopy />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Interests />
        <Contact />
        {/* <ProjectsCopy1 /> */}
        <footer>
          <Footer />
        </footer>
      </main>
    </LocomotiveScrollProvider>
  );
}
export default App;
