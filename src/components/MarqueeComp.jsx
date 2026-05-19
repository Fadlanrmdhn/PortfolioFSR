import React from 'react'
import image from "../assets/logos.png"
import { MarqueeItem } from './MarqueeItem';
import { FaLaravel } from "react-icons/fa6";
import { IoLogoReact } from "react-icons/io5";
import { FaJsSquare } from "react-icons/fa";
import { FaPhp } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { color } from 'framer-motion';

export const MarqueeComp = ({satu, dua, tiga}) => {
    const upperMarquee = [
        <img src={image} alt=""/>,
        <img src={image} alt=""/>,
        <img src={image} alt=""/>,
        <img src={image} alt=""/>,
        <img src={image} alt=""/>,
        <img src={image} alt=""/>,
        <img src={image} alt=""/>,
        <img src={image} alt=""/>,
    ]; 
    const lowerMarquee = [
        <img src={image} alt=""/>,
        <img src={image} alt=""/>,
        <img src={image} alt=""/>,
        <img src={image} alt=""/>,
        <img src={image} alt=""/>,
        <img src={image} alt=""/>,
        <img src={image} alt=""/>,
    ]; 
    const iconMarquee = [
        <button className='flex items-center gap-2 bg-[#111]/90 border-white/10 text-white hover:bg-[#1a1a1a] px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 active:scale-95'>
            <FaLaravel style={{color:'#f72f20'}}/> <span>Laravel</span>
        </button>,
        <button className='flex items-center gap-2 bg-[#111]/90 border-white/10 text-white hover:bg-[#1a1a1a] px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 active:scale-95'>
            <IoLogoReact style={{color:'#00d2f7'}}/> <span>React</span>
        </button>,
        <button className='flex items-center gap-2 bg-[#111]/90 border-white/10 text-white hover:bg-[#1a1a1a] px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 active:scale-95'>
            <FaJsSquare style={{color:'#efd81d'}}/> <span>JavaScript</span>
        </button>,
        <button className='flex items-center gap-2 bg-[#111]/90 border-white/10 text-white hover:bg-[#1a1a1a] px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 active:scale-95'>
            <FaPhp style={{color:'#7377ad'}}/> <span>PHP</span>
        </button>,
        <button className='flex items-center gap-2 bg-[#111]/90 border-white/10 text-white hover:bg-[#1a1a1a] px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 active:scale-95'>
            <FaGitAlt style={{color:'#e84e31'}}/> <span>Git</span>
        </button>,
        <button className='flex items-center gap-2 bg-[#111]/90 border-white/10 text-white hover:bg-[#1a1a1a] px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 active:scale-95'>
            <RiTailwindCssFill style={{color:'#00b2d1'}}/> <span>Tailwind</span>
        </button>,
    ]; 
  return (
    <div className="container mx-auto">
        {satu && <MarqueeItem satu images={upperMarquee} from={0} to={"-100%"}/>}
        {dua && <MarqueeItem dua images={lowerMarquee} from={"-100%"} to={0}/>}
        {tiga && <MarqueeItem tiga images={iconMarquee} from={"-100%"} to={0}/>}
    </div>
  )
}
