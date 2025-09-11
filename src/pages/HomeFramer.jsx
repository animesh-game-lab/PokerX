"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

// Card data mapping for sprite positions
const cardData = [
    // Hearts (row 1)
    { suit: "hearts", value: "A", x: 0, y: 0 },
    { suit: "hearts", value: "2", x: 1, y: 0 },
    { suit: "hearts", value: "3", x: 2, y: 0 },
    { suit: "hearts", value: "4", x: 3, y: 0 },
    { suit: "hearts", value: "5", x: 4, y: 0 },
    { suit: "hearts", value: "6", x: 5, y: 0 },
    { suit: "hearts", value: "7", x: 6, y: 0 },
    { suit: "hearts", value: "8", x: 7, y: 0 },
    { suit: "hearts", value: "9", x: 8, y: 0 },
    { suit: "hearts", value: "10", x: 9, y: 0 },
    { suit: "hearts", value: "J", x: 10, y: 0 },
    { suit: "hearts", value: "Q", x: 0, y: 1 },
    { suit: "hearts", value: "K", x: 1, y: 1 },

    // Spades (row 2-3)
    { suit: "spades", value: "A", x: 0, y: 2 },
    { suit: "spades", value: "2", x: 1, y: 2 },
    { suit: "spades", value: "3", x: 2, y: 2 },
    { suit: "spades", value: "4", x: 3, y: 2 },
    { suit: "spades", value: "5", x: 4, y: 2 },
    { suit: "spades", value: "6", x: 5, y: 2 },
    { suit: "spades", value: "7", x: 6, y: 2 },
    { suit: "spades", value: "8", x: 7, y: 2 },
    { suit: "spades", value: "9", x: 8, y: 2 },
    { suit: "spades", value: "10", x: 9, y: 2 },
    { suit: "spades", value: "J", x: 10, y: 2 },
    { suit: "spades", value: "Q", x: 0, y: 3 },
    { suit: "spades", value: "K", x: 1, y: 3 },

    // Diamonds (row 4-5)
    { suit: "diamonds", value: "A", x: 0, y: 4 },
    { suit: "diamonds", value: "2", x: 1, y: 4 },
    { suit: "diamonds", value: "3", x: 2, y: 4 },
    { suit: "diamonds", value: "4", x: 3, y: 4 },
    { suit: "diamonds", value: "5", x: 4, y: 4 },
    { suit: "diamonds", value: "6", x: 5, y: 4 },
    { suit: "diamonds", value: "7", x: 6, y: 4 },
    { suit: "diamonds", value: "8", x: 7, y: 4 },
    { suit: "diamonds", value: "9", x: 8, y: 4 },
    { suit: "diamonds", value: "10", x: 9, y: 4 },
    { suit: "diamonds", value: "J", x: 10, y: 4 },
    { suit: "diamonds", value: "Q", x: 0, y: 5 },
    { suit: "diamonds", value: "K", x: 1, y: 5 },

    // Clubs (row 6-7)
    { suit: "clubs", value: "A", x: 0, y: 6 },
    { suit: "clubs", value: "2", x: 1, y: 6 },
    { suit: "clubs", value: "3", x: 2, y: 6 },
    { suit: "clubs", value: "4", x: 3, y: 6 },
    { suit: "clubs", value: "5", x: 4, y: 6 },
    { suit: "clubs", value: "6", x: 5, y: 6 },
    { suit: "clubs", value: "7", x: 6, y: 6 },
    { suit: "clubs", value: "8", x: 7, y: 6 },
    { suit: "clubs", value: "9", x: 8, y: 6 },
    { suit: "clubs", value: "10", x: 9, y: 6 },
    { suit: "clubs", value: "J", x: 10, y: 6 },
    { suit: "clubs", value: "Q", x: 0, y: 7 },
    { suit: "clubs", value: "K", x: 1, y: 7 },
]

// Get random cards for the poker hand
function getRandomCards(count) {
    const shuffled = [...cardData].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, count)
}

function Card({ card, index, isVisible, showBack = false }) {
    const cardWidth = 79 // Approximate width of each card in sprite
    const cardHeight = 123 // Approximate height of each card in sprite

    return (
        <motion.div
            className="relative"
            initial={{
                rotateY: showBack ? 0 : 180,
                x: -100,
                opacity: 0,
            }}
            animate={{
                rotateY: isVisible ? (showBack ? 180 : 0) : showBack ? 0 : 180,
                x: 0,
                opacity: 1,
            }}
            transition={{
                duration: 0.8,
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
            }}
            style={{ transformStyle: "preserve-3d" }}
        >
            {/* Card Back */}
            <div
                className="absolute inset-0 card back"
                style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                }}
            />

            {/* Card Front */}
            <div
                className="card s1"
                style={{
                    // backgroundPosition: `-${card.x * cardWidth}px -${card.y * cardHeight}px`,
                    backfaceVisibility: "hidden",
                }}
            />
        </motion.div>
    )
}

export default function HomeFramer() {
    const [cards] = useState(() => getRandomCards(5))
    const [visibleCards, setVisibleCards] = useState(3)
    const [gameStarted, setGameStarted] = useState(false)

    const handleRevealCard = () => {
        if (visibleCards < 5) {
            setVisibleCards((prev) => prev + 1)
        }
    }

    const handleNewGame = () => {
        setVisibleCards(3)
        setGameStarted(true)
        // Force re-render with new cards by refreshing the page
        window.location.reload()
    }

    const startGame = () => {
        setGameStarted(true)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-800 via-green-700 to-green-900 flex flex-col items-center justify-center p-8">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-white mb-4">🃏 Poker Card Reveal</h1>
                <p className="text-green-100 text-lg">Click to reveal your poker hand one card at a time!</p>
            </div>

            <div className="bg-green-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-green-600/30">
                <div className="flex gap-[148px] mb-8 w-[770px] h-[230px]">
                    <AnimatePresence>
                        {cards.slice(0, visibleCards).map((card, index) => (
                            <Card
                                key={`${card.suit}-${card.value}`}
                                card={card}
                                index={index}
                                isVisible={gameStarted}
                                showBack={!gameStarted}
                            />
                        ))}
                    </AnimatePresence>
                </div>

                <div className="flex gap-4 justify-center">
                    {!gameStarted ? (
                        <button
                            onClick={startGame}
                            className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 text-lg font-semibold"
                        >
                            Deal Cards
                        </button>
                    ) : (
                        <>
                            {visibleCards < 5 && (
                                <button
                                    onClick={handleRevealCard}
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold"
                                >
                                    Reveal Next Card ({visibleCards + 1}/5)
                                </button>
                            )}

                            <button
                                onClick={handleNewGame}
                                variant="outline"
                                className="border-white text-white hover:bg-white hover:text-green-800 px-8 py-3 text-lg font-semibold bg-transparent"
                            >
                                New Hand
                            </button>
                        </>
                    )}
                </div>

                {visibleCards === 5 && gameStarted && (
                    <motion.div
                        className="text-center mt-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                    >
                        <p className="text-white text-xl font-semibold">🎉 Full hand revealed!</p>
                    </motion.div>
                )}
            </div>
        </div>
    )
}
