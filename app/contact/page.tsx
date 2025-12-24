import React from "react";
import { Mail, Instagram, Youtube, MapPin } from "lucide-react";

// Discord icon component
const DiscordIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
);

export const metadata = {
    title: "Kontak - V.camp",
    description: "Hubungi komunitas V.camp untuk pertanyaan dan kolaborasi",
};

const contactLinks = [
    {
        title: "Pusat Komunitas",
        description: "Bergabung dengan Discord server kami untuk chat langsung dengan anggota komunitas",
        icon: <DiscordIcon className="w-8 h-8" />,
        link: "https://discord.gg/vestiacamp",
        linkText: "Join Discord Server",
        color: "bg-[#5865F2]",
    },
    {
        title: "Portfolio & Showcase",
        description: "Lihat karya-karya terbaik kami di Instagram",
        icon: <Instagram className="w-8 h-8" />,
        link: "https://instagram.com/vestiacamp",
        linkText: "@vestiacamp",
        color: "bg-gradient-to-br from-purple-500 to-pink-500",
    },
    {
        title: "Channel YouTube",
        description: "Tonton semua video MEP dan kolaborasi kami",
        icon: <Youtube className="w-8 h-8" />,
        link: "https://youtube.com/@vestiacamp",
        linkText: "@vestiacamp",
        color: "bg-red-500",
    },
    {
        title: "Email Bisnis",
        description: "Untuk pertanyaan bisnis, sponsorship, atau kolaborasi profesional",
        icon: <Mail className="w-8 h-8" />,
        link: "mailto:collab@vestiacamp.com",
        linkText: "collab@vestiacamp.com",
        color: "bg-emerald-500",
    },
];

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[#Fdfdfd]">
            {/* Hero */}
            <section className="py-32 px-10 bg-[#111] text-white">
                <div className="max-w-[1200px] mx-auto text-center">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                        Hubungi <span className="text-[#5865F2]">Kami</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Ada pertanyaan atau ingin berkolaborasi? Kami senang mendengar dari kamu!
                    </p>
                </div>
            </section>

            {/* Contact Links */}
            <section className="py-24 px-10">
                <div className="max-w-[1200px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {contactLinks.map((item, index) => (
                            <a
                                key={index}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-[#5865F2]/30 transition-all duration-300"
                            >
                                <div className={`w-16 h-16 rounded-2xl ${item.color} text-white flex items-center justify-center mb-6`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">{item.title}</h3>
                                <p className="text-gray-600 mb-4">{item.description}</p>
                                <span className="text-[#5865F2] font-medium group-hover:underline">{item.linkText}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Global Community */}
            <section className="py-24 px-10 bg-gray-50">
                <div className="max-w-[1200px] mx-auto text-center">
                    <MapPin className="w-12 h-12 text-[#5865F2] mx-auto mb-6" />
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">Komunitas Global</h2>
                    <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                        V.camp adalah komunitas online dengan anggota dari berbagai penjuru dunia.
                        Tidak ada lokasi fisik - kami terhubung melalui internet!
                    </p>
                    <div className="flex justify-center gap-4 text-5xl">
                        <span title="Indonesia">🇮🇩</span>
                        <span title="Malaysia">🇲🇾</span>
                        <span title="Philippines">🇵🇭</span>
                        <span title="United States">🇺🇸</span>
                        <span title="Japan">🇯🇵</span>
                        <span title="United Kingdom">🇬🇧</span>
                        <span title="Australia">🇦🇺</span>
                    </div>
                </div>
            </section>
        </main>
    );
}
