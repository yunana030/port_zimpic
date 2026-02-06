import React from 'react';

const WindowFrame = ({ title, headerColor, children, colSpan, height, icon, showClose = true }) => {
  // 테일윈드 컴파일러가 인식할 수 있도록 클래스 풀네임을 매핑합니다.
  const colSpanMap = {
    "lg:col-span-2": "lg:col-span-2",
    "lg:col-span-3": "lg:col-span-3",
    "lg:col-span-4": "lg:col-span-4",
    "lg:col-span-5": "lg:col-span-5",
    "lg:col-span-9": "lg:col-span-9",
    "lg:col-span-12": "lg:col-span-12",
  };

  const safeColSpan = colSpanMap[colSpan] || colSpan;

  return (
    <div className={`${safeColSpan} ${height} retro-window bg-pastel-yellow dark:bg-slate-900 overflow-hidden flex flex-col`}>
      <div className={`${headerColor} p-2 border-b-2 border-border-color flex justify-between items-center`}>
        <div className="flex items-center gap-2 text-slate-700 dark:text-white">
          {icon ? icon : <div className="w-4 h-4 rounded-full bg-white/50"></div>}
          <span className="text-[65px font-bold uppercase tracking-wider">{title}</span>
        </div>
        <div className="flex gap-1">
          <div className="header-btn bg-white/30"></div>
          {showClose && <div className="header-btn bg-red-300"></div>}
        </div>
      </div>
      <div className="flex-1 overflow-hidden relative">
        {children}
      </div>
    </div>
  );
};

export default WindowFrame;