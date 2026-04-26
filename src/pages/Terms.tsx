import React from 'react';

export default function Terms() {
  return (
    <div className="bg-brand-beige min-h-screen py-24 px-10">
      <div className="max-w-3xl mx-auto bg-white p-12 border border-brand-gray-med shadow-sm">
        <h1 className="text-4xl font-serif mb-8 italic">Terms of Service.</h1>
        <div className="space-y-6 text-sm text-gray-600 font-light leading-relaxed">
          <p className="font-bold uppercase tracking-widest text-[10px] text-brand-gold">I. Agreement to Terms</p>
          <p>By accessing Harmajen, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
          
          <p className="font-bold uppercase tracking-widest text-[10px] text-brand-gold">II. Procurement & Delivery</p>
          <p>All items are subject to availability. Shipping times are estimates and may vary based on your location and the performance of our logistics partners.</p>
          
          <p className="font-bold uppercase tracking-widest text-[10px] text-brand-gold">III. Payment & Pricing</p>
          <p>Prices are subject to change without notice. We secure all payment transactions using industry-standard encryption protocols.</p>
          
          <p className="font-bold uppercase tracking-widest text-[10px] text-brand-gold">IV. Refunds & Returns</p>
          <p>Clients may request a return within 7 days of delivery for defective or incorrect items as per our resolution policy.</p>
        </div>
      </div>
    </div>
  );
}
