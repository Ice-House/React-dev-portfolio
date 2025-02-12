import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-black py-20 pt-28 mb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            Hi, I'm Young Carter
          </h1>
          <p className="my-4 text-xl text-white">
            I'm a passionate full-stack developer with expertise in React and
            mobile development.
          </p>
          <p className="text-lg text-white">
            Browse through my projects and see how I build impactful solutions.
          </p>
          <div className="mt-6">
            <Link
              to="/projects"
              className="inline-block text-white bg-indigo-700 hover:bg-indigo-900 rounded-md px-6 py-3 text-lg font-semibold"
            >
              Explore My Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
