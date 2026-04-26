import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { X, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { formatPrice } from '../lib/utils';

export default function Cart() {
  const { cart, updateQuantity, removeFromCart } = useApp();
  const navigate = useNavigate();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 10000 ? 0 : 500;
  const total = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <div className="bg-brand-beige min-h-[70vh] flex flex-col items-center justify-center p-6 text-center">
        <div className="mb-8 p-12 bg-white rounded-full">
          <ShoppingBag size={64} className="text-gray-200" strokeWidth={1} />
        </div>
        <h1 className="text-4xl font-serif mb-4">Your bag is empty</h1>
        <p className="text-gray-500 mb-8 max-w-xs font-light">Explore our curated collections and find pieces that define your confidence.</p>
        <Link
          to="/shop"
          className="bg-brand-black text-white px-12 py-4 uppercase text-[10px] font-bold tracking-[0.2em] hover:bg-brand-gold transition-all"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-brand-beige min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 pb-32 md:pb-12">
        <h1 className="text-5xl font-serif mb-12 tracking-tight">Shopping Bag</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Cart Items */}
          <div className="lg:col-span-8">
            <div className="border-t border-brand-gray">
              {cart.map((item) => (
                <motion.div
                  key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex py-10 border-b border-brand-gray group"
                >
                  <div className="w-32 aspect-[3/4] bg-brand-gray overflow-hidden">
                    <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                  </div>

                  <div className="flex-grow ml-8 flex flex-col">
                    <div className="flex justify-between items-start">
                      <div>
                        <Link to={`/product/${item.id}`} className="hover:text-brand-gold transition-colors">
                          <h3 className="font-serif text-2xl mb-1">{item.name}</h3>
                        </Link>
                        <p className="text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-4">
                          Size: {item.selectedSize} / Color: {item.selectedColor}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id, item.selectedSize, item.selectedColor)}
                        className="text-gray-400 hover:text-brand-black transition-colors"
                      >
                        <X size={20} strokeWidth={1.5} />
                      </button>
                    </div>

                    <div className="mt-auto flex justify-between items-end">
                      <div className="flex items-center border border-brand-gray h-10">
                        <button
                          onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity - 1)}
                          className="w-10 h-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-10 text-center text-xs font-bold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity + 1)}
                          className="w-10 h-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <p className="text-lg font-medium">{formatPrice(item.price * item.quantity)}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div className="lg:col-span-4">
            <div className="bg-white p-10 sticky top-24 shadow-sm border border-brand-gray">
              <h2 className="uppercase text-xs font-bold tracking-[0.2em] mb-10 border-b border-brand-gray pb-4">Order Summary</h2>

              <div className="space-y-6 mb-10">
                <div className="flex justify-between text-sm font-light">
                  <span className="text-gray-500">Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm font-light">
                  <span className="text-gray-500">Estimated Shipping</span>
                  <span>{shipping === 0 ? 'FREE' : formatPrice(shipping)}</span>
                </div>
                <div className="border-t border-brand-gray pt-6 flex justify-between">
                  <span className="uppercase text-[10px] font-bold tracking-[0.2em]">Total</span>
                  <span className="text-2xl font-serif">{formatPrice(total)}</span>
                </div>
              </div>

              <button
                onClick={() => navigate('/checkout')}
                className="w-full bg-brand-black text-white py-5 text-[11px] uppercase font-bold tracking-[0.2em] flex items-center justify-center space-x-3 hover:bg-brand-gold transition-all"
              >
                <span>Checkout Now</span>
                <ArrowRight size={16} />
              </button>

              <div className="mt-8 text-[10px] text-gray-400 text-center leading-relaxed font-light">
                Secure checkout powered by Harmajen Systems.<br />
                Complimentary shipping on orders over ₱10,000.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile sticky checkout CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-brand-gray bg-white p-4 md:hidden shadow-[0_-8px_24px_rgba(0,0,0,0.08)]">
        <button
          onClick={() => navigate('/checkout')}
          className="w-full bg-brand-black text-white py-4 text-[11px] uppercase font-bold tracking-[0.2em] flex items-center justify-center space-x-3 hover:bg-brand-gold transition-all"
        >
          <span>Checkout Now · {formatPrice(total)}</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
