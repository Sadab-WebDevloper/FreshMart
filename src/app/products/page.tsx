"use client";

import React, { useState } from 'react';
import { getAllProducts } from '@/lib/products';
import ProductCard from '@/components/ProductCard/ProductCard';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const allProducts = getAllProducts();
  
  // Extract unique categories plus 'All'
  const categories = ['All', ...Array.from(new Set(allProducts.map(p => p.category)))];
  
  const displayedProducts = activeCategory === 'All' 
    ? allProducts 
    : allProducts.filter(p => p.category === activeCategory);

  return (
    <div className="container mx-auto px-4 py-16 min-h-screen">
      <div className="mb-12 text-center">
        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Our Catalog</span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">
          All Products
        </h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          Browse our entire selection of fresh, organic, and premium quality groceries delivered straight to your door.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all ${
              activeCategory === cat 
                ? 'bg-primary text-white shadow-md shadow-primary/30' 
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
        <AnimatePresence mode="popLayout">
          {displayedProducts.map((product, idx) => (
            <motion.div
              layout
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <ProductCard {...product} index={idx} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
