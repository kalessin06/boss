"use client";

export default function Presentation() {
    return (
        <section id="presentation" className="section-padding bg-[#0A0A0A] relative overflow-hidden">
            {/* Film Strip Decoration */}
            <div className="absolute top-0 left-0 right-0 h-8 bg-repeat-x opacity-20"
                style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='32' viewBox='0 0 60 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='4' y='4' width='8' height='8' fill='%23D4AF37'/%3E%3Crect x='4' y='20' width='8' height='8' fill='%23D4AF37'/%3E%3Crect x='48' y='4' width='8' height='8' fill='%23D4AF37'/%3E%3Crect x='48' y='20' width='8' height='8' fill='%23D4AF37'/%3E%3C/svg%3E\")" }}>
            </div>

            <div className="max-w-5xl mx-auto text-center relative z-10">
                {/* Section Title */}
                <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                    <span className="gold-text">Une Nuit</span>
                    <span className="text-white"> Inoubliable</span>
                </h2>

                {/* Decorative Line */}
                <div className="w-24 h-1 gold-gradient mx-auto mb-8 rounded-full"></div>

                {/* Description */}
                <p className="font-body text-white/80 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto mb-12">
                    Plongez dans l&apos;univers fascinant où le glamour d&apos;Hollywood rencontre l&apos;érotisme raffiné.
                    Cette soirée exclusive célèbre le luxe, la sensualité et l&apos;élégance dans un cadre somptueux
                    réservé aux initiés.
                </p>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    {/* Card 1 */}
                    <div className="card-hover bg-[#1A1A1A] p-8 rounded-xl border border-[#D4AF37]/20">
                        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-transparent flex items-center justify-center">
                            <svg className="w-8 h-8 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3l14 9-14 9V3z" />
                            </svg>
                        </div>
                        <h3 className="font-heading text-xl text-[#D4AF37] mb-3">Spectacles Live</h3>
                        <p className="font-body text-white/60 text-sm">
                            Des performances artistiques captivantes tout au long de la soirée
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="card-hover bg-[#1A1A1A] p-8 rounded-xl border border-[#D4AF37]/20">
                        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-transparent flex items-center justify-center">
                            <svg className="w-8 h-8 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                            </svg>
                        </div>
                        <h3 className="font-heading text-xl text-[#D4AF37] mb-3">DJ Set Exclusif</h3>
                        <p className="font-body text-white/60 text-sm">
                            Une sélection musicale raffinée pour une ambiance électrisante
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="card-hover bg-[#1A1A1A] p-8 rounded-xl border border-[#D4AF37]/20">
                        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-transparent flex items-center justify-center">
                            <svg className="w-8 h-8 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                            </svg>
                        </div>
                        <h3 className="font-heading text-xl text-[#D4AF37] mb-3">Gâteau & Champagne</h3>
                        <p className="font-body text-white/60 text-sm">
                            Offerts à 2h00 pour célébrer l&apos;événement avec bulles et douceur
                        </p>
                    </div>
                </div>
            </div>

            {/* Film Strip Bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-repeat-x opacity-20"
                style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='32' viewBox='0 0 60 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='4' y='4' width='8' height='8' fill='%23D4AF37'/%3E%3Crect x='4' y='20' width='8' height='8' fill='%23D4AF37'/%3E%3Crect x='48' y='4' width='8' height='8' fill='%23D4AF37'/%3E%3Crect x='48' y='20' width='8' height='8' fill='%23D4AF37'/%3E%3C/svg%3E\")" }}>
            </div>
        </section>
    );
}
