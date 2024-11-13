import React from 'react'
import profile from "../assets/images/icon/profile-pic.webp";


function ReferalLeaderboard({ openModal, setOpenModal }) {
    const handleOpen = () => {
        setOpenModal(!openModal)
    }
    return (
        <div className="h-100">
            <div
                onClick={handleOpen}
                className="">
                <div className="bg-brand flex justify-between text-center items-center px-4 py-2 gap-2 rounded-2xl">
                    <div className="text-center w-[25%] flex flex-col justify-center items-center gap-1">
                        <img src={profile} alt="Profile" />
                        <h3 className="text-white font-semibold text-[16px]">William</h3>
                    </div>
                    <div className="w-[20%]">
                        <small className="text-white text-[10px] font-normal">Points</small>
                        <p className='text-white text-center font-medium text-[15px]'>kkkk</p>
                    </div>
                    <div className="border border-white h-[35px] opacity-[0.5]"></div>
                    <div className="w-[20%]">
                        <small className="text-white text-[10px] font-normal">Level</small>
                        <p className='text-white text-center font-medium text-[15px]'>ppp</p>
                    </div>
                    <div className="border border-white h-[35px] opacity-[0.5]"></div>
                    <div className="w-[20%]">
                        <small className="text-white text-[10px] font-normal">Rank</small>
                        <p className='text-white text-center font-medium text-[15px]'>hhhyh</p>
                    </div>
                </div>
            </div>

            <div className="leaderboard-table">
                <table className="table-auto w-full mt-9">
                    <thead>
                        <tr>
                            <th className="text-center text-[10px] font-normal text-white">Rank</th>
                            <th className="text-left ps-6 text-[10px] font-normal text-white">Users/Total Points</th>
                            <th className="text-center text-[10px] font-normal text-white">Referrals</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {ReferalLeaderBoard.map((user, index) => ( */}
                        <tr
                        // key={index}
                        className=' rounded-r-none bg-gradient-to-r from-[rgba(253,206,14,0.3)] to-[rgba(253,206,14,0)] '
                        >
                            <th
                                className={`py-2 border-l-2 border-[#FDCE0E] rounded-[2px] bg-[url('../../src/assets/images/icon/leaderboard-1.png')] bg-no-repeat bg-center bg-contain text-[#fdce0e] text-[14px] font-bold w-[42px]
                                       : ""
                                    }`}
                            >
                                1
                            </th>
                            <td className='ps-6 py-2 '>
                                <h5 className="text-white text-base font-bold">
                                    William
                                </h5>
                                <small className='text-brand text-xs font-semibold'>
                                    0 Points
                                </small>
                            </td>
                            <td className='text-center py-2'>
                                <small className='text-brand text-xs font-semibold'>10 Referred</small>
                            </td>
                        </tr>
                        {/* ))} */}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default ReferalLeaderboard