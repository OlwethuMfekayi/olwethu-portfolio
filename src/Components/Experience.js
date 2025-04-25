import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faChalkboardTeacher, faUsers, faTasks, faChartBar, faDatabase, faFileExcel } from '@fortawesome/free-solid-svg-icons';

const Experience = () => {
  const experiences = [
    {
      title: "Tutor – System Software",
      company: "University of Johannesburg",
      period: "Feb 2024 – Nov 2024",
      responsibilities: [
        { icon: faChalkboardTeacher, text: "Facilitated understanding of system software concepts and supported students in data-related assignments" },
        { icon: faTasks, text: "Designed practical exercises that enhanced problem-solving and analytical skills in data systems" },
        { icon: faUsers, text: "Provided one-on-one support to students struggling with complex technical concepts" }
      ],
      skills: ["Teaching", "Mentoring", "Technical Support", "Curriculum Design"]
    },
    {
      title: "Data Analytics Trainee (Scholarship Program)",
      company: "Digitaley Drive",
      period: "April 2025 – Present",
      responsibilities: [
        { icon: faChartBar, text: "Selected for a competitive 3-month scholarship program focused on advanced data analytics" },
        { icon: faDatabase, text: "Training includes hands-on projects involving Power BI, SQL, and Excel" },
        { icon: faFileExcel, text: "Working on real datasets to develop problem-solving and storytelling skills using data" },
        { icon: faTasks, text: "Enhancing capabilities in data cleaning, visualization, and business reporting" }
      ],
      skills: ["Data Analysis", "Power BI", "SQL", "Excel", "Data Visualization"]
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
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
          Experience
        </motion.h1>

        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-lg shadow-lg p-8 mb-12 hover:shadow-xl transition-shadow duration-300"
            variants={itemVariants}
          >
            <div className="flex items-center mb-6">
              <div className="bg-pink-500 p-4 rounded-full text-white mr-4">
                <FontAwesomeIcon icon={faBriefcase} size="lg" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{exp.title}</h2>
                <p className="text-pink-500 font-medium">{exp.company}</p>
                <p className="text-gray-600">{exp.period}</p>
              </div>
            </div>

            <div className="space-y-6">
              {exp.responsibilities.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="bg-blue-50 p-3 rounded-full text-pink-500">
                    <FontAwesomeIcon icon={item.icon} />
                  </div>
                  <p className="text-gray-700 flex-1 pt-1">{item.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="mt-8 border-t border-gray-200 pt-6"
              variants={itemVariants}
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Key Skills Utilized</h3>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    className="bg-pink-100 text-pink-500 px-4 py-2 rounded-full text-sm font-medium"
                    whileHover={{ scale: 1.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;

