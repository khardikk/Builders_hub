import React, { useEffect } from "react";
import "./Preloader.css";
import { preLoaderAnim } from "../animations/index.js";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container">
        <span>We</span>
        <span>Are</span>
        <span>Builders.</span>
      </div>
    </div>
  );
};

export default PreLoader;