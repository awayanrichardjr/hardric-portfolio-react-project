import "./App.css";

import Logo from "./logo/App.jsx";
import Links from "./links/App.jsx";
import MenuLinks from "./menu links/App.jsx";

function App() {
  return (
    <>
      <nav className="navigation">
        <Logo />
        <Links />
        <MenuLinks />
      </nav>
    </>
  );
}

export default App;
