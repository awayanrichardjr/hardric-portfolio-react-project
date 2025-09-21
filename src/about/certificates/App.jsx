import "./App.css";
import "./root.css";
import cert001 from "./img/d1824748-a87b-427d-bccb-206810fd65f9.jpg";
import cert002 from "./img/d835cb3d-d9b1-4692-8e51-19f36ea59b4d.jpg";
import cert003 from "./img/Screenshot 2025-09-20 184441.png";

const cert_link = {
  cert001: "https://www.sololearn.com/certificates/CC-UJALAMM6",
  cert002: "https://www.sololearn.com/certificates/CC-ITGJP0HX",
  cert003:
    "https://drive.google.com/file/d/1csXnnIdx4qxR3ZSTgiERMmCP9u-01GWs/view",
};

function App() {
  return (
    <>
      <section className="certificates" id="certificates">
        <h4>Certificates</h4>
        <br />
        <ol className="cert-list">
          <li>
            <a href={cert_link.cert001} target="_blank">
              <img src={cert001} alt="" />
            </a>
          </li>
          <li>
            <a href={cert_link.cert002} target="_blank">
              <img src={cert002} alt="" />
            </a>
          </li>
          <li>
            <a href={cert_link.cert003} target="_blank">
              <img src={cert003} alt="" />
            </a>
          </li>
        </ol>
      </section>
    </>
  );
}

export default App;
