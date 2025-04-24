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
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-pink-200 to-gray-100 py-16 px-6 flex items-center justify-center">
      <motion.div
        className="max-w-3xl w-full mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl font-extrabold text-center mb-12 text-pink-500"
          variants={itemVariants}
        >
          Get In Touch
        </motion.h1>

        <motion.div variants={itemVariants}>
          <div className="bg-white rounded-3xl shadow-xl p-10 hover:shadow-2xl transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-6 text-pink-500">Contact Information</h2>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center space-x-5 p-5 rounded-xl bg-white hover:bg-pink-50 transition-all duration-300 cursor-pointer group"
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="bg-pink-500 text-white p-4 rounded-full shadow-lg transition-transform duration-300 group-hover:rotate-12">
                    <FontAwesomeIcon icon={item.icon} size="lg" aria-label={item.title} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-pink-600 text-lg">{item.title}</h3>
                    {item.title === 'Email' ? (
                      <a
                        href={`mailto:${item.details}`}
                        className="text-gray-700 hover:underline"
                      >
                        {item.details}
                      </a>
                    ) : (
                      <p className="text-gray-700">{item.details}</p>
                    )}
                  </div>
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
