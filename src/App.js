import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Foot from "./components/foot/Foot";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Projects />
      <Contact />
      <Foot />
    </div>
  );
}

export default App;
