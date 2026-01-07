"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
    { name: "Accueil", href: "#hero" },
    { name: "Présentation", href: "#presentation" },
    { name: "Programme", href: "#timeline" },
    { name: "Dress Code", href: "#dresscode" },
    { name: "Ambiance", href: "#ambiance" },
    { name: "Infos", href: "#info" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-[#0A0A0A]/95 backdrop-blur-md shadow-lg"
                    : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="#hero" className="flex items-center space-x-3">
                        <Image
                            src="/assets/logo.png"
                            alt="L'Absolu"
                            width={50}
                            height={50}
                            className="h-12 w-auto"
                        />
                        <div className="hidden sm:block">
                            <span className="font-heading text-xl font-bold gold-text">
                                BOSS BIRTHDAY
                            </span>
                            <span className="block text-white/50 text-xs font-body">
                                2026
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-white/80 hover:text-[#D4AF37] transition-colors duration-300 font-body text-sm uppercase tracking-wider animated-underline"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="#cta"
                            className="btn-gold text-sm"
                        >
                            Réserver
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-white p-2"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden transition-all duration-300 ${isOpen
                        ? "max-h-screen opacity-100"
                        : "max-h-0 opacity-0 overflow-hidden"
                    }`}
            >
                <div className="bg-[#0A0A0A]/98 backdrop-blur-md px-4 py-6 space-y-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="block text-white/80 hover:text-[#D4AF37] transition-colors duration-300 font-body text-lg py-2 border-b border-white/10"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="#cta"
                        onClick={() => setIsOpen(false)}
                        className="btn-gold block text-center mt-4"
                    >
                        Réserver
                    </Link>
                </div>
            </div>
        </nav>
    );
}
