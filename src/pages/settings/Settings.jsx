import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profile from "../../assets/images/icon/profile-pic.webp";
import fiLeft from '../../assets/images/icon/fi-left.webp';
import ToggleLanguage from './ToggleLanguage';
import ToggleSound from './ToggleSound';
import info from "../../assets/images/icon/info.webp";
import ConnectWallet from './ConnectWallet';
import ConnectNextus from './ConnectNextus';
import cross from "../../assets/images/icon/x-circle.png";

function Settings() {
    const [openModal, setOpenModal] = useState(false);

    const footerItems = [
        { items: "Help" },
        { items: "Delete Account" },
        { items: "Privacy Policy" },
        { items: "Terms & Condition" }
    ];

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
                            <ConnectNextus openModal={openModal} setOpenModal={setOpenModal} />
                        </div>
                    </div>
                    <div>
                        <div className="border border-1 border-brand opacity-[0.4]"></div>
                        <ul className='pt-3'>
                            {
                                footerItems.map((item, index) => (
                                    <li key={index} className='mt-3'>
                                        <a className='text-white text-[14px] font-medium'>{item.items}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>


            {/* connect nextus popup modal */}
            {openModal && (<div className="fixed inset-0 w-full h-full bg-black/20 backdrop-blur-[8px] z-[9]"></div>)}

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
                <div>
                    <h2 className="text-brand text-center text-[30px] font-bold mt-[40px] mb-[15px]">Connect Nextus</h2>
                    <div className="flex justify-between items-center gap-3 mt-[18px]">
                        <h4 className='text-white text-[14px] font-medium'>Enter Nextus UID</h4>
                        <img src={info} alt="Info icon" />
                    </div>
                    <input
                        type="text"
                        className="rounded-lg border border-[rgba(255,255,255,0.20)] bg-[#ffffff1f] backdrop-blur-[5px] w-full mt-3 text-white"
                    //   {...register("connectNextus", {
                    //     required: "This field is required",
                    //     minLength: {
                    //       value: 8,
                    //       message: "Must be exactly 8 digits",
                    //     },
                    //     maxLength: {
                    //       value: 8,
                    //       message: "Must be exactly 8 digits",
                    //     },
                    //     pattern: {
                    //       value: /^[0-9]{8}$/,
                    //       message: "Must contain only numeric values",
                    //     },
                    //   })}
                    />
                    {/* {errors.connectNextus && (
                  <p style={{ color: "red" }}>{errors.connectNextus.message}</p>
                )} */}
                    <button
                        type="submit"
                        className="mx-auto mt-[28px] text-[18px] text-brand font-bold p-[10px] flex justify-center items-center w-fit gap-1 rounded-lg border border-[rgba(255,255,255,0.2)] bg-gradient-to-br from-[rgba(255,255,255,0.15)] to-[rgba(255,255,255,0.02)] backdrop-blur-sm"
                    >
                        Connect
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Settings;
