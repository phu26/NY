import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import Image from 'next/image';

const FeaturedHighlight = () => {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Image Side */}
                    <div className="lg:w-1/2 relative">
                        <div className="relative h-[600px] w-full rounded-sm overflow-hidden shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1579656381226-5fc7036d6492?q=80&w=1000"
                                alt="3D Textured Rug"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Floating Badge */}
                        <div className="absolute -bottom-10 -right-10 bg-[#FAF9F6] p-8 shadow-xl max-w-xs hidden md:block">
                            <p className="font-serif text-2xl text-[#3F3127] mb-2">"A masterpiece of texture."</p>
                            <div className="flex gap-1">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <span key={i} className="text-[#D4AF37]">★</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="lg:w-1/2">
                        <span className="text-[#8B5E3C] uppercase tracking-widest text-sm font-semibold mb-2 block">Featured Collection</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-[#2C2C2C] mb-6 leading-tight">
                            3D Machine Woven <br />
                            <span className="text-gray-400">Artisan Rugs</span>
                        </h2>
                        <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                            Experience the tactile beauty of our new 3D woven collection.
                            Designed to add depth and warmth to any room, these rugs feature a unique
                            high-low pile texture that interacts with light throughout the day.
                        </p>

                        <ul className="space-y-4 mb-10">
                            <li className="flex items-center gap-3 text-gray-700">
                                <span className="bg-[#EFE8E0] p-1 rounded-full"><Check size={16} className="text-[#8B5E3C]" /></span>
                                Review quý giá từ khách hàng (Top Rated)
                            </li>
                            <li className="flex items-center gap-3 text-gray-700">
                                <span className="bg-[#EFE8E0] p-1 rounded-full"><Check size={16} className="text-[#8B5E3C]" /></span>
                                Premium organic wool blend
                            </li>
                            <li className="flex items-center gap-3 text-gray-700">
                                <span className="bg-[#EFE8E0] p-1 rounded-full"><Check size={16} className="text-[#8B5E3C]" /></span>
                                Stain resistant and easy to clean
                            </li>
                        </ul>

                        <button className="bg-[#2C2C2C] text-white px-10 py-4 uppercase tracking-widest text-sm font-bold hover:bg-[#8B5E3C] transition-colors duration-300 flex items-center gap-3">
                            Shop The Collection <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedHighlight;
