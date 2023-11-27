import React from "react";
import "./HomCard.css";
const HomeCard = ({ title, desc }) => {
  return (
    <div className="content">
      <div className="head">
        <h3>Short Course{title}</h3>
      </div>
      <div>
        <p className="body">{desc}</p>
        <a href="readmore"> Read More</a>
      </div>
    </div>
  );
};

export default HomeCard;
