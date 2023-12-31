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
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zj7ygwh",
        "template_t3tliiq",
        form.current,
        "uwgZwaCagt4DvyygT"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success('Your message is saved ')
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="bg-[#e5ecfb] w-full p-8">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-center flex items-center justify-center gap-2">
          <FaHeadset /> Get In <span className="text-[#57059e]">Touch</span>
        </h2>
      </div>

      <div className="flex  justify-center items-center gap-1 md:gap-8 ">
        <div className="flex flex-col gap-3 ">
       <a href="mailto:mahbubullahpathan@gmail.com" target="_blank">
       <div className="cursor-pointer text-[#00aced] bg-black  text-base md:text-2xl p-3 md:p-4 w-10 md:w-14 rounded-full">
            <MdEmail />
          </div>
       </a>
         <a href="https://www.linkedin.com/in/mahbubullah09" target="_blank">
         <div className="cursor-pointer text-[#00aced]  bg-black  text-base md:text-2xl p-3 md:p-4 w-10 md:w-14 rounded-full">
            <FaLinkedin />
          </div>
         </a>
          <a href="https://github.com/mahbubullah09" target="_blank">
          <div className="cursor-pointer text-[#00aced]  bg-black  text-base md:text-2xl p-3 md:p-4 w-10 md:w-14 rounded-full">
            <FaGithub />
          </div>
          </a>
          <a href="https://wa.me/01909598003" target="_blank">
          <div className="cursor-pointer text-[#00aced]  bg-black  text-base md:text-2xl p-3 md:p-4 w-10 md:w-14 rounded-full">
            <FaWhatsapp />
          </div>
          </a>
          <a href="https://t.me//Mahbub6"  target="_blank">
          <div className="cursor-pointer text-[#00aced]  bg-black  text-base md:text-2xl p-3 md:p-4 w-10 md:w-14 rounded-full">
            <FaTelegram />
          </div>
          </a>
        </div>

        <div className=" mx-1  p-4 my-4 md:px-12 max-w-xl   bg-white   rounded-2xl shadow-2xl">
          <form ref={form} onSubmit={sendEmail}>
          <div>
            <input
              className="w-full  bg-[#e5ecfb]  text-gray-900 mt-2 p-3 rounded-lg border border-black focus:border-[#57059e] focus:outline-[#57059e] focus:shadow-outline"
              type="text"
              name="name"
              placeholder=" Name"
              required
            />
            <input
              className="w-full bg-[#e5ecfb]  text-gray-900 mt-2 p-3 rounded-lg border border-black focus:border-[#57059e] focus:outline-[#57059e] focus:shadow-outline"
              type="number"
              name="phone"
              placeholder="Phone"
              required
            />

            <input
              className="w-full bg-[#e5ecfb]  text-gray-900 mt-2 p-3 rounded-lg border border-black focus:border-[#57059e] focus:outline-[#57059e]  focus:shadow-outline"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <div className="my-4">
              <textarea
                placeholder="Message"
                required
                name="message"
                className="w-full h-32 bg-[#e5ecfb]  text-gray-900 mt-2 p-3 rounded-lg border border-black focus:border-[#57059e] focus:outline-[#57059e] focus:shadow-outline"
              ></textarea>
            </div>
            <div className="my-2 w md:w-1/3">
              <button type="submit" value="Send"
                className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                      border border-black focus:border-[#57059e] focus:outline-[#57059e] focus:shadow-outline"
              >
                Send Message
              </button>
            </div>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
