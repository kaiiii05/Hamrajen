import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, User, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useApp } from '../context/AppContext';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cart } = useApp();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/shop/new-arrivals' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-10 flex items-center h-[70px] border-b",
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-brand-gray-med" : "bg-white border-brand-gray-light"
    )}>
      {/* Left Links */}
      <div className="hidden md:flex items-center space-x-8 uppercase text-[12px] font-medium tracking-[1.5px]">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="hover:text-brand-gold transition-colors relative"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Centered Logo */}
      <Link to="/" className="absolute left-1/2 -translate-x-1/2 text-[24px] font-serif tracking-[4px] font-normal uppercase">
        HARMAJEN
      </Link>

      {/* Right Actions */}
      <div className="ml-auto flex items-center space-x-6 uppercase text-[12px] font-medium tracking-[1.5px]">
        <button className="hidden md:block hover:text-brand-gold transition-colors">Search</button>
        <Link to="/account" className="hidden md:block hover:text-brand-gold transition-colors">Account</Link>
        <Link to="/cart" className="flex items-center space-x-1 group hover:text-brand-gold transition-colors">
          <span>Cart</span>
          <span className="text-[10px] opacity-60">({cart.reduce((sum, item) => sum + item.quantity, 0)})</span>
        </Link>
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-brand-gray-med p-8 flex flex-col space-y-6 md:hidden shadow-xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-[12px] uppercase tracking-[1.5px] font-medium border-b border-brand-gray-light pb-2 font-sans"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
