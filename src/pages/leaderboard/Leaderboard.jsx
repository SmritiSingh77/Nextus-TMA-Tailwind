import React, { useState } from 'react'
import filter from "../../assets/images/icon/list-filter.png";
import BottomNavbar from '../../components/BottomNavbar';
import ReferalLeaderboard from '../../components/ReferalLeaderboard';
import cross from "../../assets/images/icon/x-circle.png";
import MasterLeaderboard from '../../components/MasterLeaderboard';

function Leaderboard() {

    const [activeTab, setActiveTab] = useState("Referrals");
    const [openModal, setOpenModal] = useState(false);

    const handleTabClick = (tab) => {
        setActiveTab(tab)
    }

    return (
        <>
            <div className="h-screen relative bg-[url('../../public/images/home-bg.webp')] bg-cover bg-center w-full p-[18px] overflow-hidden">
                <div className="">
                    <img src={filter} alt="" className="float-end blur-sm-btn" />
                    <h2 className="text-white text-center text-[24px] font-semibold">Leaderboard</h2>
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
                <div className="h-[100%] mt-[20px]">
                    {
                        activeTab === "Referrals" && (
                            <ReferalLeaderboard openModal={openModal} setOpenModal={setOpenModal} />
                        )
                    }
                    {
                        activeTab === "Points" && (
                            <MasterLeaderboard openModal={openModal} setOpenModal={setOpenModal} />
                        )
                    }
                </div>
            </div>
            {/* connect nextus popup modal */}
            {openModal && (<div className="fixed inset-0 w-full h-full bg-black/20 backdrop-blur-[8px] z-[9]"></div>)}

            <div
                className={`bottom-0 w-full rounded-t-[16px] border border-white/20 bg-black shadow-[0_-8px_72px_rgba(243,112,33,0.4)] z-10 px-[25px] py-[48px] ${openModal ? 'fixed   ' : 'hidden'}`}
                tabIndex="-1"
            >
                <div>
                    <div className="z-[10] absolute w-[167px] h-[167px] -top-[80px] left-[100px] bg-[#EE2B00]/40 blur-[75px]"></div>
                    <button type="button" className="btn-close float-end" onClick={() => setOpenModal(false)}>
                        <img src={cross} alt="Close" />
                    </button>
                </div>
                <div className="flex justify-between text-center items-center flex-wrap float-end">
                    <div className="w-full mt-[40px]">
                        <h3 className="text-white text-center text-4xl font-bold">William</h3>
                    </div>
                    <div className="w-full my-[18px]">
                        <h4 className='text-brand text-center text-[32px] font-bold'>98.7k Points</h4>
                    </div>
                    <div className="w-[25%]">
                        <small className='text-white text-[16px] font-normal text-center'>Level</small>
                        <p className='text-brand text-[20px] font-semibold'>0</p>
                    </div>
                    <div className="border border-white h-[35px]"></div>
                    <div className="w-[25%]">
                        <small className='text-white text-[16px] font-normal text-center'>Referrals</small>
                        <p className='text-brand text-[20px] font-semibold'>0454</p>
                    </div>
                    <div className="border border-white h-[35px]"></div>
                    <div className="w-[25%]">
                        <small className='text-white text-[16px] font-normal text-center'>Rank</small>
                        <p className='text-brand text-[20px] font-semibold'>4545</p>
                    </div>
                </div>
            </div>
            <BottomNavbar />
        </>
    )
}

export default Leaderboard