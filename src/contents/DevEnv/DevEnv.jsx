import React from 'react';

const DevEnv = () => {
  const chatData = [
    {
      q: "ZIMPIC 프로젝트에서 사용한 머신러닝 기술은 뭐야?",
      a: "<span class='highlight'>Python</span>과 <span class='highlight'>Google Colab</span>을 기반으로 작업했어! <span class='highlight'>Label Studio</span>로 데이터를 정제하고, <span class='highlight'>YOLO 모델</span>을 사용해서 객체 인식 기능을 구현했지. 🚚"
    },
    {
      q: "프론트엔드는 어떤 걸 사용했어?",
      a: "<span class='highlight'>React</span>로 UI 컴포넌트를 구현했어! 특히 <span class='highlight'>Vite</span>를 환경으로 선택해서 빌드 속도를 높였고, <span class='highlight'>Zustand</span>로 전역 상태를 관리했어. 또한 <span class='highlight'>Axios</span>로 백엔드 API 통신을 했고, <span class='highlight'>Bootstrap</span>과 <span class='highlight'>Three.js</span>로 시각적 UI를 구현했어! ✨"
    },
    {
      q: "백엔드 구성도 궁금해!",
      a: "<span class='highlight'>Django</span>와 <span class='highlight'>REST API</span>를 사용했어! <span class='highlight'>Swagger</span>로 API를 문서화해서 효율적으로 관리했지. 데이터베이스로는 <span class='highlight'>MySQL</span>을 사용하고 있어. 🗄️"
    },
    {
      q: "협업할 때는 어떤 도구를 썼어?",
      a: "<span class='highlight'>Git/GitHub</span>는 기본! <span class='highlight'>Slack</span>으로 실시간 자료를 공유하고 <span class='highlight'>Notion</span>을 활용해 일정과 문서를 관리하며 팀원들과 소통했어. 🤝"
    },
    {
      q: "그럼 여기서 너의 담당 역할은 뭐였어?",
      a: "나는 백엔드 개발자로서 <span class='highlight'>모델 추론 결과와 API 연동</span>을 전담했어! 추가로 모델 학습에 필요한 <span class='highlight'>데이터 수집 및 정제</span> 프로세스도 함께 주도했지! 💻"
    }
  ];

  return (
    <div className="flex flex-col h-full bg-slate-50 font-sans">
      {/* 🚀 채팅 메시지 영역 (overflow-y-auto로 스크롤 활성화) */}
      <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-6 custom-scrollbar">
        
        {chatData.map((item, index) => (
          <React.Fragment key={index}>
            {/* 질문 (왼쪽 - 사용자) */}
            <div className="flex flex-col items-start animate-fade-in">
              <span className="text-[12px] text-slate-400 ml-2 mb-1">User</span>
              <div className="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-2xl rounded-tl-none shadow-sm max-w-[80%] text-sm">
                {item.q}
              </div>
            </div>

            {/* 답변 (오른쪽 - AI) */}
            <div className="flex flex-col items-end animate-fade-in">
              <span className="text-[12px] text-[#72A3EF] mr-2 mb-1 font-bold">YUNA</span>
              
              {/* ⚠️ 기존의 {item.a} 대신 아래 코드를 넣으세요! */}
              <div 
                className="bg-[#72A3EF] text-white px-4 py-2 rounded-2xl rounded-tr-none shadow-md max-w-[85%] text-[15px] leading-relaxed"
                dangerouslySetInnerHTML={{ __html: item.a }} 
              />
            </div>
          </React.Fragment>
        ))}
        
      </div>

      {/* 하단 입력바 (고정) */}
      <div className="p-3 bg-white border-t border-slate-100 flex gap-2 items-center">
        <div className="flex-1 bg-slate-100 px-4 py-2 rounded-full text-[14px] text-slate-400">
          프로젝트 역량에 대해 더 물어보세요...
        </div>
        <button className="w-8 h-8 bg-[#72A3EF] text-white rounded-full flex items-center justify-center shadow-sm">
          <span className="material-symbols-outlined text-[18px]">send</span>
        </button>
      </div>

      {/* 스크롤바 커스텀 스타일 (선택사항) */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #CBD5E1;
          border-radius: 10px;
        }
        .highlight {
        font-weight: 800;
        color: #ffffff; /* 흰색 글씨 */
        text-decoration: underline;
        text-underline-offset: 3px;
        text-decoration-color: rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </div>
  );
};

export default DevEnv;