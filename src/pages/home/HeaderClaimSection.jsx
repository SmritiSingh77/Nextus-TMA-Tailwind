import React, { useState } from "react";
import reward from "../../assets/images/icon/Rewards.webp";
import mystery from "../../assets/images/icon/mystery.webp";
import coins from "../../assets/images/icon/coins.webp";
import infoIcon from "../../assets/images/icon/info.webp";
import cross from "../../assets/images/icon/x-circle.png";
import coin_m from "../../assets/images/icon/coin-m.png";

function HeaderClaimSection() {
    // State to control the visibility of the tooltip and popup
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    // Toggle the tooltip visibility
    const handleTooltipToggle = () => {
        setIsTooltipVisible(!isTooltipVisible);
    };

    // Toggle the popup visibility
    const handlePopupToggle = () => {
        setIsPopupVisible(!isPopupVisible);
    };

    const dailyReward = [
        {
            day: '1',
            points: '25K',
            status: 'completed'
        },
        {
            day: '2',
            points: '50K',
            status: 'completed'
        },
        {
            day: '3',
            points: '100K',
            status: 'active'
        },
        {
            day: '4',
            points: '125K',
            status: 'pending'
        },
        {
            day: '5',
            points: '150K',
            status: 'pending'
        },
        {
            day: '6',
            points: '200K',
            status: 'pending'
        },
        {
            day: '7',
            points: '250K',
            status: 'pending'
        }
    ]

    return (
        <>
            {/* Header claim section with trade and quiz information */}
            <div className="py-2 flex">

                {/* Daily Trade Section with reward icon */}
                <div className="w-7/12 flex justify-between">
                    <button
                        className="w-[45%]"
                        type="button"
                        onClick={handlePopupToggle}
                        aria-controls="bottom-popup"
                        aria-expanded={isPopupVisible}
                    >
                        <div className="flex flex-col items-center cursor-pointer">
                            <img src={reward} alt="Reward Icon" />
                            <p className="text-white text-[12px] font-semibold leading-none text-center mb-2 mt-1">
                                Daily Trade
                            </p>
                            <span className="text-[8px] font-normal leading-none text-gray-400">
                                11:23 H
                            </span>
                        </div>
                    </button>

                    {/* Divider */}
                    <div className="border-r-[1px] border h-[40px] m-auto"></div>

                    {/* Daily Quiz Section */}
                    <div className="w-[45%]">
                        <div className="flex flex-col items-center cursor-pointer">
                            <img src={mystery} alt="Mystery Icon" />
                            <p className="text-white text-[12px] font-semibold leading-none text-center mb-2 mt-1">
                                Daily Quiz
                            </p>
                            <span className="text-[8px] font-normal leading-none text-gray-400">
                                00:49 H
                            </span>
                        </div>
                    </div>
                </div>

                {/* Points and Info Tooltip Section */}
                <div className="w-5/12 flex items-center justify-center gap-1.5 p-[6px_10px] rounded-lg border border-[rgba(255,255,255,0.20)] bg-[linear-gradient(135deg,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0.02)_100%)] backdrop-blur-sm relative">
                    <img src={coins} alt="Coins Icon" />
                    <div>
                        <div className="flex items-center">
                            <small className="text-[#A0A0A0] font-poppins text-[8px] font-normal pe-1">
                                Points per minute
                            </small>
                            <button
                                className="bg-transparent border-0"
                                type="button"
                                onClick={handleTooltipToggle}
                            >
                                <img src={infoIcon} alt="Info Icon" loading="lazy" />
                            </button>
                        </div>
                        {/* Tooltip display */}
                        {isTooltipVisible && (
                            <div className="absolute bg-white text-black p-2 text-[8px] rounded top-[34px] w-[150px] text-center z-10 flex items-center right-0">
                                "Points per Hour" shows how many points are mined
                                automatically based on your activity level.
                                <div className="absolute top-[-10px] right-[12px] transform -translate-x-1/2 border-[5px] border-solid border-t-[#fff] border-r-transparent border-b-transparent border-l-transparent rotate-180"></div>
                            </div>
                        )}
                        <h4 className="text-lg font-bold text-white">10</h4>
                    </div>
                </div>
            </div>

            {/*Blurr Overlay for popup */}
            {isPopupVisible && (
                <div className="fixed inset-0 z-30 backdrop-blur-lg bg-black/20" onClick={handlePopupToggle}></div>
            )}

            {/* Bottom popup with daily rewards information */}
            <div
                id="bottom-popup"
                className={`${isPopupVisible ? "fixed" : "hidden"} bottom-0 left-0 right-0 z-40 w-full overflow-y-auto transition-transform transform-none rounded-t-[16px] border border-white/20 bg-black shadow-[0_-8px_72px_rgba(243,112,33,0.4)] p-[17px]`}
                tabIndex="-1"
                aria-labelledby="drawer-bottom-label"
            >
                <div>
                    <div className="z-[10] absolute w-[167px] h-[167px] -top-[80px] left-[100px] bg-[#EE2B00]/40 blur-[75px]"></div>
                    <button type="button" className="btn-close float-end" onClick={handlePopupToggle} aria-controls="bottom-popup">
                        <img src={cross} alt="Close Icon" />
                    </button>
                </div>
                {/* Daily rewards content */}
                <div className="text-center">
                    <h2 className="text-brand text-center text-[30px] font-bold mt-[40px] mb-[30px]">Daily Rewards</h2>
                    <div className="flex flex-wrap justify-center gap-2">
                        {
                            dailyReward.map((reward, index) => (
                                <div
                                    className={`rounded-[12px] border border-white/20 backdrop-blur-[5px] bg-gradient-to-br from-white/15 to-white/5 flex w-[72px] h-[72px] p-[8px] flex-col items-center gap-[2px]
                                                 ${reward.status === 'completed' ? 'bg-brand text-white relative' : ''}
                                                 ${reward.status === 'active' ? 'text-brand bg-gradient-to-t from-[rgba(243,112,33,0.3)] to-[rgba(243,112,33,0.3)]' : ''}
                                                 ${reward.status === 'pending' ? 'text-nextusGray' : ''}
                                             `}
                                    key={index}
                                >
                                    {reward.status === 'completed' && (
                                        <span
                                            className="absolute top-[-10px] right-[-5px]"
                                            style={{ content: "url('/src/assets/images/icon/tick.png')" }}
                                        ></span>
                                    )}
                                    <h3 className="text-white text-[8px] font-medium">Day {reward.day}</h3>
                                    <img src={coin_m} alt="Coin Icon" className="w-[26px]" />
                                    <small className="text-[10px] font-bold">+{reward.points}</small>
                                </div>

                            ))
                        }
                    </div>
                    <button className="blur-btn text-brand font-bold rotate-btn mt-[40px]">Claim</button>
                    
                </div>
            </div>
        </>
    );
}

export default HeaderClaimSection;
