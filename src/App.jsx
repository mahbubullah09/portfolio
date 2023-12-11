import About from "./About";
import Education from "./Education";
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
      <div>
        <Skills/>
      </div>
      <div>
        <Education/>
      </div>
      <div>
        <Projects/>
      </div>
    </div>
  );
}

export default App;
