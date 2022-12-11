import React from "react";
import "../Styles/Title.css";

const Title = ({ title }) => {
  return (
    <>
      <h1 className="TITLE fw-bold display-4 text-white text-center">
        {title}
      </h1>
      <div className="title-line"></div>
    </>
  );
};

export default Title;
