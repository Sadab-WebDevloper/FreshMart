import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pt-16 mt-auto">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">
        <div className="lg:col-span-1">
          <h3 className="text-2xl font-extrabold mb-4 text-slate-900 dark:text-white">
            Fresh<span className="text-primary">Mart</span>
          </h3>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
            Your elegant everyday grocery store. Freshness delivered right to your door.
          </p>
        </div>
        
        <div>
          <h4 className="text-lg font-bold mb-6 text-slate-900 dark:text-white">Shop</h4>
          <ul className="flex flex-col gap-3">
            <li><a href="#" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">Categories</a></li>
            <li><a href="#" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">Trending Deals</a></li>
            <li><a href="#" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">New Arrivals</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-bold mb-6 text-slate-900 dark:text-white">Company</h4>
          <ul className="flex flex-col gap-3">
            <li><a href="#" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">About Us</a></li>
            <li><a href="#" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">Careers</a></li>
            <li><a href="#" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-bold mb-4 text-slate-900 dark:text-white">Subscribe</h4>
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">
            Get the latest updates and offers.
          </p>
          <div className="flex border border-slate-200 dark:border-slate-700 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-primary-light transition-all">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 bg-transparent px-4 py-2 outline-none text-slate-900 dark:text-white text-sm"
            />
            <button className="bg-primary hover:bg-primary-dark text-white px-4 font-semibold transition-colors">
              Join
            </button>
          </div>
        </div>
      </div>
      <div className="text-center py-6 border-t border-slate-200 dark:border-slate-800 text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Fresh Mart. All rights reserved.</p>
      </div>
    </footer>
  );
}
