import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-white pt-16 pb-8 px-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-1">
          <h2 className="text-[20px] font-serif font-normal tracking-[3px] mb-6 uppercase">HARMAJEN</h2>
          <p className="text-gray-400 text-[12px] leading-relaxed max-w-xs font-light">
            Redefining technical elegance for the modern disruptor. Harmajen is a premium fashion brand dedicated to minimalist luxury.
          </p>
        </div>

        <div>
          <h3 className="uppercase text-[10px] font-bold tracking-[2px] mb-6 text-brand-gold">Collection</h3>
          <ul className="space-y-3 text-[11px] text-gray-400 font-normal uppercase tracking-[1px]">
            <li><Link to="/shop/men" className="hover:text-white transition-colors">Men's Pieces</Link></li>
            <li><Link to="/shop/women" className="hover:text-white transition-colors">Women's Pieces</Link></li>
            <li><Link to="/shop/new-arrivals" className="hover:text-white transition-colors">New Drops</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="uppercase text-[10px] font-bold tracking-[2px] mb-6 text-brand-gold">Service</h3>
          <ul className="space-y-3 text-[11px] text-gray-400 font-normal uppercase tracking-[1px]">
            <li><Link to="/tracking" className="hover:text-white transition-colors">Track Order</Link></li>
            <li><Link to="/return-refund" className="hover:text-white transition-colors">Refunds & Returns</Link></li>
            <li><Link to="/admin" className="hover:text-white transition-colors">Admin Portal</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="uppercase text-[10px] font-bold tracking-[2px] mb-6 text-brand-gold">Newsletter</h3>
          <p className="text-gray-400 text-[11px] mb-4 font-light italic">Join the discourse. Gain exclusive early access.</p>
          <div className="flex border-b border-gray-700 pb-2">
            <input
              type="email"
              placeholder="Email Address"
              className="bg-transparent border-none outline-none text-[11px] w-full placeholder:text-gray-600 text-white"
            />
            <button className="text-brand-gold uppercase text-[10px] font-bold tracking-widest ml-4">Join</button>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[9px] text-gray-500 uppercase tracking-[2px]">
        <p>&copy; 2026 Harmajen Luxury. Prototype Mode.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link to="/privacy" className="hover:text-white transition-colors">Shipping</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Returns</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}
