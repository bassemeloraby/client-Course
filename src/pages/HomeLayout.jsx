import { Fragment } from "react";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <Fragment>
      <nav>
        <span className="text-4xl text-primary">My App</span>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default HomeLayout;
