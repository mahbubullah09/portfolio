import { Toaster } from "react-hot-toast";
import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Extra from "./Extra";
import Home from "./Home";
import Navbar from "./Nav";
import ParticleBg from "./ParticleBg";
import Projects from "./Projects";
import Skills from "./Skills";

function App() {
  return (
    <div>
      <div className="shadow-lg">
        <Navbar />
      </div>
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About/>
      </div>
      <div id="skill">
        <Skills/>
      </div>
      <div  id="edu" >
        <Education/>
      </div>
      <div  id="project">
        <Projects/>
      </div>
      <div  id="extra">
        <Extra/>
      </div>
      <div  id="contact">
        <Contact/>
      </div>
      <Toaster/>
    </div>
  );
}

export default App;
