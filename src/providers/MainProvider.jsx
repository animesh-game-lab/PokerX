"use client"

import React, { useState,  } from 'react';
import {MainContext} from "../context/index.js";
// Card data mapping for sprite positions
const cardData = [
    // Hearts (row 1)
    { suit: "hearts", value: "A", x: 0, y: 0, variants:"h1" },
    { suit: "hearts", value: "2", x: 1, y: 0, variants:"h2" },
    { suit: "hearts", value: "3", x: 2, y: 0, variants:"h3" },
    { suit: "hearts", value: "4", x: 3, y: 0, variants:"h4" },
    { suit: "hearts", value: "5", x: 4, y: 0, variants:"h5" },
    { suit: "hearts", value: "6", x: 5, y: 0, variants:"h6" },
    { suit: "hearts", value: "7", x: 6, y: 0, variants:"h7" },
    { suit: "hearts", value: "8", x: 7, y: 0, variants:"h8" },
    { suit: "hearts", value: "9", x: 8, y: 0, variants:"h9" },
    { suit: "hearts", value: "10", x: 9, y: 0, variants:"h10" },
    { suit: "hearts", value: "J", x: 10, y: 0, variants:"h11" },
    { suit: "hearts", value: "Q", x: 0, y: 1, variants:"h12" },
    { suit: "hearts", value: "K", x: 1, y: 1, variants:"h13" },

    // Spades (row 2-3)
    { suit: "spades", value: "A", x: 0, y: 2, variants:"s1" },
    { suit: "spades", value: "2", x: 1, y: 2, variants:"s2" },
    { suit: "spades", value: "3", x: 2, y: 2, variants:"s3" },
    { suit: "spades", value: "4", x: 3, y: 2, variants:"s4" },
    { suit: "spades", value: "5", x: 4, y: 2, variants:"s5" },
    { suit: "spades", value: "6", x: 5, y: 2, variants:"s6" },
    { suit: "spades", value: "7", x: 6, y: 2, variants:"s7" },
    { suit: "spades", value: "8", x: 7, y: 2, variants:"s8" },
    { suit: "spades", value: "9", x: 8, y: 2, variants:"s9" },
    { suit: "spades", value: "10", x: 9, y: 2, variants:"s10" },
    { suit: "spades", value: "J", x: 10, y: 2, variants:"s11" },
    { suit: "spades", value: "Q", x: 0, y: 3, variants:"s12" },
    { suit: "spades", value: "K", x: 1, y: 3, variants:"s13" },

    // Diamonds (row 4-5)
    { suit: "diamonds", value: "A", x: 0, y: 4, variants:"d1" },
    { suit: "diamonds", value: "2", x: 1, y: 4, variants:"d2" },
    { suit: "diamonds", value: "3", x: 2, y: 4, variants:"d3" },
    { suit: "diamonds", value: "4", x: 3, y: 4, variants:"d4" },
    { suit: "diamonds", value: "5", x: 4, y: 4, variants:"d5" },
    { suit: "diamonds", value: "6", x: 5, y: 4, variants:"d6" },
    { suit: "diamonds", value: "7", x: 6, y: 4, variants:"d7" },
    { suit: "diamonds", value: "8", x: 7, y: 4, variants:"d8" },
    { suit: "diamonds", value: "9", x: 8, y: 4, variants:"d9" },
    { suit: "diamonds", value: "10", x: 9, y: 4, variants:"d10" },
    { suit: "diamonds", value: "J", x: 10, y: 4, variants:"d11" },
    { suit: "diamonds", value: "Q", x: 0, y: 5, variants:"d12" },
    { suit: "diamonds", value: "K", x: 1, y: 5, variants:"d13" },

    // Clubs (row 6-7)
    { suit: "clubs", value: "A", x: 0, y: 6, variants: "c1" },
    { suit: "clubs", value: "2", x: 1, y: 6, variants: "c2" },
    { suit: "clubs", value: "3", x: 2, y: 6, variants: "c3" },
    { suit: "clubs", value: "4", x: 3, y: 6, variants: "c4" },
    { suit: "clubs", value: "5", x: 4, y: 6, variants: "c5" },
    { suit: "clubs", value: "6", x: 5, y: 6, variants: "c6" },
    { suit: "clubs", value: "7", x: 6, y: 6, variants: "c7" },
    { suit: "clubs", value: "8", x: 7, y: 6, variants: "c8" },
    { suit: "clubs", value: "9", x: 8, y: 6, variants: "c9" },
    { suit: "clubs", value: "10", x: 9, y: 6, variants: "c10" },
    { suit: "clubs", value: "J", x: 10, y: 6, variants: "c11" },
    { suit: "clubs", value: "Q", x: 0, y: 7, variants: "c12" },
    { suit: "clubs", value: "K", x: 1, y: 7, variants: "c13" },
]


// Get random cards for the poker hand
function getRandomCards(count) {
    const shuffled = [...cardData].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

const MainProvider = ({ children }) => {
    const [open, setOpen] = useState(false);
    // State to hold the random cards for each player
    const [playerCards, setPlayerCards] = useState({});

    // Function to generate and assign cards to players
    const dealCards = (players) => {
        const allDealtCards = getRandomCards(players.length * 2);
        const newPlayerCards = {};
        players.forEach((player, index) => {
            const startIndex = index * 2;
            newPlayerCards[player.name] = allDealtCards.slice(startIndex, startIndex + 2);
        });
        setPlayerCards(newPlayerCards);
    };

    const toggleCards = () => {
        setOpen(!open);
    };

    const toggleDiv = () => {
        setOpen(!open);
    };

    const value = {
        open,
        toggleCards,
        playerCards,
        dealCards,
        toggleDiv
    };

    return (
        <MainContext.Provider value={value}>
            {children}
        </MainContext.Provider>
    );
};

export default MainProvider;