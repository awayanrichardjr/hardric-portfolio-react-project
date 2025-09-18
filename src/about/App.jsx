import "./App.css";
import "./root.css";
import profilePic from "../assets/img/me.jpeg";
import github from "../assets/cloud/github.svg";
import AboutMe from "./about me/App";
import Certificate from "./certificate/App";
import Experience from "./experience/App";
import Project from "./project/App";

function showAboutMe() {
  document.getElementById("experience").style.display = "none";
  document.getElementById("certificate").style.display = "none";
  document.getElementById("project").style.display = "none";
  document.getElementById("about-me").style.display = "block";
}
function showExperiences() {
  document.getElementById("experience").style.display = "block";
  document.getElementById("certificate").style.display = "none";
  document.getElementById("project").style.display = "none";
  document.getElementById("about-me").style.display = "none";
}
function showCertificates() {
  document.getElementById("experience").style.display = "none";
  document.getElementById("certificate").style.display = "block";
  document.getElementById("project").style.display = "none";
  document.getElementById("about-me").style.display = "none";
}
function showProjects() {
  document.getElementById("experience").style.display = "none";
  document.getElementById("certificate").style.display = "none";
  document.getElementById("project").style.display = "block";
  document.getElementById("about-me").style.display = "none";
}

function App() {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <img
            className="about-profile"
            src={profilePic}
            alt="profile picture"
          />
          <a href="https://github.com/awayanrichardjr" target="_blank">
            <img title="Github profile" src={github} alt="github" />
          </a>
        </div>
        {/**
         *
         *
         *
         *
         * */}
        <div className="container">
          <AboutMe />
          <Experience />
          <Certificate />
          <Project />
          <section className="buttons">
            <button onClick={showAboutMe}>Description</button>
            <button onClick={showExperiences}>Experiences</button>
            <button onClick={showCertificates}>Certificates</button>
            <button onClick={showProjects}>Projects</button>
          </section>
        </div>
      </section>
    </>
  );
}

export default App;
