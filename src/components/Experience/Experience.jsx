import React from "react";
import "./Experience.css";
import Vigovia from "../../assets/vigovia_img.png";

const Experience = () => {

  return (
    <>
      <h1 className="Expo-heading">Experience</h1>
      <div className="main-expo-container">
        <div className="Expo-container">
          <div>
            <img src={Vigovia} alt="vigovia"  />
          </div>
          <div className="Expo-content">
             <div><strong>Role:</strong><p>Frontend Developer</p></div>
             <div><strong>Project:</strong><p>Designed and implemented a responsive
                travel booking website using React.js, enhancing the user
                journey from search to checkout</p></div>
                <div><strong>Responsibilities:</strong><p>Developed reusable UI
                components, integrated dynamic data with APIs, and ensured
                cross-browser compatibility.</p></div>
                <div> <strong>Duration:</strong><p>6 Months</p></div>
                <div><strong>Location:</strong><p>Remote</p></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
