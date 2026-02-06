import React from 'react';
import './ERD.css';

const ERD = () => {
  return (
    <div className="terminal-container">
      <div className="input-group">
        <label className="input-label">User_ID</label>
        <input className="terminal-input" placeholder="admin" type="text" />
      </div>
      <div className="input-group">
        <label className="input-label">Access_Key</label>
        <input className="terminal-input" type="password" value="********" readOnly />
      </div>
      <button className="execute-btn">Execute Query</button>
    </div>
  );
};

export default ERD;