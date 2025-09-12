import React from 'react';
import {useCommon} from "../../hooks/UseCommon.js";
import RangeSliderWrapper from "../../components/RangeSliderWrapper.jsx";
const Actions = () => {
    const{open, setOpen} = useCommon();
    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <>

            <div className={` absolute bottom-8 right-8 flex gap-3`}>
                {
                    open && (
                        <RangeSliderWrapper />
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
                    <div className="flex flex-col items-center justify-center gap-3 px-4">
                        <span className={`text-[20px] font-semibold text-white tracking-[-0.04em]`}>Call Any</span>
                        <button className="flex flex-col items-center gap-1 w-[64px] h-[64px] rounded-full cursor-pointer transition-all text-[11px] md:text-[10px] font-semibold uppercase justify-center bg-[#000] text-white hover:bg-black/80">
                            <svg width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.5565 9.2081H16.5792C16.4883 8.56416 16.3027 7.99219 16.0224 7.49219C15.7421 6.98461 15.3822 6.55279 14.9428 6.19673C14.5034 5.84067 13.9959 5.56795 13.4201 5.37855C12.8519 5.18916 12.2345 5.09446 11.5678 5.09446C10.3633 5.09446 9.31404 5.3937 8.4201 5.99219C7.52616 6.5831 6.83298 7.44673 6.34055 8.5831C5.84813 9.71189 5.60192 11.0831 5.60192 12.6967C5.60192 14.3558 5.84813 15.7498 6.34055 16.8786C6.84055 18.0073 7.53752 18.8596 8.43146 19.4354C9.3254 20.0111 10.3595 20.299 11.5337 20.299C12.1928 20.299 12.8027 20.2119 13.3633 20.0376C13.9315 19.8634 14.4353 19.6096 14.8746 19.2763C15.314 18.9354 15.6777 18.5225 15.9656 18.0376C16.261 17.5528 16.4656 16.9998 16.5792 16.3786L21.5565 16.4013C21.4277 17.4695 21.1057 18.4998 20.5906 19.4922C20.083 20.477 19.3974 21.3596 18.5337 22.1399C17.6777 22.9126 16.6549 23.5263 15.4656 23.9808C14.2837 24.4278 12.9466 24.6513 11.4542 24.6513C9.37843 24.6513 7.52237 24.1816 5.88601 23.2422C4.25722 22.3028 2.96934 20.9429 2.02237 19.1626C1.08298 17.3823 0.613281 15.227 0.613281 12.6967C0.613281 10.1589 1.09055 7.99976 2.0451 6.21946C2.99964 4.43916 4.2951 3.0831 5.93146 2.15128C7.56783 1.21188 9.40874 0.742188 11.4542 0.742188C12.8027 0.742188 14.0527 0.931581 15.2042 1.31037C16.3633 1.68916 17.3898 2.24219 18.2837 2.96946C19.1777 3.68916 19.9049 4.57173 20.4656 5.61719C21.0337 6.66264 21.3974 7.85961 21.5565 9.2081Z" fill="white"/>
                            </svg>
                        </button>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Actions;