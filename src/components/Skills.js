import React from 'react';

const Skills = () => {
  const skillsList = [
    "Python", "NumPy", "scikit-learn", "PyTorch", "TensorFlow", 
    "Machine Learning", "Statistical Inference", "Applied Mathematics"
  ];

  return (
    <section className="section">
      <h3 className="section-title">Skills</h3>
      <div className="skills-container">
        {/* The map function creates individual spans, and the CSS 'gap' separates them */}
        {skillsList.map((skill, index) => (
          <span key={index} className="skill-tag">{skill}</span>
        ))}
      </div>
    </section>
  );
};

export default Skills;