import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
// force r
export default function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Check if the theme state is different from the class on the element
    if (theme === 'dark') {
        document.documentElement.classList.remove('light');
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
    }
  }, [theme]);

  return (
    <div className="min-h-screen transition-colors duration-500 bg-[--bg] text-[--text]">
      <Navbar theme={theme} setTheme={setTheme} />
      <main className="max-w-6xl mx-auto px-6 lg:px-8">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
