"use client";

import Image from "next/image";

export default function DressCode() {
    return (
        <section id="dresscode" className="section-padding bg-[#0A0A0A] relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[#8B0000] to-transparent"></div>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                        <span className="gold-text">Dress</span>
                        <span className="text-white"> Code</span>
                    </h2>
                    <div className="w-24 h-1 gold-gradient mx-auto mb-6 rounded-full"></div>
                    <p className="font-body text-white/70 text-lg max-w-2xl mx-auto">
                        Le glamour hollywoodien est de rigueur. Soyez audacieux, soyez élégants.
                    </p>
                </div>

                {/* Two Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Men */}
                    <div className="card-hover group">
                        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-[#D4AF37]/20">
                            {/* Image */}
                            <div className="aspect-[3/4] relative overflow-hidden">
                                <Image
                                    src="/assets/dresscode-homme.png"
                                    alt="Dress code homme - Costume élégant"
                                    fill
                                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

                                {/* Content Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-8">
                                    <h3 className="font-heading text-2xl text-[#D4AF37] mb-4">Pour Messieurs</h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-center gap-3 text-white/90 font-body text-sm">
                                            <span className="w-2 h-2 bg-[#D4AF37] rounded-full"></span>
                                            Costume ou smoking élégant
                                        </li>
                                        <li className="flex items-center gap-3 text-white/90 font-body text-sm">
                                            <span className="w-2 h-2 bg-[#D4AF37] rounded-full"></span>
                                            Chemise ouverte acceptée
                                        </li>
                                        <li className="flex items-center gap-3 text-white/90 font-body text-sm">
                                            <span className="w-2 h-2 bg-[#D4AF37] rounded-full"></span>
                                            Accessoires dorés bienvenus
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Women */}
                    <div className="card-hover group">
                        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-[#D4AF37]/20">
                            {/* Image */}
                            <div className="aspect-[3/4] relative overflow-hidden">
                                <Image
                                    src="/assets/dresscode-femme.jpg"
                                    alt="Dress code femme - Robe de soirée glamour"
                                    fill
                                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

                                {/* Content Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-8">
                                    <h3 className="font-heading text-2xl text-[#D4AF37] mb-4">Pour Mesdames</h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-center gap-3 text-white/90 font-body text-sm">
                                            <span className="w-2 h-2 bg-[#D4AF37] rounded-full"></span>
                                            Robe de soirée glamour
                                        </li>
                                        <li className="flex items-center gap-3 text-white/90 font-body text-sm">
                                            <span className="w-2 h-2 bg-[#D4AF37] rounded-full"></span>
                                            Noir, rouge ou doré privilégiés
                                        </li>
                                        <li className="flex items-center gap-3 text-white/90 font-body text-sm">
                                            <span className="w-2 h-2 bg-[#D4AF37] rounded-full"></span>
                                            Talons hauts recommandés
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Warning Note */}
                <div className="mt-12 text-center">
                    <div className="inline-block px-6 py-3 bg-[#8B0000]/20 border border-[#8B0000]/50 rounded-lg">
                        <p className="font-body text-[#C41E3A] text-sm">
                            ⚠️ Tenue décontractée interdite. La direction se réserve le droit de refuser l&apos;entrée.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
