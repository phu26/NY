import React from 'react';
import Image from 'next/image';


const CategoryGrid = () => {
    const categories = [
        {
            name: "Sofa Collection",
            image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000",
            span: "md:col-span-2 md:row-span-2",
            height: "h-[500px]"
        },
        {
            name: "Accent Chairs",
            image: "https://images.unsplash.com/photo-1592078615290-033ee584e277?q=80&w=1000",
            span: "md:col-span-1 md:row-span-1",
            height: "h-[240px]"
        },
        {
            name: "Rugs & Carpets",
            image: "https://images.unsplash.com/photo-1579656381226-5fc7036d6492?q=80&w=1000",
            span: "md:col-span-1 md:row-span-1",
            height: "h-[240px]"
        },
        {
            name: "Lights & Decor",
            image: "https://images.unsplash.com/photo-1513506003013-d488fa395964?q=80&w=1000",
            span: "md:col-span-1 md:row-span-1",
            height: "h-[240px]"
        },
        {
            name: "Tables",
            image: "https://images.unsplash.com/photo-1577140917170-285929d55716?q=80&w=1000",
            span: "md:col-span-1 md:row-span-1",
            height: "h-[240px]"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="text-[#8B5E3C] uppercase tracking-widest text-sm font-semibold">Collections</span>
                    <h2 className="text-4xl font-serif text-[#2C2C2C] mt-2">Curated Categories</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {categories.map((cat, idx) => (
                        <div key={idx} className={`relative group overflow-hidden rounded-sm ${cat.span} ${cat.height}`}>
                            <Image
                                src={cat.image}
                                alt={cat.name}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                            <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-90 group-hover:opacity-100 transition-opacity">
                                <h3 className="text-white text-2xl font-serif mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{cat.name}</h3>
                                <a href="#" className="text-white/80 text-sm uppercase tracking-wider hover:text-white inline-flex items-center gap-2 translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                                    Shop Now
                                    <span className="text-lg">→</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoryGrid;
