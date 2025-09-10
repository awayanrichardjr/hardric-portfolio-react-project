import "./App.css";

function showContent() {
  const spanIcon = document.getElementById("span-icon").innerText;
  if (spanIcon === "menu") {
    document.getElementById("content").style.display = "block";
    document.getElementById("span-icon").innerText = "close";
    console.log(spanIcon);
  } else {
    document.getElementById("content").style.display = "none";
    document.getElementById("span-icon").innerText = "menu";
    console.log(spanIcon);
  }
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
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#expertise">Expertise</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        {/**
         *
         *
         *
         *
         * menu links
         * */}
        <ul className="menu-links">
          <li className="dropdown" id="dropdown" onClick={showContent}>
            <span className="material-symbols-rounded" id="span-icon">
              menu
            </span>
          </li>
          <div className="content" id="content">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#expertise">Expertise</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
}

export default App;
