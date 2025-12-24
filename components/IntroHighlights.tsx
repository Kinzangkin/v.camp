"use client";

import React from "react";
import { Globe, Users, Sparkles } from "lucide-react";

const highlights = [
    {
        icon: <Globe className="w-8 h-8" />,
        title: "Komunitas Global",
        description: "Editor dari berbagai negara berkumpul dan berkolaborasi",
    },
    {
        icon: <Users className="w-8 h-8" />,
        title: "Fokus pada Kolaborasi (MEP)",
        description: "Multi-Editor Project yang spektakuler hasil kerja tim",
    },
    {
        icon: <Sparkles className="w-8 h-8" />,
        title: "Inspirasi Vestia Zeta",
        description: "Terinspirasi dari kreativitas dan semangat sang maskot",
    },
];

const IntroHighlights = () => {
    return (
        <section className="w-full py-24 px-10 bg-[#Fdfdfd]">
            <div className="max-w-[1584px] mx-auto">
                {/* Intro Text */}
                <div className="text-center mb-20">
                    <p className="text-2xl md:text-3xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                        Di <span className="font-semibold text-[#1A1A1A]">V.camp</span>, setiap klik dan efek adalah bahasa universal.
                        Dari Indonesia ke dunia, kami merajut cerita melalui visual.
                        <span className="text-[#5865F2]"> Bersama, kami tidak hanya mengedit video; kami membangun pengalaman.</span>
                    </p>
                </div>

                {/* Highlight Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {highlights.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-[#5865F2]/30 transition-all duration-300 group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-[#5865F2]/10 flex items-center justify-center text-[#5865F2] mb-6 group-hover:bg-[#5865F2] group-hover:text-white transition-colors">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">{item.title}</h3>
                            <p className="text-gray-600">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IntroHighlights;
