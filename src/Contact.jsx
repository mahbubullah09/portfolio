import {
  FaArrowAltCircleDown,
  FaGithub,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";
import { FaHeadset } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="bg-[#e5ecfb] w-full p-8">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-center flex items-center justify-center gap-2">
          <FaHeadset /> Get In{" "}
          <span className="text-[#57059e]">Touch</span>
        </h2>
      </div>
     
        <div className="flex  justify-center items-center gap-1 md:gap-8 ">
          <div className="flex flex-col gap-3 ">
            <div className="cursor-pointer text-[#00aced] bg-black  text-base md:text-2xl p-3 md:p-4 w-10 md:w-14 rounded-full">
              <MdEmail />
            </div>
            <div className="cursor-pointer text-[#00aced]  bg-black  text-base md:text-2xl p-3 md:p-4 w-10 md:w-14 rounded-full">
              <FaLinkedin />
            </div>
            <div className="cursor-pointer text-[#00aced]  bg-black  text-base md:text-2xl p-3 md:p-4 w-10 md:w-14 rounded-full">
              <FaGithub />
            </div>
            <div className="cursor-pointer text-[#00aced]  bg-black  text-base md:text-2xl p-3 md:p-4 w-10 md:w-14 rounded-full">
              <FaWhatsapp />
            </div>
            <div className="cursor-pointer text-[#00aced]  bg-black  text-base md:text-2xl p-3 md:p-4 w-10 md:w-14 rounded-full">
              <FaTelegram />
            </div>
          </div>

          <div className=" mx-1  p-4 my-4 md:px-12 max-w-xl   bg-white   rounded-2xl shadow-2xl">
            <div>
              <input
                className="w-full  bg-[#e5ecfb]  text-gray-900 mt-2 p-3 rounded-lg border border-black focus:border-[#57059e] focus:outline-[#57059e] focus:shadow-outline"
                type="text"
                placeholder=" Name"
                required
              />
              <input
                className="w-full bg-[#e5ecfb]  text-gray-900 mt-2 p-3 rounded-lg border border-black focus:border-[#57059e] focus:outline-[#57059e] focus:shadow-outline"
                type="number"
                placeholder="Phone"
                required
              />

              <input
                className="w-full bg-[#e5ecfb]  text-gray-900 mt-2 p-3 rounded-lg border border-black focus:border-[#57059e] focus:outline-[#57059e]  focus:shadow-outline"
                type="email"
                placeholder="Email"
                required
              />
              <div className="my-4">
                <textarea
                  placeholder="Message"
                  required
                  className="w-full h-32 bg-[#e5ecfb]  text-gray-900 mt-2 p-3 rounded-lg border border-black focus:border-[#57059e] focus:outline-[#57059e] focus:shadow-outline"
                ></textarea>
              </div>
              <div className="my-2 w md:w-1/3">
                <button
                  className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                      border border-black focus:border-[#57059e] focus:outline-[#57059e] focus:shadow-outline"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
     
      </div>
    </div>
  );
};

export default Contact;
