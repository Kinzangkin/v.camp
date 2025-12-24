"use client";

import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import { Sparkles } from "lucide-react";

// Gallery items for V.camp MEP showcase
const galleryItems = [
    { image: "/asset/1.png", text: "1" },
    { image: "/asset/2.png", text: "2" },
    { image: "/asset/3.png", text: "3" },
    { image: "/asset/4.png", text: "4" },
    { image: "/asset/5.png", text: "5" },
    { image: "/asset/6.png", text: "6" },
];

// Preload images utility
const preloadImages = (images: string[]): Promise<void[]> => {
    return Promise.all(
        images.map((src) => {
            return new Promise<void>((resolve, reject) => {
                const img = new Image();
                img.onload = () => resolve();
                img.onerror = reject;
                img.src = src;
            });
        })
    );
};

// Loading skeleton component
const GallerySkeleton = () => (
    <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-gray-100 to-gray-200">
        <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 border-4 border-[#5865F2] border-t-transparent rounded-full animate-spin" />
            <p className="text-gray-500 text-sm animate-pulse">Memuat galeri...</p>
        </div>
    </div>
);

// Dynamically import CircularGallery to avoid SSR issues with OGL
const CircularGallery = dynamic(() => import("./CircularGallery"), {
    ssr: false,
    loading: () => <GallerySkeleton />,
});

// Discord icon component
const DiscordIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
);

const Hero = () => {
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const galleryRef = useRef<HTMLDivElement>(null);

    // Preload images when component mounts
    useEffect(() => {
        const imageUrls = galleryItems.map((item) => item.image);
        preloadImages(imageUrls)
            .then(() => setImagesLoaded(true))
            .catch(() => setImagesLoaded(true)); // Still show gallery even if preload fails
    }, []);

    // Lazy load with Intersection Observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true);
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.1, rootMargin: "100px" }
        );

        if (galleryRef.current) {
            observer.observe(galleryRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const shouldRenderGallery = imagesLoaded && isInView;

    return (
        <>
            {/* Preload images in head */}
            <Head>
                {galleryItems.map((item, index) => (
                    <link
                        key={index}
                        rel="preload"
                        href={item.image}
                        as="image"
                    />
                ))}
            </Head>

            <div className="min-h-screen bg-[#Fdfdfd] text-black font-sans selection:bg-purple-200 overflow-x-hidden flex flex-col relative">
                {/* Main Content */}
                <main className="flex-1 flex flex-col items-center relative w-full max-w-full mx-auto pt-10 overflow-x-hidden">
                    {/* Headline */}
                    <div className="text-center space-y-4 mb-8 z-10 relative px-4 mt-20 w-full max-w-7xl">
                        <h1 className="text-[2.2rem] sm:text-[3rem] md:text-[5rem] lg:text-[7rem] leading-none font-normal tracking-[-0.04em] text-[#1A1A1A] flex flex-wrap justify-center items-center gap-2 md:gap-4">
                            <span>Berkreasi</span>
                            <span className="text-[#5865F2] animate-pulse">
                                <Sparkles className="w-6 h-6 sm:w-10 sm:h-10 md:w-16 md:h-16 lg:w-20 lg:h-20" strokeWidth={2} />
                            </span>
                            <span>Tanpa Batas</span>
                        </h1>

                        <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto font-normal mt-4 px-2">
                            Komunitas editing global yang terinspirasi oleh kreativitas dan semangat{" "}
                            <span className="text-[#5865F2] font-medium">Vestia Zeta</span>.
                        </p>

                        {/* CTAs */}
                        <div className="pt-6 flex flex-col sm:flex-row justify-center gap-3 px-2">
                            <a
                                href="/portfolio"
                                className="bg-[#1A1A1A] text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base font-medium hover:bg-black transition-colors inline-flex items-center justify-center gap-2"
                            >
                                Lihat Portfolio
                            </a>
                            <a
                                href="https://discord.gg/UrXE4Aqtme"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#5865F2] text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base font-medium hover:bg-[#4752c4] transition-colors inline-flex items-center justify-center gap-2"
                            >
                                <DiscordIcon className="w-4 h-4" />
                                Gabung Discord
                            </a>
                        </div>
                    </div>

                    {/* Circular Gallery with Lazy Loading */}
                    <div
                        ref={galleryRef}
                        className="w-full h-[350px] sm:h-[450px] md:h-[600px] relative overflow-hidden"
                    >
                        {shouldRenderGallery ? (
                            <CircularGallery
                                items={galleryItems}
                                bend={2}
                                textColor="#ffffff"
                                borderRadius={0.05}
                                font="bold 24px sans-serif"
                                scrollSpeed={2}
                                scrollEase={0.05}
                            />
                        ) : (
                            <GallerySkeleton />
                        )}
                    </div>
                </main>

                {/* Background Decorative Element */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] bg-[#5865F2]/10 rounded-full blur-3xl -z-10 pointer-events-none" />
            </div>
        </>
    );
};

export default Hero;
