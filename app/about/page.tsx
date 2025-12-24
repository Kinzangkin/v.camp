import React from "react";
import { Heart, Users, Sparkles, Target, Globe } from "lucide-react";

export const metadata = {
    title: "Tentang Kami - V.camp",
    description: "Kenali lebih dekat komunitas editing V.camp (Vestia Camp)",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#Fdfdfd]">
            {/* Hero Section */}
            <section className="py-32 px-10 bg-linear-to-b from-[#5865F2]/10 to-transparent">
                <div className="max-w-[1200px] mx-auto text-center">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#1A1A1A] mb-6">
                        Tentang <span className="text-[#5865F2]">V.camp</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                        Komunitas editing global yang terinspirasi oleh kreativitas dan semangat Vestia Zeta
                    </p>
                </div>
            </section>

            {/* Kisah & Makna Nama */}
            <section className="py-24 px-10">
                <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">
                            Kisah & Makna Nama
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-4">
                            <strong>V.camp</strong> atau <strong>Vestia Camp</strong> lahir dari kecintaan kami terhadap dunia editing video dan inspirasi dari sosok Vestia Zeta.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed mb-4">
                            Nama "Camp" melambangkan tempat berkumpul - sebuah rumah virtual bagi para editor dari berbagai penjuru dunia untuk belajar, berkolaborasi, dan menciptakan karya-karya spektakuler bersama.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Kami percaya bahwa kreativitas tidak mengenal batas. Dari Indonesia ke dunia, kami merajut cerita melalui visual.
                        </p>
                    </div>
                    <div className="bg-linear-to-br from-[#5865F2] to-[#7289da] rounded-3xl p-12 text-white text-center">
                        <div className="text-8xl mb-6">✨</div>
                        <h3 className="text-2xl font-bold mb-2">Vestia Zeta</h3>
                        <p className="text-white/80">Maskot & Inspirasi Kami</p>
                    </div>
                </div>
            </section>

            {/* Visi & Misi */}
            <section className="py-24 px-10 bg-[#111] text-white">
                <div className="max-w-[1200px] mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Visi & Misi</h2>
                        <p className="text-gray-400 text-lg">Mengapa kami hadir</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white/5 rounded-3xl p-10 border border-white/10">
                            <Target className="w-12 h-12 text-[#5865F2] mb-6" />
                            <h3 className="text-2xl font-bold mb-4">Visi</h3>
                            <p className="text-gray-400 text-lg">
                                Menjadi komunitas editing video terdepan yang menghubungkan kreator berbakat dari seluruh dunia, menciptakan karya-karya kolaborasi yang menginspirasi.
                            </p>
                        </div>
                        <div className="bg-white/5 rounded-3xl p-10 border border-white/10">
                            <Heart className="w-12 h-12 text-pink-500 mb-6" />
                            <h3 className="text-2xl font-bold mb-4">Misi</h3>
                            <ul className="text-gray-400 text-lg space-y-3">
                                <li>• Membangun komunitas yang solid dan supportif</li>
                                <li>• Memfasilitasi kolaborasi global (MEP)</li>
                                <li>• Mengembangkan skill editing bersama</li>
                                <li>• Menyebarkan semangat kreativitas</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nilai Inti */}
            <section className="py-24 px-10">
                <div className="max-w-[1200px] mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-4">Nilai Inti</h2>
                        <p className="text-gray-600 text-lg">Yang kami junjung tinggi</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-8">
                            <Globe className="w-16 h-16 text-[#5865F2] mx-auto mb-6" />
                            <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Kolaborasi Tanpa Batas</h3>
                            <p className="text-gray-600">Anggota internasional bekerja sama melampaui zona waktu dan bahasa</p>
                        </div>
                        <div className="text-center p-8">
                            <Sparkles className="w-16 h-16 text-amber-500 mx-auto mb-6" />
                            <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Semangat Berkarya</h3>
                            <p className="text-gray-600">Terus berkreasi, belajar, dan menghasilkan karya terbaik</p>
                        </div>
                        <div className="text-center p-8">
                            <Users className="w-16 h-16 text-emerald-500 mx-auto mb-6" />
                            <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Komunitas Supportif</h3>
                            <p className="text-gray-600">Saling mendukung, berbagi ilmu, dan tumbuh bersama</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
