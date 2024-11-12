import fiLeft from '../../assets/images/icon/fi-left.webp';
import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import shareImg from "../../assets/images/icon/share-2.webp";
import copy from "../../assets/images/icon/copy.webp";
import BottomNavbar from '../../components/BottomNavbar'
import profile from "../../assets/images/icon/profile-pic.webp";


function Referal() {
    const [activeTab, setActiveTab] = useState("Referrals");
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const ReferalData = [
        {
            profileImg: profile,
            userName: 'William',
            points: '98k',
            level: '0',
            rank: '102'
        },
        {
            profileImg: profile,
            userName: 'Jack',
            points: '98k',
            level: '0',
            rank: '10'
        },
        {
            profileImg: profile,
            userName: 'Jones',
            points: '98k',
            level: '0',
            rank: '357'
        },
        {
            profileImg: profile,
            userName: 'Next us',
            points: '98k',
            level: '0',
            rank: '357'
        }
    ]

    return (
        <div className="h-screen relative bg-[url('../../public/images/home-bg.webp')] bg-cover bg-center w-full">
            <div className='p-[18px] h-full'>
                <div>
                    <Link to="/">
                        <img
                            src={fiLeft}
                            alt="Back"
                            className="float-left cursor-pointer w-5 h-5 m-2"
                        />
                    </Link>
                    <h2 className="text-white text-center text-[24px] font-semibold">Referrals</h2>
                    <h3 className='text-white text-center text-base font-semibold my-[22px]'>Invite your friends, reward yourself</h3>
                </div>

                <div className="mx-auto mt-[28px] text-white px-[15px] py-[10px] font-medium flex justify-center items-center w-fit gap-4 rounded-[16px] border border-[rgba(255,255,255,0.2)] bg-gradient-to-br from-[rgba(255,255,255,0.15)] to-[rgba(255,255,255,0.02)] backdrop-blur-sm">
                    <button
                        onClick={() => handleTabClick("Referrals")}
                        className={`w-[120px] text-center h-[32px] text-[18px] ${activeTab === "Referrals" ? "bg-brand rounded-[8px] font-bold" : ""}`}
                    >
                        Referrals
                    </button>
                    <button
                        onClick={() => handleTabClick("Points")}
                        className={`w-[120px] text-center h-[32px] text-[18px] ${activeTab === "Points" ? "bg-brand rounded-[8px] font-bold" : ""}`}
                    >
                        Points
                    </button>
                </div>

                <div className="h-[48%] overflow-auto mt-[20px]">
                    {activeTab === "Referrals" && (
                        <>
                            {
                                ReferalData.map((items, index) => (
                                    <div
                                        className={`flex justify-between items-center text-center border-b border-nextusGray pb-3.5 mb-3.5 ${index === ReferalData.length - 1 ? 'border-b-0' : ''}`}
                                        key={index}
                                    >
                                        <div class="flex flex-col justify-center items-center w-[25%]">
                                            <img src={items.profileImg} alt="" />
                                            <h3 class="text-[14px] text-white font-semibold mt-1">{items.userName}</h3>
                                        </div>
                                        <div class="flex flex-col items-center w-[20%]">
                                            <small class="text-nextusGray text-[12px] font-semibold">Points</small>
                                            <p class="text-white text-[15px] font-semibold">{items.points}</p>
                                        </div>
                                        <div class="h-[30px] w-px bg-white"></div>
                                        <div class="flex flex-col items-center w-[20%]">
                                            <small class="text-nextusGray text-[12px] font-semibold">Level</small>
                                            <p class="text-white text-[15px] font-semibold">{items.level}</p>
                                        </div>
                                        <div class="h-[30px] w-px bg-white"></div>
                                        <div class="flex flex-col items-center w-[20%]">
                                            <small class="text-nextusGray text-[12px] font-semibold">Rank</small>
                                            <p class="text-white text-[15px] font-semibold">{items.rank}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </>
                    )}
                    {activeTab === "Points" && (
                        <><h1>h2</h1>
                        </>
                    )}
                </div>

                <div className="flex justify-center gap-4">
                    <button
                        className="rounded-xl border border-[rgba(255,255,255,0.2)] bg-brand backdrop-blur-sm text-base font-semibold flex items-center justify-center gap-[6px] text-white w-[200px] h-12"
                    // onClick={() => {
                    //     handleShareClick();
                    // }}
                    >
                        Refer your friends <img src={shareImg} alt='share img' />
                    </button>
                    <button
                        className="w-12 h-12 rounded-lg border border-[rgba(255,255,255,0.2)] bg-gradient-to-br from-[rgba(255,255,255,0.15)] to-[rgba(255,255,255,0.02)] backdrop-blur-sm"
                    // onClick={() h- => handleCopy()}
                    >
                        <img src={copy} alt="copy" className='m-auto' />
                    </button>
                </div>
            </div>
            <BottomNavbar />
        </div>
    )
}

export default Referal