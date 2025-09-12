import "./App.css";
import "./root.css";
import profilePic from "../assets/img/me.jpeg";

function App() {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <img src={profilePic} alt="profile picture" />
        </div>
        <div className="container">
          <h4 className="croissant-one-regular">Richard D. Awayan Jr.</h4>
          {/* <br /> */}
          <p className="description">
            <q>
              I am a Frontend Developer passionate about creating clean,
              responsive, and user-friendly websites. I specialize in building
              portfolio websites, browsing platforms, and modern responsive
              layouts that work seamlessly across devices. Currently, I focus on
              developing website designs provided by designers, turning static
              visuals into fully functional and interactive web experiences.
              With a strong emphasis on detail, performance, and usability, I
              aim to deliver websites that are both visually appealing and
              highly effective.
            </q>
          </p>
          <section className="buttons">
            <button>
              <a href="#">Experiences</a>
            </button>
            <button>
              <a href="#">Certificates</a>
            </button>
            <button>
              <a href="#">Projects</a>
            </button>
          </section>
        </div>
      </section>
    </>
  );
}

export default App;
