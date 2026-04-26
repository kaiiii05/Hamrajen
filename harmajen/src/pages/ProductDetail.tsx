import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, ShoppingBag, Heart, Share2, Ruler, Check } from 'lucide-react';
import { PRODUCTS } from '../data/mockData';
import { formatPrice, cn } from '../lib/utils';
import { useApp } from '../context/AppContext';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useApp();
  const product = PRODUCTS.find(p => p.id === id);

  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || '');
  const [selectedColor, setSelectedColor] = useState(product?.colors[0].name || '');
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  if (!product) {
    return <div className="py-32 text-center">Product not found.</div>;
  }

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="bg-brand-beige min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Left: Image Gallery */}
          <div className="lg:col-span-1 flex lg:flex-col space-x-4 lg:space-x-0 lg:space-y-4 mb-6 lg:mb-0 order-2 lg:order-1">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(idx)}
                className={cn(
                  "w-20 aspect-[3/4] border-2 transition-all overflow-hidden",
                  activeImage === idx ? "border-brand-black" : "border-transparent opacity-60"
                )}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          <div className="lg:col-span-6 relative aspect-[3/4] overflow-hidden bg-brand-gray order-1 lg:order-2">
             <AnimatePresence mode="wait">
              <motion.img
                key={activeImage}
                src={product.images[activeImage]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full object-cover"
                alt={product.name}
              />
             </AnimatePresence>
          </div>

          {/* Right: Info Area */}
          <div className="lg:col-span-5 flex flex-col order-3">
            <div className="mb-8">
              <div className="flex justify-between items-start mb-4">
                <span className="uppercase text-[10px] tracking-[0.3em] font-bold text-gray-400">
                  {product.category.replace('-', ' ')}
                </span>
                <div className="flex space-x-4">
                  <button className="text-gray-400 hover:text-brand-black transition-colors"><Heart size={18} /></button>
                  <button className="text-gray-400 hover:text-brand-black transition-colors"><Share2 size={18} /></button>
                </div>
              </div>
              <h1 className="text-5xl font-serif mb-4 tracking-tight leading-none">{product.name}</h1>
              <p className="text-2xl font-light">{formatPrice(product.price)}</p>
            </div>

            <div className="w-full h-px bg-brand-gray mb-8" />

            {/* Selection */}
            <div className="space-y-8 mb-10">
              {/* Colors */}
              <div>
                <div className="flex justify-between mb-4">
                  <span className="uppercase text-[10px] font-bold tracking-widest text-gray-500">Color: <span className="text-brand-black ml-2">{selectedColor}</span></span>
                </div>
                <div className="flex space-x-4">
                  {product.colors.map(color => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={cn(
                        "w-8 h-8 rounded-full border-2 transition-all p-1 flex items-center justify-center",
                        selectedColor === color.name ? "border-brand-black" : "border-transparent"
                      )}
                    >
                      <div className="w-full h-full rounded-full" style={{ backgroundColor: color.hex }} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div>
                <div className="flex justify-between mb-4">
                  <span className="uppercase text-[10px] font-bold tracking-widest text-gray-500">Size: <span className="text-brand-black ml-2">{selectedSize}</span></span>
                  <button className="flex items-center space-x-1 text-[10px] uppercase font-bold tracking-widest text-gray-400 hover:text-brand-black transition-colors">
                    <Ruler size={14} />
                    <span>Size Guide</span>
                  </button>
                </div>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={cn(
                        "min-w-[50px] h-12 border flex items-center justify-center text-xs font-bold transition-all px-4",
                        selectedSize === size ? "bg-brand-black text-white border-brand-black shadow-lg" : "border-brand-gray hover:border-brand-black"
                      )}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <span className="uppercase text-[10px] font-bold tracking-widest text-gray-500 block mb-4">Quantity</span>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center border border-brand-gray h-12">
                    <button onClick={() => setQuantity(q => Math.max(1, q-1))} className="w-12 h-full flex items-center justify-center hover:bg-gray-100 transition-colors"><Minus size={14} /></button>
                    <span className="w-12 text-center text-xs font-bold">{quantity}</span>
                    <button onClick={() => setQuantity(q => q+1)} className="w-12 h-full flex items-center justify-center hover:bg-gray-100 transition-colors"><Plus size={14} /></button>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col space-y-3 mb-10">
              <button
                onClick={handleAddToCart}
                className={cn(
                  "w-full py-5 text-[11px] uppercase font-bold tracking-[0.2em] flex items-center justify-center space-x-3 transition-all transform active:scale-95 shadow-xl",
                  isAdded ? "bg-green-600 text-white" : "bg-brand-black text-white hover:bg-brand-gold"
                )}
              >
                {isAdded ? <Check size={16} /> : <ShoppingBag size={18} />}
                <span>{isAdded ? 'Added to Cart' : 'Add to Shopping Bag'}</span>
              </button>
              <button
                onClick={() => { handleAddToCart(); navigate('/checkout'); }}
                className="w-full py-5 border border-brand-black text-[11px] uppercase font-bold tracking-[0.2em] hover:bg-brand-black hover:text-white transition-all transform active:scale-95"
              >
                Buy Now
              </button>
            </div>

            {/* Tabs for details */}
            <div className="space-y-6">
               <div className="border-t border-brand-gray pt-6">
                 <h3 className="uppercase text-xs font-bold tracking-widest mb-4">Description</h3>
                 <p className="text-gray-500 text-sm leading-relaxed font-light">
                   {product.description}
                 </p>
               </div>
               <div className="border-t border-brand-gray pt-6">
                 <h3 className="uppercase text-xs font-bold tracking-widest mb-4">Details & Care</h3>
                 <ul className="grid grid-cols-1 gap-2">
                   {product.details.map((detail, idx) => (
                     <li key={idx} className="text-xs text-gray-500 font-light flex items-center space-x-2">
                       <div className="w-1 h-1 bg-brand-gold rounded-full" />
                       <span>{detail}</span>
                     </li>
                   ))}
                 </ul>
               </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
