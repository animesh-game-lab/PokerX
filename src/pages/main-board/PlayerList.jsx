import React from 'react';
import PlayerCard from "../../components/PlayerCard.jsx";


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
    return (
        <>
            {players.map((player, index) => (
                <PlayerCard key={index} player={player} />
            ))}
        </>
    );
};

export default PlayerList;