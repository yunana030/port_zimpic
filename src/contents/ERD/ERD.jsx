import React from 'react';
import './ERD.css';
import erd from "../../assets/images/erd.png";

const ERD = () => {
  return (
    <div className="erd-container">
      <div className="erd-frame">
        {/* <a> 태그로 <img>를 완전히 감싸야 합니다! */}
        <a href={erd} target="_blank" rel="noreferrer" className="erd-link">
          <img src={erd} alt="Database ERD" className="erd-full-view" />
          
          {/* 마우스를 올렸을 때만 나타날 안내 문구 (선택사항) */}
          <div className="erd-overlay">
            <span className="material-symbols-outlined">zoom_in</span>
            <p>원본 보기</p>
          </div>
        </a>
      </div>
      <p className="erd-caption">Database Architecture : MySQL (Click to zoom)</p>
    </div>
  );
};

export default ERD;