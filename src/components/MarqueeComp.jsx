import React from 'react'
import image from "../assets/logos.png"
import { MarqueeItem } from './MarqueeItem';

export const MarqueeComp = ({satu, dua}) => {
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
  return (
    <div className="container mx-auto">
        {satu && <MarqueeItem satu images={upperMarquee} from={0} to={"-100%"}/>}
        {dua && <MarqueeItem dua images={lowerMarquee} from={"-100%"} to={0}/>}
    </div>
  )
}
