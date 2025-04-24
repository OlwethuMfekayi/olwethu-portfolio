import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  const contactInfo = [
    {
      icon: faEnvelope,
      title: 'Email',
      details: 'olwethuasande54@gmail.com'
    },
    {
      icon: faPhone,
      title: 'Phone',
      details: '+27 83 520 7083'
    },
    {
      icon: faLocationDot,
      title: 'Location',
      details: 'Richards Bay, South Africa'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-pink-200 to-gray-100 py-16 px-4 sm:px-6 flex items-center justify-center">
      <motion.div
        className="w-full max-w-3xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold text-center mb-10 text-pink-500"
          variants={itemVariants}
        >
          Get In Touch
        </motion.h1>

        <motion.div variants={itemVariants}>
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-10 hover:shadow-2xl transition-all duration-300">
            <h2 className="text-xl sm:text-2xl font-semibold mb-8 text-pink-500 text-center">
              Contact Information
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex flex-col items-center text-center p-5 rounded-xl bg-white hover:bg-pink-50 transition-all duration-300 cursor-pointer group"
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="bg-pink-500 text-white p-4 mb-4 rounded-full shadow-md transition-transform duration-300 group-hover:rotate-12">
                    <FontAwesomeIcon icon={item.icon} size="lg" />
                  </div>
                  <h3 className="font-semibold text-pink-600 text-lg mb-1">{item.title}</h3>
                  {item.title === 'Email' ? (
                    <a
                      href={`mailto:${item.details}`}
                      className="text-gray-700 hover:underline break-words text-sm sm:text-base"
                    >
                      {item.details}
                    </a>
                  ) : (
                    <p className="text-gray-700 break-words text-sm sm:text-base">{item.details}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
