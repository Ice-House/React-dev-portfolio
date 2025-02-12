import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";
import { motion } from "framer-motion";

const ContactPage = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vrair3a", // Replace with your EmailJS Service ID
        "template_f0z5y3s", // Replace with your EmailJS Template ID
        form.current,
        "cGK2vwHvZsGNbftmM" // Replace with your EmailJS Public Key
      )
      .then(() => {
        setStatus("✅ Message sent successfully!");
        form.current.reset();
      })
      .catch(() => {
        setStatus("❌ Failed to send message. Try again later.");
      });
  };

  return (
    <div className="w-full max-w-7xl mx-auto py-12 px-6 mt-12">
      <motion.div
        className="text-center mb-12 bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-8 rounded-lg shadow-md"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="text-lg">
          Feel free to reach out to me for collaborations, opportunities, or
          just to say hi!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          className="bg-white shadow-lg rounded-lg p-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-indigo-600">
            Send a Message
          </h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label className="block mb-1 text-gray-700">Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700">Your Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700">Your Message</label>
              <textarea
                name="message"
                placeholder="Enter your message"
                rows="5"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 hover:scale-105 transform transition-all"
            >
              Send Message
            </button>
          </form>
          {status && (
            <p className="mt-4 text-center text-green-600">{status}</p>
          )}
        </motion.div>

        {/* Contact Information */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-indigo-600">
              Contact Information
            </h2>
            <p className="text-gray-600">
              <strong>Email:</strong> yongcarter87@example.com
            </p>
            <p className="text-gray-600">
              <strong>Phone:</strong> +34 3456 7890
            </p>
            <p className="text-gray-600">
              <strong>Location:</strong> Madrid, Spain
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-indigo-600">
              Follow Me
            </h2>
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: FaGithub, link: "https://github.com/Ice-House" },
                { icon: FaLinkedin, link: "https://linkedin.com" },
                { icon: FaInstagram, link: "https://instagram.com" },
                { icon: FaFacebook, link: "https://facebook.com" },
                { icon: FaYoutube, link: "https://youtube.com/@tabi4301" },
              ].map(({ icon: Icon, link }, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 rounded-full shadow hover:bg-indigo-100 hover:scale-110 transform transition-all"
                >
                  <Icon size={30} className="text-gray-600" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Map Section */}
      <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">
          My Location
        </h2>
        <div className="w-full h-64 bg-gray-200 rounded-lg shadow overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373531531694!3d-37.81627927975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577c2b0cfa0e7f8!2sMelbourne%20CBD%2C%20Victoria%2C%20Australia!5e0!3m2!1sen!2sus!4v1611762066673!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
