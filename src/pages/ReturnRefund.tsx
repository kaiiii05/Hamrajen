import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, ArrowRight, Upload, HelpCircle, Package, FileText } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { cn } from '../lib/utils';

export default function ReturnRefund() {
  const { submitRefund } = useApp();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    orderId: '',
    reason: 'Wrong item sent',
    notes: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitRefund(formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-brand-beige min-h-[80vh] flex flex-col items-center justify-center p-6 text-center">
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white p-16 shadow-2xl border border-brand-gray max-w-xl">
           <div className="bg-brand-gold w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
              <FileText size={32} className="text-white" />
           </div>
           <h1 className="text-4xl font-serif mb-4 italic">Request Received</h1>
           <p className="text-gray-500 font-light mb-8 leading-relaxed">
             Our quality assurance team has received your request for Order {formData.orderId}. We prioritize excellence; expect a resolution within 48 business hours.
           </p>
           <button
            onClick={() => setIsSubmitted(false)}
            className="bg-brand-black text-white px-12 py-4 uppercase text-[10px] font-bold tracking-[0.2em] hover:bg-brand-gold transition-all"
           >
             Return to Service Center
           </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-brand-beige min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

          {/* Policy Info */}
          <div className="lg:col-span-5">
            <h1 className="text-6xl font-serif italic mb-8 tracking-tighter">Refund & Returns.</h1>
            <p className="text-gray-500 font-light text-lg mb-12 leading-relaxed italic">
              At Harmajen, we stand by the integrity of our curation. If your piece does not meet our standard of perfection, we offer a seamless resolution process.
            </p>

            <div className="space-y-12">
               {[
                 { title: 'Standard Resolution', desc: 'Complimentary returns for defective items within 7 days of delivery.' },
                 { title: 'Size Exchange', desc: 'Fit is paramount. We allow one complimentary exchange per luxury order.' },
                 { title: 'PII Protection', desc: 'Your resolution data is handled with the same privacy as your purchase.' }
               ].map((p, idx) => (
                 <div key={idx} className="flex items-start space-x-6">
                    <div className="bg-brand-gray w-12 h-12 flex items-center justify-center shrink-0 border border-brand-gray italic font-serif">0{idx+1}</div>
                    <div>
                      <h4 className="uppercase text-[11px] font-bold tracking-widest mb-2">{p.title}</h4>
                      <p className="text-xs text-gray-400 font-light leading-relaxed">{p.desc}</p>
                    </div>
                 </div>
               ))}
            </div>

            <div className="mt-16 bg-white p-8 border border-brand-gray">
               <div className="flex items-center space-x-4 mb-4 text-brand-gold">
                  <ShieldCheck size={24} />
                  <span className="uppercase text-[10px] font-bold tracking-widest">Harmajen Guarantee</span>
               </div>
               <p className="text-xs text-gray-400 italic">"Every stitch is inspected. Every resolution is personal."</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-12 shadow-sm border border-brand-gray">
               <h2 className="uppercase text-xs font-bold tracking-[0.2em] mb-12 border-b border-brand-gray pb-4">Submit Request</h2>
               <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="flex flex-col space-y-3">
                    <label className="uppercase text-[9px] font-bold tracking-widest text-gray-500">Order Reference</label>
                    <input
                      required
                      name="orderId"
                      value={formData.orderId}
                      onChange={handleInputChange}
                      className="bg-transparent border-b border-brand-gray py-4 outline-none focus:border-brand-black transition-colors font-serif text-lg"
                      placeholder="HAR-XXXXXX"
                    />
                  </div>

                  <div className="flex flex-col space-y-3">
                    <label className="uppercase text-[9px] font-bold tracking-widest text-gray-500">Reason for Request</label>
                    <div className="relative">
                       <select
                        name="reason"
                        value={formData.reason}
                        onChange={handleInputChange}
                        className="w-full bg-transparent border-b border-brand-gray py-4 outline-none focus:border-brand-black transition-colors font-light text-sm appearance-none"
                       >
                          <option>Wrong item sent</option>
                          <option>Defective item</option>
                          <option>Damaged item</option>
                          <option>Wrong size received</option>
                       </select>
                       <HelpCircle size={16} className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-300" />
                    </div>
                  </div>

                  <div className="flex flex-col space-y-3">
                    <label className="uppercase text-[9px] font-bold tracking-widest text-gray-500">Documentation (Image Upload)</label>
                    <div className="border-2 border-dashed border-brand-gray p-12 text-center group hover:border-brand-gold transition-colors cursor-pointer">
                       <Upload size={32} className="mx-auto mb-4 text-gray-300 group-hover:text-brand-gold transition-colors" />
                       <p className="text-[10px] uppercase font-bold tracking-widest text-gray-400 group-hover:text-brand-black transition-colors">Select Evidence File</p>
                       <p className="text-[10px] text-gray-300 mt-2">Max 5MB. PNG, JPG formats only.</p>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-3">
                    <label className="uppercase text-[9px] font-bold tracking-widest text-gray-500">Additional Context</label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      className="bg-transparent border border-brand-gray p-4 outline-none focus:border-brand-black transition-colors font-light text-sm min-h-[120px]"
                      placeholder="Tell us about the issue..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-brand-black text-white py-6 text-[11px] uppercase font-bold tracking-[0.2em] flex items-center justify-center space-x-3 hover:bg-brand-gold transition-all"
                  >
                    <span>Submit Assurance Request</span>
                    <ArrowRight size={16} />
                  </button>
               </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
