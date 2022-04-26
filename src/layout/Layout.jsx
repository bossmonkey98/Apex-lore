import React from "react";
import { Sidebar } from "../components";
import "./Layout.css";
const Layout = ({ children }) => {
  return (
    <>
      <div className="page-layout">
        <Sidebar />
        <main className="menu">{children}</main>
      </div>
    </>
  );
};

export default Layout;
