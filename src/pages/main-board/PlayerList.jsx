// PlayerList.jsx
import React, {  useEffect } from 'react';
import PlayerCard from "../../components/PlayerCard.jsx";
import {useCommon} from "../../hooks/UseCommon.js";

const players = [
    {
        name: "Emily Carter",
        chips: "31,50,000",
        position: "top-left",
        avatar: "/player/player-1.png"
    },
    {
        name: "Alice William",
        chips: "31,50,000",
        position: "top-right",
        avatar: "/player/player-2.png",
        active: true
    },
    // {
    //     name: "Tyler Brooks",
    //     chips: "31,50,000",
    //     position: "left",
    //     avatar: "/player/player-3.png"
    // },
    // {
    //     name: "Mitchell",
    //     chips: "31,50,000",
    //     position: "right",
    //     avatar: "/player/player-4.png"
    // },
    // {
    //     name: "Daniel Scott",
    //     chips: "31,50,000",
    //     position: "bottom-left",
    //     avatar: "/player/player-1.png"
    // },
    // {
    //     name: "Natalie Harris",
    //     chips: "31,50,000",
    //     position: "bottom-right",
    //     avatar: "/player/player-2.png"
    // },
    // {
    //     name: "Ava Rey",
    //     chips: "31,50,000",
    //     position: "bottom-center-left",
    //     avatar: "/player/player-3.png",
    //     active: true
    // },
    // {
    //     name: "Brandon Lee",
    //     chips: "31,50,000",
    //     position: "bottom-center-right",
    //     avatar: "/player/player-4.png"
    // }
]

const PlayerList = () => {
    const { dealCards, playerCards } = useCommon();

    // Call dealCards once when the component mounts to set up the hand
    useEffect(() => {
        dealCards(players);
    }, []); // Empty dependency array means it runs only on mount

    return (
        <>
            {players.map((player, index) => (
                <PlayerCard
                    key={index}
                    player={player}
                    // Pass the specific cards for this player
                    cards={playerCards[player.name]}
                />
            ))}
        </>
    );
};

export default PlayerList;