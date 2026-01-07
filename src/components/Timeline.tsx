"use client";

import Image from "next/image";

const timelineEvents = [
    {
        time: "20:30",
        title: "Ouverture & Red Carpet",
        subtitle: "Accueil VIP",
        description: "Accueil par les performeurs en tenues de soirée 'Oscars'. Photocall avec faux paparazzi, ambiance Jazz & Soul de film.",
        image: null,
        icon: "🥂",
    },
    {
        time: "21:30",
        title: "Cabaret 1920",
        subtitle: "Dîner Spectacle",
        description: "Inspiration Gatsby / Chicago. Ambiance feutrée et coquine, effeuillage partiel et glamour rétro pour ouvrir l'appétit.",
        image: "/assets/show-gatsby.jpg",
        icon: "💃",
    },
    {
        time: "23:00",
        title: "Basic Instinct",
        subtitle: "La Bascule",
        description: "Inspiration Thriller Érotique 90s. Robes blanches, lumières froides et ambiance hypnotique sur le podium central.",
        image: "/assets/show-modern.jpg",
        icon: "❄️",
    },
    {
        time: "01:00",
        title: "Diamonds & Scandal",
        subtitle: "Le Prime Time",
        description: "Inspiration Marilyn Monroe Trash & Luxe. Champagne showers, gâteau géant et explosion de joie pour célébrer le Boss.",
        image: "/assets/show-birthday.jpg",
        icon: "🎂",
    },
    {
        time: "02:00",
        title: "Eyes Wide Shut",
        subtitle: "L'Heure Libertine",
        description: "Inspiration Mystère & Masques. Capes de velours, masques vénitiens et danse contact très sensuelle.",
        image: "/assets/show-masked.jpg",
        icon: "🎭",
    },
    {
        time: "03:00",
        title: "From Dusk Till Dawn",
        subtitle: "Le Final",
        description: "Inspiration Une Nuit en Enfer. Ambiance 'Titty Twister', danse avec serpent et rythmes latinos/rock.",
        image: "/assets/show-snake.jpg",
        icon: "🐍",
    },
    {
        time: "05:00",
        title: "Fin de Soirée",
        subtitle: "Clap de Fin",
        description: "Distribution de viennoiseries pour le départ.",
        image: null,
        icon: "🥐",
    },
];

export default function Timeline() {
    return (
        <section id="timeline" className="section-padding bg-[#0A0A0A] relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent"></div>
            </div>

            <div className="max-w-5xl mx-auto relative z-10 px-4">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                        <span className="text-white">Le </span>
                        <span className="gold-text animated-underline">Programme</span>
                    </h2>
                    <div className="w-24 h-1 gold-gradient mx-auto mb-6 rounded-full"></div>
                    <p className="font-body text-white/70 text-lg max-w-2xl mx-auto">
                        Une montée en puissance orchestrée tableau par tableau
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {timelineEvents.map((event, index) => (
                        <div
                            key={event.time}
                            className={`flex flex-col md:flex-row items-center gap-8 mb-24 last:mb-0 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                }`}
                        >
                            {/* Image Section (if exists) or Time Badge */}
                            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                                {event.image ? (
                                    <div className={`relative w-full max-w-md aspect-video rounded-xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl group`}>
                                        <Image
                                            src={event.image}
                                            alt={event.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                        <div className="absolute bottom-4 left-4">
                                            <span className="inline-block px-3 py-1 bg-[#D4AF37] text-black font-bold text-sm rounded-full mb-2">
                                                {event.time}
                                            </span>
                                        </div>
                                    </div>
                                ) : (
                                    <div className={`text-center flex justify-center w-full`}>
                                        {/* Empty graphical placeholder or just alignment spacer if needed */}
                                    </div>
                                )}
                            </div>

                            {/* Connector (Center) */}
                            <div className="hidden md:flex flex-col items-center justify-center relative w-12 z-10">
                                <div className="w-12 h-12 rounded-full bg-[#1A1A1A] border-2 border-[#D4AF37] flex items-center justify-center text-xl shadow-lg shadow-[#D4AF37]/20 z-10">
                                    {event.icon}
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className={`w-full md:w-1/2 text-center ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>

                                {!event.image && (
                                    <span className="inline-block px-4 py-1 border border-[#D4AF37] text-[#D4AF37] font-bold text-lg rounded-full mb-4">
                                        {event.time}
                                    </span>
                                )}

                                <h3 className="font-heading text-2xl md:text-3xl text-white mb-2 font-bold">
                                    {event.title}
                                </h3>
                                <p className="font-heading text-[#D4AF37] text-lg mb-4 italic">
                                    {event.subtitle}
                                </p>
                                <p className="font-body text-white/70 text-sm md:text-base leading-relaxed">
                                    {event.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
