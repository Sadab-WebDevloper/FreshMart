"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { ShoppingCart, Star, ChevronRight, Minus, Plus } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from '@/context/CartContext';
import { getProductById } from '@/lib/products';

export default function ProductDetails() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  
  const id = params?.id as string;
  const product = getProductById(id);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <button onClick={() => router.push('/')} className="text-primary hover:underline">Return to Home</button>
      </div>
    );
  }

  const handleAddToCart = () => {
    setIsAdding(true);
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        imageUrl: product.imageUrl,
        category: product.category
      });
    }
    setTimeout(() => setIsAdding(false), 500);
  };

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Minimal Breadcrumb */}
        <motion.nav 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center text-xs font-bold tracking-widest uppercase text-slate-400 mb-16"
        >
          <button onClick={() => router.push('/')} className="hover:text-slate-900 dark:hover:text-white transition-colors">Home</button>
          <ChevronRight size={14} className="mx-2" />
          <span className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer">{product.category}</span>
          <ChevronRight size={14} className="mx-2" />
          <span className="text-slate-900 dark:text-white">{product.name}</span>
        </motion.nav>

        <div className="flex flex-col lg:flex-row items-center gap-20">
          {/* Left: Minimal Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative aspect-square w-full rounded-[2.5rem] overflow-hidden bg-slate-50 dark:bg-slate-900/50 shadow-sm border border-slate-100 dark:border-slate-800">
              <Image 
                src={product.imageUrl} 
                alt={product.name} 
                fill
                className="object-contain p-12 transition-transform duration-1000 hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Right: Elegant Typography & Actions */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            {product.discount && (
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-rose-500 font-bold tracking-widest text-xs uppercase mb-4 block"
              >
                Special Offer - {product.discount}% Off
              </motion.span>
            )}
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 dark:text-white tracking-tight mb-6"
            >
              {product.name}
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="flex text-accent">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" className="opacity-30" />
              </div>
              <span className="text-sm font-medium text-slate-500">Read {product.reviews} Reviews</span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-10 flex items-baseline"
            >
              <span className="text-4xl font-normal text-slate-900 dark:text-white">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="ml-4 text-xl font-medium text-slate-400 line-through decoration-1">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-light max-w-lg mb-12"
            >
              {product.description}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 mb-12 border-t border-slate-100 dark:border-slate-800 pt-12"
            >
              <div className="flex items-center border border-slate-200 dark:border-slate-700 rounded-full w-36 h-16 shadow-sm">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="flex-1 h-full flex items-center justify-center text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors rounded-l-full"
                >
                  <Minus size={20} strokeWidth={1.5} />
                </button>
                <span className="text-lg font-bold">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="flex-1 h-full flex items-center justify-center text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors rounded-r-full"
                >
                  <Plus size={20} strokeWidth={1.5} />
                </button>
              </div>
              
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAddToCart}
                className="flex-1 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-3 transition-colors hover:bg-slate-800 dark:hover:bg-slate-100 h-16 px-8 shadow-lg"
              >
                {isAdding ? (
                  <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }}>
                    <ShoppingCart size={20} />
                  </motion.div>
                ) : (
                  <>Add to Bag - ${(product.price * quantity).toFixed(2)}</>
                )}
              </motion.button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-xs text-slate-400 font-medium tracking-wide uppercase flex flex-col gap-4"
            >
              <p className="flex items-center gap-2"><span className="text-primary text-base">✓</span> Free shipping on orders over $50</p>
              <p className="flex items-center gap-2"><span className="text-primary text-base">✓</span> 100% Organic certified</p>
              <p className="flex items-center gap-2"><span className="text-primary text-base">✓</span> Sustainably sourced</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
