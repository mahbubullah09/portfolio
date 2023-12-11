import green from "./assets/green.jpg";
import ph from "./assets/ph.png";
import { FaGraduationCap } from "react-icons/fa6";
const Education = () => {
  return (
    <div className=" bg-slate-200 p-8">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-center flex items-center justify-center gap-2">
          <FaGraduationCap /> My <span className="text-[#57059e]">Education</span>
        </h2>
        <p className="font-medium text-lg my-1">
          Education is not the learning of facts, but the training of the mind
          to think.
        </p>
      </div>

      <div>
        <div className="flex flex-col md:flex-row my-8 gap-6 bg-white p-2 md:p-4 rounded-xl max-w-4xl mx-auto hover:shadow-[#00000033] hover:shadow-xl ">
          <div>
            <img className="w-60 mx-auto md:mx-0 " src={green} alt="" />
          </div>
          <div className="space-y-3">
            <h2 className="text-[#012970] text-2xl font-bold">
              Bachelor in Computer Science and Engineering
            </h2>
            <h2 className="text-lg font-semibold">
              Green University of Bangladesh
            </h2>
            <h2 className="text-xl font-semibold text-[#226d00] ">
              2021-2025 | Pursuing
            </h2>
          </div>
        </div>
        <div className="flex flex-col md:flex-row my-8 gap-6 bg-white p-2 md:p-4 rounded-xl max-w-4xl mx-auto hover:shadow-[#00000033] hover:shadow-xl ">
          <div>
            <img className="w-60 mx-auto md:mx-0 " src={ph} alt="" />
          </div>
          <div className="space-y-3">
            <h2 className="text-[#012970] text-2xl font-bold">
              Complete Web Development Course
            </h2>
            <h2 className="text-lg font-semibold">Programming Hero</h2>
            <h2 className="text-xl font-semibold text-[#226d00] ">
              July 2023-December 2023{" "}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
