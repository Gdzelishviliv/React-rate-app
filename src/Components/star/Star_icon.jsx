import React from "react";
import "./star.css";
import starImage from "../pictures/Star.svg"

const Star_icon = () => {
  return (
    <div className="star">
      <img src={starImage} alt="star-img" />
    </div>
  );
};

export default Star_icon;
