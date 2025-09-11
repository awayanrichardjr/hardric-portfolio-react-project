import "./App.css";
import SFT from "./skills, frameworks, tools/App";

function App() {
  return (
    <>
      <div className="projecttt">
        <div className="title">
          <h4>TELEHEALTH ACCESS</h4>
          <p>
            An Online Consultation and Appointment Systems with predictive
            Analytics.
          </p>
        </div>
        <SFT />
        <div className="actions">
          <a
            href="https://github.com/awayanrichardjr/telehealth_access"
            target="_blank"
          >
            Github repository
          </a>
          <p>Not Deployed.</p>
        </div>
      </div>
    </>
  );
}

export default App;
