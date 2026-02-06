import React from 'react';
import './ImageFeed.css';

const ImageFeed = () => {
  return (
    <div className="feed-container">
      <div className="image-display group"> {/* group 클래스는 hover 감지용 */}
        <span className="material-symbols-outlined main-icon">image</span>
        
        {/* 좌우 슬라이드 버튼 */}
        <button className="nav-btn left">
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <button className="nav-btn right">
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>

      <div className="feed-actions">
        <span className="material-symbols-outlined icon-heart">favorite</span>
        <span className="material-symbols-outlined cursor-pointer">chat_bubble</span>
      </div>
      
      <div className="feed-caption">
        <b>System:</b> New aesthetic update deployed successfully. #vaporwave #retro
      </div>
    </div>
  );
};

export default ImageFeed;