import React from 'react';
import BottomNavbar from '../../components/BottomNavbar';
import HeaderClaimSection from './HeaderClaimSection';
import HomeHeaderSection from './HomeHeaderSection';
import coin from "../../assets/images/icon/coin.png";
import birdPng from "../../assets/images/bird.webp";
import rightArrow from "../../assets/images/icon/rightarr.webp";
import spark from "../../assets/images/icon/spark.webp";
import battery from "../../assets/images/icon/battery.webp";
import WelcomBonus from './WelcomBonus';

const Home = () => {
  return (
    <>

    {/* Main container with background image and full-screen height */}
      <div className="h-screen relative bg-[url('../../public/images/home-bg.webp')] bg-cover bg-center w-full overflow-hidden p-[18px]">

        {/* Home Header Section */}
        <HomeHeaderSection />

        {/* Main Content Section */}
        <div className="h-auto flex flex-col justify-center gap-2 height-md:h-[80%] height-lg:h-[85%] height-md:gap-4 height-lg:gap-7">

          {/* Header Claim Section */}
          <HeaderClaimSection />

          {/* Coin and Level Information Section */}
          <div className="flex items-center justify-center flex-wrap gap-[10px]">
            <div className="flex w-full justify-center">
              <img src={coin} alt="coin icon" className="w-auto h-auto" />
              <h2 className="text-brand text-[32px] font-bold">002</h2>
            </div>
            <div className="flex w-3/4 justify-between mt-1 mb-[3px]">
              <span className="text-white text-[10px] font-semibold flex items-center">
                Level Name <img src={rightArrow} alt="right arrow icon" />
              </span>
              <span className="text-white text-[10px] font-semibold">Level 1/12</span>
            </div>

            {/* Level Progress Bar */}
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
            <div className="h-[210px] w-[210px] height-sm:w-[300px] height-sm:h-[300px] height-md:w-[300px] height-md:h-[300px] height-lg:h-[350px] height-lg:w-[350px] relative">
              <img src={birdPng} alt="bird icon" className="w-auto h-auto" />
            </div>
          </div>

          {/* Level and Boost Info Card */}
          <div className="level-card-two flex justify-between mx-auto w-10/12">
            <span className="flex items-center space-x-2">
              <img src={spark} alt="spark icon" className="w-4 h-4" />
              <span className="text-brand text-[16px] width-xs:text-[12px] font-bold">1000/1000</span>
            </span>
            <span className="flex items-center space-x-2">
              <img src={battery} alt="battery icon" className="w-4 h-4" />
              <span className="text-white text-[16px] width-xs:text-[12px] font-bold">Boost</span>
            </span>
          </div>
        </div>
      </div>


      {/* Welcome Bonus Component */}
      <WelcomBonus />

      {/* Bottom Navbar Component */}
      <BottomNavbar />
    </>
  );
};

export default Home;
