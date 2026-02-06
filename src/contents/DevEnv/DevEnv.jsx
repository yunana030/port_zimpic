import React from 'react';
import './DevEnv.css';

const DevEnv = () => {
  return (
    <div className="chat-container">
      <div className="message received">Hey! Welcome to the portal.</div>
      <div className="message sent">Check out the windows!</div>
      
      <div className="chat-input-area">
        <div className="input-mock">Type here...</div>
        <button className="send-btn">
          <span className="material-symbols-outlined text-sm">send</span>
        </button>
      </div>
    </div>
  );
};

export default DevEnv;