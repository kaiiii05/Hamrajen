import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data/mockData';
import { formatPrice } from '../lib/utils';

export default function Home() {
  const menProduct = PRODUCTS.find((p) => p.category === 'men');
  const womenProduct = PRODUCTS.find((p) => p.category === 'women');
  const newArrivalsProduct = PRODUCTS[0];
  const heroProduct = womenProduct || menProduct || PRODUCTS[0];
  const featuredProducts = PRODUCTS.slice(0, 4);

  const collections = [
    { title: 'Men', path: '/shop/men', image: menProduct?.images[0] || heroProduct?.images[0] },
    { title: 'Women', path: '/shop/women', image: womenProduct?.images[0] || heroProduct?.images[0] },
    { title: 'New Arrivals', path: '/shop', image: newArrivalsProduct?.images[0] || heroProduct?.images[0] },
  ];

  return (
    <div className="bg-brand-beige min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row h-[500px] border-b border-brand-gray-med bg-white">
        <div className="flex-1 px-10 py-12 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[10px] uppercase tracking-[3px] text-gray-400 mb-4 font-medium">Summer / Autumn 2026</p>
            <h1 className="text-[48px] font-serif leading-[1.1] mb-8 font-normal tracking-tight">
              Everyday Essentials,<br />Elevated.
            </h1>
            <p className="text-sm text-gray-500 mb-8 max-w-md font-light leading-relaxed">
              Premium basics in wearable colors for men and women.
            </p>
            <Link
              to="/shop"
              className="inline-block px-10 py-4 bg-brand-charcoal text-white text-[11px] uppercase tracking-[2px] hover:bg-transparent hover:text-brand-charcoal border border-brand-charcoal transition-all"
            >
              Shop Now
            </Link>
          </motion.div>
        </div>

        <div className="flex-[1.2] bg-[#E8E4E1] relative overflow-hidden group">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            src={heroProduct?.images[0]}
            alt={heroProduct?.name || 'Featured Product'}
            className="w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[80%] h-[80%] border border-white/30" />
          </div>
          <div className="absolute bottom-10 left-10 text-white drop-shadow-md">
            <p className="text-[12px] tracking-[2px] uppercase font-medium">{heroProduct?.name || 'Premium Essentials'}</p>
          </div>
        </div>
      </section>

      {/* Grid Highlights Section */}
      <section className="grid grid-cols-1 md:grid-cols-4 bg-white border-b border-brand-gray-med">
        {collections.map((col, idx) => (
          <Link
            key={col.title}
            to={col.path}
            className="flex flex-col border-r border-brand-gray-light last:border-r-0 p-8 group hover:bg-brand-beige transition-colors h-[300px]"
          >
            <div className="h-40 bg-[#F9F9F9] mb-6 flex items-center justify-center relative overflow-hidden">
               <img
                src={col.image}
                alt={col.title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
               />
               <div className="absolute top-4 left-4 bg-brand-gold text-white text-[8px] px-2 py-1 tracking-[1px] uppercase">
                 Highlight
               </div>
            </div>
            <div className="flex flex-col">
              <span className="text-[13px] font-medium mb-1">{col.title} Collection</span>
              <span className="text-[12px] text-gray-500 font-light">View Pieces</span>
            </div>
            <div className="mt-auto text-[10px] uppercase tracking-[1px] text-brand-gold font-bold">
              + Explore
            </div>
          </Link>
        ))}
         {/* Extra block for balance */}
         <div className="hidden md:flex flex-col border-none p-8 group hover:bg-brand-beige transition-colors h-[300px]">
            <div className="h-40 bg-[#F9F9F9] mb-6 flex items-center justify-center border border-dashed border-gray-200">
               <span className="text-[10px] uppercase tracking-widest text-gray-300">Next drop soon</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[13px] font-medium mb-1">Coming Soon</span>
              <span className="text-[12px] text-gray-500 font-light italic">Fall 2026</span>
            </div>
         </div>
      </section>

      <section className="bg-white border-b border-brand-gray-med px-10 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-[10px] uppercase tracking-[3px] text-gray-400 mb-2 font-medium">Featured</p>
            <h2 className="text-4xl font-serif tracking-tight">Shop Best Picks</h2>
          </div>
          <Link to="/shop" className="text-[10px] uppercase font-bold tracking-[2px] text-brand-gold border-b border-brand-gold pb-1">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="group border border-brand-gray-light bg-brand-beige/30 p-4">
              <div className="aspect-[3/4] overflow-hidden bg-white mb-4">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="text-sm font-medium mb-2 line-clamp-2">{product.name}</h3>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">{formatPrice(product.price)}</p>
                <div className="flex items-center space-x-1">
                  {product.colors.slice(0, 4).map((color) => (
                    <span
                      key={`${product.id}-${color.name}`}
                      className="w-2.5 h-2.5 rounded-full border border-black/10"
                      style={{ backgroundColor: color.hex }}
                    />
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Statement - Minimalist Style */}
      <section className="py-32 px-10 bg-brand-beige flex justify-center">
        <div className="max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[42px] font-serif mb-8 tracking-tight leading-[1.1] font-normal"
          >
            Redefining technical elegance for the modern disruptor.
          </motion.h2>
          <div className="w-12 h-px bg-brand-gold mx-auto mb-8" />
          <p className="text-[14px] text-gray-500 leading-relaxed font-light tracking-wide italic lowercase">
            Harmajen is not just about what you wear; it's about the conviction you carry with every silhouette.
          </p>
        </div>
      </section>

      {/* Promotions Section */}
      <section className="bg-brand-charcoal text-white py-20 px-10 overflow-hidden relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="mb-10 md:mb-0">
            <span className="text-brand-gold uppercase text-[10px] font-bold tracking-[3px] block mb-4">Limited Promotion</span>
            <h2 className="text-5xl font-serif mb-6 italic tracking-tight">Seasonal Discount.</h2>
            <p className="text-gray-400 text-sm max-w-md font-light leading-relaxed">
              Experience prestige for less. Enjoy up to 15% off on our Spring/Summer curation using vault access code: <span className="text-white font-medium">HARMAJEN15</span>
            </p>
          </div>
          <Link to="/shop/sale" className="px-12 py-5 border border-white text-[11px] uppercase tracking-[2px] hover:bg-white hover:text-brand-charcoal transition-all">
            Browse Offers
          </Link>
        </div>
        <div className="absolute -bottom-20 -right-20 text-[200px] font-serif italic text-white/5 pointer-events-none select-none">
          15%
        </div>
      </section>

      {/* Procurement & Delivery Section */}
      <section className="py-24 px-10 bg-white grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-brand-gray-med">
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-brand-beige border border-brand-gray-med flex items-center justify-center mb-6">
            <ArrowRight size={20} className="text-brand-gold" />
          </div>
          <h3 className="uppercase text-[10px] font-bold tracking-[2px] mb-4">Express Procurement</h3>
          <p className="text-xs text-gray-400 font-light leading-relaxed">Swift and secure handling for all luxury items across the archipelago.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-brand-beige border border-brand-gray-med flex items-center justify-center mb-6">
            <ArrowRight size={20} className="text-brand-gold transform -rotate-45" />
          </div>
          <h3 className="uppercase text-[10px] font-bold tracking-[2px] mb-4">Real-Time Tracking</h3>
          <p className="text-xs text-gray-400 font-light leading-relaxed">Monitor your curation's journey from our vault to your doorstep.</p>
           <Link to="/tracking" className="mt-4 text-[9px] uppercase font-bold tracking-widest text-brand-gold border-b border-brand-gold pb-1">Track Now</Link>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-brand-beige border border-brand-gray-med flex items-center justify-center mb-6">
            <ArrowRight size={20} className="text-brand-gold transform rotate-45" />
          </div>
          <h3 className="uppercase text-[10px] font-bold tracking-[2px] mb-4">Secure Payment</h3>
          <p className="text-xs text-gray-400 font-light leading-relaxed">Multiple encrypted payment gateways ensuring profile integrity.</p>
        </div>
      </section>
    </div>
  );
}
