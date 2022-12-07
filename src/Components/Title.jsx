import React from "react";

const Title = ({ title }) => {
  return (
    <h1 className="fw-bold display-3 text-white text-center mt-3">
      [ {title} ]
    </h1>
  );
};

export default Title;