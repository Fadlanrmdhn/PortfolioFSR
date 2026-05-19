import { useState } from "react";
import "../App.css";
import image from "../assets/hero.png";
import profil from "../assets/profils.jpeg";
import { MarqueeComp } from "../components/MarqueeComp";
import SpeedDialComp from "../components/SpeedDialComp";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { LuGraduationCap } from "react-icons/lu";
import { LuDownload } from "react-icons/lu";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";
import { IoSendOutline } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { LuCodeXml } from "react-icons/lu";
import { FaLaravel } from "react-icons/fa6";
import { IoLogoReact } from "react-icons/io5";
import { FaJsSquare } from "react-icons/fa";
import { FaPhp } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { FaFigma } from "react-icons/fa6";
import { SiCanva } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { FaFlutter } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiDbeaver } from "react-icons/si";
import { LuMonitorSmartphone } from "react-icons/lu";
import { FaBriefcase } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { FaPenNib } from "react-icons/fa";
import { LuBrainCircuit } from "react-icons/lu";
import { Link } from "react-router-dom";
import CardThreeD from "../components/CardThreeD";
import CardCertif from "../components/CardCertif";

function App() {
  const experiences = [
    {
      year: "Now",
      title: "Student",
      company: "",
      description:
        "Belajar fundamental",
      icon: <FaBriefcase className="w-5 h-5" />,
    },
    {
      year: "2022-2024",
      title: "Frontend Developer",
      company: "Dicoding.com",
      description: "Membuat web aplikasi interaktif dengan modern framework",
      icon: <LuCodeXml className="w-5 h-5" />,
    },
    {
      year: "2024-Now",
      title: "Pengembangan Perangkat Lunak Dan Gim",
      company: "SMK WIKRAMA BOGOR",
      description: "Belajar fundamental programming dan software engineering",
      icon: <LuGraduationCap className="w-5 h-5" />,
    },
  ];

  return (
    <>
      <header className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 xl:px-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center py-25 mt-10 md:py-5 lg:mt-[10rem]">
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
            <span className="border w-full mb-2 -mt-3"></span>
            <p className="text-sm md:text-base font-normal leading-relaxed mb-8 max-w-[480px] transition-colors duration-500 text-gray-400">
              I’m a developer who enjoys building practical digital solutions
              and improving how things work.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                className="px-7 py-3.5 rounded-full font-medium text-xs md:text-sm tracking-wide transition-all flex items-center gap-2 shadow-lg hover:-translate-y-0.5
                  bg-white text-black hover:bg-gray-200 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              >
                View Project
                <GoArrowUpRight className="font-bold text-lg"/>
              </button>
              <a href="">
                <button
                  className="px-7 py-3.5 rounded-full font-medium text-xs md:text-sm tracking-wide border transition-all hover:-translate-y-0.5
                  border-white/10 text-white hover:bg-white/5"
                >
                  About Me
                </button>
              </a>
            </div>
          </div>
        </section>
        <section className="col-span-1 lg:col-span-6 w-full order-2 flex justify-center lg:justify-end animate-fade-up perspective-[2000px] ">
          <div className="relative w-full max-w-[500px] lg:max-w-[520px]">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden group z-20 transition-colors duration-500 bg-[#0A0A0A]/40 backdrop-blur-xl border border-white/10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] rounded-[2rem]">
              <div className="h-8 md:h-10 w-full border-b flex items-center px-3 md:px-4 justify-between transition-colors duration-500 bg-[#0a0a0a]/50 border-white/5">
                <div className="flex gap-1.5 z-10 opacity-50 group-hover:opacity-100 transition-opacity">
                  <div className="flex justify-center border mt-[1rem] -ms-[3rem]  w-[8rem] -rotate-40">
                    hello
                  </div>
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
                  <img src={profil} alt="" />
                  <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 z-20">
                    <span className="text-white text-xs md:text-sm font-medium tracking-wide block drop-shadow-md">
                      Fadlan Septian Ramadhan
                    </span>
                    <span className="text-gray-200 text-[8px] md:text-[9px] uppercase tracking-widest font-light mt-0.5 md:mt-1 flex items-center gap-1.5 drop-shadow-md">
                      <span className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                      I'am Here
                    </span>
                  </div>
                </div>
                <div className="w-3/5  sm:w-1/2 flex flex-col gap-2 md:gap-3 py-1 md:py-2 mt-2  md:h-[5rem] md:w-[0] rounded-md transition-colors duration-500 bg-white/10 animate-pulse">
                  <div className="absolute z-30 animate-float-delay-1 w-[15rem] ">
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
                    <div className="absolute z-30 animate-float-delay-1  w-[15rem] py-3">
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
                      <div className="absolute z-30 animate-float-delay-1  w-[15rem] py-3">
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
                  <MarqueeComp satu />
                  <MarqueeComp dua />
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>

      <div className="mt-[12rem] border-t-2 border-gray-500 justify-center items-center overflow-x-hidden hidden md:flex">
        <MarqueeComp tiga />
      </div>
      <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] font-['Poppins'] flex flex-col items-end">
        <SpeedDialComp />
      </div>

      <main className="relative w-full overflow-hidden font-['Poppins'] transition-colors duration-500 py-40 md:py-15 bg-[#030303] mt-[3rem]">
        <div className="max-w-[1440px] mx-auto relative z-10 px-6 md:px-12 lg:px-20 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 flex flex-col items-start text-left lg:sticky lg:top-[140px] lg:-mt-4 xl:-mt-6">
              <section className="col-span-1 lg:col-span-6 flex flex-col gap-6 order-1 animate-fade-up">
                <div className="flex flex-col items-start text-left">
                  <div className="flex items-center text-[#646b7a] mb-3">
                    <span className="border w-[3rem] "></span>
                    <div className="mx-3">
                      <h3>ABOUT ME</h3>
                    </div>
                  </div>
                  <h2 className="text-4xl font-mono md:text-5xl lg:text-[52px] font-bold tracking-tight leading-[1.15] mb-5 transition-colors duration-500 text-white">
                    Hello I'am
                    <br />
                    <span className="text-transparent bg-clip-text transition-colors duration-500 bg-gradient-to-r from-gray-100 via-gray-300 to-gray-500">
                      Fadlan Ramadhan
                    </span>
                  </h2>
                  <p className="text-sm md:text-base font-normal leading-relaxed mb-8 max-w-[480px] transition-colors duration-500 text-gray-400">
                    Hi, I'm Fadlan Ramadhan, an IT enthusiast from Bogor,
                    Indonesia. I focus on understanding systems and turning
                    ideas into tangible digital solutions.
                  </p>
                  <p className="text-sm md:text-base font-normal leading-relaxed mb-8 max-w-[480px] transition-colors duration-500 text-gray-400">
                    I explore technology and creative media, and constantly push
                    myself to grow, build, and create with purpose.
                  </p>
                  <div
                    to=""
                    className="p-3.5 w-[15rem] rounded-full flex items-center gap-5 transition-all duration-500 bg-[#0A0A0A]/60 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_-10px_rgba(255,255,255,0.02)] hover:bg-[#111] hover:border-white/20"
                  >
                    <div
                      className="w-9 h-9 p-5 rounded-full border transition-colors duration-500
                bg-white/5 text-gray-300 border-white/10 hover:scale-105"
                    >
                      <FaLongArrowAltRight className="-mt-2 -ms-2" />
                    </div>
                    <div className="text-[11px] font-medium tracking-wide transition-colors duration-500 text-white">
                      <div className="text-[10px] font-light tracking-wider uppercase transition-colors duration-500 text-gray-500">
                        Let's Connect
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="lg:col-span-7 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                <div className="container col-span-1 md:col-span-2 p-5 md:p-6 rounded-[1.5rem] md:rounded-[2rem] border transition-all duration-500 group overflow-hidden bg-[#0A0A0A] border-white/10 hover:border-white/20 hover:bg-[#0f0f0f] shadow-lg">
                  <div>
                    <div className="flex items-center gap-1.5 px-2 md:px-3 py-3 rounded-full border transition-colors duration-500 bg-[#141414] border-white/5 w-[12rem]">
                      <span className="w-1 md:w-5 h-1 md:h-2 rounded-full bg-green-500 animate-pulse"></span>
                      <span className="text-[9px] md:text-[15px] font-medium tracking-wide transition-colors duration-500 text-gray-300">
                        Available for Projects
                      </span>
                    </div>
                    <div className="flex gap-2 px-3 py-3 text-2xl">
                      <p>Full</p>
                      <span></span>
                      <p>Stack</p>
                      <span></span>
                      <p>Developer</p>
                    </div>
                    <p className="px-3">Specialized in React & Node.js</p>
                  </div>
                  <div className="relative z-10 flex gap-6 px-3 py-2">
                    <div>
                      <div className="text-3xl font-mono">10+</div>
                      <div className="text-sm text-white/70">Projects</div>
                    </div>
                    <div>
                      <div className="text-3xl font-mono">2+</div>
                      <div className="text-sm text-white/70">Years Exp</div>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 p-5 md:p-6 rounded-[1.5rem] md:rounded-[2rem] border transition-all duration-500 flex flex-col justify-between group bg-[#0A0A0A] border-white/10 hover:border-white/20 hover:bg-[#0f0f0f] shadow-lg">
                  <div className="">
                    <span className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                      <i className="">
                        <LuCodeXml className="w-6 h-6 text-blue-400" />
                      </i>
                    </span>
                    <div className="text-3xl font-mono mb-1">20+</div>
                    <div className="text-sm text-gray-400 my-3">
                      Technologies
                    </div>
                  </div>
                </div>
                <div className="col-span-1 p-5 md:p-6 rounded-[1.5rem] md:rounded-[2rem] border transition-all duration-500 flex flex-col justify-between group relative overflow-hidden bg-[#0A0A0A] border-white/10 hover:border-white/20 hover:bg-[#0f0f0f] shadow-lg">
                  <div className="">
                    <span className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                      <i className="">
                        <FaUsers className="w-6 h-6 text-purple-400" />{" "}
                      </i>
                    </span>
                    <div className="text-3xl font-mono mb-1">2+</div>
                    <div className="text-sm text-gray-400 my-3">
                      Happy Clients
                    </div>
                  </div>
                </div>
                <div className="col-span-1 md:col-span-2 p-5 md:p-10 rounded-[1.5rem] md:rounded-[2rem] border transition-all duration-500 flex flex-col md:flex-row gap-5 items-start group bg-[#0A0A0A] border-white/10 hover:border-white/20 hover:bg-[#0f0f0f] shadow-lg justify-between h-[15rem] md:items-center">
                  <div>
                    <div className="flex justify-between gap-2 items-center w-5">
                      <span className="border p-2 rounded-md bg-[#0A0A0A] border-white/10">
                        <LuGraduationCap />
                      </span>
                      <p className="text-gray-500 text-xs">EDUCATION</p>
                    </div>
                    <div className="">
                      <h3 className="font-bold px-2">SMK WIKRAMA BOGOR</h3>
                      <p className="font-light text-sm p-2 text-blue-500 ">
                        Pengembangan Perangkat Lunak dan Gim
                      </p>
                    </div>
                  </div>
                  <span className="border w-[3rem] rotate-90 hidden md:flex"></span>
                  <div>
                    <div className="flex justify-between gap-2 items-center w-5 -mt-8">
                      <span className="border p-2 rounded-md bg-[#0A0A0A] border-white/10">
                        <IoLocationOutline />
                      </span>
                      <p className="text-gray-500 text-xs">LOCATION</p>
                    </div>
                    <div className="">
                      <h3 className="font-bold">
                        BOGOR | JAWA BARAT | INDONESIA
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="relative z-10 px-5 pt-25 pb-15 mx-auto">
            <div className="min-h-[80vh] flex items-center justify-center">
              <div className="text-center max-w-4xl">
                <div className="inline-block mb-6 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm">
                  <div className="flex items-center gap-2 px-2 md:px-5 py-3 justify-center rounded-full border transition-colors duration-500 bg-[#141414] border-white/5 w-[12rem]">
                    <span className="w-1 md:w-2 h-1 md:h-2 rounded-full bg-green-400 animate-pulse"></span>
                    <span className="text-[9px] md:text-[15px] font-medium tracking-wide transition-colors duration-500 text-gray-300">
                      Available for Work
                    </span>
                  </div>
                </div>

                <h3 className="text-7xl font-bold mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-white via-white/90 to-white/60 bg-clip-text text-transparent">
                    Full Stack Developer
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-violet-400 bg-clip-text text-transparent">
                    Building Digital Excellence
                  </span>
                </h3>

                <p className="text-xl text-white/50 mb-7 leading-relaxed max-w-2xl mx-auto">
                  Crafting modern web & mobile applications with clean code,
                  elegant design, and seamless user experiences.
                </p>

                <div className="flex gap-4 justify-center mb-12">
                  <button className="group px-8 py-4 bg-white text-black rounded-xl font-medium hover:shadow-lg hover:shadow-white/20 transition-all duration-300 hover:scale-105">
                    <span className="flex items-center gap-2">
                      Get in touch
                      <IoSendOutline className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                  <button className="px-8 py-4 bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm rounded-xl font-medium hover:bg-white/[0.06] transition-all duration-300 hover:scale-105">
                    <span className="flex items-center gap-2">
                      Download CV
                      <LuDownload className="w-4 h-4" />
                    </span>
                  </button>
                </div>

                <div className="flex gap-6 justify-center -mt-5">
                  <a
                    href="#"
                    className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm flex items-center justify-center hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-300 group"
                  >
                    <FiGithub className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm flex items-center justify-center hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-300 group"
                  >
                    <FiLinkedin className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm flex items-center justify-center hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-300 group"
                  >
                    <MdMailOutline className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                  </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-1 md:gap-40 gap-4 mb-16 md:mb-10 mt-5 w-full justify-items-center">
                  <div className="container w-60 col-span-1 md:col-span-1 p-5 md:p-6 rounded-3xl md:rounded-4xl border transition-all duration-500 group overflow-hidden bg-[#0A0A0A] border-white/10 hover:border-white/20 hover:bg-[#0f0f0f] shadow-lg hover:-translate-y-2 hover:shadow-xl flex justify-between">
                    <span className="w-12 h-12 rounded-xl transition-colors duration-300 bg-white/5 text-gray-300 group-hover:bg-white group-hover:text-black flex justify-center items-center">
                      <LuCodeXml className="w-5 h-5 text-white/60 group-hover:text-black transition-colors" />
                    </span>
                    <p className="flex items-center">Web Development</p>
                  </div>
                  <div className="container w-60 col-span-1 md:col-span-1 p-5 md:p-6 rounded-3xl md:rounded-4xl border transition-all duration-500 group overflow-hidden bg-[#0A0A0A] border-white/10 hover:border-white/20 hover:bg-[#0f0f0f] shadow-lg hover:-translate-y-2 hover:shadow-xl flex justify-between">
                    <span className="w-12 h-12 rounded-xl transition-colors duration-300 bg-white/5 text-gray-300 group-hover:bg-white group-hover:text-black flex justify-center items-center">
                      <FaPenNib className="w-5 h-5 text-white/60 group-hover:text-black transition-colors" />
                    </span>
                    <p className="flex items-center">UI/UX Design</p>
                  </div>
                  <div className="container w-60 col-span-1 md:col-span-1 p-5 md:p-6 rounded-3xl md:rounded-4xl border transition-all duration-500 group overflow-hidden bg-[#0A0A0A] border-white/10 hover:border-white/20 hover:bg-[#0f0f0f] shadow-lg hover:-translate-y-2 hover:shadow-xl flex justify-between">
                    <span className="w-12 h-12 rounded-xl transition-colors duration-300 bg-white/5 text-gray-300 group-hover:bg-white group-hover:text-black flex justify-center items-center">
                      <LuBrainCircuit className="w-5 h-5 text-white/60 group-hover:text-black transition-colors" />
                    </span>
                    <p className="flex items-center">Machine Learning</p>
                  </div>
                </div>
              </div>
            </div>
            <hr className="h-0.5 bg-[#131313] border-none rounded-4xl mt-5 md:mt-15" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 w-full py-10 md:py-20 mt-10 md:my-10">
              <div className="flex flex-col ">
                <div className="flex gap-5">
                  <div className="flex items-center gap-4 mb-6 md:mb-8">
                    <span className="w-12 h-12 rounded-xl transition-colors duration-300 bg-white/5 text-gray-300 group-hover:bg-white group-hover:text-black flex justify-center items-center">
                      <LuCodeXml className="w-5 h-5 text-white/60 group-hover:text-black transition-colors" />
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold tracking-tight text-white">
                      Programming & Tech
                    </h3>
                    <p className="text-[10px] md:text-[11px] font-medium uppercase tracking-[0.2em] mt-0.5 text-gray-500">
                      Languages || Frameworks
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-3 gap-3">
                  <div className="flex items-center gap-3 p-2.5 md:p-3 rounded-xl border transition-all duration-300 group bg-[#0A0A0A] border-white/5 hover:bg-[#111] hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.03)]">
                    <span className="w-10 h-10 rounded-xl transition-transform duration-300 bg-white/5 text-gray-300  group-hover:scale-110 flex justify-center items-center">
                      <FaJsSquare
                        style={{ color: "#efd81d" }}
                        className="w-5 h-5  group-hover:scale-110 transition-transform"
                      />
                    </span>
                    <p>JavaScript</p>
                  </div>
                  <div className="flex items-center gap-3 p-2.5 md:p-3 rounded-xl border transition-all duration-300 group bg-[#0A0A0A] border-white/5 hover:bg-[#111] hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.03)]">
                    <span className="w-10 h-10 rounded-xl transition-transform duration-300 bg-white/5 text-gray-300  group-hover:scale-110 flex justify-center items-center">
                      <IoLogoReact
                        style={{ color: "#00d2f7" }}
                        className="w-5 h-5  group-hover:scale-110 transition-transform"
                      />
                    </span>
                    <p>React.js</p>
                  </div>
                  <div className="flex items-center gap-3 p-2.5 md:p-3 rounded-xl border transition-all duration-300 group bg-[#0A0A0A] border-white/5 hover:bg-[#111] hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.03)]">
                    <span className="w-10 h-10 rounded-xl transition-transform duration-300 bg-white/5 text-gray-300  flex justify-center items-center">
                      <FaPhp
                        style={{ color: "#7377ad" }}
                        className="w-5 h-5  group-hover:scale-110 transition-transform"
                      />
                    </span>
                    <p>PHP</p>
                  </div>
                  <div className="flex items-center gap-3 p-2.5 md:p-3 rounded-xl border transition-all duration-300 group bg-[#0A0A0A] border-white/5 hover:bg-[#111] hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.03)]">
                    <span className="w-10 h-10 rounded-xl transition-transform duration-300 bg-white/5 text-gray-300 group-hover:scale-110 flex justify-center items-center">
                      <FaLaravel
                        style={{ color: "#f72f20" }}
                        className="w-5 h-5  group-hover:scale-110 transition-transform"
                      />
                    </span>
                    <p>Laravel</p>
                  </div>
                  <div className="flex items-center gap-3 p-2.5 md:p-3 rounded-xl border transition-all duration-300 group bg-[#0A0A0A] border-white/5 hover:bg-[#111] hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.03)]">
                    <span className="w-10 h-10 rounded-xl transition-transform duration-300 bg-white/5 text-gray-300 group-hover:scale-110 flex justify-center items-center">
                      <RiTailwindCssFill
                        style={{ color: "#00b2d1" }}
                        className="w-5 h-5  group-hover:scale-110 transition-transform"
                      />
                    </span>
                    <p>TailwindCss</p>
                  </div>
                  <div className="flex items-center gap-3 p-2.5 md:p-3 rounded-xl border transition-all duration-300 group bg-[#0A0A0A] border-white/5 hover:bg-[#111] hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.03)]">
                    <span className="w-10 h-10 rounded-xl transition-transform duration-300 bg-white/5 text-gray-300 group-hover:scale-110 flex justify-center items-center">
                      <FaGitAlt
                        style={{ color: "#e84e31" }}
                        className="w-5 h-5  group-hover:scale-110 transition-transform"
                      />
                    </span>
                    <p>Git</p>
                  </div>
                  <div className="flex items-center gap-3 p-2.5 md:p-3 rounded-xl border transition-all duration-300 group bg-[#0A0A0A] border-white/5 hover:bg-[#111] hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.03)]">
                    <span className="w-10 h-10 rounded-xl transition-transform duration-300 bg-white/5 text-gray-300 group-hover:scale-110 flex justify-center items-center">
                      <FaFlutter
                        style={{ color: "#5cc3f0" }}
                        className="w-5 h-5  group-hover:scale-110 transition-transform"
                      />
                    </span>
                    <p>Flutter</p>
                  </div>
                  <div className="flex items-center gap-3 p-2.5 md:p-3 rounded-xl border transition-all duration-300 group bg-[#0A0A0A] border-white/5 hover:bg-[#111] hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.03)]">
                    <span className="w-10 h-10 rounded-xl transition-transform duration-300 bg-white/5 text-gray-300 group-hover:scale-110 flex justify-center items-center">
                      <SiMysql
                        style={{ color: "#005e86" }}
                        className="w-5 h-5  group-hover:scale-110 transition-transform"
                      />
                    </span>
                    <p>MySql</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex gap-5">
                  <div className="flex items-center gap-4 mb-6 md:mb-8">
                    <span className="w-12 h-12 rounded-xl transition-colors duration-300 bg-white/5 text-gray-300 group-hover:bg-white group-hover:text-black flex justify-center items-center">
                      <LuMonitorSmartphone className="w-5 h-5 text-white/60 group-hover:text-black transition-colors" />
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold tracking-tight text-white">
                      Software & Tools
                    </h3>
                    <p className="text-[10px] md:text-[11px] font-medium uppercase tracking-[0.2em] mt-0.5 text-gray-500">
                      Applications || Platforms
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-3 gap-3">
                  <div className="flex items-center gap-3 p-2.5 md:p-3 rounded-xl border transition-all duration-300 group bg-[#0A0A0A] border-white/5 hover:bg-[#111] hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.03)]">
                    <span className="w-10 h-10 rounded-xl transition-transform duration-300 bg-white/5 text-gray-300 group-hover:scale-110 flex justify-center items-center">
                      <VscVscode
                        style={{ color: "#0076c6" }}
                        className="w-5 h-5  group-hover:scale-110 transition-transform"
                      />
                    </span>
                    <p>VS Code</p>
                  </div>
                  <div className="flex items-center gap-3 p-2.5 md:p-3 rounded-xl border transition-all duration-300 group bg-[#0A0A0A] border-white/5 hover:bg-[#111] hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.03)]">
                    <span className="w-10 h-10 rounded-xl transition-transform duration-300 bg-white/5 text-gray-300 group-hover:scale-110 flex justify-center items-center">
                      <FaFigma className="w-5 h-5  group-hover:scale-110 transition-transform" />
                    </span>
                    <p>Figma</p>
                  </div>
                  <div className="flex items-center gap-3 p-2.5 md:p-3 rounded-xl border transition-all duration-300 group bg-[#0A0A0A] border-white/5 hover:bg-[#111] hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.03)]">
                    <span className="w-10 h-10 rounded-xl transition-transform duration-300 bg-white/5 text-gray-300 group-hover:scale-110 flex justify-center items-center">
                      <SiCanva
                        style={{ color: "#356cdb" }}
                        className="w-5 h-5  group-hover:scale-110 transition-transform"
                      />
                    </span>
                    <p>Canva</p>
                  </div>
                  <div className="flex items-center gap-3 p-2.5 md:p-3 rounded-xl border transition-all duration-300 group bg-[#0A0A0A] border-white/5 hover:bg-[#111] hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.03)]">
                    <span className="w-10 h-10 rounded-xl transition-transform duration-300 bg-white/5 text-gray-300 group-hover:scale-110 flex justify-center items-center">
                      <SiPostman
                        style={{ color: "#e76a3d" }}
                        className="w-5 h-5  group-hover:scale-110 transition-transform"
                      />
                    </span>
                    <p>Postman</p>
                  </div>
                  <div className="flex items-center gap-3 p-2.5 md:p-3 rounded-xl border transition-all duration-300 group bg-[#0A0A0A] border-white/5 hover:bg-[#111] hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.03)]">
                    <span className="w-10 h-10 rounded-xl transition-transform duration-300 bg-white/5 text-gray-300 group-hover:scale-110 flex justify-center items-center">
                      <FiGithub
                        style={{ color: "" }}
                        className="w-5 h-5  group-hover:scale-110 transition-transform"
                      />
                    </span>
                    <p>Github</p>
                  </div>
                  <div className="flex items-center gap-3 p-2.5 md:p-3 rounded-xl border transition-all duration-300 group bg-[#0A0A0A] border-white/5 hover:bg-[#111] hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.03)]">
                    <span className="w-10 h-10 rounded-xl transition-transform duration-300 bg-white/5 text-gray-300 group-hover:scale-110 flex justify-center items-center">
                      <SiMongodb
                        style={{ color: "#118d4d" }}
                        className="w-5 h-5  group-hover:scale-110 transition-transform"
                      />
                    </span>
                    <p>MongoDB</p>
                  </div>
                  <div className="flex items-center gap-3 p-2.5 md:p-3 rounded-xl border transition-all duration-300 group bg-[#0A0A0A] border-white/5 hover:bg-[#111] hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.03)]">
                    <span className="w-10 h-10 rounded-xl transition-transform duration-300 bg-white/5 text-gray-300 group-hover:scale-110 flex justify-center items-center">
                      <SiDbeaver
                        style={{ color: "#362923" }}
                        className="w-5 h-5  group-hover:scale-110 transition-transform"
                      />
                    </span>
                    <p>DBeaver</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="mb-32 ">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                Journey & Experience
              </h2>
              <p className="text-white/40">My professional path</p>
            </div>

            <div className="md:flex content-center">
              <div className="text-start mb-16 content-center w-[30rem]">
                <div className="flex items-center gap-2 px-2 md:px-3 py-1 rounded-full border transition-colors duration-500 bg-[#141414] border-white/9 w-[10.5rem]">
                  <span className="w-1 md:w-2 h-1 md:h-2 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="text-[9px] md:text-[13px] font-medium tracking-wide transition-colors duration-500 text-gray-300">
                    Available for Projects
                  </span>
                </div>
                <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                  Professional Experience.
                </h2>
                <p className="text-white/40">
                  Career journeys, collaborations, and competitive projects in
                  building digital ecosystems and interactive experiences.
                </p>
              </div>

              <div className="max-w-3xl mx-auto">
                <div className="relative">
                  <div className="absolute left-[15px] top-0 bottom-0 w-px bg-gradient-to-b from-blue-400/20 via-purple-400/20 to-transparent" />

                  {experiences.map((exp, index) => (
                    <div key={index} className="relative pl-16 pb-12 last:pb-0">
                      <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-black border-2 border-white/[0.15] flex items-center justify-center shadow-lg shadow-blue-400/20">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-br from-blue-400 to-purple-400" />
                      </div>

                      <div className="group p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-sm hover:bg-white/[0.04] hover:border-white/[0.15] transition-all duration-300">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-white/[0.05]">
                              {exp.icon}
                            </div>
                            <div>
                              <h3 className="font-semibold text-white">
                                {exp.title}
                              </h3>
                              <p className="text-sm text-white/60">
                                {exp.company}
                              </p>
                            </div>
                          </div>
                          <span className="text-xs px-3 py-1 rounded-full bg-white/[0.05] text-white/50">
                            {exp.year}
                          </span>
                        </div>
                        <p className="text-white/50 leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <section className="mb-32 mt-50 my-30">
            <div className="text-start mb-20">
              <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                Journey & Experience
              </h2>
              <p className="text-white/40 w-lg">
                A collection of digital experiments, functional applications,
                and interface designs built with precision and clean code logic.
              </p>
            </div>
            <div className="">
                <CardThreeD/>
            </div>
          </section>
          <section className="relative w-full overflow-hidden">
            <div className="text-start mb-20">
              <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                Journey & Experience
              </h2>
              <p className="text-white/40 w-lg">
                A collection of digital experiments, functional applications,
                and interface designs built with precision and clean code logic.
              </p>
            </div>
            <div className="">
                <CardCertif className="w-[25rem]"/>
            </div>
          </section>
          <section className="py-5 pt-30">
            <div>
              <h3 className="font-bold text-5xl ">Let's connect</h3>
              <h3 className="font-bold text-5xl bg-gradient-to-r from-white via-gray-700 bg-clip-text text-transparent w-2xl">and build something.</h3>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
