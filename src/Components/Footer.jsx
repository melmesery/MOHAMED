import React from "react";
import "../Styles/Footer.css";
import { TfiHeart } from "react-icons/tfi";

const Footer = () => {
  return (
    <footer className="">
      <div className="footer-line"></div>
      <div className="footer-content">
        <p className="mb-0 fs-5 py-3">
          Made With <span className="footer-icon">
            <TfiHeart />
          </span>
        </p>
        <p className="rights mb-0 fs-5 py-3">
          All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
