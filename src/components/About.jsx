import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../data/content';
import './About.css';

const About = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { language } = useLanguage();
  const t = content[language].about;

  // Array of profile images from albums directory
  const profileImages = [
    '/assets/albums/profile.jpg',
    '/assets/albums/richard.jpg',
  ];

  const tabs = [
    { id: 'experience', label: t.tabs.experience },
    { id: 'education', label: t.tabs.education },
    { id: 'activities', label: t.tabs.activities },
    { id: 'certs', label: t.tabs.certs },
    { id: 'awards', label: t.tabs.awards },
  ];

  // Helper to render text with bold markdown (**text**)
  const renderText = (text) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % profileImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + profileImages.length) % profileImages.length);
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">{t.title}</h2>
        
        <div className="about-content">
          <div className="about-profile">
            <div className="profile-image-wrapper">
              {profileImages.length > 1 && (
                <>
                  <button className="carousel-nav prev" onClick={prevImage} aria-label="Previous image">
                    ‹
                  </button>
                  <button className="carousel-nav next" onClick={nextImage} aria-label="Next image">
                    ›
                  </button>
                </>
              )}
              <div className="image-container">
                <motion.img
                  key={currentImageIndex}
                  src={profileImages[currentImageIndex]}
                  alt="Profile"
                  className="profile-image"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              {profileImages.length > 1 && (
                <div className="carousel-indicators">
                  {profileImages.map((_, index) => (
                    <div
                      key={index}
                      className={`carousel-dot ${index === currentImageIndex ? 'active' : ''}`}
                      onClick={() => goToImage(index)}
                    />
                  ))}
                </div>
              )}
            </div>
            <div className="profile-text">
              {t.intro.map((paragraph, index) => (
                <p key={index}>{renderText(paragraph)}</p>
              ))}
            </div>
          </div>

          <div className="about-tabs-container">
            <div className="tabs-list">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="tab-content">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                {t[activeTab].map((item, index) => (
                  <div key={index} className="resume-item">
                    <div className="resume-header">
                      <h4>{item.title}</h4>
                      <span className="resume-period">{item.period || item.date}</span>
                    </div>
                    {item.company && <p className="resume-company">{item.company}</p>}
                    {item.degree && <p className="resume-degree">{item.degree}</p>}
                    {item.role && <p className="resume-role">{item.role}</p>}
                    {item.issuer && <p className="resume-issuer">{item.issuer}</p>}
                    
                    {item.description && (
                      <ul className="resume-description">
                        {item.description.map((desc, i) => (
                          <li key={i}>{renderText(desc)}</li>
                        ))}
                      </ul>
                    )}
                    
                    {item.tags && (
                      <div className="resume-tags">
                        {item.tags.map(tag => (
                          <span key={tag} className="tag">{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
