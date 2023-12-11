import About from "./About";
import Home from "./Home";
import Navbar from "./Nav";
import ParticleBg from "./ParticleBg";

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
    </div>
  );
}

export default App;
