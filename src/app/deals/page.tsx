"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Clock, Zap } from 'lucide-react';
import ProductCard from '@/components/ProductCard/ProductCard';

const dealProducts = [
  { id: '5', name: 'Whole Grain Bread', price: 3.49, originalPrice: 4.99, discount: 30, category: 'Bakery', imageUrl: 'https://images.unsplash.com/photo-1598373182133-52452f7691ef?w=800&q=80' },
  { id: '2', name: 'Farm Fresh Eggs (12-pack)', price: 4.49, originalPrice: 5.99, discount: 25, category: 'Dairy', imageUrl: 'https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=800&q=80' },
  { id: '10', name: 'Organic Honey 500g', price: 6.99, originalPrice: 9.99, discount: 30, category: 'Pantry', imageUrl: 'https://images.unsplash.com/photo-1587049352847-81a56d773c1c?w=800&q=80' },
  { id: '11', name: 'Fresh Salmon Fillet', price: 12.99, originalPrice: 18.99, discount: 31, category: 'Seafood', imageUrl: 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=800&q=80' },
];

export default function DealsPage() {
  const [timeLeft, setTimeLeft] = React.useState(15839); // 4h 23m 59s in seconds

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Flash Sale Banner */}
      <div className="bg-rose-500 text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white/20 backdrop-blur-md px-6 py-2 rounded-full font-black tracking-widest uppercase text-sm mb-6 flex items-center gap-2"
          >
            <Zap size={18} fill="currentColor" /> Flash Deals
          </motion.div>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black mb-6"
          >
            Up to 50% Off
          </motion.h1>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-2xl"
          >
            <Clock size={24} />
            <div className="text-left">
              <span className="block text-xs font-bold uppercase tracking-wider text-rose-200">Ends In</span>
              <span className="font-mono text-2xl font-black tracking-widest">{formatTime(timeLeft)}</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-black text-slate-900">Today's Best Deals</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {dealProducts.map((product, idx) => (
            <ProductCard key={product.id} {...product} index={idx} />
          ))}
        </div>
      </div>
      
      {/* Promo Banner inside Deals */}
      <div className="container mx-auto px-4 mt-12">
        <div className="bg-amber-100 rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
          <div className="md:w-1/2 relative z-10">
            <span className="text-amber-600 font-black uppercase tracking-widest text-sm mb-4 block">Weekend Special</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">Buy 1 Get 1 Free on all fresh Bakery items</h2>
            <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">Shop Bakery</button>
          </div>
          <div className="md:w-1/2 relative h-[300px] w-full mt-8 md:mt-0">
            <Image src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80" alt="Bakery" fill className="object-contain drop-shadow-2xl scale-125" />
          </div>
        </div>
      </div>
    </div>
  );
}
