import { useEffect, useState } from "react";
import axios from "axios";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/projects");
      setProjects(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="section" id="projects">
      <h2>Projects</h2>

      <div className="card-container">
        {projects.length > 0 ? (
          projects.map((project) => (
            <div className="card" key={project._id}>
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          ))
        ) : (
          <p>Belum ada project.</p>
        )}
      </div>
    </section>
  );
}

export default Projects;