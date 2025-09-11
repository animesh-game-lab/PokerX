import React from 'react';

const getPositionClasses = position => {
    const positions = {
        "top-left": "absolute top-[10%] left-[15%]",
        "top-right": "absolute top-[10%] right-[15%]",
        left: "absolute top-[35%] left-[5%]",
        right: "absolute top-[35%] right-[5%]",
        "bottom-left": "absolute bottom-[20%] left-[15%]",
        "bottom-right": "absolute bottom-[20%] right-[15%]",
        "bottom-center-left": "absolute bottom-[5%] left-[35%]",
        "bottom-center-right": "absolute bottom-[5%] right-[35%]"
    }
    return positions[position] || ""
}
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
        avatar: "/player/player-2.png"
    },
    {
        name: "Tyler Brooks",
        chips: "31,50,000",
        position: "left",
        avatar: "/player/player-3.png"
    },
    {
        name: "Mitchell",
        chips: "31,50,000",
        position: "right",
        avatar: "/player/player-4.png"
    },
    {
        name: "Daniel Scott",
        chips: "31,50,000",
        position: "bottom-left",
        avatar: "/player/player-1.png"
    },
    {
        name: "Natalie Harris",
        chips: "31,50,000",
        position: "bottom-right",
        avatar: "/player/player-2.png"
    },
    {
        name: "Ava Rey",
        chips: "31,50,000",
        position: "bottom-center-left",
        avatar: "/player/player-3.png",
        active: true
    },
    {
        name: "Brandon Lee",
        chips: "31,50,000",
        position: "bottom-center-right",
        avatar: "/player/player-4.png"
    }
]

const PlayerCard = ({ player }) => (
    <div
        className={`${getPositionClasses(
            player.position
        )} flex items-center gap-3`}
    >
        <div className="w-[30px] h-[42px] bg-gradient-to-br from-red-600 to-red-800 rounded border border-border relative">
            <div className="absolute inset-0.5 bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,rgba(255,255,255,0.1)_2px,rgba(255,255,255,0.1)_4px)] rounded-sm"></div>
        </div>

        <div
            className={`flex items-center gap-2 bg-popover px-[14px] player-list-border-gradient rounded-full border border-border min-w-[140px] ${
                player.active ? "bg-red-600/20 border-red-600" : ""
            }`}
        >
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
)

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