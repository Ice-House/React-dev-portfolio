import { Link } from "react-router-dom";
import Card from "./Card";
import {
  FaUserAlt,
  FaAward,
  FaYoutube,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import { motion } from "framer-motion"; // Import Framer Motion
import Button from "./Button"; // Custom Button Component

const HomeCards = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 rounded-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Card 1: Who Am I? */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Card>
              <div className="flex items-center gap-3 mb-4">
                <FaUserAlt className="text-indigo-500 text-3xl" />
                <h2 className="text-2xl font-bold">Who Am I?</h2>
              </div>
              <p className="mt-2 mb-4">
                I’m a passionate developer who loves building meaningful
                solutions with React.js and React Native.
              </p>
              <Button to="/about" color="black" hoverColor="gray">
                About Me
              </Button>
            </Card>
          </motion.div>

          {/* Card 2: My Achievements */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Card bg="bg-indigo-100">
              <div className="flex items-center gap-3 mb-4">
                <FaAward className="text-indigo-700 text-3xl" />
                <h2 className="text-2xl font-bold">My Achievements</h2>
              </div>
              <p className="mt-2 mb-4">
                Over 5+ projects successfully delivered, including web apps,
                mobile apps, and design systems.
              </p>
              <Button to="/projects" color="indigo-500" hoverColor="indigo-600">
                Explore My Work
              </Button>
            </Card>
          </motion.div>

          {/* Card 3: Connect With Me */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Card bg="bg-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <FaInstagram className="text-pink-500 text-3xl" />
                <h2 className="text-2xl font-bold">Connect With Me</h2>
              </div>
              <p className="mt-2 mb-4">
                Let’s connect on social media! Check out my latest posts and
                stay updated with my journey.
              </p>
              <div className="flex gap-3">
                <motion.a
                  href="https://youtube.com/@tabi4301"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 hover:text-red-700"
                  aria-label="YouTube"
                  whileHover={{ scale: 1.2 }}
                >
                  <FaYoutube className="text-3xl" />
                </motion.a>
                <motion.a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:text-pink-700"
                  aria-label="Instagram"
                  whileHover={{ scale: 1.2 }}
                >
                  <FaInstagram className="text-3xl" />
                </motion.a>
                <motion.a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                  aria-label="Facebook"
                  whileHover={{ scale: 1.2 }}
                >
                  <FaFacebook className="text-3xl" />
                </motion.a>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeCards;
