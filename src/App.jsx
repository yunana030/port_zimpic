import React from 'react';
import WindowFrame from './components/WindowFrame';
import YutubePlayer from './contents/YoutubePlayer.jsx/YutubePlayer';
import DevEnv from './contents/DevEnv/DevEnv';
import ImageFeed from './contents/ImageFeed/ImageFeed';
import Flow from './contents/Flow/Flow';
import TroubleShooting from './contents/TroubleShooting/TroubleShooting';
import UseCase from './contents/UseCase/UseCase';
import ERD from './contents/ERD/ERD';
import ServiceInfo from './contents/ServiceInfo/ServiceInfo';
import Growth from './contents/Growth/Growth';
import {useState} from 'react';
import "./App.css";


function App() {
  // 어떤 모달이 열려있는지 저장 (null이면 닫힌 상태)
  const [openModal, setOpenModal] = React.useState(null);
  // 모달을 닫는 함수
  const closeModal = () => setOpenModal(null);

  return (
    <div className="main-wrapper bg-background-light dark:bg-background-dark font-display text-slate-700 dark:text-slate-200">
      
      {/* 1. 다크모드 제어 버튼 */}
      <div className="fixed top-4 right-4 z-50">
        <button 
          className="bg-white dark:bg-slate-800 p-2 rounded-full border-2 border-border-color shadow-sm" 
          onClick={() => document.documentElement.classList.toggle('dark')}
        >
          <span className="material-symbols-outlined block dark:hidden">dark_mode</span>
          <span className="material-symbols-outlined hidden dark:block">light_mode</span>
        </button>
      </div>

      {/* 2. 메인 그리드 레이아웃 (9개 창) */}
      <div className="content-grid">

        {/* 1. Chat */}
        <div onClick={() => setOpenModal('chat')} className="lg:col-span-3 cursor-pointer">
          <WindowFrame title="DevelopmenT Environment" headerColor="bg-pastel-blue dark:bg-blue-900" height="h-[350px]">
            <DevEnv />
          </WindowFrame>
        </div>

        {/* 2. Feed */}
        <div onClick={() => setOpenModal('feed')} className="lg:col-span-4 cursor-pointer">
          <WindowFrame title="Image Feed" headerColor="bg-white/80 dark:bg-slate-800" height="h-[350px]" icon={<div className="w-4 h-4 rounded-full bg-pastel-purple/50"></div>}>
            <ImageFeed />
          </WindowFrame>
        </div>
          
        {/* 3. Calendar (Flow) */}
        <div onClick={() => setOpenModal('calendar')} className="lg:col-span-5 cursor-pointer">
          <WindowFrame title="System Flow" headerColor="bg-pastel-purple dark:bg-purple-900" height="h-[350px]" icon={<span className="material-symbols-outlined text-sm">calendar_month</span>}>
            <Flow />
          </WindowFrame>
        </div>

        {/* 4. Music Player */}
        <div onClick={() => setOpenModal('music')} className="lg:col-span-9 cursor-pointer">
          <WindowFrame title="YuTube Player" headerColor="bg-white/50 dark:bg-slate-800" height="h-[450px]" icon={<span className="material-symbols-outlined text-pastel-blue">smart_display</span>}>
            <YutubePlayer />
          </WindowFrame>
        </div>

        {/* 5. Asset Vault (TroubleShooting) */}
        <div onClick={() => setOpenModal('asset')} className="lg:col-span-3 cursor-pointer">
          <WindowFrame title="Trouble Shooting" headerColor="bg-pastel-blue dark:bg-blue-800" height="h-[450px]">
            <TroubleShooting />
          </WindowFrame>
        </div>

        {/* 6. README (UseCase) */}
        <div onClick={() => setOpenModal('readme')} className="lg:col-span-2 cursor-pointer">
          <WindowFrame title="Use Case" headerColor="bg-white dark:bg-slate-800" height="h-44" icon={<span className="material-symbols-outlined text-pastel-blue text-3xl">description</span>}>
            <UseCase />
          </WindowFrame>
        </div>

        {/* 7. Login (ERD) */}
        <div onClick={() => setOpenModal('login')} className="lg:col-span-4 cursor-pointer">
          <WindowFrame title="ERD" headerColor="bg-pastel-blue dark:bg-blue-900" height="h-44">
            <ERD />
          </WindowFrame>
        </div>

        {/* 8. Loading (ServiceInfo) */}
        <div onClick={() => setOpenModal('loading')} className="lg:col-span-3 cursor-pointer">
          <WindowFrame title="Service Info" headerColor="bg-pastel-blue dark:bg-blue-900" height="h-44">
            <ServiceInfo />
          </WindowFrame>
        </div>

        {/* 9. Alert (Growth) */}
        <div onClick={() => setOpenModal('alert')} className="lg:col-span-3 cursor-pointer">
          <WindowFrame title="Learing & Growth" headerColor="bg-pastel-blue dark:bg-blue-900" height="h-44">
            <Growth />
          </WindowFrame>
        </div>

      </div>

      {/* 3. 하단 시스템 상태 바 */}
      <div className="fixed bottom-4 left-4 text-[10px] font-mono opacity-40 uppercase pointer-events-none">
        System v4.2.2 // Pastel.OS Stable Build // 9 Objects Loaded // Media Engine Active
      </div>

      {/* 4. 모달 레이어 (클릭 시 등장) */}
      {openModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div 
            className={`modal-window size-${
              openModal === 'chat' ? 'chat' :
              openModal === 'feed' ? 'feed' :
              openModal === 'music' ? 'music' :
              openModal === 'readme' ? 'readme' : 'default'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <WindowFrame 
              title={
                openModal === 'chat' ? 'Development Environment Full View' :
                openModal === 'feed' ? 'Image Feed Full View' :
                openModal === 'calendar' ? 'System Flow Full View' :
                openModal === 'music' ? 'YuTube Player Full View' :
                openModal === 'asset' ? 'Trouble Shooting Full View' :
                openModal === 'readme' ? 'Use Case Full View' :
                openModal === 'login' ? 'ERD Full View' :
                openModal === 'loading' ? 'Service Info Full View' :
                openModal === 'alert' ? 'Learing & Growth' : 'Full View'
              } 
              showClose={true} 
              onClose={closeModal}
              height="100%"
            >
              {openModal === 'chat' && <DevEnv isModal={true} />}
              {openModal === 'feed' && <ImageFeed isModal={true} />}
              {openModal === 'calendar' && <Flow isModal={true} />}
              {openModal === 'music' && <YutubePlayer isModal={true} />}
              {openModal === 'asset' && <TroubleShooting isModal={true} />}
              {openModal === 'readme' && <UseCase isModal={true} />}
              {openModal === 'login' && <ERD isModal={true} />}
              {openModal === 'loading' && <ServiceInfo isModal={true} />}
              {openModal === 'alert' && <Growth isModal={true} />}
            </WindowFrame>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;