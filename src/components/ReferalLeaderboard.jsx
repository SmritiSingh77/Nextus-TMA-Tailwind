import React from 'react'
import profile from "../assets/images/icon/profile-pic.webp";
import leaderboard1 from "../assets/images/icon/leaderboard-1.png";
import leaderboard2 from "../assets/images/icon/leaderboard-2.png";
import leaderboard3 from "../assets/images/icon/leaderboard-3.png";


function ReferalLeaderboard({ openModal, setOpenModal }) {
    const handleOpen = () => {
        setOpenModal(!openModal)
    }

    const ReferalLeaderBoard = [
        {
            img: leaderboard1,
            userName: 'William',
            userPoints: '5487',
            userReferal: '245'
        },
        {
            img: leaderboard2,
            userName: 'Jack',
            userPoints: '5487',
            userReferal: '245'
        },
        {
            img: leaderboard3,
            userName: 'Jones',
            userPoints: '5487',
            userReferal: '245'
        },
        {
            img: '',
            userName: 'James',
            userPoints: '5487',
            userReferal: '245'
        },
        {
            img: '',
            userName: 'Jatacka',
            userPoints: '5487',
            userReferal: '245'
        }
    ]
    return (
        <div className="h-[100%]">
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
                        <p className='text-white text-center font-medium text-[15px]'>87.k</p>
                    </div>
                    <div className="border border-white h-[35px] opacity-[0.5]"></div>
                    <div className="w-[20%]">
                        <small className="text-white text-[10px] font-normal">Referrals</small>
                        <p className='text-white text-center font-medium text-[15px]'>25</p>
                    </div>
                    <div className="border border-white h-[35px] opacity-[0.5]"></div>
                    <div className="w-[20%]">
                        <small className="text-white text-[10px] font-normal">Rank</small>
                        <p className='text-white text-center font-medium text-[15px]'>124</p>
                    </div>
                </div>
            </div>

            <div className="h-[50%] overflow-auto ">
                <table className="table-auto w-full mt-9">
                    <thead>
                        <tr>
                            <th className="text-center text-[10px] font-normal text-white w-1/4 pb-[21px]">Rank</th>
                            <th className="text-left ps-6 text-[10px] font-normal text-white pb-[21px]">Users/Total Points</th>
                            <th className="text-center text-[10px] font-normal text-white pb-[21px]">Referrals</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ReferalLeaderBoard.map((user, index) => (
                            <tr
                                key={index}
                                className={`rounded-r-none bg-gradient-to-r
                                     ${index === 0 ? 'from-[rgba(253,206,14,0.3)] to-[rgba(253,206,14,0)]' : ''}
                                     ${index === 1 ? 'from-[rgba(224,216,216,0.3)] to-[rgba(224,216,216,0.0)]' : ''}  
                                     ${index === 2 ? 'from-[rgba(163,76,20,0.3)] to-[rgba(163,76,20,0)]' : ''}
                                     ${index === ReferalLeaderBoard.length - 1 ? '' : 'border-b border-nextusGray' }
                                    `}
                            >
                                <th
                                    className={`py-2 rounded-[2px] bg-no-repeat bg-center bg-auto text-[14px] font-bold w-[40px]
                                                ${index === 0 ? `bg-[url('${user.img}')] border-l-2 text-[#fdce0e] border-[#FDCE0E]` : 'text-white'}                                                
                                                ${index === 1 ? `bg-[url('${user.img}')] border-l-2 text-[#fff] border-[#fff]` : 'text-white'}                                                
                                                ${index === 2 ? `bg-[url('${user.img}')] border-l-2 text-[#A34C14] border-[#A34C14]` : 'text-white'}                                                
                                                `}
                                >
                                    {index + 1}
                                </th>
                                <td className='ps-6 py-2'>
                                    <h5 className="text-white text-base font-bold">
                                        {user.userName}
                                    </h5>
                                    <small className='text-brand text-xs font-semibold'>
                                        {user.userPoints} Points
                                    </small>
                                </td>
                                <td className='text-center py-2'>
                                    <small className='text-brand text-xs font-semibold'>
                                        {user.userReferal} Referred
                                    </small>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default ReferalLeaderboard