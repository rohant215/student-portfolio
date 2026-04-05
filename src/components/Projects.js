import React, { useState } from 'react';

const Projects = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleProject = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const projectList = [
    {
      id: 1,
      title: "Stability of Risk Parity Allocations under Covariance Perturbations",
      shortDesc: "Derived a first-order sensitivity bound showing how covariance estimation errors propagate to portfolio weights.",
      techStack: ["Python", "NumPy", "Portfolio Theory", "Risk Parity"],
      link: "https://github.com/rohant215/Stability-Of-Risk-Parity-Allocation",
      problem: "Investigates how small estimation errors in covariance matrices propagate through nonlinear risk parity systems and destabilize portfolio weights.",
      findings: [
        "Derived first-order perturbation sensitivity bound.",
        "Showed conditioning dominates instability over sample size.",
        "Validated using 17 years of ETF data.",
        "Proved 2-asset independence from correlation."
      ],
      images: [
        {
          src: process.env.PUBLIC_URL + "/Risk_Parity_Independence.png",
          alt: "Risk Parity vs Correlation"
        },
        {
          src: process.env.PUBLIC_URL + "/Weight_Error_Conditioning.png",
          alt: "Allocation Instability"
        }
      ]
    },
    {
      id: 2,
      title: "Optimal Decision Thresholds for Clinical Risk Prediction",
      shortDesc: "Decision-theoretic framework for optimal treatment thresholds under cost-sensitive loss.",
      techStack: ["Python", "scikit-learn", "Decision Theory"],
      link: "https://github.com/rohant215/Optimal-Decision-Thresholds-for-Clinical-Risk-Prediction",
      problem: "Converts model probabilities into optimal real-world treatment decisions under asymmetric costs.",
      findings: [
        "Derived optimal threshold using Bayes decision theory.",
        "Evaluated on 55K ICU patients.",
        "Showed miscalibration increases loss significantly.",
        "Isotonic regression gave best results."
      ],
      images: [
        {
          src: process.env.PUBLIC_URL + "/Clinical_Decision_Loss.png",
          alt: "Clinical Loss vs Threshold"
        }
      ]
    }
  ];

  return (
    <section className="section">
      <h3 className="section-title">Selected Projects</h3>

      <div className="projects-grid">
        {projectList.map((project) => (
          <div key={project.id} className="project-card">

            <div className="project-header">
              <h4 className="project-title">
                <a href={project.link} target="_blank" rel="noreferrer">
                  {project.title} ↗
                </a>
              </h4>

              <button 
                className="toggle-btn" 
                onClick={() => toggleProject(project.id)}
              >
                {expandedId === project.id ? 'Close Case Study' : 'Read Case Study'}
              </button>
            </div>

            <p className="project-desc">{project.shortDesc}</p>

            <div className="tech-stack">
              {project.techStack.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>

            {expandedId === project.id && (
              <div className="project-details">

                <div className="details-section">
                  <h5>The Problem</h5>
                  <p>{project.problem}</p>
                </div>

                <div className="details-section">
                  <h5>Key Findings</h5>
                  <ul>
                    {project.findings.map((finding, i) => (
                      <li key={i}>{finding}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-images">
                  {project.images.map((img, i) => (
                    <div key={i} className="image-container">
                      <img 
                        src={img.src} 
                        alt={img.alt} 
                        className="portfolio-img"
                      />
                    </div>
                  ))}
                </div>

              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;