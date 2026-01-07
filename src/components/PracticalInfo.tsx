"use client";

export default function PracticalInfo() {
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
                <div className="text-center mb-16">
                    <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                        <span className="text-white">Infos</span>
                        <span className="gold-text"> Pratiques</span>
                    </h2>
                    <div className="w-24 h-1 gold-gradient mx-auto mb-6 rounded-full"></div>
                </div>

                {/* Info Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Date */}
                    <div className="card-hover bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] rounded-2xl border border-[#D4AF37]/20 p-8 text-center">
                        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                            <span className="text-3xl">📅</span>
                        </div>
                        <h3 className="font-heading text-xl text-[#D4AF37] mb-3">Date</h3>
                        <p className="font-body text-white/90 text-lg font-semibold">Samedi 25 Avril</p>
                        <p className="font-body text-white/60 text-sm mt-1">2026</p>
                    </div>

                    {/* Time */}
                    <div className="card-hover bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] rounded-2xl border border-[#D4AF37]/20 p-8 text-center">
                        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                            <span className="text-3xl">🕘</span>
                        </div>
                        <h3 className="font-heading text-xl text-[#D4AF37] mb-3">Horaires</h3>
                        <p className="font-body text-white/90 text-lg font-semibold">21h00 - 05h00</p>
                        <p className="font-body text-white/60 text-sm mt-1">Gâteau & Champagne à 2h</p>
                    </div>

                    {/* Location */}
                    <div className="card-hover bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] rounded-2xl border border-[#D4AF37]/20 p-8 text-center">
                        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                            <span className="text-3xl">📍</span>
                        </div>
                        <h3 className="font-heading text-xl text-[#D4AF37] mb-3">Lieu</h3>
                        <p className="font-body text-white/90 text-lg font-semibold">Absolu Club</p>
                        <p className="font-body text-white/60 text-sm mt-1">606 Chemin des Peupliers</p>
                        <p className="font-body text-white/60 text-sm">06250 Mougins</p>
                    </div>

                    {/* Contact */}
                    <div className="card-hover bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] rounded-2xl border border-[#D4AF37]/20 p-8 text-center">
                        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                            <span className="text-3xl">📞</span>
                        </div>
                        <h3 className="font-heading text-xl text-[#D4AF37] mb-3">Réservation</h3>
                        <p className="font-body text-white/90 text-lg font-semibold">Obligatoire</p>
                        <p className="font-body text-white/60 text-sm mt-1">Places limitées</p>
                    </div>
                </div>

                {/* Special Note - Champagne */}
                <div className="mt-12 text-center">
                    <div className="inline-block px-8 py-4 bg-gradient-to-r from-[#D4AF37]/10 via-[#D4AF37]/20 to-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-xl">
                        <p className="font-heading text-lg text-[#D4AF37]">
                            🎂 Gâteau d&apos;anniversaire & Champagne offerts à 2h00 🍾
                        </p>
                    </div>
                </div>

                {/* Map or Additional Info */}
                <div className="mt-12 bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] rounded-2xl border border-[#D4AF37]/20 p-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
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
            </div>
        </section>
    );
}
