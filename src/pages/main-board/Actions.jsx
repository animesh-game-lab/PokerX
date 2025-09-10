import React from 'react';

const Actions = () => {
    return (
        <>
            <div className="absolute bottom-8 right-8 flex gap-3">
                <button className="flex flex-col items-center gap-1 w-[70px] h-[70px] md:w-[60px] md:h-[60px] rounded-full cursor-pointer transition-all text-[11px] md:text-[10px] font-semibold uppercase bg-red-600 text-white hover:bg-red-700">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M18 6L6 18M6 6l12 12"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <span>Fold</span>
                </button>
                <button className="flex flex-col items-center gap-1 w-[70px] h-[70px] md:w-[60px] md:h-[60px] rounded-full cursor-pointer transition-all text-[11px] md:text-[10px] font-semibold uppercase bg-green-600 text-white hover:bg-green-700">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M20 6L9 17l-5-5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <span>Check</span>
                </button>
                <button className="flex flex-col items-center gap-1 w-[70px] h-[70px] md:w-[60px] md:h-[60px] rounded-full cursor-pointer transition-all text-[11px] md:text-[10px] font-semibold uppercase bg-yellow-500 text-black hover:bg-yellow-600">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M7 14l5-5 5 5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <span>Raise</span>
                </button>
            </div>
        </>
    );
};

export default Actions;