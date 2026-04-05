import React from 'react';

const Header = () => {
  return (
    <header className="hero-section">
      <h1 className="name">Rohan Thosar</h1>
      <h2 className="title">Machine Learning & Applied Mathematics</h2>
      <div className="contact-links">
        <a href="mailto:rohanthosar215@gmail.com" target="_blank" rel="noreferrer">Email</a>
        <span className="separator">•</span>
        <a href="https://github.com/rohant215" target="_blank" rel="noreferrer">GitHub</a>
        <span className="separator">•</span>
        <a href="https://medium.com" target="_blank" rel="noreferrer">Medium</a>
        <span className="separator">•</span>
        <span>Pune, India</span>
      </div>
    </header>
  );
};

export default Header;