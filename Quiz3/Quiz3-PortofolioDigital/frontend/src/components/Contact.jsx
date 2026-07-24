import { useEffect, useState } from "react";
import axios from "axios";

function Contact() {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/contact")
      .then((res) => setContact(res.data))
      .catch((err) => console.log(err));
  }, []);

  if (!contact) {
    return (
      <section className="section" id="contact">
        <h2>Contact</h2>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section className="section" id="contact">
      <h2>Contact</h2>

      <div className="card-container">
        <div className="card">
          <h3>Email</h3>
          <p>{contact.email}</p>

          <h3>Phone</h3>
          <p>{contact.phone}</p>

          <h3>GitHub</h3>
          <a href={contact.github} target="_blank" rel="noreferrer">
            {contact.github}
          </a>

          <h3>LinkedIn</h3>
          <a href={contact.linkedin} target="_blank" rel="noreferrer">
            {contact.linkedin}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;