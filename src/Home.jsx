import { TypeAnimation } from "react-type-animation";
import pic from "./assets/mahbub.png";
import { FaArrowAltCircleDown, FaGithub, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import ParticleBg from "./ParticleBg";

const Home = () => {
  return (
    
    <div className="bg-slate-100">
          
      
      <div className="max-w-6xl mx-auto  ">
        <div className="flex flex-col-reverse md:flex-row justify-between  items-center mx-8  py-32  gap-8 md:gap-4 ">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-bold text-[#2a2d74] ">Hello there,</h2>
            <h2 className="text-4xl md:text-6xl font-bold text-[#2a2d74] ">
              I'm <span className="text-[#ff7b00]">Mahbubullah</span>
            </h2>
            <div className="text-3xl  font-bold text-[#940808] ">
              <TypeAnimation
                sequence={[
                  "Web developer",
                  1000,
                  "Front-End  developer",
                  1000,
                  "React developer",
                  1000,
                  "MERN-Stack developer",
                  1000,
                ]}
                speed={50}
                style={{ fontSize: "2rem md:3rem" }}
                repeat={Infinity}
              />
            </div>

            <div>
              <button className="bg-[#011aff] rounded-full py-3 px-6 text-white text-xl font-medium">
                <span className="flex items-center gap-2">
                  {" "}
                  About me <FaArrowAltCircleDown />
                </span>
              </button>
            </div>
            <div className="flex flex-wrap gap-3">
            <a href="mailto:mahbubullahpathan@gmail.com">
            <div className="cursor-pointer text-[#00aced] text-2xl bg-black px-4 py-4 w-14 rounded-full">
                <MdEmail />
              </div>
            </a>
             <a href="www.linkedin.com/in/mahbubullah09">
             <div className="cursor-pointer text-[#00aced] text-2xl bg-black px-4 py-4 w-14 rounded-full">
                <FaLinkedin />
              </div>
             </a>
             <a href="https://github.com/mahbubullah09">
             <div className="cursor-pointer text-[#00aced] text-2xl bg-black px-4 py-4 w-14 rounded-full">
                <FaGithub/>
              </div>
             </a>
              <a href="https://wa.me/01909598003">
              <div className="cursor-pointer text-[#00aced] text-2xl bg-black px-4 py-4 w-14 rounded-full">
                <FaWhatsapp />
              </div>
              </a>
              <a href="https://t.me//Mahbub6">
              <div className="cursor-pointer text-[#00aced] text-2xl bg-black px-4 py-4 w-14 rounded-full">
              <FaTelegram />
              </div>
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <img className="" src={pic} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
