// PlayerCard.jsx
"use client"
import React from "react";
import Card from '../../components/FoldedCard.jsx';
import {useCommon} from "../../hooks/UseCommon.js"; // Make sure this path is correct

const getPositionClasses = position => {
    // ... positions logic
    const positions = {
        "top-left": "absolute top-[10%] left-[0%]",
        "top-right": "absolute top-[10%] right-[0%]",
        "left": "absolute top-[35%] left-[5%]",
        "right": "absolute top-[35%] right-[5%]",
        "bottom-left": "absolute bottom-[20%] left-[15%]",
        "bottom-right": "absolute bottom-[20%] right-[15%]",
        "bottom-center-left": "absolute bottom-[5%] left-[35%]",
        "bottom-center-right": "absolute bottom-[5%] right-[35%]"
    }
    return positions[position] || "";
};

const PlayerCard = ({ player, cards }) => {
    const { open } = useCommon();

    // Make sure we have cards to render
    if (!cards || cards.length === 0) {
        return null;
    }

    return (
        <div
            className={`
                ${getPositionClasses(player.position)} 
                ${ player.active ? "red-gradient-border-component" : "gradient-border-component" } 
            `}
        >
            <div className="absolute flex gap-[-10px]">
                {/* Render the two cards for this player */}
                <Card
                    key={cards[0].variants}
                    card={cards[0]}
                    index={0}
                    // This prop controls if the card flips to the front or not
                    isVisible={open || player.active}
                />
                <Card
                    key={cards[1].variants}
                    card={cards[1]}
                    index={1}
                    // This prop controls if the card flips to the front or not
                    isVisible={open || player.active}
                />
            </div>

            <div className={` flex gap-4 `}>
                <img
                    src={player.avatar || "/placeholder.svg"}
                    alt={player.name}
                    className="w-14 h-14 rounded-full object-cover"
                />
                <div className={`flex flex-col`}>
                    <div className="text-[20px] font-semibold whitespace-nowrap text-white">
                        {player.name}
                    </div>
                    <div className="text-[20px] font-semibold whitespace-nowrap text-white">
                        {player.chips}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;