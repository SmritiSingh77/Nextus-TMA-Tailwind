import React, { useState } from "react";
import reward from "../../assets/images/icon/Rewards.webp";
import mystery from "../../assets/images/icon/mystery.webp";
import coins from "../../assets/images/icon/coins.webp";
import infoIcon from "../../assets/images/icon/info.webp";
import cross from "../../assets/images/icon/x-circle.png";
import coin_m from "../../assets/images/icon/coin-m.png";

function HeaderClaimSection() {
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const handleTooltipToggle = () => {
        setIsTooltipVisible(!isTooltipVisible);
    };

    const handleOpen = () => {
        setOpenModal(true);
    };

    const handleClose = () => {
        setOpenModal(false);
    };

    return (
        <>
            <div className="py-2 flex">
                <div className="w-7/12 flex justify-between">
                    <div className="w-[45%]" onClick={handleOpen}>
                        <div className="flex flex-col items-center cursor-pointer">
                            <img src={reward} alt="Reward Icon" />
                            <p className="text-white text-[12px] font-semibold leading-none text-center mb-2">
                                Daily Trade
                            </p>
                            <span className="text-[8px] font-normal leading-none text-gray-400">
                                11:23 H
                            </span>
                        </div>
                    </div>

                    <div className="border-r-[1px] border h-[40px] m-auto"></div>

                    <div className="w-[45%]">
                        <div className="flex flex-col items-center cursor-pointer">
                            <img src={mystery} alt="Mystery Icon" />
                            <p className="text-white text-[12px] font-semibold leading-none text-center mb-2">
                                Daily Quiz
                            </p>
                            <span className="text-[8px] font-normal leading-none text-gray-400">
                                00:49 H
                            </span>
                        </div>
                    </div>
                </div>

                <div className="w-5/12 flex items-center justify-center gap-1.5 p-[6px_10px] rounded-lg border border-[rgba(255,255,255,0.20)] bg-[linear-gradient(135deg,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0.02)_100%)] backdrop-blur-sm">
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


                {/* Modal */}
                {openModal && <div className="fixed inset-0 w-full h-full bg-black/20 backdrop-blur-[8px] z-[9]"></div>}

                <div
                    className= {`fixed bottom-0 w-full rounded-t-[16px] border border-white/20 bg-black shadow-[0_-8px_72px_rgba(243,112,33,0.4)] z-10 p-[17px] ${openModal ? 'show' : ''}`}
                    tabIndex="-1"
                    style={{
                        visibility: openModal ? 'visible' : 'hidden',
                        height: 'fit-content',
                    }}
                >
                    <div>
                        <div className="z-[10] absolute w-[167px] h-[167px] -top-[80px] left-[100px] bg-[#EE2B00]/40 blur-[75px]"></div>
                        <button type="button" className="btn-close float-end" onClick={handleClose}>
                            <img src={cross} alt="" />
                        </button>
                    </div>
                    <div>
                        <h2 className="text-brand text-center text-[30px] font-bold mt-[40px] mb-[15px]">Daily Rewards</h2>
                        <div className="flex flex-wrap justify-center">
                            <div className="daily-rewards-card day-completed">
                                <h3>Day 3</h3>
                                <img src={coin_m} alt="" />
                                <small>+100K</small>
                            </div>
                        </div>
                        <button className="rotate-btn">Claim</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeaderClaimSection;
