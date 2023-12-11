import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { FaLaptopCode } from "react-icons/fa";

const Projects = () => {
  const [projets, setProjects] = useState([]);

  useEffect(() => {
    fetch("../public/projects.json")
      .then((response) => response.json())

      .then((data) => setProjects(data));
  }, []);
  console.log(projets);
  return (
    <div className="px-10 pt-10 pb-20 bg-gradient-to-b from-[#000031] to-[#00002c]">
      <div className="text-white text-center text-3xl font-bold mb-8">
        <h2 className="flex items-center justify-center gap-2">
          {" "}
          <FaLaptopCode /> My <span className="text-[#ffd900]">Projects</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projets?.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
