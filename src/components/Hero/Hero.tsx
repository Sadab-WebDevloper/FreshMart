import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Leaf, Truck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-white dark:bg-slate-900">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-light/40 dark:bg-primary-dark/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/20 dark:bg-accent/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
        <div className="flex flex-col items-start lg:pr-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-light/80 dark:bg-primary-dark/30 text-primary-dark dark:text-primary-light rounded-full text-sm font-bold mb-8 shadow-sm backdrop-blur-sm border border-primary/20">
            <Leaf size={16} className="text-primary" />
            100% Organic Products
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-[4.2rem] font-black leading-[1.1] tracking-tight mb-6 text-slate-900 dark:text-white">
            Fresh Groceries,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600">Delivered Daily.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-xl leading-relaxed font-medium">
            Experience the finest quality produce and pantry essentials sourced directly from local farms. Eat fresh, live healthy.
          </p>
          <div className="flex flex-wrap gap-4 mb-14">
            <Link href="/categories" className="px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-full font-bold text-lg flex items-center gap-2 transition-all hover:-translate-y-1 shadow-[0_8px_25px_-5px_rgba(74,222,128,0.5)] hover:shadow-[0_12px_30px_-5px_rgba(74,222,128,0.6)]">
              Shop Now <ArrowRight size={20} />
            </Link>
            <Link href="/deals" className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-2 border-slate-200 dark:border-slate-700 hover:border-primary hover:text-primary rounded-full font-bold text-lg transition-all hover:-translate-y-1 hover:shadow-lg flex items-center justify-center">
              View Offers
            </Link>
          </div>
          
          <div className="grid grid-cols-3 gap-6 md:gap-10 pt-8 border-t border-slate-200 dark:border-slate-800 w-full">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <CheckCircle2 size={24} className="text-primary hidden sm:block" />
                <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">15k<span className="text-primary">+</span></h3>
              </div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Happy Customers</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Leaf size={24} className="text-primary hidden sm:block" />
                <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">2k<span className="text-primary">+</span></h3>
              </div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Fresh Products</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Truck size={24} className="text-primary hidden sm:block" />
                <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">24h</h3>
              </div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Fast Delivery</p>
            </div>
          </div>
        </div>
        
        <div className="relative flex justify-center items-center mt-10 lg:mt-0">
          <div className="relative w-full max-w-[550px] aspect-square">
            {/* Background Blob decoration */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-light to-emerald-200 dark:from-primary-dark/40 dark:to-emerald-900/40 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] animate-[morph_8s_ease-in-out_infinite] blur-xl opacity-70"></div>
            
            {/* Main Image */}
            <div className="absolute inset-4 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] shadow-2xl overflow-hidden border-4 border-white dark:border-slate-800">
              <Image 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80" 
                alt="Fresh organic vegetables in a basket" 
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            
            {/* Floating Badges */}
            <div className="absolute -left-6 top-1/4 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl animate-[float_5s_ease-in-out_infinite] border border-slate-100 dark:border-slate-700">
              <div className="flex items-center gap-3">
                <div className="bg-orange-100 dark:bg-orange-900/50 p-2 rounded-full text-orange-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 7 4.42-4.42a2 2 0 0 1 2.83 0L22 15.28l-4.72 4.72-12.86-12.86z"/><path d="M12 22v-6"/><path d="M16 22v-4"/><path d="M8 22v-8"/></svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase">Special Offer</p>
                  <p className="font-extrabold text-slate-900 dark:text-white">-25% Off</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -right-8 bottom-1/4 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl animate-[float_6s_ease-in-out_infinite_1s] border border-slate-100 dark:border-slate-700">
               <div className="flex items-center gap-3">
                <div className="bg-primary-light dark:bg-primary-dark/50 p-2 rounded-full text-primary-dark dark:text-primary-light">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase">Quality</p>
                  <p className="font-extrabold text-slate-900 dark:text-white">Guaranteed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        @keyframes morph {
          0% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
          34% { border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%; }
          67% { border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%; }
          100% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
        }
      `}} />
    </section>
  );
}
