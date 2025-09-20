import "./App.css";
import facebook from "./assets/facebook.svg";
import github from "./assets/github.svg";
import instagram from "./assets/instagram.svg";

const cln = {
  span_icon: "material-symbols-rounded",
};
const link = {
  location:
    "https://www.google.com/maps?ll=7.073599,125.611055&z=14&t=m&hl=en&gl=PH&mapclient=embed&q=8000+Davao+del+Sur+Poblacion+District,+Davao+City",
  mail: "mailto:awayanrichardjr@gmail.com?cc=richarddumaelawayanjr@gmail.com",
  tel: "tel:+639065876602",
  sms: "sms:+639065876602",
  map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15837.803835093697!2d125.60075474478859!3d7.073599136864985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f96d9e40da7c65%3A0xe94c55fbd7b32544!2sPoblacion%20District%2C%20Davao%20City%2C%208000%20Davao%20del%20Sur!5e0!3m2!1sen!2sph!4v1757508749963!5m2!1sen!2sph",
  github: "https://github.com/awayanrichardjr",
  fb: "https://www.facebook.com/awayanrichardjr",
  ig: "https://www.instagram.com/awayanrichardjr/",
};

function App() {
  return (
    <>
      <section className="contact" id="contact">
        <h1 className="">Get in touch.</h1>
        <div className="content">
          <div className="container">
            <ul className="contact-details">
              <li>
                <a href={link.location} target="_blank">
                  <span className={cln.span_icon}>location_on</span>
                  <address>Davao City, 8000, Philippines</address>
                </a>
              </li>
              <li>
                <a href={link.mail}>
                  <span className={cln.span_icon}>mail</span>
                  <address>awayanrichardjr@gmail.com</address>
                </a>
              </li>
              <li>
                <a href={link.tel}>
                  <span className={cln.span_icon}>call</span>
                  <address>Call: +63906-587-6602</address>
                </a>
              </li>
              <li>
                <a href={link.sms}>
                  <span className={cln.span_icon}>sms</span>
                  <address>Text: +63906-587-6602</address>
                </a>
              </li>
            </ul>
            {/**
             *
             *
             *
             *
             *
             * */}
            <ul className="social-links">
              <li>
                <a href={link.github} target="_blank">
                  <img src={github} alt="Github" />
                </a>
              </li>
              <li>
                <a href={link.fb} target="_blank">
                  <img src={facebook} alt="Facebook" />
                </a>
              </li>
              <li>
                <a href={link.ig} target="_blank">
                  <img src={instagram} alt="Instagram" />
                </a>
              </li>
            </ul>
          </div>
          <div className="container">
            <iframe
              src={link.map}
              className="map"
              // allowfullscreen=""
              loading="lazy"
              // referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
