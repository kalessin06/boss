"use client";

import Image from "next/image";

const performanceImages = [
    { id: 1, src: "/assets/show-gatsby.jpg", label: "Soirée Gatsby", description: "Élégance années folles" },
    { id: 2, src: "/assets/show-modern.jpg", label: "Performance Scénique", description: "Spectacle futuriste" },
    { id: 3, src: "/assets/show-birthday.jpg", label: "Célébration Boss", description: "Champagne & gâteau" },
    { id: 4, src: "/assets/show-masked.jpg", label: "Rituel Masqué", description: "Mystère & sensualité" },
    { id: 5, src: "/assets/show-snake.jpg", label: "Show Exotique", description: "Performance intense" },
];

export default function Ambiance() {
    return (
        <section id="ambiance" className="section-padding bg-[#1A1A1A] relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                        <span className="text-white">EROTIC HOLLYWOOD </span>
                        <span className="gold-text">SHOW</span>
                    </h2>
                    <div className="w-24 h-1 gold-gradient mx-auto mb-6 rounded-full"></div>
                    <p className="font-body text-white/70 text-lg max-w-2xl mx-auto">
                        Des tableaux envoûtants pour une nuit que vous n&apos;oublierez jamais
                    </p>
                </div>

                {/* Main Hollywood Decor Image */}
                <div className="mb-8 card-hover group">
                    <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/20 aspect-[21/9]">
                        <Image
                            src="/assets/decor-hollywood.png"
                            alt="Décor Hollywood avec statues dorées et pellicules de film"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-8">
                            <h3 className="font-heading text-2xl text-[#D4AF37]">Décor Hollywood</h3>
                            <p className="font-body text-white/70 mt-2">Statues dorées, pellicules de cinéma, lustres en cristal</p>
                        </div>
                    </div>
                </div>

                {/* Performance Gallery Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {performanceImages.map((image) => (
                        <div key={image.id} className="card-hover group">
                            <div className="relative rounded-xl overflow-hidden border border-[#D4AF37]/20 aspect-[3/4]">
                                <Image
                                    src={image.src}
                                    alt={image.label}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                    <h4 className="font-heading text-sm sm:text-base text-[#D4AF37]">{image.label}</h4>
                                    <p className="font-body text-white/60 text-xs mt-1 hidden sm:block">{image.description}</p>
                                </div>

                                {/* Gold Corner */}
                                <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
                                    <div className="absolute -top-6 -right-6 w-12 h-12 bg-[#D4AF37]/20 rotate-45 transform transition-transform duration-300 group-hover:scale-150"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
}
