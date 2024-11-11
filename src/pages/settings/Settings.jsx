import React from 'react';
import { Link } from 'react-router-dom';
import profile from "../../assets/images/icon/profile-pic.webp";
import fiLeft from '../../assets/images/icon/fi-left.webp';
import ToggleLanguage from './ToggleLanguage';
import ToggleSound from './ToggleSound';
import ConnectWallet from './ConnectWallet';
import ConnectNextus from './ConnectNextus';

function Settings() {
    return (
        <div className="h-screen relative bg-[url('../../public/images/home-bg.webp')] bg-cover bg-center w-full p-[18px]">
            <div>
                <Link to="/">
                    <img
                        src={fiLeft}
                        alt="Back"
                        className="float-left cursor-pointer w-6 h-6 m-2"
                    />
                </Link>
                <h2 className="text-white text-center text-[24px] font-semibold">Settings</h2>
            </div>

            <div className="flex h-[90%] flex-col justify-between w-full">
                <div>
                    <div className="flex items-center gap-3 mt-[44px] p-[10px] px-[16px] rounded-[16px] border border-[rgba(255,255,255,0.20)] bg-gradient-to-br from-[rgba(255,255,255,0.15)] to-[rgba(255,255,255,0.02)] backdrop-blur-[5px]">
                        <img src={profile} alt="" />
                        <div>
                            <h5 className='text-white text-[16px] font-bold'>John Mark</h5>
                            <small className='text-[#A0A0A0] text-xs font-medium'>Level Name</small>
                        </div>
                    </div>
                    <div className="p-[16px] rounded-[16px] border border-[rgba(255,255,255,0.20)] bg-gradient-to-br from-[rgba(255,255,255,0.15)] to-[rgba(255,255,255,0.02)] backdrop-blur-[5px] mt-[16px]">
                        <ToggleLanguage />
                        <ToggleSound />
                        <ConnectWallet />
                        <ConnectNextus />
                    </div>
                </div>
            </div>

            {openModal && (<div className="fixed inset-0 w-full h-full bg-black/20 backdrop-blur-[8px] z-[9]"></div>)}

            <div
                className={`fixed bottom-0 w-full rounded-t-[16px] border border-white/20 bg-black shadow-[0_-8px_72px_rgba(243,112,33,0.4)] z-10 p-[17px] ${openModal ? 'show' : ''}`}
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
                </div>
            </div>
        </div>
    );
}

export default Settings;
