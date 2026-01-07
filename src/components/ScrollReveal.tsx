"use client";

import { motion, useInView, UseInViewOptions } from "framer-motion";
import { useRef } from "react";

interface ScrollRevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    duration?: number;
    className?: string;
    style?: React.CSSProperties;
    animation?: "fade" | "slide-up" | "slide-right" | "slide-left" | "scale";
    viewport?: UseInViewOptions;
}

export default function ScrollReveal({
    children,
    width = "fit-content",
    delay = 0,
    duration = 0.5,
    className = "",
    style = {},
    animation = "slide-up",
    viewport = { once: true, margin: "-50px" }
}: ScrollRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, viewport);

    const variants = {
        hidden: { 
            opacity: 0,
            y: animation === "slide-up" ? 75 : 0,
            x: animation === "slide-right" ? -75 : animation === "slide-left" ? 75 : 0,
            scale: animation === "scale" ? 0.8 : 1
        },
        visible: { 
            opacity: 1, 
            y: 0, 
            x: 0,
            scale: 1
        },
    };

    return (
        <div ref={ref} style={{ width, ...style }} className={className}>
            <motion.div
                variants={variants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration, delay, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </div>
    );
}
