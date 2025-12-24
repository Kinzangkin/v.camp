import React from "react";
import { Instagram, CheckCircle, ArrowRight, Bell } from "lucide-react";

// Discord icon component
const DiscordIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
);

export const metadata = {
    title: "Cara Bergabung - V.camp",
    description: "Panduan lengkap untuk bergabung dengan komunitas V.camp",
};

const steps = [
    {
        number: 1,
        title: "Ikuti Instagram Kami",
        description: "Follow @vestiacamp untuk update terbaru tentang proyek dan kegiatan komunitas",
        icon: <Instagram className="w-6 h-6" />,
        action: {
            text: "Follow Instagram",
            href: "https://instagram.com/vestiacamp",
        },
    },
    {
        number: 2,
        title: "Bergabung ke Server Discord",
        description: "Discord adalah pusat komunikasi utama kami. Di sini kamu bisa chat, share karya, dan berkolaborasi",
        icon: <DiscordIcon className="w-6 h-6" />,
        action: {
            text: "Join Discord",
            href: "https://discord.gg/vestiacamp",
        },
    },
    {
        number: 3,
        title: "Perkenalkan Diri",
        description: "Setelah join, pergi ke channel #introduction dan perkenalkan dirimu. Ceritakan pengalaman editingmu!",
        icon: <CheckCircle className="w-6 h-6" />,
        action: null,
    },
    {
        number: 4,
        title: "Ikuti Proyek Kolaborasi (MEP)",
        description: "Tunggu pengumuman proyek MEP dan daftarkan diri. Ajukan ide kamu dan berkolaborasi dengan editor lain!",
        icon: <Bell className="w-6 h-6" />,
        action: null,
    },
];

export default function JoinPage() {
    return (
        <main className="min-h-screen bg-[#Fdfdfd]">
            {/* Hero */}
            <section className="py-32 px-10 bg-gradient-to-b from-[#5865F2]/10 to-transparent">
                <div className="max-w-[1200px] mx-auto text-center">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#1A1A1A] mb-6">
                        Cara <span className="text-[#5865F2]">Bergabung</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                        Ingin menjadi bagian dari komunitas editor global? Ikuti langkah-langkah mudah berikut!
                    </p>
                </div>
            </section>

            {/* Prasyarat */}
            <section className="py-16 px-10">
                <div className="max-w-[800px] mx-auto">
                    <div className="bg-[#5865F2]/5 border border-[#5865F2]/20 rounded-3xl p-8">
                        <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">Siapa yang Cocok Bergabung?</h2>
                        <ul className="space-y-3 text-gray-600">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-[#5865F2] mt-1 shrink-0" />
                                <span>Memiliki minat di dunia editing video (pemula atau profesional)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-[#5865F2] mt-1 shrink-0" />
                                <span>Terbuka untuk belajar dan berbagi ilmu</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-[#5865F2] mt-1 shrink-0" />
                                <span>Siap berkolaborasi dengan editor dari berbagai negara</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-[#5865F2] mt-1 shrink-0" />
                                <span>Menghargai sesama anggota komunitas</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Steps */}
            <section className="py-16 px-10">
                <div className="max-w-[1000px] mx-auto">
                    <h2 className="text-3xl font-bold text-[#1A1A1A] text-center mb-16">Langkah-Langkah Bergabung</h2>

                    <div className="space-y-8">
                        {steps.map((step, index) => (
                            <div key={step.number} className="flex gap-6 items-start">
                                {/* Number */}
                                <div className="w-12 h-12 rounded-full bg-[#5865F2] text-white flex items-center justify-center font-bold text-xl shrink-0">
                                    {step.number}
                                </div>

                                {/* Content */}
                                <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-[#5865F2]">{step.icon}</span>
                                        <h3 className="text-xl font-bold text-[#1A1A1A]">{step.title}</h3>
                                    </div>
                                    <p className="text-gray-600 mb-4">{step.description}</p>
                                    {step.action && (
                                        <a
                                            href={step.action.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-[#5865F2] font-medium hover:underline"
                                        >
                                            {step.action.text}
                                            <ArrowRight className="w-4 h-4" />
                                        </a>
                                    )}
                                </div>

                                {/* Connector Line */}
                                {index < steps.length - 1 && (
                                    <div className="absolute left-6 mt-14 w-0.5 h-8 bg-[#5865F2]/20" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Coming Soon */}
            <section className="py-16 px-10">
                <div className="max-w-[800px] mx-auto text-center">
                    <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-3xl p-10">
                        <span className="text-amber-600 font-medium text-sm uppercase tracking-wide">Coming Soon</span>
                        <h3 className="text-2xl font-bold text-[#1A1A1A] mt-2 mb-3">Fitur Pendaftaran Online Akan Segera Hadir!</h3>
                        <p className="text-gray-600">
                            Kami sedang mengembangkan sistem pendaftaran online untuk mempermudah proses bergabung.
                            Untuk saat ini, ikuti langkah-langkah di atas untuk menjadi bagian dari V.camp.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-10 bg-[#111] text-white">
                <div className="max-w-[800px] mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-6">Siap Bergabung?</h2>
                    <p className="text-gray-400 mb-8">Langkah pertama menuju komunitas editing global</p>
                    <a
                        href="https://discord.gg/vestiacamp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#5865F2] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#4752c4] transition-colors inline-flex items-center gap-2"
                    >
                        <DiscordIcon className="w-5 h-5" />
                        Gabung Discord Sekarang
                    </a>
                </div>
            </section>
        </main>
    );
}
