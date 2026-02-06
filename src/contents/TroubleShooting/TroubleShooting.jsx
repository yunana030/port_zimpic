import React from 'react';
import './TroubleShooting.css';

const TroubleShooting = () => {
  return (
    <div className="vault-container">
      <div className="vault-top">
        <div className="folder-icon-wrapper">
          <span className="material-symbols-outlined" style={{fontSize: '32px'}}>folder_zip</span>
        </div>
        <span className="version-tag">v1.0.4_stable</span>
      </div>
      
      <div className="vault-info-box">
        <h3 className="vault-label">Trouble_Shooting_Logs</h3>
        <div className="log-preview-card">
          <div className="log-line w-full pulse"></div>
          <div className="log-line w-3-4"></div>
          <div className="log-line w-1-2"></div>
          
          <div className="card-footer">
            <span className="error-code">ERR_RESOLVED_01</span>
            <span className="material-symbols-outlined download-icon">download</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TroubleShooting;