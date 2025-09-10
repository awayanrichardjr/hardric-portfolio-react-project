import "./App.css";

function App() {
  return (
    <>
      <section className="contact" id="contact">
        <h1 className="">Get in touch.</h1>
        <div className="content">
          <div className="container">
            <ul className="contact-details">
              <li>
                <a
                  href="https://www.google.com/maps?ll=7.073599,125.611055&z=14&t=m&hl=en&gl=PH&mapclient=embed&q=8000+Davao+del+Sur+Poblacion+District,+Davao+City"
                  target="_blank"
                >
                  <span className="material-symbols-rounded">location_on</span>
                  <address>Davao City, 8000, Philippines</address>
                </a>
              </li>
              <li>
                <a href="mailto:awayanrichardjr@gmail.com?cc=richarddumaelawayanjr@gmail.com">
                  <span className="material-symbols-rounded">mail</span>
                  <address>awayanrichardjr@gmail.com</address>
                </a>
              </li>
              <li>
                <a href="tell:+639065876602">
                  <span className="material-symbols-rounded">call</span>
                  <address>Call: +63906-587-6602</address>
                </a>
              </li>
              <li>
                <a href="sms:+639065876602">
                  <span className="material-symbols-rounded">sms</span>
                  <address>Text: +63906-587-6602</address>
                </a>
              </li>
            </ul>
          </div>
          <div className="container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15837.803835093697!2d125.60075474478859!3d7.073599136864985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f96d9e40da7c65%3A0xe94c55fbd7b32544!2sPoblacion%20District%2C%20Davao%20City%2C%208000%20Davao%20del%20Sur!5e0!3m2!1sen!2sph!4v1757508749963!5m2!1sen!2sph"
              className="map"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
