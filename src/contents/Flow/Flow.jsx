import React from 'react';
import './Flow.css';
import arch from "../../assets/images/zimpic_arch.png";
import seq1 from "../../assets/images/zimpic_findmover.png";
import seq2 from "../../assets/images/zimpic_sequence.png";

const Flow = () => {
  return (
    <div className="flow-container">
      
      {/* 📜 세로 스크롤 영역 */}
      <div className="flow-canvas">
        
        <div className="flow-item">
          <h3 className="flow-label">01. Architecture</h3>
          <img src={arch} alt="Architecture" className="flow-img" />
        </div>

        <div className="flow-item">
          <h3 className="flow-label">02. Find Mover Sequence</h3>
          <img src={seq1} alt="Sequence 1" className="flow-img" />
        </div>

        <div className="flow-item">
          <h3 className="flow-label">03. Model Interface API</h3>
          <img src={seq2} alt="Sequence 2" className="flow-img" />
        </div>
      </div>
    </div>
  );
};

export default Flow;