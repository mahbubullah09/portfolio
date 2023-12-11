import { NavLink } from "react-router-dom";


const Navbar = () => {


    const navlink = (
        <div className=" gap-4 flex flex-col lg:flex-row ">
          <ul className="py-1">
            <a>
        
              Home
            </a>
          </ul>
    
          <ul className="py-1">
          <a>
        
        Home
      </a>
          </ul>
    
          <ul className="py-1">
          <a>
        
        Home
      </a>
          </ul>
    
          
        </div>
      );
    return (
        <div>
            <div className="bg-[#18023f]">
      <div className="navbar Montserrat font-semibold  max-w-6xl mx-auto  text-white ">
        <div className="navbar-start ">
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
          <h2> Maahbub</h2>
        </div>
        <div className="navbar-center hidden lg:flex   rounded-full">
          <ul className="menu menu-horizontal px-4 "> 
              </ul>
        </div>
        <div className="navbar-end">
        {navlink}
         
        </div>
      </div>
    </div>
            
        </div>
    );
};

export default Navbar;