import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FoldedCard = () => {
    const [isRevealed, setIsRevealed] = useState(false);

    const handleToggle = () => {
        setIsRevealed(!isRevealed);
    };

    // Framer Motion variants for the flip animation
    const cardBackVariants = {
        hidden: { rotateY: 90, opacity: 0 },
        visible: { rotateY: 0, opacity: 1, transition: { duration: 0.3 } },
        exit: { rotateY: -90, opacity: 0, transition: { duration: 0.3 } },
    };

    const cardFrontVariants = {
        hidden: { rotateY: -90, opacity: 0 },
        visible: { rotateY: 0, opacity: 1, transition: { duration: 0.3, delay: 0.3 } },
    };

    return (
        <div className="flex ">
            <div className="relative cursor-pointer [perspective:1000px] [transform-style:preserve-3d]"
                onClick={handleToggle}
            >
                <AnimatePresence mode="wait">
                    {!isRevealed ? (
                        <motion.div
                            key="card-back"
                            className="absolute inset-0 card-small"
                            variants={cardBackVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        />
                    ) : (
                        <motion.div
                            key="card-front"
                            className="absolute inset-0 card-small"
                            variants={cardFrontVariants}
                            initial="hidden"
                            animate="visible"
                        />
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default FoldedCard;