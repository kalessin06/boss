"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Ticket } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function PracticalInfo() {
    const bounceTransition = {
        y: {
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse" as const,
            ease: "easeOut" as const
        }
    };

    return (
        <section id="info" className="section-padding bg-[#0A0A0A] relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `repeating-linear-gradient(45deg, #D4AF37 0, #D4AF37 1px, transparent 0, transparent 50%)`,
                    backgroundSize: '20px 20px'
                }}></div>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Title */}
                <ScrollReveal width="100%" className="text-center mb-16">
                    <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                        <span className="text-white">Infos</span>
                        <span className="gold-text"> Pratiques</span>
                    </h2>
                    <div className="w-24 h-1 gold-gradient mx-auto mb-6 rounded-full"></div>
                </ScrollReveal>

                {/* Info Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Date */}
                    <ScrollReveal delay={0.1} width="100%">
                        <div className="card-hover bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] rounded-2xl border border-[#D4AF37]/20 p-8 text-center h-full group">
                            <motion.div
                                className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]"
                                transition={bounceTransition}
                                animate={{ y: ["0%", "-10%"] }}
                            >
                                <Calendar size={32} />
                            </motion.div>
                            <h3 className="font-heading text-xl text-[#D4AF37] mb-3">Date</h3>
                            <p className="font-body text-white/90 text-lg font-semibold">Samedi 25 Avril</p>
                            <p className="font-body text-white/60 text-sm mt-1">2026</p>
                        </div>
                    </ScrollReveal>

                    {/* Time */}
                    <ScrollReveal delay={0.2} width="100%">
                        <div className="card-hover bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] rounded-2xl border border-[#D4AF37]/20 p-8 text-center h-full group">
                            <motion.div
                                className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]"
                                transition={{ ...bounceTransition, delay: 0.1 }}
                                animate={{ y: ["0%", "-10%"] }}
                            >
                                <Clock size={32} />
                            </motion.div>
                            <h3 className="font-heading text-xl text-[#D4AF37] mb-3">Horaires</h3>
                            <p className="font-body text-white/90 text-lg font-semibold">21h00 - 05h00</p>
                            <p className="font-body text-white/60 text-sm mt-1">Gâteau & Champagne à 2h</p>
                        </div>
                    </ScrollReveal>

                    {/* Location */}
                    <ScrollReveal delay={0.3} width="100%">
                        <div className="card-hover bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] rounded-2xl border border-[#D4AF37]/20 p-8 text-center h-full group">
                            <motion.div
                                className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]"
                                transition={{ ...bounceTransition, delay: 0.2 }}
                                animate={{ y: ["0%", "-10%"] }}
                            >
                                <MapPin size={32} />
                            </motion.div>
                            <h3 className="font-heading text-xl text-[#D4AF37] mb-3">Lieu</h3>
                            <p className="font-body text-white/90 text-lg font-semibold">Absolu Club</p>
                            <p className="font-body text-white/60 text-sm mt-1">606 Chemin des Peupliers</p>
                            <p className="font-body text-white/60 text-sm">06250 Mougins</p>
                        </div>
                    </ScrollReveal>

                    {/* Contact */}
                    <ScrollReveal delay={0.4} width="100%">
                        <div className="card-hover bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] rounded-2xl border border-[#D4AF37]/20 p-8 text-center h-full group">
                            <motion.div
                                className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]"
                                transition={{ ...bounceTransition, delay: 0.3 }}
                                animate={{ y: ["0%", "-10%"] }}
                            >
                                <Ticket size={32} />
                            </motion.div>
                            <h3 className="font-heading text-xl text-[#D4AF37] mb-3">Réservation</h3>
                            <p className="font-body text-white/90 text-lg font-semibold">Obligatoire</p>
                            <p className="font-body text-white/60 text-sm mt-1">Places limitées</p>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Special Note - Champagne */}
                <ScrollReveal delay={0.5} width="100%">
                    <div className="mt-12 text-center">
                        <div className="inline-block px-8 py-4 bg-gradient-to-r from-[#D4AF37]/10 via-[#D4AF37]/20 to-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-xl relative overflow-hidden group">
                            <div className="absolute inset-0 skew-x-12 translate-x-[-150%] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-shine" />
                            <p className="font-heading text-lg text-[#D4AF37]">
                                🎂 Gâteau d&apos;anniversaire & Champagne offerts à 2h00 🍾
                            </p>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Map or Additional Info */}
                <ScrollReveal delay={0.6} width="100%">
                    <div className="mt-12 bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] rounded-2xl border border-[#D4AF37]/20 p-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-32 bg-[#D4AF37]/5 blur-[100px] rounded-full pointer-events-none" />
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
                            <div>
                                <h3 className="font-heading text-2xl text-[#D4AF37] mb-2">Comment venir ?</h3>
                                <p className="font-body text-white/70">
                                    Absolu Club - 1er Club Libertin de France<br />
                                    606 Chemin des Peupliers, 06250 Mougins<br />
                                    <span className="text-white/50 text-sm">Parking privé disponible</span>
                                </p>
                            </div>
                            <a
                                href="https://maps.google.com/?q=606+chemin+des+peupliers+06250+mougins"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-gold whitespace-nowrap"
                            >
                                Voir sur Google Maps
                            </a>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
