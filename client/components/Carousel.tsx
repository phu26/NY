"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, PlayCircle } from "lucide-react";

const slides = [
    {
        id: 1,
        title: "Cloud-like Comfort",
        description: "Experience the softness of our new cloud series.",
        image: "/carousel/slide2.png", // Assuming slide2/3/4/5 are the furniture images
        bg: "bg-indigo-50",
        textColor: "text-indigo-900"
    },
    {
        id: 2,
        title: "The Modern Touch",
        description: "Sleek lines for the contemporary home.",
        image: "/carousel/slide3.png",
        bg: "bg-orange-50",
        textColor: "text-orange-900"
    },
    {
        id: 3,
        title: "Elegant Storage",
        description: "Functionality meets exquisite design.",
        image: "/carousel/slide4.png",
        bg: "bg-gray-50",
        textColor: "text-gray-900"
    },
    {
        id: 4,
        title: "Softest Dreams",
        description: "Sink into luxury after a long day.",
        image: "/carousel/slide5.png",
        bg: "bg-blue-50",
        textColor: "text-blue-900"
    }
];

export default function Carousel() {
    const [current, setCurrent] = useState(0);

    // Auto-advance
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const slide = slides[current];

    return (
        <div className="relative w-full h-[80vh] overflow-hidden flex items-center justify-center bg-gray-100/50">
            <AnimatePresence mode="wait">
                <motion.div
                    key={slide.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`absolute inset-0 flex flex-col md:flex-row items-center justify-center p-8 md:p-20 ${slide.bg}`}
                >
                    {/* Text Content */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center items-start space-y-6 z-10 pl-4 md:pl-20">
                        <motion.h2
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className={`text-5xl md:text-7xl font-bold tracking-tight ${slide.textColor}`}
                        >
                            {slide.title}
                        </motion.h2>
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className={`text-xl md:text-2xl opacity-80 max-w-lg ${slide.textColor}`}
                        >
                            {slide.description}
                        </motion.p>
                        <motion.button
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ delay: 0.4 }}
                            className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition text-gray-900 font-semibold"
                        >
                            <PlayCircle size={20} className="fill-current" />
                            Watch Video
                        </motion.button>
                    </div>

                    {/* Image Content */}
                    <div className="w-full md:w-1/2 h-[50vh] md:h-full relative flex items-center justify-center">
                        <motion.img
                            initial={{ scale: 0.9, opacity: 0, x: 50 }}
                            animate={{ scale: 1, opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            src={slide.image}
                            alt={slide.title}
                            className="object-contain max-w-full max-h-full drop-shadow-2xl"
                        />
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Pagination Dots */}
            <div className="absolute bottom-10 flex gap-3 z-20 bg-black/10 backdrop-blur-md px-4 py-2 rounded-full">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === current ? "bg-gray-900 w-8" : "bg-gray-400 hover:bg-gray-600"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
