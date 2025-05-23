import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faTimes,
  faHome,
  faUser,
  faGraduationCap,
  faBriefcase,
  faLaptopCode,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: faHome },
    { path: '/about', label: 'About', icon: faUser },
    { path: '/education', label: 'Education', icon: faGraduationCap },
    { path: '/experience', label: 'Experience', icon: faBriefcase },
    { path: '/skills', label: 'Skills', icon: faLaptopCode },
    { path: '/contact', label: 'Contact', icon: faEnvelope }
  ];

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      <nav className="bg-white/80 backdrop-blur-md shadow-lg fixed top-0 w-full z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <motion.div
                  whileHover={{ scale: 1.1, color: "#ff7f50" }}
                  whileTap={{ scale: 0.9, color: "#ff4500" }}
                  key={item.path}
                >
                  <Link
                    to={item.path}
                    className={`relative font-medium transition-all duration-300 ${
                      isActive(item.path) ? 'text-primary' : 'text-gray-600'
                    }`}
                  >
                    {item.label}
                    {isActive(item.path) && (
                      <motion.div
                        layoutId="underline"
                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-600 hover:text-primary transition-all duration-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`md:hidden absolute top-16 left-0 w-full bg-white shadow-md z-40 overflow-hidden`}
        >
          <div className="px-4 py-4 flex justify-around">
            {navItems.map((item) => (
              <motion.div
                key={item.path}
                whileHover={{ scale: 1.1, color: "#ff7f50" }}
                whileTap={{ scale: 0.95, color: "#ff4500" }}
                className="flex flex-col items-center"
              >
                <Link
                  to={item.path}
                  className={`text-xl transition-colors duration-300 ${
                    isActive(item.path) ? 'text-primary' : 'text-gray-600'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <FontAwesomeIcon icon={item.icon} />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </nav>

      {/* Page Content Wrapper */}
      <div className="pt-16">
        {/* Content goes here */}
      </div>
    </>
  );
};

export default Navbar;




