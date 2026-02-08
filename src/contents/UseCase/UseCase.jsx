import React from 'react';
import './UseCase.css';
import usecase from "../../assets/images/usecase.png";

const UseCase = () => {
  return (
    <div className="usecase-container">
      {/* <div className="text-line line-full"></div>
      <div className="text-line line-full"></div>
      <div className="text-line line-75"></div>
      <div className="text-line line-full"></div>
      <div className="text-line line-85"></div> */}
      
      {/* 이미지 영역 - a 태그 없이 이미지 바로 렌더링 */}
      <div className="usecase-frame">
        <img src={usecase} alt="usecase" className="usecase-full-view" />
      </div>

      <span className="doc-footer">--- END OF DOC ---</span>
      <p className="usecase-caption">System Use Case Diagram</p>
    </div>
  );
};

export default UseCase;