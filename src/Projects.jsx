import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";


const Projects = () => {

    const [projets, setProjects] = useState([]);

  useEffect(() => {
    fetch("../public/projects.json")
      .then((response) => response.json())

      .then((data) => setProjects(data));
  }, []);
  console.log(projets);
    return (
        <div className="p-10 bg-gradient-to-b from-[#000031] to-[#00002c]">

            <div className="text-white text-center text-3xl font-bold">
                <h2> My Projects</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {
                    projets?.map((project, idx) => <ProjectCard key={idx} project={project}/> )
                }
            </div>


            
        </div>
    );
};

export default Projects;