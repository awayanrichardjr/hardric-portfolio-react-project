import "./App.css";

function showContent() {
  const spanIcon = document.getElementById("span-icon").innerText;
  const content = document.getElementById("content");
  const span_icon = document.getElementById("span-icon");
  if (spanIcon === "menu") {
    content.style.width = "127.24px";
    span_icon.innerText = "close";
    console.log(spanIcon);
  } else {
    content.style.width = "0";
    span_icon.innerText = "menu";
    console.log(spanIcon);
  }
}

function App() {
  return (
    <>
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
            <a href="#project">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </div>
      </ul>
    </>
  );
}

export default App;
