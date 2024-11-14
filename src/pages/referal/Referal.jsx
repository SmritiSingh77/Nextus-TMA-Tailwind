import fiLeft from '../../assets/images/icon/fi-left.webp';
import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import shareImg from "../../assets/images/icon/share-2.webp";
import copy from "../../assets/images/icon/copy.webp";
import BottomNavbar from '../../components/BottomNavbar'
import profile from "../../assets/images/icon/profile-pic.webp";
import badgeOne from "../../assets/images/icon/badge-1.webp";
import badgeTwo from "../../assets/images/icon/badge-2.webp";
import badgeThree from "../../assets/images/icon/badge-3.webp";


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

    const PointsData = [
        {
            img: badgeOne,
            headingOne: 'Refer 10 People',
            headingTwo: 'Get 10,000 Points',
            counts: '0/10'
        },
        {
            img: badgeTwo,
            headingOne: 'Refer 25 People',
            headingTwo: 'Get 30,000 Points',
            counts: '0/25'
        },
        {
            img: badgeThree,
            headingOne: 'Refer 50 People',
            headingTwo: 'Get 50,000 Points',
            counts: '0/50'
        }
    ]

    return (
        <div className="h-screen relative bg-[url('../../public/images/home-bg.webp')] bg-cover bg-center w-full overflow-hidden">
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

                <div className="mx-auto mt-[28px] text-white font-medium flex justify-center items-center w-fit gap-4 blur-btn">
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

                <div className="h-[47%] overflow-auto mt-[20px]">
                    {activeTab === "Referrals" && (
                        <>
                            {
                                ReferalData.map((items, index) => (
                                    <div
                                        className={`flex justify-between items-center text-center pb-3.5 mb-3.5 ${index === ReferalData.length - 1 ? '' : 'border-b border-nextusGray'}`}
                                        key={index}
                                    >
                                        <div className="flex flex-col justify-center items-center w-[25%]">
                                            <img src={items.profileImg} alt="" />
                                            <h3 className="text-[14px] text-white font-semibold mt-1">{items.userName}</h3>
                                        </div>
                                        <div className="flex flex-col items-center w-[20%]">
                                            <small className="text-nextusGray text-[12px] font-semibold">Points</small>
                                            <p className="text-white text-[15px] font-semibold">{items.points}</p>
                                        </div>
                                        <div className="h-[30px] w-px bg-white"></div>
                                        <div className="flex flex-col items-center w-[20%]">
                                            <small className="text-nextusGray text-[12px] font-semibold">Level</small>
                                            <p className="text-white text-[15px] font-semibold">{items.level}</p>
                                        </div>
                                        <div className="h-[30px] w-px bg-white"></div>
                                        <div className="flex flex-col items-center w-[20%]">
                                            <small className="text-nextusGray text-[12px] font-semibold">Rank</small>
                                            <p className="text-white text-[15px] font-semibold">{items.rank}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </>
                    )}
                    {activeTab === "Points" && (
                        <>
                        {
                        PointsData.map((items, index)=>(
                            <div key={index} className={`flex justify-between pb-[14px] mb-[14px] ${index === PointsData.length - 1 ? '' : 'border-b border-nextusGray' }`}>
                                <div className="flex items-center gap-2">
                                    <img src={items.img} alt="" className='w-[55px] h-[55px]' />
                                    <div>
                                        <h5 className='text-white text-[16px] font-semibold'>{items.headingOne}</h5>
                                        <h6 className='text-brand text-[12px] font-semibold'>{items.headingTwo}</h6>
                                    </div>
                                </div>
                                <div className="">
                                    <span className="text-white text-[10px] font-medium">{items.counts}</span>
                                </div>
                            </div>
                        ))
                        }
                        </>
                    )}
                </div>

                <div className="flex justify-center gap-4 mt-3">
                    <button
                        className="refer-btn"
                    // onClick={() => {
                    //     handleShareClick();
                    // }}
                    >
                        Refer your friends <img src={shareImg} alt='share img' />
                    </button>
                    <button
                        className="w-12 h-12 blur-sm-btn border border-white/20"
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