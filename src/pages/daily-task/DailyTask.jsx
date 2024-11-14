import React, { useState } from 'react'
import HomeHeaderSection from '../home/HomeHeaderSection'
import BottomNavbar from '../../components/BottomNavbar';
import Invite from './Invite';

function DailyTask() {
    const [activeTab, setActiveTab] = useState("Tasks");

    const handleTabClick = (tab) => {
        setActiveTab(tab)
    }

    return (
        <>
            <div className="h-screen relative bg-[url('../../public/images/home-bg.webp')] bg-cover bg-center w-full p-[18px]">
                <HomeHeaderSection />
                <h2 className='text-white text-center text-base font-semibold my-[22px]'>Complete the missions & <br />
                    earn the commission</h2>

                <div className="w-full mx-auto mt-[28px] text-white px-[15px] py-[10px] font-medium flex justify-center items-center gap-4 rounded-[16px] border border-[rgba(255,255,255,0.2)] bg-gradient-to-br from-[rgba(255,255,255,0.15)] to-[rgba(255,255,255,0.02)] backdrop-blur-sm">
                    <button
                        onClick={() => handleTabClick("Tasks")}
                        className={`w-[33%] text-center h-[32px] text-[14px] ${activeTab === "Tasks" ? "bg-brand rounded-[8px] font-bold" : ""}`}
                    >
                        Tasks
                    </button>
                    <button
                        onClick={() => handleTabClick("Invite")}
                        className={`w-[33%] text-center h-[32px] text-[14px] ${activeTab === "Invite" ? "bg-brand rounded-[8px] font-bold" : ""}`}
                    >
                        Invite
                    </button>
                    <button
                        onClick={() => handleTabClick("Promotions")}
                        className={`w-[33%] text-center h-[32px] text-[14px] ${activeTab === "Promotions" ? "bg-brand rounded-[8px] font-bold" : ""}`}
                    >
                        Promotions
                    </button>
                </div>

                <div className="mt-[20px] h-[55%]">
                    {activeTab === "Tasks" && (
                        <>
                            <h1 className="text-white">Tasks</h1>
                        </>
                    )}
                    {activeTab === "Invite" && (
                        <Invite />
                    )}
                    {activeTab === "Promotions" && (
                        <>
                            <h1 className="text-white">Promotions</h1>
                        </>
                    )}
                </div>
            </div>
            <BottomNavbar />
        </>

    )
}

export default DailyTask