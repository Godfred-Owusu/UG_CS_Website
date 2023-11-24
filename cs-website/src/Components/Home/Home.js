import React from "react";
import videobg from '../../assets/video-bg.mp4'
import "./Home.css";

const Home = () => {
  return <div className="home">
    <h2> WELCOME TO THE DEPARTMENT OF COMPUTER SCIENCE</h2>
        <video src={videobg} autoPlay loop muted/>
  </div>;
  
};

export default Home;
