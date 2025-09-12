"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"


// Get random cards for the poker hand
function getRandomCards(count) {
    const shuffled = [...cardData].sort(() => 0.5 - Math.random())
    console.log(shuffled)
    return shuffled.slice(0, count)
}

export default function HomeFramer() {
    const [cards] = useState(() => getRandomCards(5))
    const [visibleCards, setVisibleCards] = useState(5)
    const [gameStarted, setGameStarted] = useState(false)
    console.log(cards)
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
            <div className="flex items-center justify-center w-full">
                <div className="flex gap-[148px] w-[770px] h-[230px]">
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

                {/*<div className="flex gap-4 justify-center">*/}
                {/*    {!gameStarted ? (*/}
                {/*        <button*/}
                {/*            onClick={startGame}*/}
                {/*            className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 text-lg font-semibold"*/}
                {/*        >*/}
                {/*            Deal Cards*/}
                {/*        </button>*/}
                {/*    ) : (*/}
                {/*        <>*/}
                {/*            {visibleCards < 5 && (*/}
                {/*                <button*/}
                {/*                    onClick={handleRevealCard}*/}
                {/*                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold"*/}
                {/*                >*/}
                {/*                    Reveal Next Card ({visibleCards + 1}/5)*/}
                {/*                </button>*/}
                {/*            )}*/}

                {/*            <button*/}
                {/*                onClick={handleNewGame}*/}
                {/*                variant="outline"*/}
                {/*                className="border-white text-white hover:bg-white hover:text-green-800 px-8 py-3 text-lg font-semibold bg-transparent"*/}
                {/*            >*/}
                {/*                New Hand*/}
                {/*            </button>*/}
                {/*        </>*/}
                {/*    )}*/}
                {/*</div>*/}

                {/*{visibleCards === 5 && gameStarted && (*/}
                {/*    <motion.div*/}
                {/*        className="text-center mt-6"*/}
                {/*        initial={{ opacity: 0, y: 20 }}*/}
                {/*        animate={{ opacity: 1, y: 0 }}*/}
                {/*        transition={{ delay: 1 }}*/}
                {/*    >*/}
                {/*        <p className="text-white text-xl font-semibold">🎉 Full hand revealed!</p>*/}
                {/*    </motion.div>*/}
                {/*)}*/}
            </div>
    )
}
