import { useState } from "react";
import profile from "./assets/HarshaPic.jpeg";
import logo from "./assets/logo.png";
import resume from "./assets/Resume.pdf";
import Certificates from "./certificates.jsx";
import "./App.css";
function App() {
  const [showCertificates, setShowCertificates] = useState(false);
  const skills = [
    "Java",
    "Python",
    "HTML",
    "CSS",
    "JavaScript",
    "DSA",
    "OOPs",
    "C++",
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
  if (showCertificates) {
    return (
      <Certificates
        goBack={() => setShowCertificates(false)}
      />
    );
  }
  return (
    <>
      <header>
        <div className="logo">Harsha</div>
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <section className="hero">
        <img src={profile} alt="Harsha Profile" />
        <h1>
          Hi, I'm Harsha </h1>
        <h2>Computer Science Student</h2>
        <p>
          Passionate about Web Development, Java, Data Structures
          and building modern user interfaces using React.
        </p>
        <a href="#contact" className="btn">
          Contact Me
        </a>
      </section>
      <section id="about">
        <div className="container">
          <h2>About Me</h2>
          <p>
            I am a Computer Science student currently learning Full
            Stack Development and improving my problem-solving
            skills through Data Structures and Algorithms.
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
      <section id="experience">
        <div className="container">
          <h2>Experience</h2>
          <div className="experience-card">
            <div className="experience-header">
              <h3>Technical Intern</h3>
              <span>June 2026 - Present</span>
            </div>
            <h4>Andromeida Maritime Solutions Pvt. Ltd.</h4>
            <p>
              Learning web development, software engineering
              practices, teamwork, and real-world project
              development.
            </p>
          </div>
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
      <section id="resume">
        <div className="container">
          <h2>Resume</h2>
          <div className="action-buttons">
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn" >
              View Resume
            </a>
            <button
              className="btn"
              onClick={() => setShowCertificates(true)}>
              View Certificates
            </button>
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="container">
          <h2>Contact Me</h2>
          <p>
            <strong>Email:</strong>
            {" "}
            harshayadav252@gmail.com
          </p>
          <p className="social-links">
            <a
              href="https://github.com/harshayadav252"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            {" | "}
            <a
              href="https://www.linkedin.com/in/harsha-y-26254a32a"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </section>
      <footer>
        <p>
          © {new Date().getFullYear()} Harsha Yadav
        </p>
      </footer>
  </>
  );
}
export default App;