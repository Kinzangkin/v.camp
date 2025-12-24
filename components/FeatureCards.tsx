"use client";

import React from "react";
import { motion } from "framer-motion";
import { Video, Palette, Wand2, Layers } from "lucide-react";

const features = [
    {
        icon: <Video className="w-8 h-8" />,
        title: "Multi-Editor Project (MEP)",
        description: "Kolaborasi video editing dengan editor dari berbagai negara",
        color: "bg-gradient-to-br from-purple-500 to-indigo-600",
        rotation: -8,
        large: true,
    },
    {
        icon: <Palette className="w-8 h-8" />,
        title: "Berbagi Preset & Template",
        description: "Akses koleksi preset dan template dari komunitas",
        color: "bg-gradient-to-br from-pink-500 to-rose-500",
        rotation: 3,
        large: false,
    },
    {
        icon: <Wand2 className="w-8 h-8" />,
        title: "Tutorial & Sharing Session",
        description: "Belajar teknik editing baru dari sesama member",
        color: "bg-gradient-to-br from-amber-500 to-orange-500",
        rotation: -3,
        large: false,
    },
    {
        icon: <Layers className="w-8 h-8" />,
        title: "Komunitas Supportif",
        description: "Feedback konstruktif dan dukungan penuh dari anggota",
        color: "bg-gradient-to-br from-emerald-500 to-teal-500",
        rotation: 8,
        large: true,
    },
];

const FeatureCards = () => {
    return (
        <section className="w-full py-24 px-10 bg-[#Fdfdfd]">
            <div className="max-w-[1584px] mx-auto mb-16 text-center">
                <h2 className="text-5xl md:text-7xl font-bold text-[#1A1A1A] tracking-tight leading-[1.1] mb-4">
                    Apa yang Kami Tawarkan
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Lebih dari sekedar komunitas editing - kami adalah keluarga kreator
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
                        style={{ rotate: feature.rotation }}
                        className={`
                            relative rounded-3xl overflow-hidden shadow-2xl shrink-0 cursor-pointer
                            ${feature.large ? 'w-72 h-80 md:w-80 md:h-96' : 'w-64 h-72 md:w-72 md:h-80'}
                            ${feature.color}
                        `}
                    >
                        <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4 backdrop-blur-sm">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                            <p className="text-white/80 text-sm">{feature.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default FeatureCards;
