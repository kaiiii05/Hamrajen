import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, ChevronRight, Wallet, Banknote, Landmark } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { formatPrice, cn } from '../lib/utils';

export default function Checkout() {
  const { cart, createOrder } = useApp();
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    paymentMethod: 'Cash On Delivery'
  });

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 10000 ? 0 : 500;
  const total = subtotal + shipping;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 2) {
      setStep(2);
      return;
    }
    const order = createOrder(formData);
    setOrderId(order.id);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 bg-brand-beige">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center"
        >
          <div className="bg-white p-12 rounded-full mb-10 shadow-xl inline-block">
            <CheckCircle2 size={100} className="text-green-600" strokeWidth={1} />
          </div>
          <p className="uppercase tracking-[0.5em] text-[10px] font-bold text-brand-gold mb-4">Confirmed</p>
          <h1 className="text-5xl font-serif mb-4">Thank you for your order.</h1>
          <p className="text-gray-500 mb-2 font-light italic">Your order #{orderId} has been successfully placed.</p>
          <p className="text-gray-400 mb-12 text-sm max-w-md mx-auto leading-relaxed">
            A confirmation email has been sent to {formData.email}. We'll notify you once your premium package is on its way.
          </p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <Link
              to={`/account/orders/${encodeURIComponent(orderId)}`}
              className="bg-brand-charcoal text-white px-10 py-4 uppercase text-[10px] font-bold tracking-[0.2em] hover:bg-brand-gold transition-all"
            >
              Track Order
            </Link>
            <Link to="/" className="border border-brand-black px-10 py-4 uppercase text-[10px] font-bold tracking-[0.2em] hover:bg-brand-black hover:text-white transition-all">Back to Home</Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-brand-beige min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Checkout Form */}
          <div className="lg:col-span-7">
             <div className="mb-12 flex items-center space-x-4 text-[10px] uppercase font-bold tracking-widest">
               <span className={step >= 1 ? "text-brand-black" : "text-gray-400"}>Information</span>
               <ChevronRight size={14} className="text-gray-300" />
               <span className={step >= 2 ? "text-brand-black" : "text-gray-400"}>Payment</span>
             </div>

             <form onSubmit={handleSubmit}>
               {step === 1 ? (
                 <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-10">
                   <h2 className="text-4xl font-serif mb-10">Contact Details</h2>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div className="flex flex-col space-y-2">
                        <label className="uppercase text-[9px] font-bold tracking-widest text-gray-500">Full Name</label>
                        <input
                          required
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className="bg-transparent border-b border-brand-gray py-3 outline-none focus:border-brand-black transition-colors font-light"
                          placeholder="Enter Full Name"
                        />
                     </div>
                     <div className="flex flex-col space-y-2">
                        <label className="uppercase text-[9px] font-bold tracking-widest text-gray-500">Email Address</label>
                        <input
                          required
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="bg-transparent border-b border-brand-gray py-3 outline-none focus:border-brand-black transition-colors font-light"
                          placeholder="Enter Email"
                        />
                     </div>
                     <div className="flex flex-col space-y-2">
                        <label className="uppercase text-[9px] font-bold tracking-widest text-gray-500">Phone Number</label>
                        <input
                          required
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="bg-transparent border-b border-brand-gray py-3 outline-none focus:border-brand-black transition-colors font-light"
                          placeholder="+63 900 000 0000"
                        />
                     </div>
                     <div className="flex flex-col space-y-2 md:col-span-2">
                        <label className="uppercase text-[9px] font-bold tracking-widest text-gray-500">Shipping Address</label>
                        <input
                          required
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          className="bg-transparent border-b border-brand-gray py-3 outline-none focus:border-brand-black transition-colors font-light"
                          placeholder="123 Luxury Lane, High Street, BGC"
                        />
                     </div>
                   </div>
                   <button
                    type="submit"
                    className="w-full md:w-auto bg-brand-charcoal text-white px-12 py-5 text-[11px] uppercase font-bold tracking-[0.2em] hover:bg-brand-gold transition-all"
                  >
                    Continue to Payment
                  </button>
                 </motion.div>
               ) : (
                 <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-10">
                    <h2 className="text-4xl font-serif mb-10">Select Payment</h2>
                    <div className="grid grid-cols-1 gap-6">
                      {[
                        { id: 'Cash On Delivery', name: 'Cash On Delivery', icon: <Banknote size={24} /> },
                        {
                          id: 'Payment Center/Ewallet',
                          name: 'Payment Center/Ewallet',
                          icon: <Wallet size={24} />
                        },
                        { id: 'Online Banking', name: 'Online Banking', icon: <Landmark size={24} /> }
                      ].map((method) => (
                        <div
                          key={method.id}
                          onClick={() => setFormData(prev => ({ ...prev, paymentMethod: method.id }))}
                          className={cn(
                            "flex items-center justify-between border p-8 cursor-pointer transition-all",
                            formData.paymentMethod === method.id ? "bg-white border-brand-black shadow-lg" : "border-brand-gray hover:border-gray-400 bg-white/40"
                          )}
                        >
                          <div className="flex items-center space-x-4">
                            <div className={cn(
                              "w-12 h-12 rounded-full flex items-center justify-center",
                              formData.paymentMethod === method.id ? "bg-brand-gold text-white" : "bg-gray-100 text-gray-400"
                            )}>
                              {method.icon}
                            </div>
                            <span className="uppercase text-[11px] font-bold tracking-widest">{method.name}</span>
                          </div>
                          <div className={cn(
                            "w-5 h-5 rounded-full border flex items-center justify-center",
                            formData.paymentMethod === method.id ? "border-brand-gold" : "border-gray-300"
                          )}>
                             {formData.paymentMethod === method.id && <div className="w-2.5 h-2.5 rounded-full bg-brand-gold" />}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex space-x-4 pt-4">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="flex-1 bg-transparent border border-brand-black py-5 text-[11px] uppercase font-bold tracking-[0.2em] hover:bg-gray-100 transition-all font-serif"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="flex-[2] bg-brand-charcoal text-white py-5 text-[11px] uppercase font-bold tracking-[0.2em] hover:bg-brand-gold transition-all"
                      >
                        Complete Purchase
                      </button>
                    </div>
                 </motion.div>
               )}
             </form>
          </div>

          {/* Sidebar Summary */}
          <div className="lg:col-span-5">
            <div className="bg-white p-10 shadow-sm border border-brand-gray overflow-hidden">
               <h3 className="uppercase text-xs font-bold tracking-[0.2em] mb-10 border-b border-brand-gray pb-4">Bag Details</h3>
               <div className="space-y-6 mb-10 max-h-[300px] overflow-y-auto pr-4 scrollbar-hide">
                 {cart.map((item) => (
                   <div key={`${item.id}-${item.selectedSize}`} className="flex items-center space-x-4">
                      <div className="w-16 h-20 bg-[#F9F9F9] overflow-hidden shrink-0 flex items-center justify-center">
                        <img src={item.images[0]} alt="" className="w-full h-full object-contain" />
                      </div>
                      <div className="flex-grow">
                        <p className="text-xs font-serif italic mb-1">{item.name}</p>
                        <p className="text-[9px] uppercase tracking-widest text-gray-400">Qty: {item.quantity} / {item.selectedSize}</p>
                      </div>
                      <span className="text-xs font-medium">{formatPrice(item.price * item.quantity)}</span>
                   </div>
                 ))}
               </div>

               <div className="space-y-4 pt-8 border-t border-brand-gray">
                 <div className="flex justify-between text-xs font-light">
                    <span className="text-gray-400">Subtotal</span>
                    <span>{formatPrice(subtotal)}</span>
                 </div>
                 <div className="flex justify-between text-xs font-light">
                    <span className="text-gray-400">Shipping</span>
                    <span>{shipping === 0 ? 'FREE' : formatPrice(shipping)}</span>
                 </div>
                 <div className="flex justify-between text-base font-serif italic border-t border-brand-gray pt-4">
                    <span>Total</span>
                    <span>{formatPrice(total)}</span>
                 </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
