import "./App.css";
import JavaCert from "./assets/JavaCert.png";
import PythonCert from "./assets/PythonCert.png";
import DSCert from "./assets/DSCert.png";
import SoftSkillsCert from "./assets/SoftSkillsCert.png";
function Certificates({ goBack }) {
  const certificates = [
    {
      title: "Java Programming",
      issuer: "Infosys Springboard",
      image: JavaCert,
    },
    {
      title: "Python Programming",
      issuer: "Infosys Springboard",
      image: PythonCert,
    },
    {
      title: "Data Structures & Algorithms",
      issuer: "CodeChef",
      image: DSCert,
    },
    {
      title: "Soft Skills Development",
      issuer: "NPTEL",
      image: SoftSkillsCert,
    },
  ];
  return (
    <section className="certificates-page">
      <h1>My Certifications</h1>
      <div className="cert-grid">
        {certificates.map((cert, index) => (
          <div
            className="cert-card"
            key={index}>
            <img
              src={cert.image}
              alt={cert.title}/>
            <div className="cert-info">
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
              <a
                href={cert.image}
                target="_blank"
                rel="noreferrer"
                className="btn"  >
                View Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
      <button
        className="btn"
        onClick={goBack}
        style={{
          marginTop: "30px",
          display: "block",
          marginInline: "auto",
        }}>
        ← Back to Portfolio
      </button>
    </section>
  );
}
export default Certificates;