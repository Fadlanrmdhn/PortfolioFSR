import { useState } from "react";
import "./App.css";
import image from "./assets/hero.png";
import { MarqueeComp } from "./components/MarqueeComp";
import SpeedDialComp from "./components/SpeeddialComp";

function App() {
  return (
    <>
      <main className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 xl:px-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center mt-[10rem]">
        <section className="col-span-1 lg:col-span-6 flex flex-col gap-6 order-1 animate-fade-up">
          <div className="flex flex-col items-start text-left">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] md:text-[11px] font-medium tracking-wide mb-5 transition-colors duration-500
              bg-white/5 text-gray-300 border-white/10"
            ></div>
            <h1 className="text-4xl md:text-5xl lg:text-[52px] font-medium tracking-tight leading-[1.15] mb-5 transition-colors duration-500 text-white">
              Welcome to
              <br />
              <span className="text-transparent bg-clip-text transition-colors duration-500 bg-gradient-to-r from-gray-100 via-gray-300 to-gray-500">
                My Portfolio Website.
              </span>
            </h1>
            <p className="text-sm md:text-base font-normal leading-relaxed mb-8 max-w-[480px] transition-colors duration-500 text-gray-400">
              I’m a developer who enjoys building practical digital solutions
              and improving how things work.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                className="px-7 py-3.5 rounded-full font-medium text-xs md:text-sm tracking-wide transition-all flex items-center gap-2 shadow-lg hover:-translate-y-0.5
                  bg-white text-black hover:bg-gray-200 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              >
                <i className="fa-solid fa-arrow-right -rotate-45 text-[10px]"></i>
              </button>
              <a href="">
                <button
                  className="px-7 py-3.5 rounded-full font-medium text-xs md:text-sm tracking-wide border transition-all hover:-translate-y-0.5
                  border-white/10 text-white hover:bg-white/5"
                ></button>
              </a>
            </div>
          </div>
        </section>
        <section className="col-span-1 lg:col-span-6 w-full order-2 flex justify-center lg:justify-end animate-fade-up perspective-[2000px] ">
          <div className="relative w-full max-w-[500px] lg:max-w-[520px]">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden group z-20 transition-colors duration-500 bg-[#0A0A0A]/40 backdrop-blur-xl border border-white/10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] rounded-[2rem]">
              <div className="h-8 md:h-10 w-full border-b flex items-center px-3 md:px-4 justify-between transition-colors duration-500 bg-[#0a0a0a]/50 border-white/5">
                <div className="flex gap-1.5 opacity-50 group-hover:opacity-100 transition-opacity">
                  <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-colors duration-500 bg-gray-600"></div>
                  <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-colors duration-500 bg-gray-600"></div>
                </div>
                <div className="flex items-center gap-1.5 px-2 md:px-3 py-1 rounded-full border transition-colors duration-500 bg-[#141414] border-white/5">
                  <i className="fa-solid fa-code text-[8px] md:text-[9px] transition-colors duration-500 text-gray-400"></i>
                  <span className="text-[9px] md:text-[10px] font-medium tracking-wide transition-colors duration-500 text-gray-300">
                    My Portfolio
                  </span>
                </div>
              </div>
              <div className="relative w-full h-[calc(100%-32px)] md:h-[calc(100%-40px)] p-3 md:p-4 flex gap-3 md:gap-4 transition-colors duration-500 bg-[#030303]/60">
                <div className="relative w-2/5 sm:w-1/2 h-full rounded-xl md:rounded-2xl overflow-hidden border transition-colors duration-500 group/photo border-white/5 bg-[#0a0a0a]">
                  <div
                    className="absolute inset-0 bg-gradient-to-t z-10 transition-opacity duration-500 group-hover/photo:opacity-40
                      from-black/90 via-black/10 opacity-70"
                  ></div>
                  <img src={image} alt="" />
                  <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 z-20">
                    <span className="text-white text-xs md:text-sm font-medium tracking-wide block drop-shadow-md">
                      Fadlan Septian Ramadhan
                    </span>
                    <span className="text-gray-200 text-[8px] md:text-[9px] uppercase tracking-widest font-light mt-0.5 md:mt-1 flex items-center gap-1.5 drop-shadow-md">
                      <span className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                      Online
                    </span>
                  </div>
                </div>
                <div className="w-3/5  sm:w-1/2 flex flex-col gap-2 md:gap-3 py-1 md:py-2  md:h-[5rem] md:w-[0] rounded-md transition-colors duration-500 bg-white/10 animate-pulse">
                  <div className="absolute z-30 animate-float-delay-1 hidden lg:block w-[15rem] ">
                    <div className="p-3.5 rounded-2xl flex items-center gap-3 transition-colors duration-500 bg-[#0A0A0A]/60 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_-10px_rgba(255,255,255,0.02)]">
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center border transition-colors duration-500
                       bg-white/5 text-gray-300 border-white/10"
                      >
                        <i className="fa-solid fa-lightbulb"></i>
                      </div>
                      <div className="text-[11px] font-medium tracking-wide transition-colors duration-500 text-white">
                        Sky
                        <div className="text-[9px] font-light tracking-wider uppercase transition-colors duration-500 text-gray-500">
                          Project
                        </div>
                      </div>
                    </div>
                    <div className="absolute z-30 animate-float-delay-1 hidden lg:block w-[15rem] py-3">
                      <div className="p-3.5 rounded-2xl flex items-center gap-3 transition-colors duration-500 bg-[#0A0A0A]/60 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_-10px_rgba(255,255,255,0.02)]">
                        <div
                          className="w-9 h-9 rounded-full flex items-center justify-center border transition-colors duration-500
                       bg-white/5 text-gray-300 border-white/10"
                        >
                          <i className="fa-solid fa-lightbulb"></i>
                        </div>
                        <div className="text-[11px] font-medium tracking-wide transition-colors duration-500 text-white">
                          Sky
                          <div className="text-[9px] font-light tracking-wider uppercase transition-colors duration-500 text-gray-500">
                            Project
                          </div>
                        </div>
                      </div>
                      <div className="absolute z-30 animate-float-delay-1 hidden lg:block w-[15rem] py-3">
                        <div className="p-3.5 rounded-2xl flex items-center gap-3 transition-colors duration-500 bg-[#0A0A0A]/60 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_-10px_rgba(255,255,255,0.02)]">
                          <div
                            className="w-9 h-9 rounded-full flex items-center justify-center border transition-colors duration-500
                       bg-white/5 text-gray-300 border-white/10"
                          >
                            <i className="fa-solid fa-lightbulb"></i>
                          </div>
                          <div className="text-[11px] font-medium tracking-wide transition-colors duration-500 text-white">
                            Sky
                            <div className="text-[9px] font-light tracking-wider uppercase transition-colors duration-500 text-gray-500">
                              Project
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <MarqueeComp satu/>
                  <MarqueeComp dua/>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="container mx-auto w-full h-screen text-white flex justify-center items-center overflow-x-hidden -mt-[10rem]">
          <MarqueeComp dua/>
      </div>
      <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] font-['Poppins'] flex flex-col items-end">
      <SpeedDialComp />
      </div>
    </>
  );
}

export default App;
