import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faDownload, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-pink-200 to-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.div
              className="inline-block bg-blue-100 text-gray-800 px-4 py-2 rounded-full shadow-sm font-medium"
              whileHover={{ scale: 1.05 }}
            >
              👋 Welcome to my world
            </motion.div>

            <h1 className="text-5xl font-bold text-gray-800">
              Hi, I'm <span className="text-pink-600">Olwethu Mfekayi</span>
            </h1>

            <h2 className="text-2xl text-gray-700 font-semibold">
              Front-end Developer & Data Analyst
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed">
              I'm a Business Information Technology graduate passionate about front-end development,
              data analysis, and the latest in tech. I build interactive and insightful digital experiences
              by blending code with creativity. Let’s build something amazing! 🚀
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/Olwethu_Mfekayi_CV.pdf"
                download
                className="bg-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-600 transition-colors duration-300 flex items-center"
              >
                <FontAwesomeIcon icon={faDownload} className="mr-2" />
                Download CV
              </motion.a>

              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-pink-500 px-8 py-3 rounded-full font-semibold border-2 border-pink-500 hover:bg-blue-100 transition-colors duration-300 flex items-center"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                  Contact Me
                </motion.button>
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <motion.a
                href="https://github.com/OlwethuMfekayi"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                aria-label="GitHub"
                className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition-colors duration-300"
              >
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/olwethu-mfekayi-785025280"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                aria-label="LinkedIn"
                className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-colors duration-300"
              >
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </motion.a>
              <motion.a
                href="https://wa.me/27835207083"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                aria-label="WhatsApp"
                className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-colors duration-300"
              >
                <FontAwesomeIcon icon={faWhatsapp} size="lg" />
              </motion.a>
            </div>
          </motion.div>

          {/* Right Section */}
          <motion.div variants={itemVariants} className="relative hidden md:block">
            <div className="relative">
              <motion.div
                className="absolute top-0 right-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <motion.div
                className="absolute -bottom-10 -right-10 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"
                animate={{
                  scale: [1.2, 1, 1.2],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <img
                src="/omfekayi.jpg"
                alt="Olwethu Mfekayi"
                className="relative z-10 rounded-full w-80 h-80 object-cover border-8 border-white shadow-lg"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;



