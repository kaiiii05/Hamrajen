import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Filter, ChevronDown, ShoppingBag, Heart, Eye } from 'lucide-react';
import { PRODUCTS } from '../data/mockData';
import { formatPrice } from '../lib/utils';
import { useApp } from '../context/AppContext';

export default function Shop() {
  const { category } = useParams();
  const { addToCart } = useApp();

  const filteredProducts = category
    ? PRODUCTS.filter(p => p.category === category)
    : PRODUCTS;

  const categoryName = category
    ? category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    : 'All Collections';

  return (
    <div className="bg-brand-beige min-h-screen">
      {/* Header */}
      <div className="px-10 py-16 border-b border-brand-gray-med bg-white">
        <div className="text-[10px] uppercase font-bold tracking-[2px] text-gray-400 mb-4 flex items-center space-x-2">
          <Link to="/" className="hover:text-brand-charcoal transition-colors">Home</Link>
          <span>/</span>
          <span className="text-brand-charcoal">Shop</span>
          {category && (
            <>
              <span>/</span>
              <span className="text-brand-charcoal">{categoryName}</span>
            </>
          )}
        </div>
        <h1 className="text-6xl font-serif tracking-tight font-normal italic">{categoryName}</h1>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 bg-white border-b border-brand-gray-med">
        {filteredProducts.map((product, idx) => (
          <div
            key={product.id}
            className="group flex flex-col border-r border-brand-gray-light last:border-r-0 p-8 min-h-[420px]"
          >
            <div className="aspect-[3/4] mb-6 bg-[#F9F9F9] relative overflow-hidden flex items-center justify-center">
              <Link to={`/product/${product.id}`} className="w-full h-full">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-110"
                />
              </Link>
              
              {/* Badges */}
              {product.category === 'new-arrivals' && (
                <div className="absolute top-4 left-4 bg-brand-gold text-white px-2 py-1 text-[8px] font-bold uppercase tracking-[1px] pointer-events-none">
                  New
                </div>
              )}
            </div>

            <div className="flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2">
                <Link to={`/product/${product.id}`} className="hover:text-brand-gold transition-colors">
                  <h3 className="text-[13px] font-medium tracking-tight whitespace-nowrap overflow-hidden text-ellipsis">{product.name}</h3>
                </Link>
                <span className="text-[12px] font-light text-gray-500">{formatPrice(product.price)}</span>
              </div>
              <div className="flex items-center space-x-2 mb-4">
                 {product.colors.slice(0, 3).map(c => (
                   <div
                    key={c.name}
                    className="w-2 h-2 rounded-full border border-gray-100 shadow-sm"
                    style={{ backgroundColor: c.hex }}
                   />
                 ))}
                 {product.colors.length > 3 && <span className="text-[8px] text-gray-400">+{product.colors.length - 3}</span>}
              </div>
              
              <button
                onClick={() => addToCart(product, product.sizes[0], product.colors[0].name)}
                className="mt-auto text-[10px] uppercase tracking-[1px] text-brand-gold font-bold hover:text-brand-charcoal transition-colors text-left"
              >
                + Add to Bag
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="py-32 text-center">
          <p className="text-gray-400 uppercase text-xs tracking-widest font-light">No pieces found in this curation.</p>
          <Link to="/shop" className="inline-block mt-8 border-b border-brand-charcoal pb-1 text-[10px] font-bold uppercase tracking-widest transition-colors hover:text-brand-gold hover:border-brand-gold">Back to All Collections</Link>
        </div>
      )}
    </div>
  );
}
