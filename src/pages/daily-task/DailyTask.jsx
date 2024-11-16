import React, { useState } from 'react'
import HomeHeaderSection from '../home/HomeHeaderSection'
import BottomNavbar from '../../components/BottomNavbar';
import Invite from './Invite';
import Tasks from './Tasks';
import cross from "../../assets/images/icon/x-circle.png";
import Promotions from './Promotions';

function DailyTask() {
    const [activeTab, setActiveTab] = useState("Tasks");
    const [openModal, setOpenModal] = useState(false);
    const [modalData, setModalData] = useState(null);

    const handleTabClick = (tab) => {
        setActiveTab(tab)
    }

    return (
        <>
            <div className="h-screen relative bg-[url('../../public/images/home-bg.webp')] bg-cover bg-center w-full p-[18px]">
                <HomeHeaderSection />
                <h2 className='text-white text-center text-base font-semibold my-[18px]'>Complete the missions & <br />
                    earn the commission</h2>

                <div className="w-full mx-auto mt-[22px] text-white px-[15px] py-[10px] font-medium flex justify-center items-center gap-4 rounded-[16px] border border-[rgba(255,255,255,0.2)] bg-gradient-to-br from-[rgba(255,255,255,0.15)] to-[rgba(255,255,255,0.02)] backdrop-blur-sm">
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

                <div className="mt-[15px] h-[55%] overflow-auto height-md:h-[60%] height-lg:h-[70%]">
                    {activeTab === "Tasks" && (
                        <Tasks
                            openModal={openModal}
                            setModalData={setModalData}
                            setOpenModal={setOpenModal} />
                    )}
                    {activeTab === "Invite" && (
                        <Invite />
                    )}
                    {activeTab === "Promotions" && (
                        <Promotions
                            openModal={openModal}
                            setModalData={setModalData}
                            setOpenModal={setOpenModal}
                        />
                    )}
                </div>
            </div>
            <BottomNavbar />

            {/* connect nextus popup modal */}
            {openModal && modalData && (<div className="fixed inset-0 w-full h-full bg-black/20 backdrop-blur-[8px] z-[9]"></div>)}

            <div
                className={`bottom-0 w-full rounded-t-[16px] border border-white/20 bg-black shadow-[0_-8px_72px_rgba(243,112,33,0.4)] z-10 p-[17px] ${openModal ? 'fixed   ' : 'hidden'}`}
                tabIndex="-1"
            >
                <div>
                    <div className="z-[10] absolute w-[167px] h-[167px] -top-[80px] left-[100px] bg-[#EE2B00]/40 blur-[75px]"></div>
                    <button type="button" className="btn-close float-end" onClick={() => setOpenModal(false)}>
                        <img src={cross} alt="Close" />
                    </button>
                </div>
                <div className='float-end flex flex-col gap-4 items-center text-center'>
                    <img className='w-[80px] m-auto' src={modalData?.img} alt="" />
                    <h2 className='text-2xl font-bold text-white'>{modalData?.title}</h2>
                    <p className='text-sm font-medium text-nextusGray'>Please watch the video until the end.
                        After finishing, kindly wait 15 minutes for
                        moderation before claming your reward</p>
                    <div>
                        <small className='text-white text-xs font-medium'>Reward</small> <br />
                        <strong className='text-brand text-2xl'>+{modalData?.getPoints} Points</strong>
                    </div>
                    <div className="flex justify-between w-full my-5">
                        <button
                            type="submit"
                            className="mx-auto mt-[28px] text-[18px] text-brand font-bold border border-white/20 blur-btn rotate-btn"
                        >
                            Watch
                        </button>
                        <button
                            type="submit"
                            className="mx-auto mt-[28px] text-[18px] text-brand font-bold border border-white/20 blur-btn rotate-btn"
                        >
                            Claim
                        </button>
                    </div>
                </div>
            </div>
        </>

    )
}

export default DailyTask