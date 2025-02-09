import { useState, useEffect } from "react";
import ProjectListing from "./ProjectListing";
import Spinner from "./Spinner";

const ProjectListings = ({ isHome = false }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const apiUrl = isHome ? "/api/projects?_limit=3" : "/api/projects";
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.log("Error fetching projects", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [isHome]);

  return (
    <section className="bg-blue-50 px-6 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Projects" : "Browse Projects"}
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-1 ">
            {projects.map((project) => (
              <ProjectListing key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectListings;
