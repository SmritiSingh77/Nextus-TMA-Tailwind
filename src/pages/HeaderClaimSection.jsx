import { useState } from "react";
import React from "react";
import reward from "../assets/images/icon/Rewards.webp";
import mystery from "../assets/images/icon/mystery.webp";
import coins from "../assets/images/icon/coins.webp";
import infoIcon from "../assets/images/icon/info.webp";
import cross from '../assets/images/icon/x-circle.png';
import coin_m from '../assets/images/icon/coin-m.png';

function HeaderClaimSection() {
    // const [isTooltipVisible, setIsTooltipVisible] = useState(false);

    // const handleButtonClick = () => {
    //     setIsTooltipVisible(!isTooltipVisible);
    // };

    // const [openModal, setOpenModal] = useState(false);

    // const handleOpenModal = () => {
    //     setOpenModal(true)
    // }

    // const handleClose = () => {
    //     setOpenModal(false)
    // }
    return (
        <>
            <HeaderClaimSection />
            {/* <div className="py-2 flex">
                <div className="w-7/12 flex justify-between">
                    <div className="w-[45%]">
                        <div
                            className="flex flex-col items-center cursor-pointer"
                            onClick={() => handleOpenModal()}
                        >
                            <img src={reward} alt="" />
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
                            <img src={mystery} alt="" />
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
                    <img src={coins} alt="coins" />
                    <div>
                        <div className="flex items-center">
                            <small className="text-[8px] font-normal">Points per minute</small>
                            <button
                                className="bg-transparent border-0"
                                type="button"
                                onClick={handleButtonClick}
                            >
                                <img src={infoIcon} alt="info" loading="lazy" />
                            </button>
                        </div>
                        {isTooltipVisible && (
                            <div className="absolute bg-[#333] text-white p-2 text-[8px] rounded top-[34px] w-[150px] text-center z-10 flex items-center right-[-10px]">
                                "Points per Hour" shows how many points are mined automatically
                                based on your activity level.
                                <div className="tooltip_arrow"></div>
                            </div>
                        )}
                        <h4 className="text-lg font-bold">10</h4>
                    </div>
                </div>

                {openModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-50"></div>
                )}

                <div
                    className={`fixed bottom-0 left-0 right-0 transform transition-transform duration-300 bg-white shadow-lg rounded-t-lg overflow-hidden ${openModal ? 'translate-y-0' : 'translate-y-full'}`}
                    style={{
                        height: 'fit-content',
                        visibility: openModal ? 'visible' : 'hidden',
                    }}
                >
                    <div className="flex justify-between items-center p-4 bg-gray-100 relative">
                        <div className="absolute inset-0 bg-white bg-opacity-25 blur-sm"></div>
                        <button
                            type="button"
                            className="z-10 p-2"
                            onClick={handleClose}
                        >
                            <img src={cross} alt="Close" />
                        </button>
                    </div>

                    <div className="p-6 text-center bg-gray-50">
                        <h2 className="text-xl font-semibold mb-4">Daily Rewards</h2>
                        <div className="grid grid-cols-3 gap-2">
                            {[...Array(7)].map((_, index) => (
                                <div
                                    key={index}
                                    className={`p-4 text-center rounded-lg ${index === 1
                                        ? 'bg-orange-500 text-white'
                                        : index === 0
                                            ? 'bg-green-500 text-white'
                                            : 'bg-gray-200'
                                        }`}
                                >
                                    <h3 className="text-lg font-semibold mb-2">Day {index + 1}</h3>
                                    <img src={coin_m} alt="Coins" className="mx-auto mb-1" />
                                    <small className="block font-medium">+100K</small>
                                </div>
                            ))}
                        </div>
                        <button className="mt-6 bg-transparent text-orange-500 font-semibold py-2 px-4 border border-orange-500 rounded-full transform rotate-180">
                            Claim
                        </button>
                    </div>
                </div>

            </div> */}
        </>
    );
}

export default HeaderClaimSection;
