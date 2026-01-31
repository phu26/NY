"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function TransformationScroll() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Global Rotation - twist slightly during transform but land flat (0)
    const rotation = useTransform(scrollYProgress, [0, 0.5, 1], [0, 15, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.9]);
    const y = useTransform(scrollYProgress, [0, 1], [0, 50]); // Move down slightly to "settle" on floor

    // Stage 1 Opacity: 0 - 25%
    const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.25], [1, 1, 0]);

    // Stage 2 Opacity: 25% - 50%
    const opacity2 = useTransform(scrollYProgress, [0.2, 0.25, 0.45, 0.5], [0, 1, 1, 0]);

    // Stage 3 Opacity: 50% - 75%
    const opacity3 = useTransform(scrollYProgress, [0.45, 0.5, 0.7, 0.75], [0, 1, 1, 0]);

    // Stage 4 Opacity: 75% - 100%
    const opacity4 = useTransform(scrollYProgress, [0.7, 0.75, 1], [0, 1, 1]);

    // Text Animation
    const textOpacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);
    const textY = useTransform(scrollYProgress, [0.8, 1], [50, 0]);

    return (
        <div ref={containerRef} className="h-[200vh] relative bg-white">
            <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">

                <h2 className="absolute top-10 text-3xl font-bold text-gray-300">Scroll to Transform</h2>

                <div className="relative w-full max-w-2xl aspect-square flex items-center justify-center">
                    {/* Stage 1 */}
                    <motion.img
                        style={{ opacity: opacity1, rotate: rotation, scale, y }}
                        src="/transform-v2/stage1.png"
                        alt="Sofa Stage 1"
                        className="absolute w-full h-full object-contain"
                    />
                    {/* Stage 2 */}
                    <motion.img
                        style={{ opacity: opacity2, rotate: rotation, scale, y }}
                        src="/transform-v2/stage2.png"
                        alt="Sofa Stage 2"
                        className="absolute w-full h-full object-contain"
                    />
                    {/* Stage 3 */}
                    <motion.img
                        style={{ opacity: opacity3, rotate: rotation, scale, y }}
                        src="/transform-v2/stage3.png"
                        alt="Sofa Stage 3"
                        className="absolute w-full h-full object-contain"
                    />
                    {/* Stage 4 */}
                    <motion.img
                        style={{ opacity: opacity4, rotate: rotation, scale, y }}
                        src="/transform-v2/stage4.png"
                        alt="Sofa Stage 4"
                        className="absolute w-full h-full object-contain"
                    />
                </div>

                <motion.div
                    style={{ opacity: textOpacity, y: textY }}
                    className="absolute bottom-20 text-center"
                >
                    <h3 className="text-4xl font-bold text-gray-900 mb-2">Versatility Redefined</h3>
                    <p className="text-gray-500">From lounging to sleeping in one smooth motion.</p>
                </motion.div>

            </div>
        </div>
    );
}
