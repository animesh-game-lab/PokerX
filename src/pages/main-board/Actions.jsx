import React from 'react';
import {useCommon} from "../../hooks/UseCommon.js";
import RangeSliderWrapper from "../../components/RangeSliderWrapper.jsx";
const Actions = () => {
    const{open, setOpen,  toggleDiv } = useCommon();
    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <>

            <div className={` absolute bottom-8 right-8 flex gap-3`}>
                {
                    open && (
                        <div
                            className="">
                            <RangeSliderWrapper />

                        </div>
                    )
                }
                <div className="flex gap-10">
                    <div className="flex flex-col items-center justify-center gap-3 px-4">
                        <span className={`text-[20px] font-semibold text-white tracking-[-0.04em]`}>Fold</span>
                        <button
                            className="flex flex-col justify-center  items-center gap-1 w-[64px] h-[64px] rounded-full cursor-pointer transition-all text-[11px] md:text-[10px] font-semibold uppercase bg-[#B80000] text-white hover:bg-red-700">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.3645 0.632812L13.9906 10.0067L4.61672 0.632812L0.632812 4.61672L10.0067 13.9906L0.632812 23.3645L4.61672 27.3328L13.9906 17.9745L23.3645 27.3328L27.3328 23.3645L17.9745 13.9906L27.3328 4.61672L23.3645 0.632812Z" fill="white"/>
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-3 px-4">
                        <span className={`text-[20px] font-semibold text-white tracking-[-0.04em]`}>Check</span>
                        <button
                            className="flex flex-col items-center gap-1 w-[64px] h-[64px] rounded-full cursor-pointer transition-all text-[11px] md:text-[10px] font-semibold uppercase justify-center bg-[#079D61] text-white hover:bg-green-700">
                            <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.2405 16.9416L27.8481 0.333984L32 4.58715L11.2405 25.3466L0 14.1061L4.25316 9.85297L11.2405 16.9416Z" fill="white"/>
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-3 px-4">
                        <span className={`text-[20px] font-semibold text-white tracking-[-0.04em]`}>Raise</span>
                        <button onClick={handleClick} className="flex flex-col items-center gap-1 w-[64px] h-[64px] rounded-full cursor-pointer transition-all text-[11px] md:text-[10px] font-semibold uppercase justify-center bg-[#D08A08] text-black hover:bg-yellow-600">
                            <svg width="30" height="19" viewBox="0 0 30 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M15.2807 7.35121L26.405 18.0215L29.9996 14.2755L15.2807 0.199865L0.599609 14.2755L4.1942 18.0215L15.2807 7.35121Z" fill="white"/>
                            </svg>
                        </button>
                    </div>

                </div>

            </div>
        </>
    );
};

export default Actions;