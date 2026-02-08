import React, { useState } from 'react';
import './ImageFeed.css'; // 작성하신 CSS를 여기서 불러옵니다.

// 이미지들을 import 하거나 배열로 만듭니다.
import img1 from "../../assets/images/케로로.jpg";
import img2 from "../../assets/images/기로로.jpg";
import img3 from "../../assets/images/타마마.jpg";
import img4 from "../../assets/images/원룸.jpg";

const ImageFeed = () => {
  const images = [img1, img2, img3, img4];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="feed-container">
      {/* 이미지 디스플레이 영역 */}
      <div className="image-display">
        <img 
          src={images[currentIndex]} 
          alt={`slide-${currentIndex}`} 
        />
        
        {/* 좌우 슬라이드 버튼 */}
        <button className="nav-btn left" onClick={goToPrev}>
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <button className="nav-btn right" onClick={goToNext}>
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>

      {/* 액션 아이콘 영역 */}
      <div className="feed-actions">
        <span className="material-symbols-outlined icon-heart">favorite</span>
        <span className="material-symbols-outlined cursor-pointer">chat_bubble</span>
      </div>
      
     {/* 📝 설명 & 태그 영역 */}
      <div className="feed-caption">
        <p className="description">
          저희 서비스는 유저들이 일일이 가구를 입력할 필요 없이 
          사진 속 가전과 가구의 종류 및 개수를 분석하여 
          <strong> 이사 견적을 예측</strong>할 수 있게 해줍니다!
        </p>

        <div className="hash-tags">
          #YOLO #LabelStudio #Django #MySQL #React
        </div>
      </div>
    </div>
  );
};

export default ImageFeed;