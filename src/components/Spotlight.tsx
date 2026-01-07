"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

export default function Spotlight({
    bgClass = "bg-[#D4AF37]/10",
    size = 400
}: {
    bgClass?: string;
    size?: number;
}) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className="group relative w-full h-full overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className={`pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 ${bgClass}`}
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            ${size}px circle at ${mouseX}px ${mouseY}px,
                            var(--tw-gradient-from, rgba(212, 175, 55, 0.15)),
                            transparent 80%
                        )
                    `,
                }}
            />
        </div>
    );
}
