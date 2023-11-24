import React from "react";
import videobg from "../../assets/video.mp4";
import HomeCard from "../../componet/HomeCard";
import "./Home.css";

const Home = () => {
  return (
    <div className="home paddings">
      <h2> WELCOME TO THE DEPARTMENT OF COMPUTER SCIENCE</h2>
      <div className="video">
        <video src={videobg} autoPlay loop muted />
        <h1 className="heading">
          YOUR GATEWAY TO WORLD CLASS COMPUTER SCIENCE EDUCATION
        </h1>
      </div>
      <div className="grid">
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
      </div>
    </div>
  );
};

export default Home;
