"use client";

import Link from "next/link";
import Image from "next/image";

const socialLinks = [
    { name: "Instagram", href: "#", icon: "📷" },
    { name: "Facebook", href: "#", icon: "👤" },
    { name: "Twitter", href: "#", icon: "🐦" },
];

const footerLinks = [
    { name: "Accueil", href: "#hero" },
    { name: "Programme", href: "#timeline" },
    { name: "Dress Code", href: "#dresscode" },
    { name: "Contact", href: "#info" },
];

export default function Footer() {
    return (
        <footer className="bg-[#0A0A0A] border-t border-[#D4AF37]/20">
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Brand */}
                    <div>
                        <Link href="#hero" className="inline-flex items-center gap-3 mb-6">
                            <Image
                                src="/assets/logo.png"
                                alt="L'Absolu"
                                width={40}
                                height={40}
                                className="h-10 w-auto"
                            />
                            <div>
                                <span className="font-heading text-2xl font-bold gold-text">BOSS</span>
                                <span className="block text-white/50 text-xs font-body">BIRTHDAY 2026</span>
                            </div>
                        </Link>
                        <p className="font-body text-white/60 text-sm leading-relaxed max-w-xs">
                            L&apos;événement le plus glamour de l&apos;année.
                            Hollywood rencontre l&apos;érotisme raffiné.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-heading text-lg text-[#D4AF37] mb-6">Navigation</h4>
                        <ul className="space-y-3">
                            {footerLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="font-body text-white/60 hover:text-[#D4AF37] transition-colors duration-300 text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social & Contact */}
                    <div>
                        <h4 className="font-heading text-lg text-[#D4AF37] mb-6">Suivez-nous</h4>
                        <div className="flex gap-4 mb-6">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    className="w-12 h-12 rounded-full bg-[#1A1A1A] border border-[#D4AF37]/20 flex items-center justify-center text-xl hover:border-[#D4AF37] hover:scale-110 transition-all duration-300"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                        <p className="font-body text-white/60 text-sm">
                            📧 boss@event.com<br />
                            📞 +33 6 XX XX XX XX
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="font-body text-white/40 text-sm">
                        © 2026 BOSS Events. Tous droits réservés.
                    </p>
                    <p className="font-body text-white/40 text-xs">
                        Événement réservé aux personnes majeures (18+)
                    </p>
                </div>
            </div>
        </footer>
    );
}
