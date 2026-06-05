"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero/Hero';
import ProductCard from '@/components/ProductCard/ProductCard';
import { Leaf, Clock, Award, HeadphonesIcon, ArrowRight, Star } from 'lucide-react';
import { getProductsByCategory, getAllProducts } from '@/lib/products';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
  { name: 'Fruits', image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=500&q=80', color: 'bg-orange-100' },
  { name: 'Vegetables', image: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=500&q=80', color: 'bg-green-100' },
  { name: 'Dairy', image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=500&q=80', color: 'bg-blue-100' },
  { name: 'Bakery', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&q=80', color: 'bg-amber-100' },
  { name: 'Pantry', image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=500&q=80', color: 'bg-rose-100' },
  { name: 'Seafood', image: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=500&q=80', color: 'bg-cyan-100' },
];

const features = [
  { icon: <Leaf size={32} />, title: '100% Organic', desc: 'Sourced directly from local, organic-certified farms.' },
  { icon: <Clock size={32} />, title: 'Same Day Delivery', desc: 'Order before 2 PM and get it delivered the same day.' },
  { icon: <Award size={32} />, title: 'Premium Quality', desc: 'Hand-picked items guaranteeing the highest quality.' },
  { icon: <HeadphonesIcon size={32} />, title: '24/7 Support', desc: 'Our customer support team is always ready to help you.' },
];

const testimonials = [
  { name: 'Sarah Johnson', role: 'Home Chef', text: 'FreshMart has completely changed how I shop for groceries. The quality of their organic produce is unmatched, and delivery is always on time!', rating: 5, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80' },
  { name: 'Michael Chen', role: 'Fitness Trainer', text: 'I rely on fresh ingredients for my meal prep. The meat and vegetables from FreshMart are consistently excellent. Highly recommend!', rating: 5, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80' },
  { name: 'Emily Davis', role: 'Busy Mother', text: 'With two kids, going to the supermarket is a hassle. FreshMart makes it so easy, and I love that I can trust the quality of what I am feeding my family.', rating: 4, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80' },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('All');
  const displayedProducts = getProductsByCategory(activeCategory).slice(0, 8); // show max 8 on homepage

  return (
    <div className="flex flex-col gap-24 pb-24">
      <Hero />
      
      {/* Categories Section */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Explore By</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            Top Categories
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, idx) => (
            <button 
              key={idx} 
              onClick={() => setActiveCategory(category.name)}
              className="group flex flex-col items-center gap-4 bg-transparent border-none cursor-pointer"
            >
              <div className={`w-full aspect-square rounded-full ${category.color} p-4 md:p-6 overflow-hidden relative shadow-sm transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-md ${activeCategory === category.name ? 'ring-4 ring-primary ring-offset-4' : ''}`}>
                <Image src={category.image} alt={category.name} fill className="object-cover rounded-full p-2" />
              </div>
              <span className={`font-bold transition-colors text-center ${activeCategory === category.name ? 'text-primary' : 'text-slate-900 group-hover:text-primary'}`}>{category.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 bg-slate-50 py-16 rounded-[3rem]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-slate-200">
          <div>
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Our Products</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 flex items-center gap-4">
              Trending Items
              {activeCategory !== 'All' && (
                <span className="text-lg bg-white px-3 py-1 rounded-full text-primary border border-primary/20 shadow-sm">
                  {activeCategory}
                  <button onClick={() => setActiveCategory('All')} className="ml-2 text-slate-400 hover:text-rose-500">×</button>
                </span>
              )}
            </h2>
          </div>
          <Link href="/products" className="text-primary font-bold hover:text-primary-dark hover:underline mb-1 hidden md:flex items-center gap-1 mt-4 md:mt-0">
            View All Products <ArrowRight size={16} />
          </Link>
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
        
        <div className="mt-12 text-center md:hidden">
           <Link href="/products" className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full font-bold">
            View All <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white border border-slate-200 p-8 rounded-3xl transition-transform hover:-translate-y-2 hover:shadow-lg">
              <div className="w-16 h-16 bg-primary-light text-primary-dark rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-emerald-800 to-emerald-600 rounded-3xl p-8 md:p-14 flex items-center justify-between overflow-hidden relative shadow-2xl">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
          
          <div className="relative z-10 max-w-xl text-white">
            <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold tracking-wider uppercase mb-6 backdrop-blur-md">
              Limited Time Offer
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Get 20% Off Your First Order!
            </h2>
            <p className="text-xl text-emerald-50 mb-10 opacity-90">
              Use code <strong className="font-extrabold bg-white text-emerald-700 px-3 py-1.5 rounded shadow-sm">FRESH20</strong> at checkout to claim your discount.
            </p>
            <Link href="/deals" className="inline-block bg-white text-emerald-700 px-8 py-4 rounded-full font-extrabold text-lg transition-all hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.15)] focus:ring-4 focus:ring-white/50 text-center">
              Claim Offer Now
            </Link>
          </div>
          
          <div className="hidden lg:block relative w-[400px] h-[300px] z-10 transform translate-x-10">
            <Image 
              src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&q=80" 
              alt="Grocery bag with fresh vegetables"
              fill
              className="object-contain drop-shadow-2xl scale-125 hover:scale-[1.3] transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 400px"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((review, idx) => (
            <div key={idx} className="bg-white border border-slate-200 p-8 rounded-3xl relative">
              <div className="flex gap-1 text-accent mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill={i < review.rating ? "currentColor" : "none"} className={i >= review.rating ? "text-slate-300" : ""} />
                ))}
              </div>
              <p className="text-slate-600 italic mb-8 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-4 border-t border-slate-100 pt-6 mt-auto">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image src={review.avatar} alt={review.name} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{review.name}</h4>
                  <span className="text-xs text-slate-500 font-medium">{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
