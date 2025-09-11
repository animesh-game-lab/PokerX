import { useRef } from "react";
import {gsap} from "gsap";
const CommunityCard = () => {
    // Create refs for the cards
    const cardRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

    const classes = ['s1', 's2', 's3', 's4', 's5', 's6'];

    const handleClick = () => {

        const positions = [
            { x: 96, y: 273, rotate: 0 },
            { x: 218, y: 273, rotate: 0 },
            { x: 546, y: 273, rotate: 0 },
            { x: 668, y: 273, rotate: 0 },
            { x: 157, y: 417, rotate: 90 },
            { x: 607, y: 417, rotate: 90 },
        ];

        cardRefs.forEach((ref, index) => {
            if (index >= 4) {
                gsap.to(ref.current, {
                    duration: 1,
                    x: positions[index].x,
                    y: positions[index].y,
                    ease: "power2.inOut",
                    onComplete: () => {
                        setTimeout(() => {
                            gsap.to(ref.current, {
                                duration: 0.6,
                                rotation: 90,
                                ease: "power2.inOut",
                                onComplete: () => {
                                    ref.current.classList.remove('back');
                                    ref.current.classList.add(classes[index], "extra");
                                }
                            });
                        }, 100);
                    }
                });
            } else {
                gsap.to(ref.current, {
                    duration: 1,
                    x: positions[index].x,
                    y: positions[index].y,
                    ease: "power2.inOut",
                    onComplete: () => {
                        setTimeout(() => {

                            gsap.to(ref.current, {
                                duration: 0.6, // Flip duration
                                rotation: 0, // Flip the card
                                ease: "power2.inOut",
                                onComplete: () => {
                                    ref.current.classList.remove('back');
                                    ref.current.classList.add(classes[index]);
                                }
                            });
                        }, 100);
                    }
                });
            }
        });
    };

    const hideCard = () => {
        cardRefs.forEach((ref, index) => {
            if (index >= 4) {
                gsap.to(ref.current, {
                    duration: 1,
                    x: 382,
                    y: -180,
                    rotation: 0,
                    ease: "power2.inOut",
                    onComplete: () => {
                        ref.current.classList.remove(...classes);
                        ref.current.classList.add("back");
                    },
                });
                ref.current.classList.remove("extra");
            } else {
                gsap.to(ref.current, {
                    duration: 1,
                    x: 382,
                    y: -180,
                    rotation: 0,
                    ease: "power2.inOut",
                    onComplete: () => {
                        ref.current.classList.remove(...classes);
                        ref.current.classList.add("back");
                    },
                });
            }
        });
    };

    return (
        <>
            <button onClick={handleClick}>Move Card</button>
            <button onClick={hideCard}>hide Card</button>

            {cardRefs.map((ref, index) => (
                    <div className="card back" key={index} ref={ref} style={{transform: "translate(382px, -180px)"}}>
                    </div>
                )
            )}


        </>

    )
};

export default CommunityCard;
