import React from 'react';
import './YutubePlayer.css';

const YutubePlayer = () => {
  // 1. 나중에 여기 ID만 바꾸면 썸네일과 링크가 자동으로 바뀝니다!
  const videoId = "h6mX-WjW9sc"; 
  const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;
  const thumbnailUtl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div className="player-container">
      {/* 📸 썸네일 영역 (클릭 시 유튜브 이동) */}
      <a href={youtubeUrl} target="_blank" rel="noopener noreferrer" className="video-screen">
        <img src={thumbnailUtl} alt="Youtube Thumbnail" className="thumb-img" />
        
        {/* 이미지 위에 겹쳐 보일 재생 버튼 아이콘 */}
        <div className="overlay-play">
          <span className="material-symbols-outlined play-icon-main">play_circle</span>
        </div>
      </a>
      
      {/* 🎵 하단 정보 영역 */}
      <div className="player-info">
        <div className="text-area">
          <h2 className="song-title">ZIMPIC Project Video</h2>
          <p className="song-sub">Click the image to watch on YouTube</p>
        </div>
        
        <div className="progress-bar-bg">
          <div className="progress-bar-fill" style={{ width: '0%' }}></div>
        </div>
        
        <div className="player-controls">
          <span className="material-symbols-outlined ctrl-icon">skip_previous</span>
          <div className="play-button">
            <span className="material-symbols-outlined">play_arrow</span>
          </div>
          <span className="material-symbols-outlined ctrl-icon">skip_next</span>
        </div>
      </div>
    </div>
  );
};

export default YutubePlayer;