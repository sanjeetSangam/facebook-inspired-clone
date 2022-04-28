import React from "react";
import { Content } from "./content/Content";
import { Navbar } from "./navbar/Navbar";
import { Widgets } from "./rightC/Widgets";
import { Sidebar } from "./sidebar/Sidebar";

const Allhome = () => {
  return (
    <div>
      <Navbar />
      <div className="main_body">
        <Sidebar />
        <Content />
        <Widgets />
      </div>
    </div>
  );
};

export default Allhome;
