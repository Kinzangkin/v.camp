import React from "react";
import { Play, ExternalLink } from "lucide-react";

export const metadata = {
    title: "Portfolio - V.camp",
    description: "Karya kolaborasi MEP dari editor V.camp di seluruh dunia",
};

const mepProjects = [
    {
        id: 1,
        title: "MEP Summer Vibes 2024",
        description: "Kolaborasi musim panas dengan tema ceria dan energik",
        editors: ["🇮🇩 Andi", "🇲🇾 Faiz", "🇵🇭 Maria", "🇺🇸 Jake", "🇯🇵 Yuki", "+7 lainnya"],
        thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2670&auto=format&fit=crop",
        youtubeLink: "#",
        year: "2024",
        theme: "Summer",
    },
    {
        id: 2,
        title: "Vestia Tribute MEP",
        description: "Penghormatan untuk maskot tercinta kami",
        editors: ["🇮🇩 Budi", "🇮🇩 Citra", "🇲🇾 Ahmad", "🇬🇧 Emma", "+4 lainnya"],
        thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop",
        youtubeLink: "#",
        year: "2024",
        theme: "Tribute",
    },
    {
        id: 3,
        title: "Anime Edits Collaboration",
        description: "Kompilasi edit anime terbaik dari komunitas",
        editors: ["🇯🇵 Hiro", "🇮🇩 Dewi", "🇺🇸 Mike", "🇦🇺 Sarah", "+11 lainnya"],
        thumbnail: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=2574&auto=format&fit=crop",
        youtubeLink: "#",
        year: "2024",
        theme: "Anime",
    },
    {
        id: 4,
        title: "Global MEP 2024",
        description: "Proyek kolaborasi terbesar tahun ini",
        editors: ["🇮🇩 Team Indonesia", "🇲🇾 Team Malaysia", "🇵🇭 Team Philippines", "+17 lainnya"],
        thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2600&auto=format&fit=crop",
        youtubeLink: "#",
        year: "2024",
        theme: "Global",
    },
    {
        id: 5,
        title: "Winter Wonderland MEP",
        description: "Kolaborasi bertema musim dingin yang magis",
        editors: ["🇬🇧 Lisa", "🇯🇵 Kenji", "🇮🇩 Eka", "🇺🇸 Tom", "+5 lainnya"],
        thumbnail: "https://images.unsplash.com/photo-1491002052546-bf38f186af56?q=80&w=2608&auto=format&fit=crop",
        youtubeLink: "#",
        year: "2023",
        theme: "Winter",
    },
    {
        id: 6,
        title: "Cinematic Edits Vol. 1",
        description: "Koleksi edit sinematik berkualitas tinggi",
        editors: ["🇮🇩 Fajar", "🇦🇺 Chris", "🇲🇾 Amir", "+8 lainnya"],
        thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2559&auto=format&fit=crop",
        youtubeLink: "#",
        year: "2023",
        theme: "Cinematic",
    },
];

export default function PortfolioPage() {
    return (
        <main className="min-h-screen bg-[#Fdfdfd]">
            {/* Hero */}
            <section className="py-32 px-10 bg-[#111] text-white">
                <div className="max-w-[1584px] mx-auto text-center">
                    <span className="text-[#5865F2] font-medium tracking-widest text-sm uppercase mb-4 block">MEP Gallery</span>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                        Karya Kolaborasi Kami
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Lihat hasil kolaborasi hebat editor-editor V.camp dari seluruh dunia.
                        Setiap proyek adalah bukti kekuatan kerja tim lintas negara.
                    </p>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-24 px-10">
                <div className="max-w-[1584px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {mepProjects.map((project) => (
                            <div
                                key={project.id}
                                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                            >
                                {/* Thumbnail */}
                                <div className="relative aspect-video overflow-hidden">
                                    <img
                                        src={project.thumbnail}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                                            <Play className="w-8 h-8 text-white" fill="white" />
                                        </div>
                                    </div>
                                    <div className="absolute top-4 left-4 flex gap-2">
                                        <span className="bg-[#5865F2] text-white text-xs px-2 py-1 rounded-full font-medium">{project.year}</span>
                                        <span className="bg-white/90 text-[#1A1A1A] text-xs px-2 py-1 rounded-full font-medium">{project.theme}</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">{project.title}</h3>
                                    <p className="text-gray-600 text-sm mb-4">{project.description}</p>

                                    {/* Editors */}
                                    <div className="mb-4">
                                        <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">Editor yang Terlibat:</p>
                                        <div className="flex flex-wrap gap-1">
                                            {project.editors.slice(0, 4).map((editor, idx) => (
                                                <span key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded">{editor}</span>
                                            ))}
                                            {project.editors.length > 4 && (
                                                <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-500">{project.editors[project.editors.length - 1]}</span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Links */}
                                    <a
                                        href={project.youtubeLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-[#5865F2] font-medium hover:underline"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        Tonton di YouTube
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
