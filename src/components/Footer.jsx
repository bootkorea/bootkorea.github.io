import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://github.com/bootkorea" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/bootkorea/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="mailto:thqntmd@jbnu.ac.kr" target="_blank" rel="noopener noreferrer">
          <FaEnvelope />
        </a>
      </div>
      <p className="copyright">
        Designed & Built by Bu-seung So
      </p>
    </footer>
  );
};

export default Footer;
