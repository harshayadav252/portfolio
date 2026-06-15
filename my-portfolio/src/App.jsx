import profile from "./assets/HarshaPic.jpeg";
import logo from "./assets/logo.png";
import resume from "./assets/Resume.pdf";

import JavaCert from "./assets/JavaCert.png";
import PythonCert from "./assets/PythonCert.png";
import DSCert from "./assets/DSCert.png";
import SoftSkillsCert from "./assets/SoftSkillsCert.png";

import "./App.css";
import { useState } from "react";

function App() {
  const skills = [
    "Java",
    "Python",
    "HTML",
    "CSS",
    "JavaScript",
    "DSA",
    "OOPs",
  ];

  const projects = [
    {
      title: "Portfolio Website",
      desc: "Built using React with modern UI design.",
    },
    {
      title: "To-Do App",
      desc: "Simple task manager using JavaScript.",
    },
  ];

  const certificates = [
    {
      name: "Java - Infosys Springboard",
      image: JavaCert,
    },
    {
      name: "Python - Infosys Springboard",
      image: PythonCert,
    },
    {
      name: "Data Structures - CodeChef",
      image: DSCert,
    },
    {
      name: "Soft Skills Development - NPTEL",
      image: SoftSkillsCert,
    },
  ];

  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <>
 
      <header>
        <div className="logo">Harsha</div>

        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#certificates">Certificates</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <section className="hero">
        <img src={profile} alt="Harsha Profile" />

        <h1>
          Hi, I'm <span>Harsha</span>
        </h1>

        <h2>Computer Science Student</h2>

        <p>
          Passionate about Web Development, Java, Data Structures and building
          modern user interfaces using React.
        </p>

        <a href="#contact" className="btn">
          Contact Me
        </a>
      </section>
      <section id="about">
        <div className="container">
          <h2>About Me</h2>

          <p>
            I am a Computer Science student currently learning Full Stack
            Development and improving my problem-solving skills through Data
            Structures and Algorithms.
          </p>
        </div>
      </section>
      <section id="skills">
        <div className="container">
          <h2>Skills</h2>

          <div className="skills">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </section>
      <section id="education">
        <div className="container">
          <h2>Education</h2>

          <div className="card">
            <h3>B.Tech Computer Science</h3>
            <p>ABES Institute of Technology</p>
            <p>2024 - 2028</p>
          </div>

          <img src={logo} alt="ABESIT Logo" />
        </div>
      </section>
      <section id="projects">
        <div className="container">
          <h2>Projects</h2>

          <div className="grid">
            {projects.map((project, index) => (
              <div className="card" key={index}>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="certificates">
        <div className="container">
          <h2>Certificates</h2>

          <ul className="certificate-list">
            {certificates.map((cert) => (
              <li
                key={cert.name}
                className="certificate-name"
                onClick={() => setSelectedCert(cert)}
              >
                {cert.name}
              </li>
            ))}
          </ul>

          {selectedCert && (
            <div className="certificate-viewer">
              <img
                src={selectedCert.image}
                alt={selectedCert.name}
                className="certificate-image"
              />

              <button
                className="close-btn"
                onClick={() => setSelectedCert(null)}
              >
                Close
              </button>
            </div>
          )}
        </div>
      </section>
      <section id="resume">
        <div className="container">
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            View Resume
          </a>
        </div>
      </section>
      <section id="contact">
        <div className="container">
          <h2>Contact Me</h2>
          <p>
            <strong>Email:</strong> harshayadav252@gmail.com
          </p>

          <p className="social-links">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            {" | "}

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </section>
      <footer>
        <p>© {new Date().getFullYear()} Harsha</p>
      </footer>
    </>
  );
}
export default App;