import cross from "../../assets/images/icon/x-circle.png";
import coin from "../../assets/images/icon/coin.png";
import arr from "../../assets/images/icon/arrow-right.png";
import { useState } from "react";

function WelcomeBonus() {
    const [isVisible, setIsVisible] = useState(true);

    // Function to close the popup
    const handleClose = () => {
        setIsVisible(false);
    };

    return (
        <>
            {isVisible && (
                <>
                    {/* Background overlay with blur effect */}
                    <div className="fixed inset-0 z-30 backdrop-blur-lg bg-black/20"></div>

                    {/* Main popup container */}
                    <div
                        id="welcome-popup"
                        className="fixed bottom-0 left-0 right-0 z-40 w-full overflow-y-auto transition-transform transform-none rounded-t-[16px] border border-white/20 bg-black shadow-[0_-8px_72px_rgba(243,112,33,0.4)] p-[35px]"
                        tabIndex="-1"
                        aria-labelledby="welcome-popup"
                    >
                        {/* Blurred background circle effect */}
                        <div className="z-[10] absolute w-[167px] h-[167px] -top-[80px] left-[100px] bg-[#EE2B00]/40 blur-[75px]"></div>
                        
                        {/* Close button */}
                        <button
                            type="button"
                            className="btn-close float-end"
                            aria-label="Close Welcome Popup"
                            onClick={handleClose}
                        >
                            <img src={cross} alt="Close Icon" />
                        </button>
                        
                        {/* Popup content */}
                        <div className="flex flex-col gap-[18px] float-end">
                            <h2 className="text-brand text-center text-[30px] width-xs:text-[25px] font-bold mt-[35px]">Welcome Bonus</h2>

                            {/* Bonus amount display */}
                            <div className="m-auto flex justify-center items-center w-fit gap-1 blur-btn">
                                <img src={coin} alt="Coin Icon" />
                                <h3 className="text-brand text-center text-[24px] width-xs:text-[20px]  font-bold">10,000</h3>
                            </div>
                            <h4 className="text-white text-center text-[14px] width-xs:text-[12px]  font-medium">
                                Tap into daily investment into cryptocurrencies, exchange it, and
                                pay online with us.
                            </h4>
                            <div>
                                <button
                                    type="button"
                                    className="mx-auto mt-[8px] text-[18px] width-xs:text-[15px] text-brand font-bold flex justify-center items-center w-fit gap-1 blur-btn"
                                >
                                    {`Let's Start`}
                                    <img src={arr} alt="Arrow Icon" />
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default WelcomeBonus;
