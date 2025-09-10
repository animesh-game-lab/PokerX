import React from 'react';

const PokerTable = () => {

    const communityCards = [
        { suit: "diamonds", rank: "A", color: "red" },
        { suit: "spades", rank: "A", color: "black" },
        { suit: "clubs", rank: "A", color: "black" },
        { suit: "hearts", rank: "A", color: "red" }
    ]

    const holeCards = [
        { suit: "diamonds", rank: "A", color: "red" },
        { suit: "spades", rank: "A", color: "black" }
    ]

    const PlayingCard = ({ suit, rank, color }) => (
        <div className="w-[60px] h-[84px] md:w-[45px] md:h-[63px] bg-card rounded-lg shadow-lg relative">
            <div className="p-1.5 h-full relative">
                <div
                    className={`text-base font-bold leading-none ${
                        color === "red" ? "text-red-600" : "text-foreground"
                    }`}
                >
                    {rank}
                </div>
                <div
                    className={`text-2xl md:text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
                        color === "red" ? "text-red-600" : "text-foreground"
                    }`}
                >
                    {getSuitSymbol(suit)}
                </div>
                <div
                    className={`text-base font-bold absolute bottom-1.5 right-1.5 transform rotate-180 ${
                        color === "red" ? "text-red-600" : "text-foreground"
                    }`}
                >
                    {rank}
                </div>
            </div>
        </div>
    )
    const getSuitSymbol = suit => {
        const symbols = {
            hearts: "♥",
            diamonds: "♦",
            clubs: "♣",
            spades: "♠"
        }
        return symbols[suit]
    }


    return (
        <>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] md:w-[1150px] md:h-[465px] bg-gradient-to-br from-[#360303] via-[#590000] to-[#360303] rounded-full gradient-border-radial flex flex-col items-center justify-center gap-8">
                <div className="flex gap-2">
                    {communityCards.map((card, index) => (
                        <PlayingCard key={index} {...card} />
                    ))}
                </div>

                <div className="flex gap-2">
                    {holeCards.map((card, index) => (
                        <PlayingCard key={index} {...card} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default PokerTable;