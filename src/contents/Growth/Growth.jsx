import React from 'react';
import './Growth.css';

const Growth = ({ isModal }) => {
  return (
    <div className={`growth-container ${isModal ? 'modal-view' : ''}`}>
      {/* 1. 사라졌던 Optimization 영역 복구 */}
      <div className="growth-header">
        <div className="alert-icon-circle">
          <span className="material-symbols-outlined">trending_up</span>
        </div>
        <div className="header-text">
          <p className="alert-msg">Growth Level: 99%</p>
          <div className="growth-bar-bg">
            <div className="growth-bar-fill"></div>
          </div>
        </div>
      </div>

      <div className="growth-content">
        <section className="growth-section">
          <h4 className="section-title">소감 (Review)</h4>
          
          <div className="text-block">
            <strong className="sub-title">📍 데이터 전처리와 들었던 생각</strong>
            <p>데이터 전처리를 처음 경험하면서 단순 반복 작업이 많아 “이 과정이 과연 의미가 있을까?”라는 고민을 하기도 했습니다.
              특히 빠르게 성장하는 AI 시장을 보며, 인간의 역할이 점점 줄어들지 않을까 하는 걱정도 들었습니다.
              그러나 데이터셋을 직접 구축하는 과정을 통해 AI는 스스로 존재하는 것이 아니라 결국 사람의 노력과 판단 위에 만들어진 기술임을 다시 한 번 깨닫게 되었습니다.</p>
          </div>

          <div className="text-block">
            <strong className="sub-title">📍 프로젝트 소감</strong>
            <p>- 의도치 않게 처음으로 백엔드 중심 역할을 맡아 개발을 진행했습니다.
              프론트엔드에 전달해야 할 데이터가 적절한지 고민하는 과정이 많았고,
              “이런 질문을 해도 될까?”라는 망설임도 있었습니다.
              다른 개발자의 작업 상황을 정확히 알지 못한 채 개발을 진행해야 했던 점이 생각보다 어려웠습니다.</p>
            <p>- 또한 팀 프로젝트를 진행하며 소통의 중요성을 다시 한 번 크게 느꼈습니다.
              매일  마지막 수업 시간에 진행했던 회의가 프로젝트의 방향을 정리하고 문제를 해결하는 데 매우 중요한 역할을 했음을 실감했습니다.</p>
          </div>
        </section>

        <section className="growth-section">
          <h4 className="section-title">발전 가능성 (Future)</h4>
          <ul className="future-list">
            <li>📦 사용자가 페이지에 더 흥미를 느낄 수 있도록, 지금처럼 방향키 조작 방식이 아닌 트럭에 실린 짐들을 드래그하여 직접 이동시키는 인터랙티브 기능으로 변경하면 더욱 좋을 것 같습니다..</li>
            <li>📊 현재는 ZIMPIC 프로젝트 기준의 평균 견적만 제공하지만,
동일한 조건에서 다른 이사업체들의 견적도 함께 비교할 수 있도록 확장하면 사용자 편의성이 크게 향상될 것이라 생각합니다..</li>
            <li>📉 데이터 수가 충분하지 않아 모델 성능을 충분히 개선하지 못한 점이 아쉬웠습니다.
또한 사진과 실제 가구 크기 간의 차이를 줄이기 위해 도면 기반 비율 측정 시스템을 도입하여 보다 정확한 견적 산출이 가능하도록 발전시키고 싶습니다.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Growth;