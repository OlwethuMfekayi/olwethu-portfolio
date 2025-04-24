import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center px-4 py-16 bg-gradient-to-br from-blue-200 via-pink-200 to-gray-100"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="flex flex-col md:flex-row items-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="md:w-1/3">
            <motion.img
              src="/omfekayi.jpg"
              alt="Olwethu Mfekayi"
              className="rounded-full w-64 h-64 object-cover border-4 border-pink-500 shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
          </div>

          <motion.div
            className="md:w-2/3 text-black"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h1 className="text-4xl font-bold mb-4 text-pink-500">About Me</h1>
            <p className="text-lg mb-4">
              I'm <span className="font-semibold">Olwethu Mfekayi</span>, a passionate Front-End Developer with a strong interest in creating clean and user-friendly web applications. I recently completed an Advanced Diploma in Business Information Technology from the University of Johannesburg.
            </p>
            <p className="text-lg mb-4">
              I enjoy working on collaborative projects and have taken the role of Front-End Developer in our year-long group projects. I also assisted the Business Analyst when needed, showing my flexibility and willingness to support the team.
            </p>
            <p className="text-lg mb-4">
              Apart from development, I'm also interested in data analysis. I’ve taught myself how to use Power BI and have completed a few personal mini-projects to improve my skills. I enjoy discovering insights from data and finding simple ways to present them.
            </p>
            <p className="text-lg mb-4">
              I’m always looking to learn and grow, whether it’s through coding, analyzing data, or working with others to solve real-world problems.
            </p>
            <a
  href="/Olwethu_Mfekayi_CV.pdf"
  download
  className="inline-block bg-pink-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-pink-600 transition-colors duration-300"
>
  Download CV
</a>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;

