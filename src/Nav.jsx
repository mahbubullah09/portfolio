

const Navbar = () => {


  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };


  const navlink = (
    <div className=" gap-4 flex flex-col lg:flex-row ">
      <ul className="py-1">
        <p  onClick={() => handleClickScroll("home")}
          className="cursor-pointer relative text-black hover:text-[#011aff] active active:text-[#011aff]   w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#011aff] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
        >
          Home
        </p>
      </ul>
      <ul className="py-1">
        <p  onClick={() => handleClickScroll("about")}
          className="cursor-pointer relative text-black hover:text-[#011aff]   w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#011aff] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
        >
         About
        </p>
      </ul>


      <ul className="py-1">
      <p  onClick={() => handleClickScroll("skill")}
          className="cursor-pointer relative text-black hover:text-[#011aff]   w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#011aff] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
        >
            Skills</p>
      </ul>
      <ul className="py-1">
      <p  onClick={() => handleClickScroll("edu")}
          className="cursor-pointer relative text-black hover:text-[#011aff]   w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#011aff] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
        >
            Education</p>
      </ul>
      <ul className="py-1">
      <p  onClick={() => handleClickScroll("project")}
          className="cursor-pointer relative text-black hover:text-[#011aff]   w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#011aff] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
        >
            Projects</p>
      </ul>
      <ul className="py-1">
      <p  onClick={() => handleClickScroll("contact")}
          className="cursor-pointer relative text-black hover:text-[#011aff]   w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#011aff] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
        >
            Contact</p>
      </ul>
    </div>
  );
  return (
    <div>
      <div className="bg-white z-50">
        <div className="navbar Montserrat font-semibold  max-w-6xl mx-auto   ">
          <div className="navbar-start ">
           <a href="#home">
           <h2 className="bg-[#272770]  text-white rounded-full px-4 py-1 text-center "> Portfolio of <span className="text-[#ffd900] font-bold text-xl" >Mahbubullah</span></h2>
           </a>
          </div>
          <div className="navbar-center hidden lg:flex   rounded-full">
            <ul className="menu menu-horizontal px-4 "></ul>
          </div>
          <div className="navbar-end ">
            <div className="hidden lg:flex">{navlink}</div>

            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul tabIndex="0" className="menu  dropdown-content z-10 shadow bg-base-100 rounded-box w-52 ms-auto">
                {navlink}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
