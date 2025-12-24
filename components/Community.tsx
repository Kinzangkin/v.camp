"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Users, Video } from "lucide-react";

// Discord icon component
const DiscordIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
);

const stats = [
    { icon: <Users className="w-8 h-8" />, value: "50+", label: "Editor Aktif" },
    { icon: <Video className="w-8 h-8" />, value: "20+", label: "Proyek MEP" },
    { icon: <Sparkles className="w-8 h-8" />, value: "10+", label: "Negara" },
];

const Community = () => {
    return (
        <section className="w-full py-24 px-10 bg-linear-to-b from-[#Fdfdfd] to-[#5865F2]/10">
            <div className="max-w-[1584px] mx-auto">
                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 mb-20">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-[#5865F2]/10 flex items-center justify-center text-[#5865F2] mx-auto mb-4">
                                {stat.icon}
                            </div>
                            <div className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-2">{stat.value}</div>
                            <div className="text-gray-600">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Card */}
                <div className="bg-linear-to-br from-[#5865F2] to-[#7289da] rounded-4xl p-12 md:p-16 text-white text-center relative overflow-hidden">
                    {/* Background Decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10">
                        <DiscordIcon className="w-16 h-16 mx-auto mb-6 opacity-80" />
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Gabung Komunitas Kami</h2>
                        <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
                            Bergabunglah dengan ratusan editor kreatif dari seluruh dunia.
                            Belajar, berkarya, dan tumbuh bersama di V.camp Discord Server.
                        </p>
                        <a
                            href="https://discord.gg/vestiacamp"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-[#5865F2] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
                        >
                            <DiscordIcon className="w-5 h-5 " />
                            <p className="text-sm md:text-base">Gabung Discord Sekarang</p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Community;
