import "./App.css";
import "./root.css";

const repo_link = {
  telehealth: "https://github.com/awayanrichardjr/telehealth_access",
};
function App() {
  return (
    <>
      <section className="projects" id="projects">
        <h4>Projects</h4>
        <br />
        <ol className="project-list">
          <li>
            <p>
              {" "}
              From 2024 to 2025, our team developed a capstone project titled{" "}
              <b>
                TELEHEALTH ACCESS: An Online Consultation and Appointment with
                Predictive Analytics
              </b>
              . The system was designed to provide patients with an accessible
              platform to book medical appointments and consult with healthcare
              professionals online. We also integrated predictive analytics to
              analyze patient data, anticipate healthcare needs, and support
              better decision-making for providers. Through this project, we
              strengthened our skills in system design, web development, and
              data analytics while creating a solution that addresses the
              increasing demand for technology-driven healthcare services.
            </p>
            <a href={repo_link.telehealth} target="_blank">
              Github repository
            </a>
          </li>
        </ol>
      </section>
    </>
  );
}

export default App;
