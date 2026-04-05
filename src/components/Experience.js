import React from 'react';

const Experience = () => {
  const experienceList = [
    {
      role: "NAIP Trainee - Quantum Computing & Machine Learning",
      company: "VIT Vellore (SCOPE)",
      date: "Jan 2026",
    },
    {
      role: "Intern",
      company: "AIC-Seed Incubator at IISER Pune",
      date: "Aug 2024 - Sep 2024",
    },
    
  ];

  return (
    <section className="section">
      <h3 className="section-title">Experience</h3>
      <div className="experience-list">
        {experienceList.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-header">
              <h4 className="role">{exp.role}</h4>
              <span className="date">{exp.date}</span>
            </div>
            <span className="company">{exp.company}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;