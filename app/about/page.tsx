import React from "react";
import Image from "next/image";
import FlowingMenu from "@/components/FlowingMenu";

// Discord icon component
const DiscordIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
);

const stats = [
    { value: "50+", label: "Editor aktif dari berbagai negara" },
    { value: "20+", label: "Proyek MEP yang telah diselesaikan" },
    { value: "10+", label: "Negara yang bergabung" },
];

// FlowingMenu items for Core Values
const flowingMenuItems = [
    {
        text: "Kolaborasi Global",
        description: "Menghubungkan editor dari berbagai negara, melampaui batas zona waktu dan bahasa",
    },
    {
        text: "Kreativitas Tanpa Batas",
        description: "Terus mendorong batas kreativitas, mengeksplorasi teknik baru",
    },
    {
        text: "Komunitas Supportif",
        description: "Saling mendukung, berbagi ilmu, dan tumbuh bersama",
    },
    {
        text: "Semangat Tim",
        description: "Bekerja sama dengan semangat dan dedikasi tinggi",
    },
];

export const metadata = {
    title: "Tentang Kami - V.camp",
    description: "Kenali lebih dekat komunitas editing V.camp (Vestia Camp)",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#Fdfdfd] pt-24">
            {/* Hero Section with Intro Text and Stats */}
            <section className="py-20 px-6 md:px-10">
                <div className="max-w-[1200px] mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        {/* Left: Vestia Image */}
                        <div className="relative">
                            <div className="relative w-full aspect-square max-w-md mx-auto">
                                <div className="absolute inset-0 bg-linear-to-br from-[#5865F2] to-[#7289da] rounded-3xl rotate-3"></div>
                                <div className="absolute inset-0 bg-white rounded-3xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="/asset/Vestia_zeta.png"
                                        alt="Vestia Zeta"
                                        fill
                                        className="object-cover object-top"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right: Intro Text and Stats */}
                        <div>
                            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-10">
                                <span className="font-bold text-[#5865F2]">V.camp</span> (Vestia Camp) lahir dari kecintaan terhadap dunia editing video dan inspirasi dari sosok Vestia Zeta. Kami percaya bahwa kreativitas tidak mengenal batas. Dari Indonesia ke dunia, kami merajut cerita melalui visual yang memukau.
                            </p>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-3 gap-6">
                                {stats.map((stat, index) => (
                                    <div key={index} className="text-center md:text-left">
                                        <div className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-2">
                                            {stat.value}
                                        </div>
                                        <p className="text-sm text-gray-500 leading-tight">
                                            {stat.label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Core Values with FlowingMenu */}
            <section className="bg-[#111] text-white">
                <div className="max-w-[1200px] mx-auto py-12 px-6 md:px-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-4">
                        Nilai Inti Kami
                    </h2>
                    <p className="text-gray-400 text-center mb-8 text-lg">
                        Hover untuk melihat detail
                    </p>
                </div>
                <div className="h-[400px] md:h-[500px]">
                    <FlowingMenu items={flowingMenuItems} />
                </div>
            </section>

            {/* Visi Section */}
            <section className="py-16 md:py-24 px-6 md:px-10 border-t border-gray-200">
                <div className="max-w-[1200px] mx-auto">
                    <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-start">
                        {/* Left: Title */}
                        <div className="md:col-span-3">
                            <h2 className="text-sm font-medium text-[#5865F2] uppercase tracking-widest mb-2">Visi</h2>
                            <div className="w-12 h-1 bg-[#5865F2] rounded-full"></div>
                        </div>
                        {/* Right: Content */}
                        <div className="md:col-span-9">
                            <p className="text-2xl md:text-4xl lg:text-5xl font-medium text-[#1A1A1A] leading-tight">
                                Menjadi komunitas editing video terdepan yang menghubungkan kreator berbakat dari seluruh dunia, menciptakan karya-karya kolaborasi yang menginspirasi.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Misi Section */}
            <section className="py-16 md:py-24 px-6 md:px-10 border-t border-gray-200 bg-[#111] text-white">
                <div className="max-w-[1200px] mx-auto">
                    <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-start">
                        {/* Left: Content */}
                        <div className="md:col-span-9 order-2 md:order-1">
                            <ul className="space-y-6">
                                <li className="text-xl md:text-3xl lg:text-4xl font-medium leading-tight flex items-start gap-4">
                                    <span className="text-[#5865F2] text-2xl md:text-4xl">01</span>
                                    <span className="text-white/90">Membangun komunitas yang solid dan supportif</span>
                                </li>
                                <li className="text-xl md:text-3xl lg:text-4xl font-medium leading-tight flex items-start gap-4">
                                    <span className="text-[#5865F2] text-2xl md:text-4xl">02</span>
                                    <span className="text-white/90">Memfasilitasi kolaborasi global (MEP)</span>
                                </li>
                                <li className="text-xl md:text-3xl lg:text-4xl font-medium leading-tight flex items-start gap-4">
                                    <span className="text-[#5865F2] text-2xl md:text-4xl">03</span>
                                    <span className="text-white/90">Mengembangkan skill editing bersama</span>
                                </li>
                                <li className="text-xl md:text-3xl lg:text-4xl font-medium leading-tight flex items-start gap-4">
                                    <span className="text-[#5865F2] text-2xl md:text-4xl">04</span>
                                    <span className="text-white/90">Menyebarkan semangat kreativitas</span>
                                </li>
                            </ul>
                        </div>
                        {/* Right: Title */}
                        <div className="md:col-span-3 order-1 md:order-2 md:text-right">
                            <h2 className="text-sm font-medium text-[#5865F2] uppercase tracking-widest mb-2">Misi</h2>
                            <div className="w-12 h-1 bg-[#5865F2] rounded-full md:ml-auto"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section with Background */}
            <section className="relative py-32 px-6 md:px-10 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[#111]/90 z-10"></div>
                    <div className="absolute inset-0 bg-linear-to-br from-[#5865F2]/40 to-transparent z-10"></div>
                    <Image
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop"
                        alt="Background"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Content */}
                <div className="relative z-20 max-w-[800px] mx-auto text-center text-white">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Siap Bergabung dengan V.camp?
                    </h2>
                    <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
                        Bergabunglah dengan komunitas editor kreatif dari seluruh dunia. Belajar, berkarya, dan tumbuh bersama di V.camp Discord Server.
                    </p>
                    <a
                        href="https://discord.gg/UrXE4Aqtme"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-white text-[#1A1A1A] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                        <DiscordIcon className="w-6 h-6 text-[#5865F2]" />
                        Gabung Sekarang
                    </a>
                </div>
            </section>
        </main>
    );
}
