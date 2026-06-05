"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Clock, Users, ChefHat, ArrowRight } from 'lucide-react';

const recipes = [
  { id: 1, title: 'Summer Berry Spinach Salad', time: '15 mins', servings: '2', difficulty: 'Easy', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80', tag: 'Healthy' },
  { id: 2, title: 'Avocado Toast with Poached Egg', time: '10 mins', servings: '1', difficulty: 'Easy', image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&q=80', tag: 'Breakfast' },
  { id: 3, title: 'Creamy Garlic Butter Salmon', time: '25 mins', servings: '4', difficulty: 'Medium', image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=80', tag: 'Dinner' },
  { id: 4, title: 'Fresh Fruit Smoothie Bowl', time: '5 mins', servings: '1', difficulty: 'Easy', image: 'https://images.unsplash.com/photo-1494597564530-871f2b93ac55?w=800&q=80', tag: 'Breakfast' },
  { id: 5, title: 'Roasted Vegetable Quinoa', time: '40 mins', servings: '4', difficulty: 'Medium', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80', tag: 'Lunch' },
  { id: 6, title: 'Classic Tomato Basil Bruschetta', time: '15 mins', servings: '6', difficulty: 'Easy', image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=800&q=80', tag: 'Appetizer' },
];

export default function RecipesPage() {
  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Header */}
      <div className="bg-primary/10 py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-20 h-20 bg-primary text-white rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-primary/30 rotate-12"
          >
            <ChefHat size={40} />
          </motion.div>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-slate-900 mb-6"
          >
            Fresh Recipes
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto font-medium"
          >
            Discover delicious, healthy recipes using ingredients you can find right here at FreshMart.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-wrap gap-4 justify-center mb-16">
          {['All Recipes', 'Breakfast', 'Lunch', 'Dinner', 'Healthy', 'Appetizer'].map((tab, i) => (
            <button key={tab} className={`px-6 py-2.5 rounded-full font-bold text-sm transition-colors ${i === 0 ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {recipes.map((recipe, idx) => (
            <motion.div 
              key={recipe.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden mb-6">
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-black text-slate-900 z-10">
                  {recipe.tag}
                </div>
                <Image src={recipe.image} alt={recipe.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="px-2">
                <h3 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-primary transition-colors">{recipe.title}</h3>
                <div className="flex items-center gap-6 text-slate-500 font-medium text-sm">
                  <span className="flex items-center gap-2"><Clock size={16} /> {recipe.time}</span>
                  <span className="flex items-center gap-2"><Users size={16} /> {recipe.servings} servings</span>
                  <span className="flex items-center gap-2 text-primary bg-primary/10 px-2 py-0.5 rounded text-xs uppercase tracking-wider font-bold">{recipe.difficulty}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
