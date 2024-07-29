import React from "react";
import Sidebar from "./Sidebar";
import MainCont from "./MainCont";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="grid grid-flow-col">
      <Sidebar />

      <Outlet />
    </div>
  );
};

export default Body;
