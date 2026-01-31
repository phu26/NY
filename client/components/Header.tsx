"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingCart, Search, Menu, User, X } from 'lucide-react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Sofa', href: '#' },
        { name: 'Chair', href: '#' },
        { name: 'Rug', href: '#' },
        { name: 'Table', href: '#' },
        { name: 'Lamp', href: '#' },
        { name: 'Decor', href: '#' },
    ];

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#3F3127] py-4 shadow-lg' : 'bg-transparent py-6'
            }`}>
            <div className="container mx-auto px-6 flex justify-between items-center text-white">
                {/* Mobile Menu Button */}
                <button className="lg:hidden" onClick={() => setIsMobileMenuOpen(true)}>
                    <Menu size={24} />
                </button>

                {/* Logo */}
                <Link href="/" className="text-3xl font-bold tracking-[0.2em]">
                    BLANC.
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium uppercase tracking-widest hover:text-[#CBBFB1] transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Icons */}
                <div className="flex gap-6 items-center">
                    <button className="hover:text-[#CBBFB1] transition"><Search size={20} /></button>
                    <button className="hover:text-[#CBBFB1] transition hidden sm:block"><User size={20} /></button>
                    <button className="hover:text-[#CBBFB1] transition relative">
                        <ShoppingCart size={20} />
                        <span className="absolute -top-2 -right-2 bg-[#D4AF37] text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                            0
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 bg-black z-[60] p-8 flex flex-col">
                    <div className="flex justify-end">
                        <button onClick={() => setIsMobileMenuOpen(false)}>
                            <X size={32} className="text-white" />
                        </button>
                    </div>
                    <div className="mt-12 flex flex-col gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-2xl font-serif text-white hover:text-[#D4AF37]"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
