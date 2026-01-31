"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

// Components
import Footer from './components/Footer';
import ServiceFeatures from './components/ServiceFeatures';
import CategoryGrid from './components/CategoryGrid';
import PromoBanner from './components/PromoBanner';
import TabbedProductGrid from './components/TabbedProductGrid';
import FeaturedHighlight from './components/FeaturedHighlight';
import ReviewGallery from './components/ReviewGallery';
import ShowroomInfo from './components/ShowroomInfo';
import dynamic from 'next/dynamic';

const ARViewer = dynamic(() => import('@/components/ARViewer'), { ssr: false });



export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F5F5] font-sans">


      {/* 1. Hero Section (Enhanced) */}
      <section className="relative min-h-screen bg-[#3F3127] text-white overflow-hidden pt-24 md:pt-0 flex items-center">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-[#3F3127]"></div>
        <div className="absolute bottom-0 left-0 w-full h-[30vh] bg-gradient-to-t from-[#3F3127] to-transparent z-10"></div>

        <div className="container mx-auto px-6 grid md:grid-cols-12 gap-12 items-center relative z-20">
          {/* Left Content */}
          <div className="md:col-span-5 space-y-8">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block text-[#CBBFB1] tracking-[0.2em] font-medium text-sm border-b border-[#CBBFB1] pb-1"
            >
              EST. 2026
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold leading-[1.1] font-serif"
            >
              The Art of <br />
              <span className="text-[#CBBFB1]">Living.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-gray-300 text-lg leading-relaxed max-w-md"
            >
              Discover a collection where timeless design meets modern comfort.
              Elevate your space with our curated furniture pieces.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <button className="bg-[#CBBFB1] text-[#3F3127] px-8 py-4 font-bold hover:bg-white transition duration-300 flex items-center gap-2 uppercase tracking-widest text-sm">
                Explore Collection
              </button>
              <button className="border border-white/30 text-white px-8 py-4 font-medium hover:bg-white/10 transition duration-300 flex items-center gap-3 group uppercase tracking-widest text-sm">
                <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition">
                  <Play size={12} fill="currentColor" />
                </span>
                Watch Video
              </button>
            </motion.div>
          </div>

          {/* Right Image / AR Viewer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7 relative h-[60vh] md:h-[80vh] rounded-t-[10rem] overflow-hidden shadow-2xl bg-[#EBEBEB]"
          >
            <ARViewer
              src="https://modelviewer.dev/shared-assets/models/Astronaut.glb"
              poster="https://modelviewer.dev/shared-assets/models/Astronaut.png"
              alt="3D Astronaut"
            />
          </motion.div>
        </div>
      </section>

      {/* 2. Service Features */}
      <ServiceFeatures />

      {/* 3. Category Grid */}
      <CategoryGrid />

      {/* 4. Promo Banner */}
      <PromoBanner />

      {/* 5. Tabbed Product Grid */}
      <TabbedProductGrid />

      {/* 6. Featured Highlight (3D Rug) */}
      <FeaturedHighlight />

      {/* 7. Review Gallery */}
      <ReviewGallery />

      {/* 8. Showroom & Newsletter */}
      <ShowroomInfo />

      <Footer />
    </main>
  );
}
