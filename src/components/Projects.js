import React, { useState } from 'react';

const Projects = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleProject = (id) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  const projectList = [
    {
      id: 1,
      title: "Stability of Risk Parity Allocations under Covariance Perturbations",
      shortDesc: "Derived a first-order sensitivity bound showing how covariance estimation errors propagate to portfolio weights, quantifying instability in nonlinear risk parity systems.",
      techStack: ["Python", "NumPy", "Portfolio Theory", "Risk Parity", "Sensitivity Analysis"],
      link: "https://github.com/rohant215/Stability-Of-Risk-Parity-Allocation",
      problem: "Risk parity is a highly popular portfolio construction method that allocates capital to equalize risk contributions across assets. Unlike mean-variance optimization, it only requires a covariance matrix, bypassing the noise of expected returns. However, the true covariance matrix is unobservable and must be estimated. This project investigates a critical, often-ignored question: How do small estimation errors in the covariance matrix propagate through the nonlinear risk parity system and destabilize final portfolio weights?",
      findings: [
        "Analytical Sensitivity Bound: Derived a strict first-order perturbation bound utilizing the augmented Jacobian of the risk parity system. This formally quantifies how covariance errors amplify into weight errors.",
        "Conditioning vs. Sample Size: Conducted large-scale Monte Carlo simulations demonstrating that the matrix's condition number (κ), rather than raw sample size, is the primary driver of instability.",
        "Empirical Validation: Backtested against 17 years of ETF data (2007–2024), successfully explaining extreme portfolio instability in real markets (e.g., an 82% turnover spike during the COVID-19 crash).",
        "Correlation Independence: Formally proved that for a two-asset system, risk parity perfectly reduces to inverse-volatility weighting, becoming entirely independent of the correlation coefficient."
      ],
      images: [
        { src: "/Risk_Parity_Independence.png", alt: "Risk Parity Weight vs Correlation" },
        { src: "/Weight_Error_Conditioning.png", alt: "Allocation Instability vs Covariance Conditioning" }
      ]
    },
    {
      id: 2,
      title: "Optimal Decision Thresholds for Clinical Risk Prediction under Cost-Sensitive Loss",
      shortDesc: "Developed a decision-theoretic framework for converting predicted probabilities into treatment decisions; derived the optimal threshold consistent with Bayes decision rules.",
      techStack: ["Python", "NumPy", "scikit-learn", "Decision Theory", "Clinical ML"],
      link: "https://github.com/rohant215/Optimal-Decision-Thresholds-for-Clinical-Risk-Prediction",
      problem: "Machine learning models output continuous probabilities, but clinical deployment requires binary, real-world decisions (e.g., to treat or not to treat). Using a default threshold of 0.5 is fundamentally flawed in medicine, where the cost of a false negative is vastly different from a false positive. Furthermore, if a model's predicted probabilities are miscalibrated, relying on them for thresholding can lead to actively harmful patient outcomes.",
      findings: [
        "Decision-Theoretic Optimization: Developed a rigorous framework deriving the optimal classification threshold t* = C_FP / (C_FP + C_FN) based on asymmetric cost matrices.",
        "Large-Scale Clinical Evaluation: Evaluated the framework on 55,000 ICU patients from the MIMIC-IV dataset across multiple calibration methods and cost settings.",
        "The Cost of Miscalibration: Established a direct mathematical link between calibration error and clinical decision error. Underconfident models severely shift the optimal decision boundary, increasing expected clinical loss by 102.7%.",
        "Robust Calibration Solutions: Proved that Isotonic Regression provided the best overall performance, maintaining near-optimal clinical utility with a negligible ~0.6% increase in expected costs."
      ],
      images: [
        { src: "/Clinical_Decision_Loss.png", alt: "Expected Clinical Loss vs Decision Threshold" }
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
                <a href={project.link} target="_blank" rel="noreferrer">{project.title} ↗</a>
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

            {/* Expanded Case Study Section */}
            {expandedId === project.id && (
              <div className="project-details">
                <div className="details-section">
                  <h5>The Problem</h5>
                  <p>{project.problem}</p>
                </div>
                
                <div className="details-section">
                  <h5>Methodology & Key Findings</h5>
                  <ul>
                    {project.findings.map((finding, i) => (
                      <li key={i}>{finding}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-images">
                  {project.images.map((img, i) => (
                    <div key={i} className="image-container">
                      <img src={img.src} alt={img.alt} className="portfolio-img" />
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