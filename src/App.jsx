import Home from "./Home";
import Navbar from "./Nav";


function App() {
  return (
    <div>
      <div className="shadow-lg">
        <Navbar />
      </div>
      <div id="home">
        <Home/>

      </div>
    </div>
  );
}

export default App;
