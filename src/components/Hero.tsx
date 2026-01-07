"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Spotlight from "./Spotlight";

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background Flyer Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/flyer.jpg"
                    alt="Boss Birthday Hollywood Erotic"
                    fill
                    className="object-cover object-top"
                    priority
                />
                {/* Subtle Overlay to ensure text readability without obscuring flyer too much */}
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
            </div>

            {/* Spotlight Effect */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Spotlight size={600} bgClass="bg-[#D4AF37]/20" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-[35vh]">

                {/* New Taglines */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-12 space-y-4"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                        className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#D4AF37] uppercase tracking-wide drop-shadow-xl"
                    >
                        L&apos;événement le plus glamour de France !
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                        className="font-heading text-xl sm:text-2xl md:text-3xl text-white font-light italic drop-shadow-lg"
                    >
                        Quand le luxe Hollywoodien rencontre l&apos;érotisme de la French Riviera !
                    </motion.p>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="mb-8 animate-bounce"
                >
                    <span className="text-white/60 text-xs uppercase tracking-widest font-body">Découvrir</span>
                    <div className="mt-2">
                        <svg
                            className="w-6 h-6 mx-auto text-[#D4AF37]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                        </svg>
                    </div>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                >
                    <Link href="#cta" className="btn-gold text-lg px-10 py-4 inline-block shadow-2xl hover:scale-105 transition-transform duration-300">
                        Réserver Ma Place
                    </Link>
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10"></div>
        </section>
    );
}
