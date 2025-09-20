import "./App.css";
import "./root.css";
import profilePic from "./img/me.jpeg";

function App() {
  return (
    <>
      <div className="animated-card-profile">
        <div className="card-box tl"></div>
        <div className="card-box t"></div>
        <div className="card-box tr"></div>
        <div className="card-box l"></div>
        <div className="card-box c"></div>
        <div className="card-box r"></div>
        <div className="card-box bl"></div>
        <div className="card-box b"></div>
        <div className="card-box br"></div>
        <img className="about-profile" src={profilePic} alt="profile picture" />
      </div>
    </>
  );
}

export default App;
