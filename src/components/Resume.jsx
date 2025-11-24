import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../data/content';
import './Resume.css';

const Resume = () => {
  const { language } = useLanguage();
  const t = content[language].resume;

  const skills = [
    { name: 'Python', level: 100 },
    { name: 'C/C++', level: 100 },
    { name: 'PyTorch', level: 100 },
    { name: 'OpenStack', level: 95 },
    { name: 'AWS', level: 95 },
    { name: 'Django', level: 95 },
    { name: 'HTML/CSS/JS', level: 85 },
    { name: 'Java', level: 60 },
  ];

  // Construct the correct path using Vite's BASE_URL
  const resumePath = `${import.meta.env.BASE_URL}assets/resume.pdf`;

  return (
    <section id="resume" className="section resume-section">
      <div className="container">
        <div className="resume-header-row">
          <h2 className="section-title">{t.title}</h2>
          <a href={resumePath} download className="btn-download">
            <FaDownload /> {t.download}
          </a>
        </div>
        
        <div className="resume-grid">
          {/* Left Column: Skills */}
          <div className="skills-column">
            <h3>{t.skillsTitle}</h3>
            <div className="skills-list">
              {skills.map(skill => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                  </div>
                  <div className="skill-bar-bg">
                    <motion.div 
                      className="skill-bar-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: PDF Viewer */}
          <div className="pdf-column">
            <div className="pdf-viewer">
              <object data={resumePath} type="application/pdf" width="100%" height="800px">
                <iframe src={resumePath} width="100%" height="800px" title="Resume PDF">
                  <p>This browser does not support PDFs. Please download the PDF to view it: <a href={resumePath}>Download PDF</a>.</p>
                </iframe>
              </object>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
