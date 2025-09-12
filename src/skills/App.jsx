import "./App.css";

import github from "../assets/cloud/github.svg";
import mysql from "../assets/databases/mysql.svg";
import jquery from "../assets/frameworks/jquery.svg";
import laravel from "../assets/frameworks/laravel.svg";
import nodejs from "../assets/frameworks/nodejs.svg";
import react from "../assets/frameworks/react.svg";
import css from "../assets/others/css.svg";
import git from "../assets/others/git.svg";
import html from "../assets/others/html.svg";
import npm from "../assets/others/npm.svg";
import javascript from "../assets/programming languages/javascript.svg";
import php from "../assets/programming languages/php.png";
import vscode from "../assets/text editors/vscode.svg";

function App() {
  return (
    <>
      <section className="skills" id="skills">
        <h3>
          Skilled in modern frameworks, tools, and web development practices.
        </h3>

        <ul className="skills-list">
          <li>
            <img title="html" src={html} alt="html" />
            <p>html</p>
          </li>
          <li>
            <img title="css" src={css} alt="css" />
            <p>css</p>
          </li>
          <li>
            <img title="javascript" src={javascript} alt="javascript" />
            <p>javascript</p>
          </li>
          <li>
            <img title="react" src={react} alt="react" />
            <p>react</p>
          </li>
          <li>
            <img title="npm" src={npm} alt="npm" />
            <p>npm</p>
          </li>
          <li>
            <img title="git" src={git} alt="git" />
            <p>git</p>
          </li>
          <li>
            <img title="github" src={github} alt="github" />
            <p>github</p>
          </li>
          <li>
            <img title="php" src={php} alt="php" />
            <p>php</p>
          </li>
          <li>
            <img title="jquery" src={jquery} alt="jquery" />
            <p>jquery</p>
          </li>
          <li>
            <img title="laravel" src={laravel} alt="laravel" />
            <p>laravel</p>
          </li>
          <li>
            <img title="nodejs" src={nodejs} alt="nodejs" />
            <p>nodejs</p>
          </li>
          <li>
            <img title="mysql" src={mysql} alt="mysql" />
            <p>mysql</p>
          </li>
          <li>
            <img title="vscode" src={vscode} alt="vscode" />
            <p>vscode</p>
          </li>
        </ul>
        {/* <p className="description">
          Skilled in modern web development, utilizing frameworks, libraries,
          and tools to create responsive, user-friendly, and efficient
          applications.
        </p> */}
      </section>
    </>
  );
}

export default App;
