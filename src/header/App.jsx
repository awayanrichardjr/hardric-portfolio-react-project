import "./App.css";
import profilePic from "../assets/img/me.jpg";

function App() {
  return (
    <>
      <header className="header" id="home">
        <div className="container">
          <h1>Hi, I am Richard.</h1>
          <h1>Frontend Developer</h1>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            incidunt!
          </p>
          <br />
          {/**
           *
           *
           *
           * buttons
           */}
          <div className="buttons">
            <button>
              <a href="#about">About me</a>
            </button>
            <button>
              <a href="#">
                <span className="material-symbols-rounded">download</span>
                <p>Download CV</p>
              </a>
            </button>
          </div>
        </div>
        <div className="container">
          <img src={profilePic} alt="profile picture" />
        </div>
      </header>
    </>
  );
}

export default App;
