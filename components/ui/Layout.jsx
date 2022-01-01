import React from "react";
import Navbar from "../shared/navbar/Navbar";
import classes from "./layout.module.css";
const Layout = (props) => {
  return (
    <div className={classes.layout}>
      <Navbar />
      {props.children}
    </div>
  );
};

export default Layout;
