import React from "react";
import { Outlet } from "react-router";

import Sidebar from ".";

const SidebarLayout = () => {
  return(
    <>
      <Sidebar />
      <Outlet />
    </>
  )
};

export default SidebarLayout;