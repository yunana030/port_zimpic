import React from 'react';

const WindowFrame = ({ title, headerColor, children, colSpan, height, icon, showClose = true, onClose}) => {
  const colSpanMap = {
    "lg:col-span-2": "lg:col-span-2",
    "lg:col-span-3": "lg:col-span-3",
    "lg:col-span-4": "lg:col-span-4",
    "lg:col-span-5": "lg:col-span-5",
    "lg:col-span-9": "lg:col-span-9",
    "lg:col-span-12": "lg:col-span-12",
  };

  const safeColSpan = colSpanMap[colSpan] || colSpan;
  
  // ⭐ 핵심: height가 안 들어오면 h-full을 기본으로 써서 모달에서 꽉 차게 만듭니다.
  // 메인 화면에서는 부모가 h-44를 넣어주니 그게 우선 적용됩니다.
  const finalHeight = height || "h-full";

  return (
    <div className={`retro-window ${safeColSpan} ${finalHeight} 
      bg-white rounded-[12px] border border-slate-200 shadow-sm 
      overflow-hidden flex flex-col w-full group`}> {/* group 클래스 추가: 호버 효과용 */}
      
      {/* 상단바 */}
      <div className="bg-white px-4 py-2 border-b border-slate-100 flex justify-between items-center h-[44px] shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-5 bg-[#72A3EF] rounded-full"></div> 
          <span className="text-[16px] font-bold text-slate-800 tracking-tight">{title}</span>
        </div>

        {/* 닫기 버튼 영역 */}
        <div className="flex gap-2">
          {showClose && (
            <button 
              onClick={(e) => {
                e.stopPropagation(); // 부모 클릭 이벤트 전파 방지
                onClose && onClose();
              }}
              className="w-5 h-5 bg-red-400/80 hover:bg-red-500 rounded-full flex items-center justify-center transition-all duration-200 group-hover:scale-110 active:scale-90"
              title="Close"
            >
              {/* 마우스 올렸을 때만 엑스 아이콘이 슬쩍 보이게 */}
              <span className="material-symbols-outlined text-white text-[14px] opacity-0 hover:opacity-100 font-bold transition-opacity">
                close
              </span>
            </button>
          )}
          {/* 장식용 노랑/초록 점 (Mac OS 느낌) */}
          <div className="w-5 h-5 bg-amber-300/80 rounded-full hidden md:block"></div>
          <div className="w-5 h-5 bg-emerald-400/80 rounded-full hidden md:block"></div>
        </div>
      </div>

      {/* 내용 영역 */}
      <div className="flex-1 overflow-hidden relative w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default WindowFrame;