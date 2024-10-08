import { FaLocationDot, FaPerson, FaPhone } from "react-icons/fa6";
import { IoMdDownload } from "react-icons/io";
import image from "./assets/Mahbub full.jpg";
import { IoDocumentText, IoPerson } from "react-icons/io5";

const About = () => {
  const driveFileId = "1nf3wTKEgfsaDTuyNyoUGpopKiX-kij7b";
  const resumeLink = `https://drive.google.com/uc?export=download&id=${driveFileId}`;

  const handleDownload = () => {
    window.location.href = resumeLink;
  };
  return (
    <div className="max-w-4xl mx-auto my-16">
      <div className="text-center mb-8 flex items-center justify-center text-4xl font-extrabold">
        <IoPerson />
        <h2>
          About <span className="text-[#57059e]">Me</span>
        </h2>
      </div>
      <div className="flex flex-col md:flex-row gap-10  items-center justify-center ">
        <div className=" w-full md:w-1/3 rounded-3xl flex-1">
          <img
            className="rounded-[5rem] w-full p-4   shadow-2xl"
            src={image}
            alt=""
          />
        </div>

        <div className="space-y-4 flex-1 mx-2">
          <h2 className="text-4xl font-bold">I'm Mahbubullah</h2>
          <p className="text-lg font-bold text-[#2a2d74]">
            MERN-Stack Developer
          </p>
          <p className="text-lg font-semibold">
            I'm a MERN-Stack developer from Bangladesh. I'm Currently studying
            BSc in CSE at Green University of Bangladrsh. I'm very passionate
            about improving my coding skills & developing websites. I've
            developed so many projects recently using the latest web programming technologies.          </p>
          <div className="flex items-center text-lg font-normal gap-2">
            <FaLocationDot /> Dhaka, Bangladesh
          </div>
          <div className="flex items-center text-lg font-normal gap-2">
            <FaPhone /> +8801909598003
          </div>
          <div>
            <button
              onClick={handleDownload}
              className="text-white text-xl bg-[#011aff] px-4 py-2 rounded-full"
            >
              <span className="flex items-center gap-2">
                Resume <IoMdDownload />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
