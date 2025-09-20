import "./App.css";
import "./root.css";
import Card from "./card/App";
import Default from "./default/App";
import Experiences from "./experiences/App";
import Certificates from "./certificates/App";
import Projects from "./projects/App";

function App() {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <Card />
        </div>
        <div className="container about-container-content">
          <Default />
          <Experiences />
          <Certificates />
          <Projects />
        </div>
      </section>
    </>
  );
}

export default App;
