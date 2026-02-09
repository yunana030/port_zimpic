import React from 'react';
import './TruckBackground.css';
import truckImg from "../assets/images/truck.png";

const TruckBackground = () => {
  return (
    <div className="truck-patrol-container">
      {/* 🚛 고독한 순찰 트럭 한 대 */}
      <div className="patrol-truck-wrapper">
        <img src={truckImg} alt="patrol-truck" className="patrol-truck-img" />
      </div>
    </div>
  );
};

export default TruckBackground;