"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ShoppingCart, Search, Menu, Leaf, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const { totalItems, isMounted } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  return (
    <header className="sticky top-0 z-50 py-4 glass transition-all border-b border-slate-100">
      <div className="container mx-auto px-4 flex items-center justify-between gap-6">
        <div className="text-2xl font-black tracking-tight drop-shadow-sm">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-primary text-white p-1.5 rounded-lg shadow-md shadow-primary/30">
              <Leaf size={24} strokeWidth={2.5} />
            </div>
            Fresh<span className="text-primary">Mart</span>
          </Link>
        </div>
        
        <form onSubmit={handleSearch} className="hidden sm:flex flex-1 max-w-xl items-center bg-slate-50 border border-slate-200 rounded-2xl p-1.5 pl-5 focus-within:border-primary/50 focus-within:bg-white focus-within:shadow-[0_0_0_4px_rgba(132,204,22,0.1)] transition-all">
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for fresh groceries..." 
            className="flex-1 bg-transparent border-none outline-none text-sm text-slate-900 placeholder-slate-400 font-medium"
          />
          <button type="submit" className="flex items-center justify-center bg-primary hover:bg-primary-dark text-white w-10 h-10 rounded-xl transition-all hover:scale-105 shadow-md shadow-primary/30 active:scale-95" aria-label="Search">
            <Search size={18} strokeWidth={2.5} />
          </button>
        </form>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/categories" className="font-bold text-slate-600 hover:text-primary transition-colors">Categories</Link>
          <Link href="/deals" className="font-bold text-slate-600 hover:text-primary transition-colors">Deals</Link>
          <Link href="/recipes" className="font-bold text-slate-600 hover:text-primary transition-colors">Recipes</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/cart" className="relative flex items-center justify-center w-11 h-11 rounded-full bg-slate-50 text-slate-700 border border-slate-200 hover:text-primary hover:border-primary hover:-translate-y-0.5 hover:shadow-md hover:shadow-primary/20 transition-all group" aria-label="Cart">
            <ShoppingCart size={22} className="group-hover:scale-110 transition-transform" />
            {isMounted && totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-accent text-white text-xs font-bold h-5 min-w-[20px] rounded-full flex items-center justify-center px-1 border-2 border-white shadow-sm">
                {totalItems}
              </span>
            )}
          </Link>
          <button 
            className="md:hidden flex items-center justify-center text-slate-700 hover:text-primary transition-colors" 
            aria-label="Menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden border-t border-slate-100 bg-white absolute w-full left-0 top-full shadow-lg overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              <form onSubmit={handleSearch} className="flex w-full items-center bg-slate-50 border border-slate-200 rounded-2xl p-1.5 pl-4 focus-within:border-primary/50 focus-within:bg-white focus-within:shadow-[0_0_0_4px_rgba(132,204,22,0.1)] transition-all">
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for fresh groceries..." 
                  className="flex-1 bg-transparent border-none outline-none text-sm text-slate-900 placeholder-slate-400 font-medium"
                />
                <button type="submit" className="flex items-center justify-center bg-primary hover:bg-primary-dark text-white w-10 h-10 rounded-xl transition-all hover:scale-105 shadow-md shadow-primary/30 active:scale-95" aria-label="Search">
                  <Search size={18} strokeWidth={2.5} />
                </button>
              </form>
              <nav className="flex flex-col gap-2">
                <Link href="/categories" onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-slate-600 hover:text-primary transition-colors py-2 px-4 rounded-xl hover:bg-slate-50">Categories</Link>
                <Link href="/deals" onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-slate-600 hover:text-primary transition-colors py-2 px-4 rounded-xl hover:bg-slate-50">Deals</Link>
                <Link href="/recipes" onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-slate-600 hover:text-primary transition-colors py-2 px-4 rounded-xl hover:bg-slate-50">Recipes</Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
