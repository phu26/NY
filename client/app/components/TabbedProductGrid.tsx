import React, { useState } from 'react';
import ProductCard from './ProductCard';

const TabbedProductGrid = () => {
    const [activeTab, setActiveTab] = useState('All');

    const tabs = ['All', 'Sofa', 'Chair', 'Rug', 'Lamp', 'Table'];

    // Mock data - normally would come from API or props
    const products = [
        { id: 1, name: "Cloud Sofa", price: 1299, description: "Soft", category: "Sofa", imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80" },
        { id: 2, name: "Lounge Chair", price: 599, description: "Comfy", category: "Chair", imageUrl: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&q=80" },
        { id: 3, name: "Woven Rug", price: 299, description: "Textured", category: "Rug", imageUrl: "https://images.unsplash.com/photo-1579656381226-5fc7036d6492?w=800&q=80" },
        { id: 4, name: "Arc Lamp", price: 199, description: "Modern", category: "Lamp", imageUrl: "https://images.unsplash.com/photo-1507473888900-52e1adad54cd?w=800&q=80" },
        { id: 5, name: "Oak Table", price: 899, description: "Solid", category: "Table", imageUrl: "https://images.unsplash.com/photo-1577140917170-285929d55716?w=800&q=80" },
        { id: 6, name: "Velvet Sofa", price: 1599, description: "Luxe", category: "Sofa", imageUrl: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&q=80" },
        { id: 7, name: "Accent Chair", price: 450, description: "Bold", category: "Chair", imageUrl: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800&q=80" },
        { id: 8, name: "Pendant Light", price: 150, description: "Chic", category: "Lamp", imageUrl: "https://images.unsplash.com/photo-1513506003013-d488fa395964?w=800&q=80" },
    ];

    const filteredProducts = activeTab === 'All'
        ? products
        : products.filter(p => p.category === activeTab);

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-serif text-[#2C2C2C]">Our Products</h2>
                    </div>

                    <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 mt-6 md:mt-0 w-full md:w-auto">
                        {tabs.map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${activeTab === tab
                                        ? 'bg-[#3F3127] text-white'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                    {filteredProducts.map((product, i) => (
                        <ProductCard key={product.id} product={product} index={i} />
                    ))}
                </div>

                <div className="text-center mt-16">
                    <button className="border border-[#2C2C2C] text-[#2C2C2C] px-12 py-4 uppercase tracking-widest text-sm font-bold hover:bg-[#2C2C2C] hover:text-white transition-colors duration-300">
                        Load More
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TabbedProductGrid;
