import { useRef } from "react";
import { gsap } from "gsap";

const CommunityCard = () => {
    const cardRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
    const classes = ['s1', 's2', 's3', 's4', 's5'];

    const handleClick = () => {
        const positions = [
            { x: -300, y: -135, rotate: 0 },
            { x: -150, y: -135, rotate: 0 },
            { x: 0, y: -135, rotate: 0 },
            { x: 150, y: -135, rotate: 0 },
            { x: 300, y: -135, rotate: 0 },
        ];

        cardRefs.forEach((ref, index) => {
            // First, remove initial classes
            ref.current.classList.remove('back', 'hidden', 'card-small');
            ref.current.classList.add(classes[index], 'card');

            // Animate to the new positions
            gsap.to(ref.current, {
                duration: 1,
                x: positions[index].x,
                y: positions[index].y,
                rotation: positions[index].rotate,
                ease: "power2.inOut",
            });
        });
    };

    const hideCard = () => {
        cardRefs.forEach((ref, index) => {
            // Animate back to the original starting position
            gsap.to(ref.current, {
                duration: 1,
                x: 60, // Or whatever the initial x is
                y: 200, // Or whatever the initial y is
                rotation: 0,
                ease: "power2.inOut",
                onComplete: () => {
                    // Add back the initial classes after the animation is complete
                    ref.current.classList.remove(...classes);
                    ref.current.classList.add('back', 'hidden', 'card-small');
                },
            });
        });
    };

    return (
        <>
            <button onClick={handleClick}>Move Card</button>
            <button onClick={hideCard}>Hide Card</button>

            {cardRefs.map((ref, index) => (
                <div
                    className="card-small back hidden"
                    key={index}
                    ref={ref}
                    style={{ position: 'absolute', top: 250, left: 500 + index * 10, zIndex: 5 - index }}
                >
                    {/* Add content if you want */}
                </div>
            ))}
        </>
    );
};

export default CommunityCard;