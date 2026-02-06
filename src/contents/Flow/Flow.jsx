import React from 'react';
import './Flow.css';

const Flow = () => {
  return (
    <div className="flow-container">
      <div className="flow-header">
        <span className="flow-title">System Flow / Sequence</span>
        <div className="flow-actions">
          <span className="material-symbols-outlined flow-icon-btn dim">refresh</span>
          <span className="material-symbols-outlined flow-icon-btn">zoom_in</span>
        </div>
      </div>
      
      <div className="flow-canvas">
        <span className="material-symbols-outlined canvas-placeholder-icon">account_tree</span>
        <p className="canvas-label">Sequence Diagram Loader</p>
      </div>
    </div>
  );
};

export default Flow;