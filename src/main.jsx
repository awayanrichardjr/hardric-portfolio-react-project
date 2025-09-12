import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./style/global.css";
import "./style/root.css";
import "./style/font.css";

import Nav from "./navigation/App";
import Header from "./header/App";
import About from "./about/App";
import Skills from "./skills/App";
import Expertise from "./expertise/App";
import Contact from "./contact/App";
import Footer from "./footer/App";

const view = (
  <StrictMode>
    <Nav />
    <Header />
    <About />
    <Skills />
    <Expertise />
    <Contact />
    <Footer />
  </StrictMode>
);

createRoot(document.getElementById("root")).render(view);
