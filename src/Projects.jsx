import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { FaLaptopCode } from "react-icons/fa";
import { MdWorkspacePremium } from "react-icons/md";

const Projects = () => {
  const [projets, setProjects] = useState([]);
  const [details, setDetails] = useState(null);

  useEffect(() => {
    fetch("projects.json")
      .then((response) => response.json())

      .then((data) => setProjects(data));
  }, []);
  console.log(projets);
  return (
    <div className="px-10 pt-10 pb-20 bg-gradient-to-b from-[#000031] to-[#00002c] ">
      <div className="text-white text-center text-3xl font-bold mb-8">
        <h2 className="flex items-center justify-center gap-2">
          {" "}
          <FaLaptopCode /> My <span className="text-[#ffd900]">Projects</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {projets?.map((project, idx) => (
          <ProjectCard key={idx} project={project} setDetails={setDetails} />
        ))}
      </div>
      <dialog id="my_modal_5" className="modal  modal-bottom sm:modal-middle">
        <div className="modal-box relative">
          <div className="container mx-auto ">
            <div>
              <div className="bg-white  shadow rounded-lg mx-auto">
                <div className="">
                  <h1 className="font-bold text-center text-3xl text-gray-900">
                    {details?.name}
                  </h1>
                  <p className="text-center text-sm text-gray-400 font-medium"></p>
                  <p>
                    <span></span>
                  </p>

                  <div className="mt-10">
                    <h2>Technologies used</h2>
                    <hr />
                  </div>
                  <div className="flex flex-wrap gap-4 items-center my-5 px-6">
                    {details?.Technology?.map((data, idx) => (
                      <h2
                        className="bg-[#272770] text-white text-base font-medium py-2 px-4 rounded-full"
                        key={idx}
                      >
                        {data}
                      </h2>
                    ))}
                  </div>

                  <div className="mt-10">
                    <h2>Features</h2>
                    <hr />
                    <div className="text-left">
                      {details?.Feature?.map((data, idx) => (
                        <h2
                          key={idx}
                          className="text-lg font-semibold flex items-center gap-4"
                        >
                          <MdWorkspacePremium />
                          {data}
                        </h2>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Projects;
