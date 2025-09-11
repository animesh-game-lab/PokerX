"use client"
import React, { useState, useEffect } from "react"


export function RangeSlider({
                                min = 0,
                                max = 10000,
                                initialValue = 750,
                                step = 1,
                                onValueChange,
                                onRaise
                            }) {
    const [value, setValue] = useState(initialValue)

    useEffect(() => {
        // Ensure current value is within new bounds
        if (value < min) {
            setValue(min)
            onValueChange?.(min)
        } else if (value > max) {
            setValue(max)
            onValueChange?.(max)
        }
    }, [min, max, value, onValueChange])

    useEffect(() => {
        setValue(initialValue)
    }, [initialValue])

    const handleSliderChange = e => {
        const newValue = Number.parseInt(e.target.value)
        setValue(newValue)
        onValueChange?.(newValue)
    }

    const handleRaise = () => {
        onRaise?.(value)
    }

    // Calculate percentage for styling
    const percentage = ((value - min) / (max - min)) * 100

    return (
        <div className="w-full flex flex-col gap-6">

            <div className="w-full">
                <div className="w-full p-2 text-[48px]  text-center font-bold bg-[#151515] border-[1px] border-dotted border-white rounded-lg">
                    {value}
                </div>
            </div>

            <div className="text-[24px] text-center text-white tracking-[-0.04em]">
                Raise Bet amount
            </div>

            {/* Range Slider */}
            <div className="flex flex-col gap-0">
                <div className="relative">
                    <input
                        type="range"
                        min={min}
                        max={max}
                        step={step}
                        value={value}
                        onChange={handleSliderChange}
                        className="w-full h-2 bg-[#434343] rounded-lg appearance-none cursor-pointer slider"
                        style={{
                            background: `linear-gradient(to right, #fff 0%, #fff ${percentage}%, #374151 ${percentage}%, #374151 100%)`
                        }}
                    />
                    <style jsx>{`
                        .slider::-webkit-slider-thumb {
                            appearance: none;
                            width: 24px;
                            height: 24px;
                            border-radius: 50%;
                            background: linear-gradient(180deg, #991D1D -38.1%, #DB2626 114.29%);
                            cursor: pointer;
                        }
                        .slider::-moz-range-thumb {
                            width: 24px;
                            height: 24px;
                            border-radius: 50%;
                            background: linear-gradient(180deg, #991D1D -38.1%, #DB2626 114.29%);
                            cursor: pointer;
                        }
                    `}</style>
                </div>

                {/* Min/Max Labels */}
                <div className="flex justify-between mt-2 text-sm text-gray-400">
                    <span>Min: {min}</span>
                    <span>Max: {max}</span>
                </div>
            </div>

            <button onClick={handleRaise}
                className="w-full py-[14px] text-[24px] font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors">
                Raise
            </button>
        </div>
    )
}
