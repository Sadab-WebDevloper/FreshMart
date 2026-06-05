"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Heart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { motion } from 'framer-motion';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  imageUrl: string;
  discount?: number;
  index?: number;
}

export default function ProductCard({
  id,
  name,
  price,
  originalPrice,
  category,
  imageUrl,
  discount,
  index = 0
}: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigating to the product page when clicking add to cart
    addToCart({ id, name, price, imageUrl, category });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/product/${id}`} className="group bg-white border border-slate-100 rounded-[2rem] overflow-hidden transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(132,204,22,0.2)] hover:border-primary/30 relative flex flex-col h-full block">
        <div className="relative h-56 w-full bg-slate-50 overflow-hidden">
          {discount && (
            <span className="absolute top-4 left-4 bg-accent text-white px-3 py-1.5 rounded-xl text-xs font-black z-10 shadow-sm backdrop-blur-md">
              {discount}% OFF
            </span>
          )}
          <button 
            className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-white/80 backdrop-blur-md text-slate-400 flex items-center justify-center z-10 shadow-sm border border-slate-200/50 transition-all hover:text-rose-500 hover:border-rose-500/50 hover:scale-110 active:scale-95" 
            aria-label="Add to wishlist"
            onClick={(e) => e.preventDefault()}
          >
            <Heart size={18} strokeWidth={2.5} />
          </button>
          <div className="w-full h-full relative p-6">
            <Image
              src={imageUrl}
              alt={name}
              fill
              className="object-contain p-4 drop-shadow-md transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
        
        <div className="p-6 flex flex-col flex-1">
          <span className="text-[10px] text-primary uppercase tracking-widest font-black block mb-2">
            {category}
          </span>
          <h3 className="text-xl font-bold text-slate-900 mb-auto leading-tight line-clamp-2">
            {name}
          </h3>
          
          <div className="flex items-end justify-between mt-6">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black text-slate-900">
                ${price.toFixed(2)}
              </span>
              {originalPrice && (
                <span className="text-sm font-bold text-slate-400 line-through decoration-slate-300">
                  ${originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            
            <button 
              className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center transition-all hover:bg-primary hover:text-white hover:shadow-[0_8px_20px_rgba(132,204,22,0.3)] hover:-translate-y-1 active:scale-95" 
              aria-label="Add to cart"
              onClick={handleAddToCart}
            >
              <ShoppingCart size={22} strokeWidth={2.5} className="ml-[-2px]" />
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
