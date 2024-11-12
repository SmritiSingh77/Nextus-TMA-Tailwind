import React from 'react';

function ConnectNextus({ openModal, setOpenModal }) {
    const handleOpen = () => {
        setOpenModal(!openModal);
    };

    return (
        <div className="relative flex justify-between items-center mt-[24px]">
            <h5 className="text-white text-base font-semibold">Connect Nextus</h5>
            <div>
                <label className="relative inline-block w-[60px] h-[34px]">
                    <input
                        type="checkbox"
                        className="opacity-0 w-0 h-0 peer"
                        onClick={handleOpen}
                    />
                    <span className="slider block absolute inset-0 cursor-pointer bg-gray-300 rounded-full transition duration-400 peer-checked:bg-brand"></span>
                    <span className="dot absolute left-1 bottom-1 h-[26px] w-[26px] bg-white rounded-full transition duration-400 transform peer-checked:translate-x-[26px]"></span>
                </label>
            </div>          
        </div>
    );
}

export default ConnectNextus;
