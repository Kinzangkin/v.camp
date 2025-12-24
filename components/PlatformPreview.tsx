"use client";

import React from "react";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import PortfolioCard from "@/components/ui/Card";
import portfolioData from "@/porto.json";

const PlatformPreview = () => {
    // Get the 3 latest items (18, 19, 20 - reversed to show newest first)
    const latestMeps = [...portfolioData].slice(-3).reverse();

    return (
        <section className="w-full py-24 bg-[#111] relative overflow-hidden">
            <div className="max-w-[1584px] mx-auto px-6 md:px-10 text-center text-white">
                <span className="text-[#5865F2] font-medium tracking-widest text-sm uppercase">Portfolio Preview</span>
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-4 mt-2">
                    Pratinjau Karya
                </h2>

                <p className="text-gray-400 mb-12 md:mb-16 max-w-2xl mx-auto text-base md:text-lg">
                    Beberapa hasil kolaborasi MEP terbaru dari editor V.camp di seluruh dunia.
                </p>

                {/* MEP Preview Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-12">
                    {latestMeps.map((item) => (
                        <PortfolioCard
                            key={item.id}
                            thumbnail={item.thumbnail}
                            link={item.link}
                        />
                    ))}
                </div>

                {/* View All Button */}
                <Link
                    href="/portfolio"
                    className="inline-flex items-center gap-2 bg-[#5865F2] text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-medium hover:bg-[#4752c4] transition-colors"
                >
                    Lihat Semua Karya
                    <ExternalLink className="w-5 h-5" />
                </Link>
            </div>
        </section>
    );
};

export default PlatformPreview;
