// src/components/Footer.js
import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 text-center md:text-left">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">Olwethu Mfekayi</h3>
            <p className="text-gray-400 mt-2 max-w-md">
              Front-end Developer & Data Analyst passionate about building sleek interfaces and exploring data insights.
            </p>
          </div>

          <div className="flex space-x-6 mt-4 md:mt-0">
            <motion.a
              href="https://github.com/OlwethuMfekayi"
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
              href="https://wa.me/27835207083"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-gray-400 hover:text-white transition"
            >
              <FontAwesomeIcon icon={faWhatsapp} size="lg" />
            </motion.a>
          </div>
        </div>

        <p className="text-gray-500 text-sm text-center md:text-left">
          © {currentYear} Olwethu Mfekayi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
