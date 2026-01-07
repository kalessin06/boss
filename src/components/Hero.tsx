"use client";

import Link from "next/link";
import Image from "next/image";

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

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-[35vh]">

                {/* New Taglines */}
                <div className="mb-12 space-y-4">
                    <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#D4AF37] uppercase tracking-wide drop-shadow-xl animate-fade-in-up">
                        L&apos;événement le plus glamour de France !
                    </h2>
                    <p className="font-heading text-xl sm:text-2xl md:text-3xl text-white font-light italic drop-shadow-lg animate-fade-in-up delay-200">
                        Quand le luxe Hollywoodien rencontre l&apos;érotisme de la French Riviera !
                    </p>
                </div>

                {/* Scroll Indicator */}
                <div className="mb-8 animate-bounce">
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
                </div>

                {/* CTA Button */}
                <Link href="#cta" className="btn-gold text-lg px-10 py-4 inline-block shadow-2xl animate-fade-in-up delay-300">
                    Réserver Ma Place
                </Link>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10"></div>
        </section>
    );
}
