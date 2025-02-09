import React from "react";
//import { FaGithub, FaLinkedin } from "react-icons/fa"; // Example icons for social links
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa"; // Importing all the social media icons
import { motion } from "framer-motion"; // Import Framer Motion
import logo from "../assets/images/logo.png"; // Adjust the path to your logo.png

const AboutPage = () => {
  return (
    <div className="w-full max-w-8xl mx-auto py-4 px-6 mt-20 mb-12 bg-blue-50">
      {/* Introduction */}
      <motion.div
        className="flex items-center space-x-6 mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img src={logo} alt="Your Name" className="w-32 h-32 rounded-full" />
        <div>
          <h2 className="text-3xl font-bold">Hello, I'm [Your Name]</h2>
          <p className="mt-2">
            A passionate web and mobile developer specializing in React and
            React Native.
          </p>
        </div>
      </motion.div>

      {/* Skills */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl font-bold mb-4 text-indigo-600 text-center">
          My Skills
        </h3>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {[
            "React",
            "React Native",
            "Node.js",
            "JavaScript",
            "CSS",
            "HTML",
            "Tailwind CSS",
          ].map((skill, index) => (
            <li
              key={index}
              className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 p-4 rounded-lg text-white text-center shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              {skill}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Journey */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl font-bold mb-4 text-center text-indigo-600 ">
          My Journey
        </h3>
        <p>
          I started my development journey a few years ago, learning JavaScript
          and diving into frameworks like React and React Native. Over the
          years, I've built web and mobile apps, worked with teams, and
          continuously grown my skills.
        </p>
      </motion.div>

      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl font-bold mb-4 text-center text-indigo-600 ">
          Some of My Projects
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card shadow-lg p-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg transform hover:scale-105 transition-all duration-300">
            <h4 className="text-xl font-bold">Project Title</h4>
            <p className="text-gray-200 mt-2">
              Short project description goes here.
            </p>
            <a href="#" className="mt-4 inline-block text-white font-semibold">
              View Project
            </a>
          </div>
          {/* Add more project cards */}
          <div className="card shadow-lg p-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg transform hover:scale-105 transition-all duration-300">
            <h4 className="text-xl font-bold">Project Title</h4>
            <p className="text-gray-200 mt-2">
              Short project description goes here.
            </p>
            <a href="#" className="mt-4 inline-block text-white font-semibold">
              View Project
            </a>
          </div>
          {/* Add more project cards */}
          <div className="card shadow-lg p-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg transform hover:scale-105 transition-all duration-300">
            <h4 className="text-xl font-bold">Project Title</h4>
            <p className="text-gray-200 mt-2">
              Short project description goes here.
            </p>
            <a href="#" className="mt-4 inline-block text-white font-semibold">
              View Project
            </a>
          </div>
          {/* Add more project cards */}
        </div>
      </motion.div>

      <motion.div
        className="mb-12"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl font-bold mb-4 text-indigo-600 text-center">
          Connect with Me
        </h3>
        <div className="flex space-x-8 justify-center">
          {/* GitHub */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-125 transition-all duration-300 p-2 rounded-full bg-gray-800 text-white shadow-lg hover:bg-indigo-600"
          >
            <FaGithub size={40} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-125 transition-all duration-300 p-2 rounded-full bg-blue-700 text-white shadow-lg hover:bg-indigo-600"
          >
            <FaLinkedin size={40} />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-125 transition-all duration-300 p-2 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 text-white shadow-lg hover:bg-purple-600"
          >
            <FaInstagram size={40} />
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-125 transition-all duration-300 p-2 rounded-full bg-blue-600 text-white shadow-lg hover:bg-indigo-600"
          >
            <FaFacebookF size={40} />
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-125 transition-all duration-300 p-2 rounded-full bg-red-600 text-white shadow-lg hover:bg-indigo-600"
          >
            <FaYoutube size={40} />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
