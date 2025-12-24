"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const PlayReel = () => {
    return (
        <section className="w-full py-20 flex flex-col items-center justify-center overflow-hidden bg-[#Fdfdfd]">
            <div className="relative w-64 h-64 flex items-center justify-center">
                {/* Rotating Text Ring */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 w-full h-full"
                >
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                        <defs>
                            <path id="circlePath" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
                        </defs>
                        <text className="text-sm font-medium uppercase tracking-[4px]" fill="#333">
                            <textPath href="#circlePath" startOffset="0%">
                                Play Reel • Play Reel • Play Reel •
                            </textPath>
                        </text>
                    </svg>
                </motion.div>

                {/* Center Play Button/Placeholder */}
                <div className="absolute w-32 h-20 bg-black rounded-lg flex items-center justify-center cursor-pointer hover:scale-105 transition-transform z-10 shadow-xl">
                    <Play className="text-white fill-current w-8 h-8" />
                </div>

                {/* Optional glowing effect */}
                <div className="absolute inset-0 bg-purple-200/20 blur-3xl -z-10 rounded-full" />
            </div>

            <p className="mt-8 text-center text-gray-500 max-w-md px-6">
                Come for the growing toolkit. Stay for the community of creative developers and constant point of flex.
            </p>
        </section>
    );
};

export default PlayReel;
