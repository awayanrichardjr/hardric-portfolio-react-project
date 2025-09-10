import "./App.css";

function App() {
  return (
    <>
      <section className="expertise" id="expertise">
        <h1>What I offer.</h1>
        <div className="container">
          <div className="offer">
            <div>
              {" "}
              <h4>Core Website Development</h4>
              <p className="description">
                Build modern, mobile-friendly, and cross-browser compatible
                websites.
              </p>
            </div>
            <a className="learn-more-link" href="#">
              Learn more
            </a>
          </div>
          <div className="offer">
            <div>
              {" "}
              <h4>Optimization & Maintenance</h4>
              <p className="description">
                Improve speed, SEO, accessibility, and overall performance for
                better user experience.
              </p>
            </div>
            <a className="learn-more-link" href="#">
              Learn more
            </a>
          </div>
          <div className="offer">
            <div>
              {" "}
              <h4>UI/UX Implementation: Manual Coding</h4>
              <p className="description">
                Convert Figma, XD, or Sketch designs into pixel-perfect,
                interactive interfaces.
              </p>
            </div>
            <a className="learn-more-link" href="#">
              Learn more
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
