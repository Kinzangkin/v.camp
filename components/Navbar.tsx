"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// Discord icon component
const DiscordIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
);

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Determine if scrolled past threshold (100px)
            setIsScrolled(currentScrollY > 100);

            // Show navbar when scrolling up, hide when scrolling down (only after threshold)
            if (currentScrollY > 100) {
                if (currentScrollY < lastScrollY) {
                    // Scrolling up
                    setIsVisible(true);
                } else if (currentScrollY > lastScrollY && currentScrollY > 200) {
                    // Scrolling down past 200px
                    setIsVisible(false);
                }
            } else {
                // Always visible at top
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuVariants = {
        closed: {
            y: "-100%",
            transition: {
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1] as const
            }
        },
        open: {
            y: "0%",
            transition: {
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1] as const
            }
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1 }
    };

    return (
        <>
            <motion.nav
                initial={{ y: 0 }}
                animate={{
                    y: isVisible ? 0 : -100,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={`fixed top-0 left-0 right-0 w-full z-60 transition-all duration-300 ${isScrolled
                    ? 'bg-white/80 backdrop-blur-lg shadow-lg py-3'
                    : 'bg-transparent py-4 sm:py-6 md:py-8'
                    }`}
            >
                <div className="max-w-[1584px] mx-auto px-4 sm:px-6 md:px-10 flex justify-between items-center pointer-events-none">
                    <button
                        onClick={toggleMenu}
                        className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors cursor-pointer pointer-events-auto ${isScrolled
                            ? 'bg-[#1A1A1A] text-white hover:bg-black'
                            : 'bg-[#1A1A1A] text-white hover:bg-black'
                            }`}
                    >
                        {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                        <span className="hidden sm:inline">{isOpen ? "Tutup" : "Menu"}</span>
                    </button>

                    <Link
                        href="/"
                        className={`font-bold text-xl sm:text-2xl tracking-tighter pointer-events-auto z-70 transition-colors ${isScrolled ? 'text-[#1A1A1A]' : 'mix-blend-difference text-white'
                            }`}
                    >
                        V.camp
                    </Link>

                    {/* Desktop buttons */}
                    <div className="hidden md:flex items-center gap-4 pointer-events-auto">
                        <a
                            href="https://www.instagram.com/v.camp_"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`text-sm font-medium transition-opacity px-4 py-2 rounded-full cursor-pointer flex items-center gap-2 ${isScrolled
                                ? 'text-gray-700 hover:text-black'
                                : 'mix-blend-difference text-black/80 hover:opacity-70'
                                }`}
                        >
                            <Instagram className="w-4 h-4" />
                            Instagram
                        </a>
                        <a
                            href="https://discord.gg/UrXE4Aqtme"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#5865F2] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#4752c4] transition-colors cursor-pointer flex items-center gap-2"
                        >
                            <DiscordIcon className="w-4 h-4" />
                            Gabung Discord
                        </a>
                    </div>

                    {/* Mobile buttons - icons only */}
                    <div className="flex md:hidden items-center gap-2 pointer-events-auto">
                        <a
                            href="https://www.instagram.com/v.camp_"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-full bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white"
                            aria-label="Instagram"
                        >
                            <Instagram className="w-4 h-4" />
                        </a>
                        <a
                            href="https://discord.gg/UrXE4Aqtme"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-full bg-[#5865F2] flex items-center justify-center text-white"
                            aria-label="Discord"
                        >
                            <DiscordIcon className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </motion.nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="fixed inset-0 bg-[#111] z-50 flex flex-col pt-24 sm:pt-32 px-4 sm:px-6 md:px-10 text-white overflow-y-auto"
                    >
                        <div className="max-w-[1584px] mx-auto w-full flex-1">
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate="show"
                                className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 h-full pb-20"
                            >
                                {/* Column 1: Halaman */}
                                <div className="md:col-span-4 space-y-6 md:space-y-10">
                                    <motion.div variants={itemVariants}>
                                        <h3 className="text-xs font-medium text-gray-500 mb-4 sm:mb-8 uppercase tracking-widest">Halaman</h3>
                                        <ul className="space-y-3 sm:space-y-6">
                                            <li>
                                                <Link href="/" onClick={toggleMenu} className="text-2xl sm:text-3xl md:text-4xl font-normal hover:text-gray-300 transition-colors">Beranda</Link>
                                            </li>
                                            <li>
                                                <Link href="/portfolio" onClick={toggleMenu} className="text-2xl sm:text-3xl md:text-4xl font-normal hover:text-gray-300 transition-colors">Portfolio</Link>
                                            </li>
                                            <li>
                                                <Link href="/about" onClick={toggleMenu} className="text-2xl sm:text-3xl md:text-4xl font-normal hover:text-gray-300 transition-colors">Tentang Kami</Link>
                                            </li>
                                            <li>
                                                <Link href="/join" onClick={toggleMenu} className="text-2xl sm:text-3xl md:text-4xl font-normal hover:text-gray-300 transition-colors">Cara Bergabung</Link>
                                            </li>
                                        </ul>
                                    </motion.div>
                                </div>

                                {/* Column 2: Komunitas */}
                                <div className="md:col-span-3 space-y-6 md:space-y-10">
                                    <motion.div variants={itemVariants}>
                                        <h3 className="text-xs font-medium text-gray-500 mb-4 sm:mb-8 uppercase tracking-widest">Komunitas</h3>
                                        <ul className="space-y-3 sm:space-y-6">
                                            <li>
                                                <a href="https://discord.gg/UrXE4Aqtme" target="_blank" rel="noopener noreferrer" className="text-xl sm:text-2xl md:text-3xl font-normal hover:text-gray-300 transition-colors flex items-center gap-3">
                                                    <DiscordIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                                                    Discord Server
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.instagram.com/v.camp_" target="_blank" rel="noopener noreferrer" className="text-xl sm:text-2xl md:text-3xl font-normal hover:text-gray-300 transition-colors flex items-center gap-3">
                                                    <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
                                                    Instagram
                                                </a>
                                            </li>
                                        </ul>

                                        <div className="flex gap-3 mt-8 sm:mt-12">
                                            <a href="https://discord.gg/UrXE4Aqtme" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors">
                                                <DiscordIcon className="w-4 h-4" />
                                            </a>
                                            <a href="https://www.instagram.com/v.camp_" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors">
                                                <Instagram className="w-4 h-4" />
                                            </a>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Column 3: Featured - Komunitas Global */}
                                <div className="md:col-span-5">
                                    <motion.div variants={itemVariants} className="bg-linear-to-br from-[#1A1A1A] to-[#2A2A3A] p-6 sm:p-10 rounded-3xl md:rounded-4xl h-full flex flex-col items-center justify-center text-center relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500">
                                        <div className="absolute top-4 sm:top-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
                                            <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">Komunitas</span>
                                            <span className="bg-[#5865F2] text-white text-[10px] px-2 py-0.5 rounded-full font-bold">GLOBAL</span>
                                        </div>

                                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 leading-tight mt-8 sm:mt-0">
                                            Berkarya <br /> Tanpa Batas
                                        </h3>

                                        <p className="text-gray-400 mb-6 max-w-sm text-sm sm:text-base">
                                            Editor dari berbagai negara bersatu dalam kreativitas
                                        </p>

                                        <a
                                            href="https://discord.gg/UrXE4Aqtme"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-[#5865F2] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium hover:bg-[#4752c4] transition-colors mb-6 sm:mb-10 flex items-center gap-2 text-sm sm:text-base"
                                        >
                                            <DiscordIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                                            Gabung Sekarang
                                        </a>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
