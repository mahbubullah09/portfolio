import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navlink = (
    <div className=" gap-4 flex flex-col lg:flex-row ">
      <ul className="py-1">
        <a
          href="#"
          className="relative text-black hover:text-[#011aff]   w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#011aff] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
        >
          Home
        </a>
      </ul>

      <ul className="py-1">
      <a
          href="#"
          className="relative text-black hover:text-[#011aff]   w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#011aff] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
        >
            About</a>
      </ul>

      <ul className="py-1">
      <a
          href="#"
          className="relative text-black hover:text-[#011aff]   w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#011aff] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
        >
            Projects</a>
      </ul>
    </div>
  );
  return (
    <div>
      <div className="">
        <div className="navbar Montserrat font-semibold  max-w-6xl mx-auto   ">
          <div className="navbar-start ">
            <h2> Mahbub</h2>
          </div>
          <div className="navbar-center hidden lg:flex   rounded-full">
            <ul className="menu menu-horizontal px-4 "></ul>
          </div>
          <div className="navbar-end ">
            <div className="hidden lg:flex">{navlink}</div>

            <div className="dropdown">
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
              <ul
                tabIndex={0}
                className=" menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
              >
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
