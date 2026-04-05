// src/App.js
import React from 'react';
import './App.css'; 

import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <div className="portfolio-container">
      <Header />
      <main>
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
      </main>
      <Footer />
    </div>
  );
}

export default App;