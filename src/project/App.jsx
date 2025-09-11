import "./App.css";
import Project from "./projects/App";

function App() {
  return (
    <>
      <section className="project" id="project">
        <h1>My projects.</h1>
        <div className="container">
          <Project />
        </div>
      </section>
    </>
  );
}

export default App;
