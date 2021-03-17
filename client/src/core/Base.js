import React from "react";
import Navbar from "./Navbar";

const Base = ({ children }) => (
  <div>
    <Navbar />
    {children}
  </div>
);

export default Base;
