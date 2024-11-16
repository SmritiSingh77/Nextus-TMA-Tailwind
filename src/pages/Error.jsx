import { Link } from 'react-router-dom';
import fiLeft from "../assets/images/icon/fi-left.webp";
import React from 'react';
import refresh from '../assets/images/icon/refresh.png';

function Error() {


    return (
        <div className="h-screen relative bg-[url('../../public/images/home-bg.webp')] bg-cover bg-center w-full p-[18px]">
            <div className="">
                <Link to="/">
                    <img
                        src={fiLeft}
                        alt="Back"
                        className="float-left cursor-pointer w-5 h-5 m-2"
                    />
                </Link>
            </div>
            <div className="wrapper-text">
                <div className="wrapper">
                    <h1><span>ERROR</span></h1>
                    <p>Something went wrong! <br />
                        Please try again later</p>
                    <div className="loader-outer">
                        <div className="loader-inner">
                            <div className="rotate-div"></div>
                        </div>
                    </div>
                </div>
                <button className="blur-btn text-brand text-[18px] font-bold flex items-center" onClick={() => window.location.reload()}>Try Again <img src={refresh} alt="" className="ps-2" /></button>
            </div>
        </div>
    )
}

export default Error