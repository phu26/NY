import React from 'react';

const PromoBanner = () => {
    return (
        <section className="bg-[#5C4033] py-20 text-center text-white relative overflow-hidden">
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

            <div className="container mx-auto px-4 relative z-10">
                <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">
                    Special Offer on <br />
                    <span className="italic text-[#D4AF37]">Italian Leather Sofas</span>
                </h2>
                <p className="max-w-xl mx-auto text-white/80 mb-8 text-lg font-light">
                    Experience the perfect blend of comfort and style. refined through decades of craftsmanship.
                    Limited time offer ends Sunday.
                </p>
                <button className="bg-white text-[#5C4033] px-8 py-3 uppercase tracking-widest text-sm font-bold hover:bg-[#D4AF37] hover:text-white transition-colors duration-300">
                    Shop The Sale
                </button>
            </div>
        </section>
    );
};

export default PromoBanner;
