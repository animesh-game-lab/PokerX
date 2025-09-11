"use client"

import { useState } from "react"
import {RangeSlider} from "./RangeSlider.jsx";


export default function RangeSliderWrapper() {
    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(10000)
    const [currentValue, setCurrentValue] = useState(750)

    const handleValueChange = value => {
        setCurrentValue(value)
        console.log("Value changed to:", value)
    }

    const handleRaise = value => {
        console.log("Raised with value:", value)
        alert(`Bet raised to ${value}!`)
    }

    // const increaseRange = () => {
    //     setMaxValue(prev => prev + 5000)
    // }
    //
    // const decreaseRange = () => {
    //     if (maxValue > minValue + 1000) {
    //         setMaxValue(prev => prev - 5000)
    //     }
    // }
    //
    // const resetRange = () => {
    //     setMinValue(0)
    //     setMaxValue(10000)
    //     setCurrentValue(750)
    // }

    return (
            < div className={`flex absolute bottom-full mb-6  flex-col items-center justify-center w-full max-w-sm pt-10 pb-6 px-6 space-y-6 bg-black  shadow-lg text-white font-sans bg-gradient-to-b from-black/5 to-black/10 backdrop-blur-[24px] rounded-[24px]`}>


                {/*<div className="mb-6 space-y-4">*/}
                {/*    <div className="flex gap-4 justify-center">*/}
                {/*        <button*/}
                {/*            onClick={decreaseRange}*/}
                {/*            className="text-white border-gray-600 hover:bg-gray-800 bg-transparent"*/}
                {/*        >*/}
                {/*            Decrease Max (-5000)*/}
                {/*        </button>*/}
                {/*        <button*/}
                {/*            onClick={increaseRange}*/}
                {/*            className="text-white border-gray-600 hover:bg-gray-800 bg-transparent"*/}
                {/*        >*/}
                {/*            Increase Max (+5000)*/}
                {/*        </button>*/}
                {/*        <button*/}
                {/*            onClick={resetRange}*/}
                {/*            className="text-white border-gray-600 hover:bg-gray-800 bg-transparent"*/}
                {/*        >*/}
                {/*            Reset Range*/}
                {/*        </button>*/}
                {/*    </div>*/}
                {/*    <p className="text-gray-400 text-sm">*/}
                {/*        Current Range: {minValue} - {maxValue}*/}
                {/*    </p>*/}
                {/*</div>*/}

                <RangeSlider
                    min={minValue}
                    max={maxValue}
                    initialValue={currentValue}
                    step={10}
                    onValueChange={handleValueChange}
                    onRaise={handleRaise}
                />
            </ div>
    )
}
