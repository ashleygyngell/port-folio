import React from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Contact from './components/Contact';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Interests from './components/Interests';

const toTop = document.querySelector('.to-top');

window.onscroll = function () {
  if (window.scrollY >= 500) {
    toTop.style.opacity = '1';
  } else {
    toTop.style.opacity = '0';
  }
};

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Interests />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
export default App;
