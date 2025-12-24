"use client";

import React from "react";
import { Instagram, Mail } from "lucide-react";
import Link from "next/link";

// Discord icon component
const DiscordIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
);

const Footer = () => {
    return (
        <footer className="w-full bg-[#111] text-white py-20 px-6 relative overflow-hidden border-t border-white/10">
            <div className="max-w-[1584px] mx-auto flex flex-col items-center">

                <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-24">
                    <div>
                        <p className="text-gray-500 text-sm mb-2">Komunitas Editing Global</p>
                        <h2 className="text-5xl md:text-6xl font-bold tracking-tighter">V.camp</h2>
                        <p className="text-gray-400 mt-2 text-sm">Terinspirasi oleh Vestia Zeta</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-10 text-sm">
                        <div>
                            <p className="text-gray-500 mb-4 uppercase tracking-widest text-xs font-medium">Halaman</p>
                            <ul className="space-y-2">
                                <li><Link href="/" className="hover:text-[#5865F2] transition-colors">Beranda</Link></li>
                                <li><Link href="/portfolio" className="hover:text-[#5865F2] transition-colors">Portfolio</Link></li>
                                <li><Link href="/about" className="hover:text-[#5865F2] transition-colors">Tentang Kami</Link></li>
                                <li><Link href="/join" className="hover:text-[#5865F2] transition-colors">Gabung</Link></li>
                            </ul>
                        </div>
                        <div>
                            <p className="text-gray-500 mb-4 uppercase tracking-widest text-xs font-medium">Komunitas</p>
                            <ul className="space-y-2">
                                <li><a href="https://discord.gg/UrXE4Aqtme" target="_blank" rel="noopener noreferrer" className="hover:text-[#5865F2] transition-colors flex items-center gap-2"><DiscordIcon className="w-4 h-4" /> Discord</a></li>
                                <li><a href="https://www.instagram.com/v.camp_" target="_blank" rel="noopener noreferrer" className="hover:text-[#5865F2] transition-colors flex items-center gap-2"><Instagram className="w-4 h-4" /> Instagram</a></li>
                            </ul>
                        </div>
                        <div>
                            <p className="text-gray-500 mb-4 uppercase tracking-widest text-xs font-medium">Kontak</p>
                            <ul className="space-y-2">
                                <li><a href="mailto:collab@vestiacamp.com" className="hover:text-[#5865F2] transition-colors flex items-center gap-2"><Mail className="w-4 h-4" /> Email</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Call to Action Card Area */}
                <div className="relative w-full max-w-4xl h-64 bg-linear-to-br from-[#5865F2] to-[#7289da] rounded-3xl overflow-hidden flex items-center justify-between px-12 md:px-20">
                    <div className="z-10">
                        <h3 className="text-3xl md:text-4xl font-bold mb-2">Siap Berkarya Bersama?</h3>
                        <p className="text-white/80 mb-4">Gabung komunitas editor global sekarang</p>
                        <a
                            href="https://discord.gg/UrXE4Aqtme"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-[#5865F2] px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
                        >
                            <DiscordIcon className="w-5 h-5" />
                            Gabung Discord
                        </a>
                    </div>

                    {/* Decorative Circle */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
                </div>

                <div className="mt-24 pt-8 border-t border-white/10 w-full flex flex-col md:flex-row justify-between gap-4 text-xs text-gray-500">
                    <p>© 2024 Vestia Camp. All rights reserved.</p>
                    <p className="text-gray-600">
                        Terinspirasi oleh kreativitas dan semangat <span className="text-[#5865F2]">Vestia Zeta</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
