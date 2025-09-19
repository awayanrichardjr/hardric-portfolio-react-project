import "./App.css";

function App() {
  return (
    <>
      <section className="expertise" id="expertise">
        <h1 className="">What I offer.</h1>
        <div className="container">
          <div className="offer">
            <div>
              <h5>
                <b>01</b> Core Website Development
              </h5>
              <p className="description">
                Build modern, mobile-friendly, and cross-browser compatible
                websites.
              </p>
            </div>
          </div>
          <div className="offer">
            <div>
              <h5>
                <b>02</b> Optimization & Maintenance
              </h5>
              <p className="description">
                Improve speed, SEO, accessibility, and overall performance for
                better user experience.
              </p>
            </div>
          </div>
          <div className="offer">
            <div>
              <h5>
                <b>03</b> UI/UX Implementation: Manual Coding
              </h5>
              <p className="description">
                Convert Figma, XD, or Sketch designs into pixel-perfect,
                interactive interfaces.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
