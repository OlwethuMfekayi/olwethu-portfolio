import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faBrain, faUsers } from '@fortawesome/free-solid-svg-icons';

const Capabilities = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: faCode,
      skills: ["Python", "JavaScript", "SQL", "Java", "C#"],
      color: "bg-blue-400" // Adjusted to a blue shade for variety
    },
    {
      title: "Development Tools",
      icon: faDatabase,
      skills: ["React.js","React Native", "HTML5", "CSS", "Bootstrap", "Git", "GitHub"],
      color: "bg-pink-400"
    },
    {
      title: "Data Analysis",
      icon: faBrain,
      skills: ["Excel","Power BI" ,"SQL Server", "Data Visualization", "Data Wrangling"],
      color: "bg-blue-400" // Adjusted to a blue shade for variety
    },
    {
      title: "Professional Skills",
      icon: faUsers,
      skills: [ "Agile/Scrum",
        "Problem-solving",
        "Critical thinking",
        "Communication",
        "Quick learner",
        "Clear communicator",
        "Independent & team worker",
        "Attention to detail",
        "Data-first mindset"],
      color: "bg-pink-400"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-pink-200 to-gray-100 py-16 px-4">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl font-bold text-center mb-12 text-pink-500"
          variants={itemVariants}
        >
          Skills & Expertise
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className={`${category.color} p-3 rounded-full text-white mr-4`}>
                  <FontAwesomeIcon icon={category.icon} size="lg" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800">{category.title}</h2>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{ scale: 1.1 }}
                    className="bg-pink-100 text-pink-500 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-12 bg-white rounded-lg shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold mb-4 text-pink-500">Certifications</h2> {/*Updated text primary to text pink 500*/}
          <div className="bg-blue-50 rounded-lg p-6">  {/*Update bg-pink-50 to bg-blue-50*/}
            <h3 className="text-xl font-semibold">Linux Workshop</h3>
            <p className="text-gray-600">August 2021 | Conducted by Melissa Sassi, IBM Z</p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <span className="h-2 w-2 bg-pink-500 rounded-full mr-2"></span>
                Intensive training in Linux systems and data analysis
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-pink-500 rounded-full mr-2"></span>
                Certificate of Achievement for successfully applying skills to real-world scenarios
              </li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Capabilities;
