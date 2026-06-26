function Projects() {
  const projects = [
    "AI Chatbot Assistant",
    "Smart Face Detection",
    "Healthcare AI System",
    "Traffic Detection AI",
  ];

  return (
    <section className="section" id="projects">
      <h2>Projects</h2>

      <div className="card-container">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            {project}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;