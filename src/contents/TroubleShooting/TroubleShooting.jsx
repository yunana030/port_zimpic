import React from 'react';
import './TroubleShooting.css';
// import errorImg from "../../assets/images/기로로.jpg"; // 상황 이미지
import solveImg from "../../assets/images/image 45.png"; // 해결 로직/이미지


const TroubleShooting = () => {
  return (
    <div className="troubleRootContainer">
      <div className="troubleCard">

        <div className="troubleTable">
          {/* 상황 섹션 */}
          <div className="troubleRow">
            <div className="troubleTextSide">
              <span className="troubleTag status">상황</span>
              <p>
               OWL-V2 모델을 활용해 이미지 데이터셋에 대한 자동 라벨링을 진행했으나, 모델 특성상 하나의 이미지에서 과도하게 많은 객체가 인식되는 문제가 발생했습니다.
초기에는 Python 코드로 클래스별 라벨을 하나씩 검증·정제하는 방식으로 작업을 진행했는데, 약 40개에 달하는 클래스 각각에 대해 전체 데이터셋을 순회해야 했기 때문에 정제에 매우 많은 시간이 소요되었습니다.
특히 이미지 하나당 인식된 클래스 수만큼 반복 확인이 필요해, 데이터 규모가 커질수록 작업 효율이 급격히 저하되는 상황이었습니다.
              </p>
            </div>
            {/* <div className="troubleImageSide">
              <div className="imageLabel">수정 전</div>
              <div className="imageWrapper">
                <img src={errorImg} alt="Error Scenario" />
              </div>
            </div> */}
          </div>

          {/* 해결 섹션 */}
          <div className="troubleRow">
            <div className="troubleTextSide">
              <span className="troubleTag solve">해결</span>
              <p>
                  라벨 정제 과정을 개선하기 위해 Label Studio를 도입했습니다.
                <strong>Label Studio</strong>를 활용하자 한 이미지에 대해 모델이 인식한 모든 객체와 라벨을 한 화면에서 직관적으로 확인할 수 있었고, 불필요한 객체나 오인식된 라벨을 즉시 수정·삭제할 수 있었습니다.
                그 결과, 기존처럼 클래스 단위로 전체 데이터셋을 반복 확인하는 방식이 아닌, 이미지 단위로 한 번만 확인하면 필요한 정제가 모두 가능한 구조로 작업 흐름을 전환할 수 있었습니다.
                </p>
            </div>
            <div className="troubleImageSide">
              <div className="imageLabel blue">도입 후 결과</div>
              <div className="imageWrapper">
                <img src={solveImg} alt="Solution Result" />
              </div>
            </div>
          </div>

          {/* 알게 된 점 섹션 */}
          <div className="troubleRow lessonRow">
            <div className="troubleTextSide fullWidth">
              <span className="troubleTag lesson">알게 된 점</span>
              <p>
                자동 라벨링 모델의 성능만으로는 실제 학습에 적합한 데이터셋을 만들기 어렵고, 라벨 정제 과정의 효율성이 전체 프로젝트 일정에 큰 영향을 미친다는 점을 체감할 수 있었습니다.
또한, 단순히 코드 기반으로 문제를 해결하려 하기보다, 작업 목적에 맞는 시각적 도구를 적절히 도입하는 것이 개발 생산성을 크게 향상시킬 수 있다는 것을 배웠습니다.
이 경험을 통해 데이터 전처리 단계에서의 도구 선택과 작업 흐름 설계가 모델 성능뿐 아니라 프로젝트 완성도 전반에 중요한 요소임을 인식하게 되었습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TroubleShooting;