import React, { useEffect } from "react";
import "../styles/LoadingScreen.css";
import jasonFallbackLogo from "../assets/jasonFallbackLogo.png";

export default function LoadingScreen() {
  return (
    <>
      <div className="vertical-centered-box">
        <div className="content">
          <div className="loader-circle relative">
            <img
              src={jasonFallbackLogo}
              alt="Jason's Logo"
              className="absolute rounded-3xl w-10 h-auto left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div className="loader-line-mask">
            <div className="loader-line"></div>
          </div>
        </div>
      </div>
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
}
