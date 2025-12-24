import React from "react";
import PortfolioCard from "@/components/ui/Card";
import portfolioData from "@/porto.json";

export const metadata = {
    title: "Portfolio - V.camp",
    description: "Karya kolaborasi MEP dari editor V.camp di seluruh dunia",
};

export default function PortfolioPage() {
    return (
        <main className="min-h-screen bg-[#Fdfdfd] pt-24">
            {/* Hero */}
            <section className="py-20 px-6 md:px-10 bg-[#111] text-white">
                <div className="max-w-[1584px] mx-auto text-center">
                    <span className="text-[#5865F2] font-medium tracking-widest text-sm uppercase mb-4 block">MEP Gallery</span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                        Karya Kolaborasi Kami
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                        Lihat hasil kolaborasi hebat editor-editor V.camp dari seluruh dunia.
                        Setiap proyek adalah bukti kekuatan kerja tim lintas negara.
                    </p>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-16 md:py-24 px-4 md:px-10">
                <div className="max-w-[1584px] mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
                        {[...portfolioData].reverse().map((item) => (
                            <PortfolioCard
                                key={item.id}
                                thumbnail={item.thumbnail}
                                link={item.link}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-24 px-6 md:px-10 bg-[#111] text-white text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ingin Ikut Berkarya?
                    </h2>
                    <p className="text-gray-400 mb-8">
                        Gabung dengan komunitas V.camp dan jadilah bagian dari proyek MEP selanjutnya!
                    </p>
                    <a
                        href="https://discord.gg/UrXE4Aqtme"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#5865F2] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#4752c4] transition-colors"
                    >
                        Gabung Discord
                    </a>
                </div>
            </section>
        </main>
    );
}
