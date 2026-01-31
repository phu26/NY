import React from 'react';
import Image from 'next/image';

const ReviewGallery = () => {
    const imagePath = "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000";
    const reviews = [
        { name: "@minh.nguyen", comment: "The sofa fits perfectly! Love the color.", img: "https://images.unsplash.com/photo-1493663016374-954992524a87?q=80&w=1000" },
        { name: "@lan_design", comment: "Best delivery experience ever.", img: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1000" },
        { name: "@homedecor_vn", comment: "Quality is unmatched at this price.", img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1000" },
        { name: "@sarah.studio", comment: "So cozy and minimal.", img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1000" },
    ];

    return (
        <section className="py-20 bg-[#FAF9F6]">
            <div className="container mx-auto px-4 text-center">
                <span className="text-[#8B5E3C] uppercase tracking-widest text-sm font-semibold mb-2 block">Community</span>
                <h2 className="text-3xl md:text-4xl font-serif text-[#2C2C2C] mb-12">Review quý giá từ khách hàng</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reviews.map((review, idx) => (
                        <div key={idx} className="group relative overflow-hidden rounded-lg aspect-square">
                            <Image
                                src={review.img}
                                alt={`Review by ${review.name}`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left">
                                <p className="text-white text-sm mb-2 opacity-90">"{review.comment}"</p>
                                <p className="text-[#D4AF37] font-bold text-xs uppercase tracking-wider">{review.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-10">
                    <a href="#" className="inline-block border-b border-[#2C2C2C] text-[#2C2C2C] pb-1 uppercase tracking-widest text-xs font-bold hover:text-[#8B5E3C] hover:border-[#8B5E3C] transition-colors">
                        View All Reviews on Instagram
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ReviewGallery;
