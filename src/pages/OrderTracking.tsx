import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Package, MapPin, Truck, CheckCircle2, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useApp } from '../context/AppContext';
import { cn } from '../lib/utils';

export default function OrderTracking() {
  const { orders } = useApp();
  const [orderId, setOrderId] = useState('');
  const [activeOrder, setActiveOrder] = useState<any>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const found = orders.find(o => o.id.toLowerCase() === orderId.toLowerCase());
    setActiveOrder(found || { id: orderId, notFound: true });
  };

  const steps = [
    { label: 'Order Confirmed', status: 'confirmed' },
    { label: 'Preparing Package', status: 'preparing' },
    { label: 'Shipped', status: 'shipped' },
    { label: 'Out for Delivery', status: 'out-for-delivery' },
    { label: 'Delivered', status: 'delivered' }
  ];

  const getCurrentStepIndex = (status: string) => {
    return steps.findIndex(s => s.status === status);
  };

  return (
    <div className="bg-brand-beige min-h-screen py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif mb-6 tracking-tight">Track Your Order</h1>
          <p className="text-gray-500 font-light max-w-md mx-auto leading-relaxed">
            Enter your Harmajen order number to view the prestige delivery status of your curated items.
          </p>
        </div>

        <form onSubmit={handleSearch} className="mb-16">
          <div className="flex border-b-2 border-brand-black pb-4">
             <Search size={24} className="text-gray-400 mr-4" />
             <input
              required
              placeholder="Case-sensitive Order ID (e.g. HAR-ABCD123)"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              className="bg-transparent border-none outline-none text-xl font-serif w-full placeholder:text-gray-300"
             />
             <button type="submit" className="uppercase text-[10px] font-bold tracking-[0.2em] ml-4 hover:text-brand-gold transition-colors">
               Locate
             </button>
          </div>
        </form>

        <AnimatePresence mode="wait">
          {activeOrder?.notFound ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white border border-brand-gray p-12 text-center shadow-sm"
            >
              <div className="mb-6 opacity-20"><Package size={48} className="mx-auto" /></div>
              <h3 className="font-serif text-2xl mb-2">Order Not Found</h3>
              <p className="text-gray-400 text-sm font-light">We couldn't find an order with this ID. Please double check your confirmation email.</p>
            </motion.div>
          ) : activeOrder ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white border border-brand-gray overflow-hidden shadow-xl"
            >
              <div className="bg-brand-black p-8 text-white flex justify-between items-center">
                <div>
                  <p className="uppercase text-[9px] font-bold tracking-[0.3em] opacity-50 mb-1">Status Report</p>
                  <h3 className="font-serif text-2xl tracking-tight">Order {activeOrder.id}</h3>
                </div>
                <div className="text-right">
                  <p className="uppercase text-[9px] font-bold tracking-[0.3em] opacity-50 mb-1">Expected Arrival</p>
                  <p className="text-brand-gold font-medium">May 02, 2026</p>
                </div>
              </div>

              <div className="p-8 md:p-12">
                <div className="relative mb-20">
                   {/* Progress Line */}
                   <div className="absolute top-1/2 left-0 h-0.5 bg-brand-gray w-full -translate-y-1/2" />
                   <div
                    className="absolute top-1/2 left-0 h-0.5 bg-brand-gold transition-all duration-1000 -translate-y-1/2"
                    style={{ width: `${(getCurrentStepIndex(activeOrder.status) / (steps.length - 1)) * 100}%` }}
                   />

                   <div className="relative flex justify-between">
                     {steps.map((step, idx) => {
                       const isActive = getCurrentStepIndex(activeOrder.status) >= idx;
                       return (
                         <div key={idx} className="flex flex-col items-center">
                           <div className={cn(
                             "w-4 h-4 rounded-full border-2 transition-all duration-500 bg-white z-10",
                             isActive ? "border-brand-gold bg-brand-gold scale-125" : "border-brand-gray"
                           )} />
                           <span className={cn(
                             "absolute top-8 text-[8px] uppercase font-bold tracking-widest text-center whitespace-nowrap",
                             isActive ? "text-brand-black" : "text-gray-300"
                           )}>
                             {step.label}
                           </span>
                         </div>
                       );
                     })}
                   </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 pt-12 border-t border-brand-gray">
                   <div className="flex space-x-6">
                      <div className="p-4 bg-brand-beige border border-brand-gray h-fit"><MapPin size={24} className="text-brand-gold" /></div>
                      <div>
                        <p className="uppercase text-[9px] font-bold tracking-[0.3em] text-gray-400 mb-2">Delivery Address</p>
                        <p className="text-sm font-light text-gray-600 leading-relaxed italic">{activeOrder.customer?.address || 'Premium Customer, Metro Manila'}</p>
                      </div>
                   </div>
                   <div className="flex space-x-6">
                      <div className="p-4 bg-brand-beige border border-brand-gray h-fit"><Truck size={24} className="text-brand-gold" /></div>
                      <div>
                        <p className="uppercase text-[9px] font-bold tracking-[0.3em] text-gray-400 mb-2">Carrier Information</p>
                        <p className="text-sm font-light text-gray-600">Harmajen Luxury Logistics</p>
                        <p className="text-[10px] text-gray-400 mt-1">Vehicle: BLACK-OPS-01</p>
                      </div>
                   </div>
                </div>
              </div>

              <div className="bg-brand-gray p-6 flex justify-between items-center px-12">
                 <Link to="/contact" className="text-[10px] uppercase font-bold tracking-widest hover:text-brand-gold transition-colors flex items-center space-x-2">
                   <span>Contact Logistics</span>
                   <ChevronRight size={12} />
                 </Link>
                 <span className="text-[10px] text-gray-400 uppercase tracking-widest italic">Updated 4 mins ago</span>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
