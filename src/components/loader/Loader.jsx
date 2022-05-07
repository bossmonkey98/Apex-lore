import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div class="loader">
      <div class="loader__prong"></div>
      <div class="loader__prong"></div>
      <div class="loader__prong"></div>
      <div class="loader__icon"></div>
    </div>
  );
};

export { Loader };
