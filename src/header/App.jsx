import "./App.css";
import "./root.css";
import profilePic from "../assets/img/me.jpg";

function App() {
  return (
    <>
      <header className="header" id="home">
        <div className="container">
          <h1 className="croissant-one-regular">Hi, I am Richard.</h1>
          <h1 className="croissant-one-regular">Frontend Developer</h1>
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
            <button className="about-btn">
              <a href="#about">
                <p>About me</p>
              </a>
            </button>
            <button className="download-btn">
              <a
                href="https://drive.google.com/uc?export=download&id=1Eq5gi_scvnn4po6PWAlnaXPLu-1mq17Q"
                download
              >
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
