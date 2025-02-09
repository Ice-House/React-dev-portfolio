import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-blue-600 text-white hover:bg-blue-700 hover:text-white rounded-md px-3 py-2"
      : "text-white hover:bg-blue-700 hover:text-white rounded-md px-3 py-2";

  return (
    <nav className="bg-black border-b border-white fixed w-full top-0 left-0 z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <img
                className="h-10 w-10 rounded-full"
                src={logo}
                alt="Dev Portfolio"
              />
              <span className="hidden md:block text-white text-2xl font-bold ml-2">
                Dev Portfolio
              </span>
            </NavLink>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink to="/" className={linkClass}>
                  Home
                </NavLink>
                <NavLink to="/projects" className={linkClass}>
                  Projects
                </NavLink>
                <NavLink to="/about" className={linkClass}>
                  About
                </NavLink>
                <NavLink to="/contact" className={linkClass}>
                  Contact
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
