import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader">
      <div className="loader__prong"></div>
      <div className="loader__prong"></div>
      <div className="loader__prong"></div>
      <div className="loader__icon"></div>
    </div>
  );
};

export { Loader };
