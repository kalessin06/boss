"use client";

export default function CTA() {
    return (
        <section id="cta" className="relative py-24 overflow-hidden">
            {/* Gold Gradient Background */}
            <div className="absolute inset-0 gold-gradient opacity-90"></div>

            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(0,0,0,0.1) 10px,
            rgba(0,0,0,0.1) 20px
          )`
                }}></div>
            </div>

            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                {/* Main Message */}
                <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-[#0A0A0A] mb-6">
                    Prêt pour une nuit <br />
                    <span className="italic">inoubliable</span> ?
                </h2>

                <p className="font-body text-[#0A0A0A]/80 text-lg sm:text-xl max-w-2xl mx-auto mb-10">
                    Les places sont limitées. Réservez dès maintenant et vivez l&apos;expérience Hollywood Erotic.
                </p>

                {/* CTA Button */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="#"
                        className="inline-block bg-[#0A0A0A] text-white font-body font-semibold text-lg px-10 py-4 rounded-lg uppercase tracking-wider transition-all duration-300 hover:bg-[#1A1A1A] hover:scale-105 hover:shadow-2xl"
                    >
                        Réserver Maintenant
                    </a>
                    <a
                        href="#info"
                        className="inline-block bg-transparent border-2 border-[#0A0A0A] text-[#0A0A0A] font-body font-semibold text-lg px-10 py-4 rounded-lg uppercase tracking-wider transition-all duration-300 hover:bg-[#0A0A0A]/10"
                    >
                        Plus d&apos;Infos
                    </a>
                </div>

                {/* Urgency Note */}
                <div className="mt-8">
                    <span className="inline-flex items-center gap-2 font-body text-[#0A0A0A]/70 text-sm">
                        <span className="w-2 h-2 bg-[#8B0000] rounded-full animate-pulse"></span>
                        Dernières places disponibles
                    </span>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 w-32 h-32 opacity-20">
                <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                    <circle cx="50" cy="50" r="45" stroke="#0A0A0A" strokeWidth="2" />
                    <circle cx="50" cy="50" r="30" stroke="#0A0A0A" strokeWidth="1" />
                </svg>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
                <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                    <circle cx="50" cy="50" r="45" stroke="#0A0A0A" strokeWidth="2" />
                    <circle cx="50" cy="50" r="30" stroke="#0A0A0A" strokeWidth="1" />
                </svg>
            </div>
        </section>
    );
}
