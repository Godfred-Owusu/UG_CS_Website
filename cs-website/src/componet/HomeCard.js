import React from "react";
import "./HomCard.css";
const HomeCard = () => {
  return (
    <div className="content">
      <div className="head">
        <h3>Short Course</h3>
      </div>
      <div>
        <p className="body">
          Our eight week intensive certificate course is open to senior high
          school graduates, tertiary school graduates, workers and the general
          public
        </p>
        <a href="readmore"> Read More</a>
      </div>
    </div>
  );
};

export default HomeCard;
