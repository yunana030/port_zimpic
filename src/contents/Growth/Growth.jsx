import React from 'react';
import './Growth.css';

const Growth = () => {
  return (
    <div className="alert-container">
      <div className="alert-icon-circle">
        <span className="material-symbols-outlined">trending_up</span>
      </div>
      <p className="alert-msg">Optimization: 99%</p>
      <button className="log-btn">View Logs</button>
    </div>
  );
};

export default Growth;