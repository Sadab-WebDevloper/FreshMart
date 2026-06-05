"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { Trash2, ShoppingBag, Minus, Plus, CreditCard, CheckCircle2, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, subtotal, totalItems, clearCart } = useCart();
  const router = useRouter();
  
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'processing' | 'success'>('idle');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal'>('card');

  const tax = subtotal * 0.08;
  const shipping = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + tax + shipping;

  const handlePayment = () => {
    setPaymentStatus('processing');
    setTimeout(() => {
      setPaymentStatus('success');
      clearCart();
    }, 2000);
  };

  if (paymentStatus === 'success') {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white p-12 rounded-[3rem] shadow-xl max-w-lg w-full text-center border border-slate-100"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
            className="w-24 h-24 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <CheckCircle2 size={48} strokeWidth={3} />
          </motion.div>
          <h1 className="text-4xl font-black text-slate-900 mb-4">Payment Successful!</h1>
          <p className="text-lg text-slate-500 mb-8 font-medium">
            Thank you for your order. Your fresh groceries will be delivered shortly!
          </p>
          <button 
            onClick={() => {
              setPaymentStatus('idle');
              router.push('/');
            }}
            className="w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-2xl font-bold text-lg transition-all active:scale-95 shadow-lg shadow-primary/30"
          >
            Continue Shopping
          </button>
        </motion.div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-24 flex flex-col items-center justify-center text-center min-h-[60vh]">
        <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center text-primary mb-6 shadow-sm">
          <ShoppingBag size={48} />
        </div>
        <h1 className="text-3xl font-black text-slate-900 mb-4">Your cart is empty</h1>
        <p className="text-slate-500 mb-8 max-w-md font-medium">Looks like you haven't added anything to your cart yet. Discover our fresh groceries and start shopping.</p>
        <Link href="/">
          <button className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:-translate-y-1 active:scale-95">
            Start Shopping
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
      <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-12">
        Your Cart <span className="text-slate-400 text-3xl font-medium">({totalItems} items)</span>
      </h1>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Cart Items */}
        <div className="w-full lg:w-2/3 flex flex-col gap-6">
          <AnimatePresence>
            {items.map(item => (
              <motion.div 
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -100 }}
                className="bg-white border border-slate-100 rounded-3xl p-4 md:p-6 flex flex-col sm:flex-row items-center gap-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <Link href={`/product/${item.id}`} className="shrink-0 w-full sm:w-32 h-32 relative bg-slate-50 rounded-2xl overflow-hidden group p-4 border border-slate-100">
                  <Image 
                    src={item.imageUrl} 
                    alt={item.name} 
                    fill
                    className="object-contain p-2 group-hover:scale-110 transition-transform duration-500"
                  />
                </Link>
                
                <div className="flex-1 w-full flex flex-col sm:flex-row justify-between gap-4">
                  <div>
                    <span className="text-xs font-black uppercase tracking-widest text-primary mb-1 block">
                      {item.category || 'Grocery'}
                    </span>
                    <Link href={`/product/${item.id}`}>
                      <h3 className="text-xl font-bold text-slate-900 hover:text-primary transition-colors line-clamp-1">
                        {item.name}
                      </h3>
                    </Link>
                    <p className="text-slate-900 font-black text-2xl mt-2">
                      ${item.price.toFixed(2)} <span className="text-sm font-bold text-slate-400">each</span>
                    </p>
                  </div>

                  <div className="flex items-center justify-between sm:flex-col sm:items-end gap-4">
                    <div className="flex items-center border-2 border-slate-100 rounded-2xl bg-white shadow-sm h-12">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-12 h-full flex items-center justify-center text-slate-400 hover:text-primary transition-colors disabled:opacity-50 rounded-l-2xl hover:bg-slate-50"
                        disabled={item.quantity <= 1}
                      >
                        <Minus size={18} strokeWidth={2.5} />
                      </button>
                      <span className="w-10 text-center font-bold text-lg">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-12 h-full flex items-center justify-center text-slate-400 hover:text-primary transition-colors rounded-r-2xl hover:bg-slate-50"
                      >
                        <Plus size={18} strokeWidth={2.5} />
                      </button>
                    </div>
                    
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="flex items-center gap-2 text-slate-400 hover:text-rose-500 transition-colors text-sm font-bold bg-slate-50 px-3 py-1.5 rounded-lg"
                    >
                      <Trash2 size={16} strokeWidth={2.5} /> Remove
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Order Summary & Payment */}
        <div className="w-full lg:w-1/3">
          <div className="bg-slate-900 text-white rounded-[2.5rem] p-8 md:p-10 sticky top-28 shadow-2xl">
            <h2 className="text-2xl font-black mb-8 border-b border-white/10 pb-6">
              Order Summary
            </h2>
            
            <div className="flex flex-col gap-5 mb-8 text-slate-300 font-medium text-lg">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-white font-bold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax (8%)</span>
                <span className="text-white font-bold">${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Shipping</span>
                {shipping === 0 ? (
                  <span className="text-primary font-bold">Free</span>
                ) : (
                  <span className="text-white font-bold">${shipping.toFixed(2)}</span>
                )}
              </div>
            </div>
            
            <div className="flex justify-between items-center border-t border-white/10 pt-8 mb-10">
              <span className="text-xl font-bold">Total</span>
              <span className="text-4xl font-black text-primary">${total.toFixed(2)}</span>
            </div>
            
            {/* Payment Section */}
            <div className="bg-slate-800 rounded-2xl p-6 mb-8 border border-white/5">
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                <CreditCard size={18} /> Payment Method
              </h3>
              <div className="flex flex-col gap-3">
                <button 
                  onClick={() => setPaymentMethod('card')}
                  className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all ${paymentMethod === 'card' ? 'border-primary bg-primary/10' : 'border-transparent bg-slate-700 hover:bg-slate-600'}`}
                >
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'card' ? 'border-primary' : 'border-slate-400'}`}>
                    {paymentMethod === 'card' && <div className="w-2.5 h-2.5 bg-primary rounded-full" />}
                  </div>
                  <span className="font-bold">Credit Card (Dummy)</span>
                </button>
                <button 
                  onClick={() => setPaymentMethod('paypal')}
                  className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all ${paymentMethod === 'paypal' ? 'border-primary bg-primary/10' : 'border-transparent bg-slate-700 hover:bg-slate-600'}`}
                >
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'paypal' ? 'border-primary' : 'border-slate-400'}`}>
                    {paymentMethod === 'paypal' && <div className="w-2.5 h-2.5 bg-primary rounded-full" />}
                  </div>
                  <span className="font-bold">PayPal (Dummy)</span>
                </button>
              </div>
            </div>

            <button 
              onClick={handlePayment}
              disabled={paymentStatus === 'processing'}
              className="w-full bg-primary hover:bg-primary-dark disabled:bg-slate-700 text-white py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 transition-all active:scale-95 shadow-[0_10px_30px_rgba(132,204,22,0.3)]"
            >
              {paymentStatus === 'processing' ? (
                <>
                  <Loader2 className="animate-spin" size={24} /> Processing...
                </>
              ) : (
                `Pay $${total.toFixed(2)}`
              )}
            </button>
            
            <div className="mt-6 text-center text-xs font-bold text-slate-500 uppercase tracking-widest">
              <p>Secure checkout powered by FreshMart</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
