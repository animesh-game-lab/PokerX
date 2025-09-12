// Card.jsx
"use client"

import { motion } from "framer-motion"

export default function Card({ card, index, isVisible }) {
    return (
        <motion.div
            className="relative [transform-style:preserve-3d]"
            initial={{
                rotateY: 180,
            }}
            animate={{
                rotateY: isVisible ? 0 : 180,
                x: 0,
                opacity: 1,
            }}
            transition={{
                duration: 0.8,
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
            }}
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
                className={`absolute inset-0 card ${card.variants}`}
                style={{
                    backfaceVisibility: "hidden",
                }}
            />
        </motion.div>
    )
}