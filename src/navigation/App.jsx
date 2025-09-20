import "./App.css";
import "./root.css";

function showContent() {
  const span_value = document.getElementById("span-icon").innerText;
  const span_icon = document.getElementById("span-icon");
  const menu_links = document.getElementById("content");
  if (span_value === "menu") {
    span_icon.innerText = "close";
    menu_links.style.display = "block";
  } else {
    span_icon.innerText = "menu";
    menu_links.style.display = "none";
  }
}

function showDefaultContent() {
  document.getElementById("default").style.display = "block";
  document.getElementById("experiences").style.display = "none";
  document.getElementById("certificates").style.display = "none";
  document.getElementById("projects").style.display = "none";
}

function showExpContent() {
  document.getElementById("default").style.display = "none";
  document.getElementById("experiences").style.display = "block";
  document.getElementById("certificates").style.display = "none";
  document.getElementById("projects").style.display = "none";
}
function showCertContent() {
  document.getElementById("default").style.display = "none";
  document.getElementById("experiences").style.display = "none";
  document.getElementById("certificates").style.display = "block";
  document.getElementById("projects").style.display = "none";
}
function showProjectsContent() {
  document.getElementById("default").style.display = "none";
  document.getElementById("experiences").style.display = "none";
  document.getElementById("certificates").style.display = "none";
  document.getElementById("projects").style.display = "block";
}

function App() {
  return (
    <>
      <nav className="navigation">
        <ul className="logo">
          <li>
            <a href="#home" className="croissant-one-regular">
              Hardric<b>.</b>
            </a>
          </li>
        </ul>
        <ul className="links">
          <li>
            <a href="#home">
              <p id="label">Home</p>
            </a>
          </li>
          <li>
            <a href="#about">
              <p id="label">About</p>
            </a>
            {/**
             *
             *
             *
             * */}
            <div className="nav-about-link-content">
              <ul>
                <li>
                  <a href="#about" onClick={showDefaultContent}>
                    Default
                  </a>
                </li>
                <li>
                  <a href="#about" onClick={showExpContent}>
                    Experiences
                  </a>
                </li>
                <li>
                  <a href="#about" onClick={showCertContent}>
                    Certificates
                  </a>
                </li>
                <li>
                  <a href="#about" onClick={showProjectsContent}>
                    Projects
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#skills">
              <p id="label">Skills</p>
            </a>
          </li>
          <li>
            <a href="#expertise">
              <p id="label">Expertise</p>
            </a>
          </li>
          <li>
            <a href="#contact">
              <p id="label">Contact</p>
            </a>
          </li>
        </ul>
        <ul className="menu-links" id="menu-links">
          <li className="dropdown" id="dropdown" onClick={showContent}>
            <span className="material-symbols-rounded" id="span-icon">
              menu
            </span>
          </li>
          <div className="content" id="content">
            <li>
              <a href="#home">
                <p id="label">Home</p>
              </a>
            </li>
            <li>
              <a href="#about">
                <p id="label">About</p>
              </a>
            </li>
            <li>
              <a href="#skills">
                <p id="label">Skills</p>
              </a>
            </li>
            <li>
              <a href="#expertise">
                <p id="label">Expertise</p>
              </a>
            </li>
            <li>
              <a href="#contact">
                <p id="label">Contact</p>
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
}

export default App;
