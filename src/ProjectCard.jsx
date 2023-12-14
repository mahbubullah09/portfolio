import { MdWorkspacePremium } from "react-icons/md";

const ProjectCard = ({ project }) => {
  console.log(project?.view);

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <div>
      <div className="group relative rounded-lg  items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-96">
          <img
            className="h-full w-full object-cover transition-transform duration-500 "
            src={project?.image}
            alt=""
          />
        </div>

        <div className="absolute inset-0 flex translate-y-[80%] flex-col items-center justify-center text-center transition-all duration-500 group-hover:translate-y-10">
          <div className="h-80 bg-white">
            <h1 className="w-full bg-amber-500 py-1 font-dmserif text-3xl font-bold text-black">
              {project?.name}
            </h1>
            <p className="mb-3 p-2 text-left text-lg  font-medium text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {project?.desc}
            </p>
            <div className="grid grid-cols-3 gap-2  mx-2">
              {/* <button
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
                className="rounded-full bg-neutral-900 px-3.5 py-2 font-com text-sm capitalize text-white shadow shadow-black/60"
              >
                Details
              </button>
              

              <dialog
                id="my_modal_5"
                className="modal  modal-bottom sm:modal-middle"
              >
                <div className="modal-box relative">
                  <div className="container mx-auto ">
                    <div>
                      <div className="bg-white  shadow rounded-lg mx-auto">
                        <div className="">
                          <h1 className="font-bold text-center text-3xl text-gray-900">
                            {project?.name}
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
                            {project?.Technology?.map((data, idx) => (
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
                              {project?.Feature?.map((data, idx) => (
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
              </dialog> */}

              <button
                onClick={() => openInNewTab(project?.links?.view)}
                className="rounded-full bg-neutral-900 px-3.5 py-2 font-com text-sm capitalize text-white shadow shadow-black/60"
              >
                Live Link
              </button>

              <button
                onClick={() => openInNewTab(project?.links?.code)}
                className="rounded-full bg-neutral-900 px-3.5 py-2 font-com text-sm capitalize text-white shadow shadow-black/60"
              >
                Code
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
