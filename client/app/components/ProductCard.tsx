import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    category: string;
    imageUrl: string;
}

interface ProductCardProps {
    product: Product;
    index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
    return (
        <Link href={`/product/${product.id}`}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group cursor-pointer"
            >
                <div className="aspect-square bg-white mb-4 overflow-hidden relative">
                    <span className="absolute top-4 left-4 bg-[#3F3127] text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider z-10">New</span>
                    <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-full h-full object-cover"
                    />
                </div>
                <h3 className="text-lg font-bold text-[#3F3127] mb-1 group-hover:text-[#CBBFB1] transition">{product.name}</h3>
                <p className="text-gray-500 text-sm mb-2 line-clamp-1">{product.category}</p>
                <p className="text-md font-semibold text-[#3F3127]">${product.price}</p>
            </motion.div>
        </Link>
    );
};

export default ProductCard;
