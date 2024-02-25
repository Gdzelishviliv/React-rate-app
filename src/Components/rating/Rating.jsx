import React, { useState } from "react";
import Star_icon from "../star/Star_icon";
import Text from "../text-content/Text";
import "./rating.css";

const Rating = ({ onSubmit }) => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleSubmit = () => {
    onSubmit(rating);
  };

  return (
    <>
    <Star_icon />
    <Text/>
      <div className="rating-styles">
        <div className="rate-nums">
          {[1, 2, 3, 4, 5].map((value) => (
            <span
              key={value}
              onClick={() => handleRatingChange(value)}
            >
              {value}
            </span>
          ))}
        </div>
        <button className="submit-button" onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
};

export default Rating;
