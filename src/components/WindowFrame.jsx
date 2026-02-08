import React from 'react';

const WindowFrame = ({ title, headerColor, children, colSpan, height, icon, showClose = true }) => {
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
      overflow-hidden flex flex-col w-full`}>
      
      {/* 상단바: 높이를 딱 44px 정도로 고정합니다. h-full 절대 금지! */}
      <div className="bg-white px-4 py-2 border-b border-slate-100 flex justify-between items-center h-[44px] shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-5 bg-[#72A3EF] rounded-full"></div> 
          <span className="text-[16px] font-bold text-slate-800 tracking-tight">{title}</span>
        </div>
        <div className="flex gap-1">
          {showClose && <div className="w-3 h-3 bg-red-400 rounded-full"></div>}
        </div>
      </div>

      {/* 내용 영역: flex-1을 주면 상단바를 제외한 남은 높이를 다 먹습니다. */}
      <div className="flex-1 overflow-hidden relative w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default WindowFrame;