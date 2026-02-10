import React from 'react';
import './TruckBackground.css';
import truckImg from "../assets/images/truck_back.png";

const TruckBackground = () => {
  return (
    <div className="truck-patrol-container">
      {/* 움직임을 담당하는 wrapper는 그대로 둡니다 */}
      <div className="patrol-truck-wrapper">
        <a href="https://yunana030.github.io/nanaful_day/" className="truck-link">
          {/* 💬 말풍선 */}
          <div className="truck-tooltip">포트폴리오 페이지로 배달을 시작합니다!</div>
          <img src={truckImg} alt="patrol-truck" className="patrol-truck-img" />
        </a>
      </div>
    </div>
  );
};

export default TruckBackground;