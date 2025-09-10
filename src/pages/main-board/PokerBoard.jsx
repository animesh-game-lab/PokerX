"use client"

import PlayerList from "./PlayerList.jsx";
import PokerTable from "./PokerTable.jsx";
import Actions from "./Actions.jsx";
import Timer from "./Timer.jsx";
import "../../index.css"
const PokerBoard = () => {

    return (
        <div className="w-screen h-screen relative flex items-center justify-center overflow-hidden bg-hero">
            <Timer/>
            <div className="relative w-[90vw] h-[80vh] md:w-[95vw] md:h-[85vh] max-w-[1900px] max-h-[800px]">

                <PlayerList />

                <PokerTable />

            </div>

            <Actions />

        </div>
    )
}

export default PokerBoard
