import React, { useState } from 'react';
import BottomNavbar from '../../components/BottomNavbar';
import HeaderClaimSection from './HeaderClaimSection';
import HomeHeaderSection from './HomeHeaderSection';
import coin from "../../assets/images/icon/coin.png";
import birdPng from "../../assets/images/bird.webp";
import rightArrow from "../../assets/images/icon/rightarr.webp";
import spark from "../../assets/images/icon/spark.webp";
import battery from "../../assets/images/icon/battery.webp";

const Home = () => {

  return (
    <div className="h-screen relative bg-[url('../../public/images/home-bg.webp')] bg-cover bg-center w-full">

      <HomeHeaderSection />
      <div className="h-auto flex flex-col justify-center gap-2 height-md:h-[73%] height-md:gap-4">
        <HeaderClaimSection />

        <div className="flex items-center justify-center p-4 flex-wrap gap-[8px]">
          <div className="flex w-full justify-center">
            <img src={coin} alt="coin icon" className="w-auto h-auto" />
            <h2 className='text-brand text-[32px] font-bold'>002</h2>
          </div>

          <div className="flex w-3/4 justify-between">
            <span className='text-white text-[10px] font-semibold flex items-center'>
              Level Name <img src={rightArrow} alt="right arrow icon" />
            </span>
            <span className='text-white text-[10px] font-semibold'>Level 1/12</span>
          </div>

          <div className="w-3/4 bg-[#E0D9CB4D] rounded-full h-[6px]">
            <div
              className="bg-brand h-[6px] rounded-full"
              style={{ width: `50%` }}
              aria-valuenow={50}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <span className="sr-only">50% completed</span>
            </div>
          </div>

          <div className="h-[246] w-[246px] height-md:w-[300px] height-md:h-[300px] relative">
            <img src={birdPng} alt="bird icon" className="w-auto h-auto" />
          </div>
        </div>

        <div className="level-card-two flex justify-between mx-auto w-10/12">
          <span className="flex items-center space-x-2">
            <img src={spark} alt="spark icon" className="w-4 h-4" />
            <span className='text-brand text-[16px] font-bold'>1000/1000</span>
          </span>
          <span className="flex items-center space-x-2">
            <img src={battery} alt="battery icon" className="w-4 h-4" />
            <span className='text-white text-[16px] font-bold'>Boost</span>
          </span>
        </div>

      </div>

      <BottomNavbar />
    </div>
  )
}

export default Home