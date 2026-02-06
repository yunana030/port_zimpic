import React from 'react';
import './YutubePlayer.css'; // CSS 파일 연결!

const YutubePlayer = () => {
  return (
    <div className="player-container">
      <div className="video-screen">
        <span className="material-symbols-outlined text-8xl text-white/20">play_circle</span>
      </div>
      
      <div className="player-info">
        <h2 className="song-title">Cyber Dreams - Lo-fi Mix</h2>
        
        <div className="progress-bar-bg">
          <div className="progress-bar-fill"></div>
        </div>
        
        <div className="player-controls">
          <span className="material-symbols-outlined text-3xl cursor-pointer">skip_previous</span>
          <div className="play-button">
            <span className="material-symbols-outlined text-4xl">pause</span>
          </div>
          <span className="material-symbols-outlined text-3xl cursor-pointer">skip_next</span>
        </div>
      </div>
    </div>
  );
};

export default YutubePlayer;