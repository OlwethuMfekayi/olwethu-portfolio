// src/components/Footer.js
import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-4 text-center md:text-left">
        <div className="md:flex md:justify-between md:items-center mb-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">Olwethu Mfekayi</h3>
            <p className="text-gray-400">
              Front-end Developer & Data Analyst passionate about building sleek interfaces and exploring data insights.
            </p>
          </div>
          <div className="flex justify-center md:justify-end mt-4 md:mt-0 space-x-4">
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-gray-400 hover:text-white transition"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/olwethu-mfekayi-785025280/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-gray-400 hover:text-white transition"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </motion.a>
            <motion.a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-gray-400 hover:text-white transition"
            >
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </motion.a>
          </div>
        </div>

        <p className="text-gray-500 text-sm">
          © {currentYear} Olwethu Mfekayi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
