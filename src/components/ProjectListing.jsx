import { useState } from "react";
import { FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion from framer-motion

const ProjectListing = ({ project }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = project.description;

  if (!showFullDescription) {
    description = description.substring(0, 90) + "...";
  }

  return (
    // Wrap the card with motion.div for animation
    <motion.div
      className="bg-white rounded-xl shadow-md relative mx-6 mb-6"
      initial={{ opacity: 0 }} // Start invisible
      animate={{ opacity: 1 }} // Fade in
      transition={{ duration: 0.5 }} // Duration of fade-in
    >
      <div className="p-4">
        {/* Project Image */}
        <div className="mb-4">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-40 object-cover rounded-md" // Reduced height here
          />
        </div>

        {/* Project Title and Type */}
        <div className="mb-2">
          <div className="text-gray-600 my-2">{project.type}</div>
          <h3 className="text-xl font-bold">{project.title}</h3>
        </div>

        {/* Project Description */}
        <div className="mb-2">{description}</div>
        <button
          onClick={() => setShowFullDescription((prevState) => !prevState)}
          className="text-indigo-500 mb-2 hover:text-indigo-600"
        >
          {showFullDescription ? "Less" : "More"}
        </button>

        {/* Technologies Used */}
        <div className="mb-2">
          <h4 className="font-bold text-gray-700 mb-2">Technologies:</h4>
          <ul className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <li
                key={index}
                className="bg-gray-200 text-sm text-gray-800 px-3 py-1 rounded-md"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        {/* Project Links */}
        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-orange-700 mb-3">
            <FaCode className="inline text-lg mb-1 mr-1" />
            {project.category || "General"}
          </div>
          <Link
            to={`/projects/${project.id}`}
            className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            View Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectListing;
