import React from 'react';
import CommunityCard from "./CommunityCard.jsx";
import HomeFramer from "../HomeFramer.jsx";

const PokerTable = () => {



    return (
        <>
            <div className= {
                `absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] md:w-[1150px] md:h-[465px]
             {/*bg-gradient-to-br from-[#360303] via-[#590000] to-[#360303]*/}
              rounded-full flex flex-col items-center justify-center gap-8
             table-bg`
            } >
                <div className="flex gap-2">
                    {/*<CommunityCard />*/}
                    <HomeFramer />
                </div>
            </div>
        </>
    );
};

export default PokerTable;