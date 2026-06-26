function Skills() {
  const skills = [
    "Python",
    "Machine Learning",
    "React",
    "PostgreSQL",
    "MongoDB",
    "Data Science",
  ];

  return (
    <section className="section" id="skills">
      <h2>Skills</h2>

      <div className="card-container">
        {skills.map((skill, index) => (
          <div className="card" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;