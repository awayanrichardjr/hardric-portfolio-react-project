import "./App.css";
import "./root.css";
import profilePic from "../assets/img/me.jpg";

const details = {
  name: "Richard",
  profession: "Frontend Developer",
  file_link:
    "https://drive.google.com/uc?export=download&id=1Eq5gi_scvnn4po6PWAlnaXPLu-1mq17Q",
};

const cln = {
  croissant: "croissant-one-regular",
  span_icon: "material-symbols-rounded",
};

function App() {
  return (
    <>
      <header className="header" id="home">
        <div className="container">
          <h1 className={cln.croissant}>Hi, I am {details.name}.</h1>
          <h1 className={cln.croissant}>{details.profession}</h1>
          <p className="description">
            I build responsive and user-friendly websites.
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
              <a href={details.file_link} download>
                <span className={cln.span_icon}>download</span>
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
