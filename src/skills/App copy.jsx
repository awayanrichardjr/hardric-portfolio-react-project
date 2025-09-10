import "./App.css";

// cloud
import amazon from "../assets/cloud/amazon.svg";
import ansible from "../assets/cloud/ansible.svg";
import azure from "../assets/cloud/azure.svg";
import bitbucket from "../assets/cloud/bitbucket.svg";
import bitbucketV2 from "../assets/cloud/bitbucketV2.svg";
import docker from "../assets/cloud/docker.svg";
import firebase from "../assets/cloud/firebase.svg";
import gcloud from "../assets/cloud/gcloud.svg";
import github from "../assets/cloud/github.svg";
import gitlab from "../assets/cloud/gitlab.svg";
import heroku from "../assets/cloud/heroku.svg";
import terraform from "../assets/cloud/terraform.png";

// databases
import cassandra from "../assets/databases/cassandra.svg";
import mongodb from "../assets/databases/mongodb.svg";
import mysql from "../assets/databases/mysql.svg";
import oracle from "../assets/databases/oracle.svg";
import postgresql from "../assets/databases/postgresql.svg";
import redis from "../assets/databases/redis.svg";

// frameworks
import android from "../assets/frameworks/android.svg";
import angular from "../assets/frameworks/angular.svg";
import boostrap from "../assets/frameworks/boostrap.svg";
import codeigniter from "../assets/frameworks/codeigniter.svg";
import deno from "../assets/frameworks/deno.svg";
import django from "../assets/frameworks/django.svg";
import flask from "../assets/frameworks/flask.svg";
import jquery from "../assets/frameworks/jquery.svg";
import laravel from "../assets/frameworks/laravel.svg";
import materialize from "../assets/frameworks/materialize.svg";
import nodejs from "../assets/frameworks/nodejs.svg";
import rails from "../assets/frameworks/rails.svg";
import react from "../assets/frameworks/react.svg";
import redux from "../assets/frameworks/redux.svg";
import spring from "../assets/frameworks/spring.svg";
import vuejs from "../assets/frameworks/vuejs.svg";

// ides
import androidStudio from "../assets/ides/android-studio.svg";
import clion from "../assets/ides/clion.png";
import datagrip from "../assets/ides/datagrip.svg";
import eclipsePNG from "../assets/ides/eclipse.png";
import eclipseSVG from "../assets/ides/eclipse.svg";
import goland from "../assets/ides/goland.png";
import intellij from "../assets/ides/intellij.svg";
import phpstorm from "../assets/ides/phpstorm.svg";
import pycharm from "../assets/ides/pycharm.svg";
import rider from "../assets/ides/rider.png";
import rubymine from "../assets/ides/rubymine.png";

// img
import me from "../assets/img/me/me.jpg";
// import me1 from "../assets/img/me/me1.jpeg";

// others
import css from "../assets/others/css.svg";
import git from "../assets/others/git.svg";
import gitkraken from "../assets/others/gitkraken.svg";
import html from "../assets/others/html.svg";
import json from "../assets/others/json.svg";
import npm from "../assets/others/npm.svg";

// programming languages
import bash from "../assets/programming languages/bash.svg";
import c from "../assets/programming languages/c.svg";
import csharp from "../assets/programming languages/c sharp.svg";
import cplusplus from "../assets/programming languages/c++.svg";
import dart from "../assets/programming languages/dart.svg";
import go from "../assets/programming languages/go.svg";
import haskell from "../assets/programming languages/haskell.svg";
import java from "../assets/programming languages/java.svg";
import javascript from "../assets/programming languages/javascript.svg";
import kotlin from "../assets/programming languages/kotlin.svg";
import php from "../assets/programming languages/php.png";
import python from "../assets/programming languages/python.svg";
import ruby from "../assets/programming languages/ruby.svg";
import rust from "../assets/programming languages/rust.svg";
import typescript from "../assets/programming languages/typescript.svg";

//social icons

//text editors
import atom from "../assets/text editors/atom.svg";
import notepad from "../assets/text editors/notepad++.png";
import sublime from "../assets/text editors/sublime.svg";
import vscode from "../assets/text editors/vscode.svg";

function App() {
  return (
    <>
      {/* <Importsss /> */}
      <section className="about" id="about">
        {/* <h5>About me</h5> */}
        <div className="profile-name">
          <img src={me} alt="me" className="profile" />
          <div className="name-description">
            <h5>Richard Dumael Awayan Jr.</h5>
            <p>Frontend Developer</p>
          </div>
        </div>
        <div className="skills">
          <ul className="others">
            <li>
              <img src={css} alt="css" />
            </li>
            <li>
              <img src={git} alt="git" />
            </li>
            {/* <li>
              <img src={gitkraken} alt="gitkraken" />
            </li> */}
            <li>
              <img src={html} alt="html" />
            </li>
            <li>
              <img src={json} alt="json" />
            </li>
            <li>
              <img src={npm} alt="npm" />
            </li>
          </ul>

          <ul className="frameworks">
            {/* <li>
              <img src={android} alt="android" />
            </li> */}
            <li>
              <img src={angular} alt="angular" />
            </li>
            <li>
              <img src={boostrap} alt="boostrap" />
            </li>
            {/* <li>
              <img src={codeigniter} alt="codeigniter" />
            </li> */}
            {/* <li>
              <img src={deno} alt="deno" />
            </li> */}
            <li>
              <img src={django} alt="django" />
            </li>
            {/* <li>
              <img src={flask} alt="flask" />
            </li> */}
            <li>
              <img src={jquery} alt="jquery" />
            </li>
            <li>
              <img src={laravel} alt="laravel" />
            </li>
            {/* <li>
              <img src={materialize} alt="materialize" />
            </li> */}
            <li>
              <img src={nodejs} alt="nodejs" />
            </li>
            {/* <li>
              <img src={rails} alt="rails" />
            </li> */}
            <li>
              <img src={react} alt="react" />
            </li>
            {/* <li>
              <img src={redux} alt="redux" />
            </li> */}
            {/* <li>
              <img src={spring} alt="spring" />
            </li> */}
            <li>
              <img src={vuejs} alt="vuejs" />
            </li>
          </ul>

          <ul className="cloud">
            {/* <li>
              <img src={amazon} alt="amazon" />
            </li>
            <li>
              <img src={ansible} alt="ansible" />
            </li>
            <li>
              <img src={azure} alt="azure" />
            </li>
            <li>
              <img src={bitbucket} alt="bitbucket" />
            </li>
            <li>
              <img src={bitbucketV2} alt="V2" />
            </li>
            <li>
              <img src={docker} alt="docker" />
            </li>
            <li>
              <img src={firebase} alt="firebase" />
            </li> */}
            <li>
              <img src={gcloud} alt="gcloud" />
            </li>
            <li>
              <img src={github} alt="github" />
            </li>
            <li>
              <img src={gitlab} alt="gitlab" />
            </li>
            {/* <li>
              <img src={heroku} alt="heroku" />
            </li>
            <li>
              <img src={terraform} alt="terraform" />
            </li> */}
          </ul>

          <ul className="database">
            {/* <li>
              <img src={cassandra} alt="cassandra" />
            </li>
            <li>
              <img src={mongodb} alt="mongodb" />
            </li> */}
            <li>
              <img src={mysql} alt="mysql" />
            </li>
            {/* <li>
              <img src={oracle} alt="oracle" />
            </li>
            <li>
              <img src={postgresql} alt="postgresql" />
            </li>
            <li>
              <img src={redis} alt="redis" />
            </li> */}
          </ul>

          {/* <ul className="ides">
            <li>
              <img src={androidStudio} alt="Studio" />
            </li>
            <li>
              <img src={clion} alt="clion" />
            </li>
            <li>
              <img src={datagrip} alt="datagrip" />
            </li>
            <li>
              <img src={eclipsePNG} alt="PNG" />
            </li>
            <li>
              <img src={eclipseSVG} alt="SVG" />
            </li>
            <li>
              <img src={goland} alt="goland" />
            </li>
            <li>
              <img src={intellij} alt="intellij" />
            </li>
            <li>
              <img src={phpstorm} alt="phpstorm" />
            </li>
            <li>
              <img src={pycharm} alt="pycharm" />
            </li>
            <li>
              <img src={rider} alt="rider" />
            </li>
            <li>
              <img src={rubymine} alt="rubymine" />
            </li>
          </ul> */}

          <ul className="programming-languages">
            {/* <li>
              <img src={bash} alt="bash" />
            </li>
            <li>
              <img src={c} alt="c" />
            </li>
            <li>
              <img src={csharp} alt="csharp" />
            </li>
            <li>
              <img src={cplusplus} alt="cplusplus" />
            </li>
            <li>
              <img src={dart} alt="dart" />
            </li>
            <li>
              <img src={go} alt="go" />
            </li>
            <li>
              <img src={haskell} alt="haskell" />
            </li> */}
            <li>
              <img src={java} alt="java" />
            </li>
            <li>
              <img src={javascript} alt="javascript" />
            </li>
            {/* <li>
              <img src={kotlin} alt="kotlin" />
            </li> */}
            <li>
              <img src={php} alt="php" />
            </li>
            <li>
              <img src={python} alt="python" />
            </li>
            {/* <li>
              <img src={ruby} alt="ruby" />
            </li>
            <li>
              <img src={rust} alt="rust" />
            </li> */}
            <li>
              <img src={typescript} alt="typescript" />
            </li>
          </ul>

          <ul className="text-editors">
            {/* <li>
              <img src={atom} alt="atom" />
            </li>
            <li>
              <img src={notepad} alt="notepad" />
            </li>
            <li>
              <img src={sublime} alt="sublime" />
            </li> */}
            <li>
              <img src={vscode} alt="vscode" />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default App;
