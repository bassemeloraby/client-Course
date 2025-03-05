import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../app/features/auth/authSlice";


 
const Navbar = () => {
  const dispatch = useDispatch();

  const handleTheme = () => {
       dispatch(toggleTheme());
 
  };

  return (
    <nav className="bg-base-200">
      <div className="navbar align-element ">
        <div className="navbar-start">
          {" "}
          <NavLink
            to="/"
            className=" lg:flex btn btn-primary text-3xl items-center"
          >
            P
          </NavLink>
        </div>
        <div className="navbar-center">
          <ul className="menu menu-horizontal">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end">
          {/* THEME SETUP */}
          <label className="swap swap-rotate">
            <input type="checkbox" onChange={handleTheme} />
            {/* sun icon*/}
            <BsSunFill className="swap-on h-4 w-4" />
            {/* moon icon*/}
            <BsMoonFill className="swap-off h-4 w-4" />
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
