import React from 'react';
import truck from "./assets/images/truck.png"

const Loading = () => {
  // 스타일 객체를 따로 빼두면 수정하기 훨씬 편합니다!
  const styles = {
    container: {
      position: 'fixed',
      inset: 0,
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#72A3EF', // 배경색
    },
    truckWrapper: {
      position: 'relative',
      width: '300px',
      height: '100px',
      marginBottom: '30px',
      overflow: 'hidden', // 트럭이 밖으로 나갔다 들어왔다 하게 함
    },
    road: {
      position: 'absolute',
      bottom: '10px',
      width: '100%',
      height: '4px',
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      borderRadius: '2px',
    },
    truck: {
      position: 'absolute',
      bottom: '15px',
      width: '100px', // 이미지 크기에 맞게 조정하세요!
      height: 'auto',
      animation: 'moveTruck 2.5s infinite linear',
    },
    textContainer: {
      textAlign: 'center',
      color: '#FFFFFF',
    },
    mainText: {
      fontSize: '26px',
      fontWeight: 'bold',
      margin: '0 0 8px 0',
      letterSpacing: '-0.02em',
      animation: 'pulseText 1.5s infinite ease-in-out',
    },
    subText: {
      fontSize: '14px',
      opacity: 0.8,
    }
  };

  return (
    <div style={styles.container}>
      {/* CSS 애니메이션 키프레임 정의 (여기에만 쓰는 특수 스타일 태그) */}
      <style>
        {`
          @keyframes moveTruck {
            0% { transform: translateX(-100px); }
            100% { transform: translateX(400px); }
          }
          @keyframes pulseText {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
        `}
      </style>

      <div style={styles.truckWrapper}>
        <div style={styles.road}></div>
        <img 
          src={truck} // 트럭 이미지 경로
          alt="loading truck"
          style={styles.truck} 
        />
        </div>

      <div style={styles.textContainer}>
        <h2 style={styles.mainText}>견적을 요청 중입니다..</h2>
      </div>
    </div>
  );
};

export default Loading;