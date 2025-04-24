import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const educationData = [
    {
      degree: "Advanced Diploma in Business Information Technology",
      institution: "University of Johannesburg",
      year: "2024",
      courses: [
        "Advanced Programming",
        "Advanced Databases",
        "Software Testing",
        "Human-Computer Interaction",
        "Advanced Business Analysis"
      ],
      project: {
        title: "UJ Chatbot & Software Testing Project",
        description:
          "This was our group year project where I worked as the Front-End Developer and also assisted the Business Analyst. We developed a chatbot specifically trained on the University of Johannesburg curriculum and student support content. The chatbot was built to assist students with queries related to coursework and academic resources. We also performed automated software testing on the application using test cases, created user stories, and ensured the quality of the app through rigorous test coverage.",
        tools: ["Python", "Chatbot API", "Selenium", "Jest"]
      }
    },
    {
      degree: "Diploma in Business Information Technology",
      institution: "University of Johannesburg",
      year: "2023",
      courses: [
        "Data Analysis",
        "Information Systems",
        "Business Analysis",
        "Software Development",
        "Communication Networks"
      ],
      project: {
        title: "Education App for High School Soccer Players",
        description:
          "As part of our group year project, I contributed as the Front-End Developer and also supported the Business Analyst. We created an education mobile app aimed at helping high school students, especially those who play soccer, to improve academically. The app allows learners to do activities, receive instant feedback, and track areas where they need improvement, promoting better learning outcomes.",
        tools: ["React Native", "Firebase", "Node.js"]
      }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
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
          Education
        </motion.h1>

        <div className="space-y-12">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="border-l-4 border-pink-500 pl-4">
                <h2 className="text-2xl font-bold text-gray-800">{edu.degree}</h2>
                <p className="text-lg text-pink-500">{edu.institution} | {edu.year}</p>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2">Key Coursework:</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {edu.courses.map((course, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="h-2 w-2 bg-pink-500 rounded-full mr-2"></span>
                      {course}
                    </li>
                  ))}
                </ul>
              </div>

              {edu.project && (
                <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">{edu.project.title}</h3>
                  <p className="mb-2">{edu.project.description}</p>
                  <div className="flex gap-2 flex-wrap">
                    {edu.project.tools.map((tool, idx) => (
                      <span key={idx} className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Education;
