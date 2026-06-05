"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { CheckCircle2, ShieldCheck, CreditCard, MapPin, Package } from 'lucide-react';

export default function CheckoutPage() {
  const { items, subtotal, totalItems, clearCart } = useCart();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const tax = subtotal * 0.08;
  const shipping = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + tax + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Mock API call delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      clearCart();
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="container mx-auto px-4 py-24 flex flex-col items-center justify-center text-center">
        <div className="w-24 h-24 bg-primary-light rounded-full flex items-center justify-center text-primary mb-8 animate-bounce">
          <CheckCircle2 size={56} />
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">Payment Successful!</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-xl leading-relaxed">
          Thank you for your order. Your fresh groceries are being prepared and will be delivered to you shortly. You will receive an email confirmation with your order details.
        </p>
        <button 
          onClick={() => router.push('/')}
          className="bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:-translate-y-1"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  // If they arrived with empty cart and not successful yet
  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-2xl font-bold mb-4">No items to checkout</h1>
        <button onClick={() => router.push('/')} className="text-primary hover:underline">Return to Shop</button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-2">Checkout</h1>
        <p className="text-slate-500 font-medium flex items-center justify-center gap-2">
          <ShieldCheck size={18} className="text-primary" /> Secure 256-bit SSL encryption
        </p>
      </div>

      <div className="flex flex-col-reverse lg:flex-row gap-12 max-w-6xl mx-auto">
        {/* Checkout Form */}
        <div className="w-full lg:w-3/5">
          <form onSubmit={handleSubmit} className="space-y-10">
            
            {/* Shipping Details */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <h2 className="text-xl font-bold flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800 text-slate-900 dark:text-white">
                <MapPin className="text-primary" /> Shipping Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">First Name</label>
                  <input required type="text" className="w-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Last Name</label>
                  <input required type="text" className="w-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="Doe" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Address</label>
                  <input required type="text" className="w-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="123 Fresh Street" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">City</label>
                  <input required type="text" className="w-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="New York" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Zip Code</label>
                  <input required type="text" className="w-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="10001" />
                </div>
              </div>
            </div>

            {/* Payment Details */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <h2 className="text-xl font-bold flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800 text-slate-900 dark:text-white">
                <CreditCard className="text-primary" /> Payment Method
              </h2>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Card Number</label>
                  <div className="relative">
                    <input required type="text" maxLength={19} className="w-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 rounded-xl px-4 py-3 pl-12 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="0000 0000 0000 0000" />
                    <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Expiry Date</label>
                    <input required type="text" placeholder="MM/YY" maxLength={5} className="w-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">CVC</label>
                    <input required type="text" placeholder="123" maxLength={4} className="w-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all" />
                  </div>
                </div>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 transition-all hover:-translate-y-1 hover:shadow-xl disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="animate-pulse">Processing Payment...</span>
              ) : (
                <>Pay ${total.toFixed(2)} Securely <ShieldCheck size={24} /></>
              )}
            </button>
          </form>
        </div>

        {/* Order Summary Sidebar */}
        <div className="w-full lg:w-2/5">
          <div className="bg-slate-100 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 sticky top-28">
            <h2 className="text-xl font-bold flex items-center gap-3 mb-6 pb-4 border-b border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white">
              <Package className="text-primary" /> Order Summary
            </h2>
            
            <div className="space-y-4 mb-8 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
              {items.map(item => (
                <div key={item.id} className="flex items-center gap-4">
                  <div className="relative w-16 h-16 bg-white dark:bg-slate-800 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 shrink-0">
                    <Image src={item.imageUrl} alt={item.name} fill className="object-cover" />
                    <span className="absolute -top-2 -right-2 bg-slate-900 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full z-10">
                      {item.quantity}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white line-clamp-1">{item.name}</h4>
                    <p className="text-xs text-slate-500">{item.category}</p>
                  </div>
                  <div className="font-bold text-slate-900 dark:text-white">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3 mb-6 text-sm font-medium text-slate-600 dark:text-slate-400">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-slate-900 dark:text-white">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between">
                <span>Taxes</span>
                <span className="text-slate-900 dark:text-white">${tax.toFixed(2)}</span>
              </div>
            </div>

            <div className="flex justify-between items-end border-t border-slate-200 dark:border-slate-700 pt-6">
              <span className="text-lg font-bold text-slate-900 dark:text-white">Total</span>
              <div className="text-right">
                <span className="text-xs text-slate-500 block">USD</span>
                <span className="text-3xl font-black text-primary">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(156, 163, 175, 0.5);
          border-radius: 10px;
        }
      `}} />
    </div>
  );
}
