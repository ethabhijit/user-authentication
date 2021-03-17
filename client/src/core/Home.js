import React from "react";
import "../styles.css";
import Base from "./Base";

const Home = () => {

  return (
    <>
      <Base />
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-4 col-md-3">Column 1</div>
          <div className="col-lg-4 col-md-6">Column 2</div>
          <div className="col-lg-4 col-md-3">Column 3</div>
        </div>
      </div>
    </>
  );
};

export default Home;
