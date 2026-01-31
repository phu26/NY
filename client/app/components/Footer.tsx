import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-[#1a1a1a] text-white pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <Link href="/" className="text-3xl font-bold tracking-widest">
                            BLANC.
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Experience the Art of Living.<br />
                            Refining modern aesthetics since 2026.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-6 uppercase tracking-widest text-sm text-[#D4AF37]">Discovery</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li><Link href="#" className="hover:text-white transition">New Arrivals</Link></li>
                            <li><Link href="#" className="hover:text-white transition">Best Sellers</Link></li>
                            <li><Link href="#" className="hover:text-white transition">Our Story</Link></li>
                            <li><Link href="#" className="hover:text-white transition">Showrooms</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-6 uppercase tracking-widest text-sm text-[#D4AF37]">Support</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li><Link href="#" className="hover:text-white transition">Contact Us</Link></li>
                            <li><Link href="#" className="hover:text-white transition">Shipping Protocol</Link></li>
                            <li><Link href="#" className="hover:text-white transition">Returns & Exchange</Link></li>
                            <li><Link href="#" className="hover:text-white transition">Privacy Policy</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-6 uppercase tracking-widest text-sm text-[#D4AF37]">Follow Us</h4>
                        <div className="flex gap-6">
                            <Link href="#" className="text-gray-400 hover:text-white transition">Instagram</Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition">Facebook</Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition">Pinterest</Link>
                        </div>
                        <p className="text-gray-500 text-xs mt-8">
                            © 2026 Blanc Furniture Studio. <br />
                            All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
