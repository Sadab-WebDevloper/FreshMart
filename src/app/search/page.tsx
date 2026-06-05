"use client";

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { searchProducts } from '@/lib/products';
import ProductCard from '@/components/ProductCard/ProductCard';
import { motion, AnimatePresence } from 'framer-motion';

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams?.get('q') || '';
  const results = searchProducts(query);

  return (
    <div className="container mx-auto px-4 py-16 min-h-screen">
      <div className="mb-12">
        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
          Search Results
        </h1>
        <p className="text-slate-500 text-lg">
          {results.length} {results.length === 1 ? 'result' : 'results'} found for <span className="font-bold text-slate-900">"{query}"</span>
        </p>
      </div>

      {results.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
          <AnimatePresence mode="popLayout">
            {results.map((product, idx) => (
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
      ) : (
        <div className="bg-slate-50 rounded-3xl p-16 text-center border border-slate-200">
          <div className="text-6xl mb-6">🔍</div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">No products found</h2>
          <p className="text-slate-500">We couldn't find anything matching your search. Try adjusting your keywords!</p>
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-16 min-h-screen">Loading search results...</div>}>
      <SearchResults />
    </Suspense>
  );
}
