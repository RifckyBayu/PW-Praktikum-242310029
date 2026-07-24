import { useEffect, useState } from "react";
import axios from "axios";

function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/skills");
      setSkills(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="section" id="skills">
      <h2>Skills</h2>

      <div className="card-container">
        {skills.length > 0 ? (
          skills.map((skill) => (
            <div className="card" key={skill._id}>
              <h3>{skill.name}</h3>
              <p>{skill.level}</p>
            </div>
          ))
        ) : (
          <p>Belum ada data skill.</p>
        )}
      </div>
    </section>
  );
}

export default Skills;