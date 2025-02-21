import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";

const Navbar = () => {
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
        <div className="navbar-end">end</div>
      </div>
    </nav>
  );
};

export default Navbar;
