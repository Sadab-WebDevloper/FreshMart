"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const allCategories = [
  { name: 'Fresh Fruits', count: 124, image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=800&q=80', color: 'bg-orange-100' },
  { name: 'Vegetables', count: 89, image: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=800&q=80', color: 'bg-green-100' },
  { name: 'Dairy & Eggs', count: 45, image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=800&q=80', color: 'bg-blue-100' },
  { name: 'Bakery', count: 32, image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80', color: 'bg-amber-100' },
  { name: 'Fresh Meat', count: 56, image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=800&q=80', color: 'bg-rose-100' },
  { name: 'Seafood', count: 28, image: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=800&q=80', color: 'bg-cyan-100' },
  { name: 'Pantry Staples', count: 210, image: 'https://images.unsplash.com/photo-1506617420156-8e4536971650?w=800&q=80', color: 'bg-yellow-100' },
  { name: 'Beverages', count: 75, image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=800&q=80', color: 'bg-purple-100' },
];

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-slate-50 py-16 border-b border-slate-100">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-4"
          >
            Explore Categories
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-500 max-w-2xl mx-auto"
          >
            Find exactly what you're looking for by browsing our wide selection of fresh, organic, and premium groceries.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {allCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link href="#" className="group block bg-white rounded-[2.5rem] p-6 border border-slate-100 hover:border-primary/30 hover:shadow-[0_20px_40px_-15px_rgba(132,204,22,0.2)] transition-all duration-300 hover:-translate-y-2">
                <div className={`w-full aspect-square rounded-[2rem] ${cat.color} mb-6 overflow-hidden relative shadow-inner p-8 flex items-center justify-center`}>
                  <Image 
                    src={cat.image} 
                    alt={cat.name} 
                    fill 
                    className="object-cover p-4 rounded-[2rem] group-hover:scale-110 transition-transform duration-700 drop-shadow-md" 
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">{cat.name}</h3>
                    <p className="text-sm text-slate-400 font-medium">{cat.count} Items</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white transition-colors">
                    <ChevronRight size={20} strokeWidth={3} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
