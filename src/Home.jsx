import pic from "./assets/mahbub.png";
import { FaArrowAltCircleDown } from "react-icons/fa";

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-around  items-center  my-32  ">
        <div className="space-y-4">
          <h2 className="text-6xl font-bold text-[#2a2d74] ">Hello there,</h2>
          <h2 className="text-6xl font-bold text-[#2a2d74] ">
            I'm <span className="text-[#ff7b00]">Mahbubullah</span>
          </h2>
          <h4 className="text-4xl font-bold text-[#940808] ">Web developer</h4>
          <div>
            <button className="bg-[#011aff] rounded-full py-2 px-4 text-white text-lg font-medium">
            <span className="flex items-center gap-2">  About me <FaArrowAltCircleDown/></span>
            </button>
          </div>
        </div>
        <div className="w-1/3">
          <img className="" src={pic} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
