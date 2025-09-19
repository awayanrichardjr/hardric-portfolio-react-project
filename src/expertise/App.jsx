import "./App.css";

function App() {
  return (
    <>
      <section className="expertise" id="expertise">
        <h1 className="">What I offer.</h1>
        {/**
         *
         *
         *
         *
         * */}
        <div className="container">
          <div className="offer">
            <div>
              <h5>
                <b>01</b> Responsive Website Development
              </h5>
              <p className="description">
                Mobile-first, cross-browser compatible websites.
              </p>
            </div>
          </div>
          <div className="offer">
            <div>
              <h5>
                <b>02</b> Custom UI/UX Implementation
              </h5>
              <p className="description">
                Translating design mockups (Figma, Adobe XD, Sketch) into
                functional interfaces.
              </p>
            </div>
          </div>
          <div className="offer">
            <div>
              <h5>
                <b>03</b> Interactive Web Applications
              </h5>
              <p className="description">
                Using React, Vue, Angular, or vanilla JS for dynamic
                experiences.
              </p>
            </div>
          </div>
          <div className="offer">
            <div>
              <h5>
                <b>04</b> Single Page Applications (SPA)
              </h5>
              <p className="description">
                Seamless navigation with modern frameworks.
              </p>
            </div>
          </div>
          <div className="offer">
            <div>
              <h5>
                <b>05</b> Landing Pages & Portfolios
              </h5>
              <p className="description">
                High-converting, fast-loading, visually appealing websites.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
