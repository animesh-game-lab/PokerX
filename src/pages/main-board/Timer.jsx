import React, {useEffect, useState} from 'react';

const Timer = () => {
    const [timeRemaining, setTimeRemaining] = useState(10)

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeRemaining(prev => (prev > 0 ? prev - 1 : 0))
        }, 1000)
        return () => clearInterval(timer)
    }, [])

    return (
        <>
            <div className="absolute top-5 left-1/2 transform -translate-x-1/2 bg-black/80 px-4 py-2 rounded-full border border-border text-sm z-10 text-white">
                Time remaining :{" "}
                <span className="text-red-500 font-bold">{timeRemaining}s</span>
            </div>
        </>
    );
};

export default Timer;