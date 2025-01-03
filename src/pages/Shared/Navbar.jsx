import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <NavLink to="/" className=" text-lg">
        Home
      </NavLink>
      <NavLink to="books" className="px-6 text-lg">
        Books
      </NavLink>
    </>
  );

  return (
    <div className="py-2">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
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
            </div>
            <div
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </div>
          </div>
          <Link
            to="/"
            className="text-[#131313] font-bold text-[28px] hidden sm:block"
          >
            Timeless Horizon
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="menu menu-horizontal px-1 flex items-center">
            {links}
          </div>
        </div>
        <div className="navbar-end flex gap-6">
          <Link
            to="/login"
            className="px-[28px] py-[10px] rounded-lg bg-[#23BE0A] text-lg font-semibold text-white hover:bg-gray-500 ease-in duration-300"
          >
            Sign In
          </Link>
          <Link
            to="/register"
            className="px-[28px] py-[10px] rounded-lg bg-[#59C6D2] text-lg font-semibold text-white hover:bg-gray-500 ease-in duration-300"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
