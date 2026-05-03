import React, { useState } from 'react';
import { motion } from 'motion/react';
import { LayoutDashboard, ShoppingBag, Package, FileText, Settings, Search, Plus, TrendingUp, Users, AlertCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { PRODUCTS } from '../data/mockData';
import { formatPrice, cn } from '../lib/utils';
import { getOrderTimelineSection, useOrderTimelineClock } from '../lib/orderTimeline';

export default function AdminDashboard() {
  useOrderTimelineClock();
  const { orders, refundRequests } = useApp();
  const [activeTab, setActiveTab ] = useState('orders');

  const stats = [
    { label: 'Total Revenue', value: formatPrice(orders.reduce((sum, o) => sum + o.total, 0)), icon: <TrendingUp size={20} className="text-green-500" /> },
    {
      label: 'Active Orders',
      value: orders.filter((o) => {
        const s = getOrderTimelineSection(o);
        return s !== 'cancelled' && s !== 'to-rate';
      }).length,
      icon: <ShoppingBag size={20} className="text-blue-500" />,
    },
    { label: 'Refund Requests', value: refundRequests.length, icon: <AlertCircle size={20} className={refundRequests.length > 0 ? "text-red-500" : "text-gray-300"} /> },
    { label: 'Verified Customers', value: '1,248', icon: <Users size={20} className="text-brand-gold" /> }
  ];

  return (
    <div className="bg-[#f0f0f0] min-h-screen flex">
      {/* Admin Sidebar */}
      <div className="w-64 bg-brand-black text-white h-screen fixed left-0 top-0 pt-24 px-6">
        <h3 className="text-[10px] uppercase font-bold tracking-[0.3em] text-gray-500 mb-10">Administration</h3>
        <nav className="space-y-4">
          {[
             { id: 'dashboard', label: 'Overview', icon: <LayoutDashboard size={18} /> },
             { id: 'orders', label: 'Order Flow', icon: <Package size={18} /> },
             { id: 'products', label: 'Curation', icon: <ShoppingBag size={18} /> },
             { id: 'refunds', label: 'Refunds', icon: <AlertCircle size={18} /> },
             { id: 'content', label: 'CMS', icon: <FileText size={18} /> },
             { id: 'settings', label: 'System', icon: <Settings size={18} /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "w-full flex items-center space-x-4 p-4 text-[11px] uppercase font-bold tracking-widest transition-all",
                activeTab === tab.id ? "bg-white/10 text-brand-gold border-r-4 border-brand-gold" : "text-gray-400 hover:text-white"
              )}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-64 flex-grow p-12 overflow-y-auto">
         <div className="flex justify-between items-end mb-12">
            <div>
              <p className="uppercase text-[10px] tracking-[0.4em] font-bold text-gray-400 mb-2">Harmajen Enterprise</p>
              <h1 className="text-5xl font-serif tracking-tight">Executive Dashboard.</h1>
            </div>
            <div className="bg-white px-6 py-3 rounded-full flex items-center space-x-3 shadow-sm border border-brand-gray">
               <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
               <span className="uppercase text-[9px] font-bold tracking-widest">System Operational</span>
            </div>
         </div>

         {/* Stats Grid */}
         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 border border-brand-gray shadow-sm group hover:shadow-lg transition-all"
              >
                 <div className="flex justify-between mb-4">
                    <span className="uppercase text-[9px] font-bold tracking-widest text-gray-400">{stat.label}</span>
                    {stat.icon}
                 </div>
                 <p className="text-3xl font-serif italic">{stat.value}</p>
              </motion.div>
            ))}
         </div>

         <div className="bg-white border border-brand-gray shadow-sm p-10 min-h-[500px]">
            {activeTab === 'orders' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                 <div className="flex justify-between items-center mb-8">
                   <h2 className="text-2xl font-serif italic">Pending Order Flow</h2>
                   <div className="flex border border-brand-gray p-2 px-4 shadow-sm">
                      <Search size={16} className="text-gray-400 mr-2" />
                      <input placeholder="Filter ID..." className="outline-none text-[10px] uppercase font-bold tracking-widest w-32" />
                   </div>
                 </div>
                 <div className="overflow-x-auto">
                    <table className="w-full text-left">
                       <thead className="border-b border-brand-gray">
                          <tr>
                             <th className="py-4 uppercase text-[9px] font-bold tracking-widest text-gray-400">Order ID</th>
                             <th className="py-4 uppercase text-[9px] font-bold tracking-widest text-gray-400">Customer</th>
                             <th className="py-4 uppercase text-[9px] font-bold tracking-widest text-gray-400">Status</th>
                             <th className="py-4 uppercase text-[9px] font-bold tracking-widest text-gray-400">Revenue</th>
                             <th className="py-4 uppercase text-[9px] font-bold tracking-widest text-gray-400">Action</th>
                          </tr>
                       </thead>
                       <tbody className="text-[11px] uppercase tracking-widest font-medium">
                          {orders.map((o) => (
                            <tr key={o.id} className="border-b border-brand-gray hover:bg-gray-50 transition-colors">
                               <td className="py-6 font-serif lowercase italic text-lg">{o.id}</td>
                               <td className="py-6">{o.customer?.fullName}</td>
                               <td className="py-6">
                                  <span className="bg-brand-beige px-3 py-1 border border-brand-gold text-brand-gold text-[8px] font-bold">
                                    {getOrderTimelineSection(o)}
                                  </span>
                               </td>
                               <td className="py-6">{formatPrice(o.total)}</td>
                               <td className="py-6">
                                  <button className="text-brand-gold hover:underline">Manage</button>
                               </td>
                            </tr>
                          ))}
                          {orders.length === 0 && (
                            <tr><td colSpan={5} className="py-20 text-center text-gray-300 italic">No current orders in flow.</td></tr>
                          )}
                       </tbody>
                    </table>
                 </div>
              </motion.div>
            )}

            {activeTab === 'products' && (
               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <div className="flex justify-between items-center mb-8">
                   <h2 className="text-2xl font-serif italic">Product Curation</h2>
                   <button className="bg-brand-black text-white px-6 py-3 flex items-center space-x-2 text-[9px] uppercase font-bold tracking-widest hover:bg-brand-gold transition-colors">
                      <Plus size={14} />
                      <span>New Piece</span>
                   </button>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {PRODUCTS.map(p => (
                      <div key={p.id} className="border border-brand-gray p-4 flex space-x-4 items-center">
                         <img src={p.images[0]} className="w-12 h-16 object-cover" alt="" />
                         <div className="flex-grow">
                            <p className="font-serif italic">{p.name}</p>
                            <p className="text-[9px] text-gray-400 uppercase tracking-widest">{p.category} • {formatPrice(p.price)}</p>
                         </div>
                         <div className="flex flex-col space-y-1">
                            <button className="text-[8px] uppercase font-bold tracking-widest text-brand-gold">Edit</button>
                            <button className="text-[8px] uppercase font-bold tracking-widest text-red-500">Delete</button>
                         </div>
                      </div>
                    ))}
                 </div>
               </motion.div>
            )}

            {activeTab === 'refunds' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <h2 className="text-2xl font-serif italic mb-10">Assurance Requests</h2>
                  <div className="space-y-6">
                    {refundRequests.map((r) => (
                      <div key={r.id} className="border-l-4 border-red-500 bg-red-50/50 p-6 flex justify-between items-center animate-pulse">
                         <div>
                            <p className="text-[9px] font-bold text-red-600 mb-1">NEW REQUEST • {r.id}</p>
                            <h4 className="font-serif italic text-xl">Order Ref: {r.orderId}</h4>
                            <p className="text-xs text-gray-500 mt-2 font-light">Reason: {r.reason}</p>
                         </div>
                         <button className="bg-white border border-red-500 text-red-600 px-6 py-2 text-[9px] uppercase font-bold tracking-widest hover:bg-red-500 hover:text-white transition-all">Review Case</button>
                      </div>
                    ))}
                    {refundRequests.length === 0 && (
                        <div className="py-32 text-center text-gray-300 italic">No active refund claims. System high-integrity.</div>
                    )}
                  </div>
              </motion.div>
            )}

            {(activeTab === 'dashboard' || activeTab === 'content' || activeTab === 'settings') && (
               <div className="py-32 text-center text-gray-300 italic">Module loading... Enterprise module under construction.</div>
            )}
         </div>
      </div>
    </div>
  );
}
