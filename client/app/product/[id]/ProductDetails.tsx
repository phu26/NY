"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import SmoothScroll from '@/components/SmoothScroll';

interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    category: string;
    imageUrl: string;
}

export default function ProductDetails({ product }: { product: Product }) {
    const router = useRouter();

    return (
        <SmoothScroll>
            <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-20">
                <button
                    onClick={() => router.back()}
                    className="fixed top-8 left-8 z-50 bg-white/80 backdrop-blur-md px-6 py-2 rounded-full shadow hover:bg-white transition"
                >
                    ← Back
                </button>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2"
                >
                    {/* Image Side */}
                    <div className="relative h-[50vh] lg:h-auto bg-gray-100 p-10 flex items-center justify-center">
                        <motion.img
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            src={product.imageUrl}
                            alt={product.name}
                            className="w-full h-full object-cover rounded-2xl shadow-lg"
                        />
                    </div>

                    {/* Content Side */}
                    <div className="p-10 lg:p-20 flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            <span className="inline-block bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                                {product.category}
                            </span>
                            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{product.name}</h1>
                            <p className="text-gray-500 text-lg leading-relaxed mb-8">{product.description}</p>
                            <div className="flex items-center justify-between mb-10">
                                <span className="text-3xl font-bold text-indigo-600">${product.price}</span>
                            </div>

                            <div className="flex gap-4">
                                <button className="flex-1 bg-indigo-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition transform hover:scale-[1.02]">
                                    Add to Cart
                                </button>
                                <button className="border-2 border-gray-200 p-4 rounded-xl hover:bg-gray-50 transition">
                                    ♥
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </SmoothScroll>
    );
}
