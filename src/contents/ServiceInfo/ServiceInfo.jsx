import React from 'react';
import './ServiceInfo.css';

const ServiceInfo = () => {
  return (
    <div className="status-container">
      <div className="status-text">
        <span>Processing...</span>
        <span className="animate-pulse">Active</span>
      </div>
      <div className="loading-bar">
        <div className="bar-segment seg-1"></div>
        <div className="bar-segment seg-2"></div>
        <div className="bar-segment seg-3"></div>
        <div className="bar-segment seg-4"></div>
        <div className="bar-segment seg-5"></div>
      </div>
    </div>
  );
};

export default ServiceInfo;