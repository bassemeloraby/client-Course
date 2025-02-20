import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";

const HomeLayout = () => {
  return (
    <Fragment>
      <nav>
        <span className="text-4xl text-primary">My App</span>
        <FaFacebookSquare />
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default HomeLayout;
