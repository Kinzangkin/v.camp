"use client";

import React from "react";
import { Play, ExternalLink } from "lucide-react";
import Link from "next/link";

// Sample MEP projects for preview
const mepPreview = [
    {
        id: 1,
        title: "MEP Summer Vibes 2024",
        editors: "12 Editor",
        thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2670&auto=format&fit=crop",
    },
    {
        id: 2,
        title: "Vestia Tribute MEP",
        editors: "8 Editor",
        thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop",
    },
    {
        id: 3,
        title: "Global MEP 2024",
        editors: "20+ Editor",
        thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2600&auto=format&fit=crop",
    },
];

const PlatformPreview = () => {
    return (
        <section className="w-full py-24 bg-[#111] relative overflow-hidden">
            <div className="max-w-[1584px] mx-auto px-10 text-center text-white">
                <span className="text-[#5865F2] font-medium tracking-widest text-sm uppercase">Portfolio Preview</span>
                <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 mt-2">
                    Pratinjau Karya
                </h2>

                <p className="text-gray-400 mb-16 max-w-2xl mx-auto text-lg">
                    Beberapa hasil kolaborasi MEP terbaik dari editor V.camp di seluruh dunia.
                </p>

                {/* MEP Preview Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {mepPreview.map((project) => (
                        <div
                            key={project.id}
                            className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer"
                        >
                            <img
                                src={project.thumbnail}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                                    <Play className="w-8 h-8 text-white" fill="white" />
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                                <h3 className="text-white font-bold text-lg">{project.title}</h3>
                                <p className="text-white/70 text-sm">{project.editors}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <Link
                    href="/portfolio"
                    className="inline-flex items-center gap-2 bg-[#5865F2] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#4752c4] transition-colors"
                >
                    Lihat Semua Karya
                    <ExternalLink className="w-5 h-5" />
                </Link>
            </div>
        </section>
    );
};

export default PlatformPreview;
