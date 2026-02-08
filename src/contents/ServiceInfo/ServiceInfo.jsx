import React from 'react';
import './ServiceInfo.css';
import servicePpt from "../../assets/images/servicePpt.png";
import 기준1 from "../../assets/images/기준1.png";
import 기준2 from "../../assets/images/기준2.png";




const ServiceInfo = () => {
  return (
    <div className="service-info-container">
      {/* 1. 이미지를 가장 위로 올림 (모달 밖에서 먼저 보이도록) */}
      <div className="ppt-preview-area">
        <img src={servicePpt} alt="Service PPT" className="ppt-thumbnail" />
      </div>

      {/* 2. 텍스트 섹션들 */}
      <div className="info-section">
        <h3 className="section-label">Project Concept</h3>
        <p className="section-desc">
          기존의 이사 견적 시스템은 사용자가 많은 정보를 입력해야 하고, 절차가 복잡하여 효율성이 떨어집니다.
          이러한 불편함은 사용자 경험과 활용도를 저해하는 요인이 될 수 있습니다.
          ZIMPIC 프로젝트는 사용자의 불편함을 해결하기 위해 YOLO 딥러닝 모델을 활용하여 사진 속 가구를 분석해 이사 견적을 예측할 수 있도록 기획된 서비스입니다.
        </p>
      </div>

      <div className="info-section">
        <h3 className="section-label">Mission</h3>
        <p className="section-desc">
          데이터의 시각화와 직관적인 인터페이스를 통해 누구나 쉽게 이용할 수  있도록 만드는 것이 목표입니다.
        </p>
      </div>
      
      <div className="info-section">
        <h3 className="section-label">정책기준 정의</h3>
      <div className="policy-column">
        <div className="policy-item">
          <img src={기준1} alt="Policy 1" className="policy-full-img" />
        </div>
        <div className="policy-item">
          <img src={기준2} alt="Policy 2" className="policy-full-img" />
        </div>
      </div>
    </div>

    </div>
  );
};

export default ServiceInfo;