import { useState } from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, MapPin, Heart, LogOut, ChevronRight, Package, User, Star } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { formatPrice, cn } from '../lib/utils';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Order } from '../types';

export default function Account() {
  const { user, login, register, logout, orders } = useApp();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [authError, setAuthError] = useState('');
  const [authSuccess, setAuthSuccess] = useState('');
  const [activeTab, setActiveTab ] = useState('orders');
  const [orderSection, setOrderSection] = useState<'to-pay' | 'to-ship' | 'to-receive' | 'to-rate'>('to-pay');

  const mapOrderToSection = (status: Order['status']) => {
    if (status === 'confirmed') return 'to-pay';
    if (status === 'preparing') return 'to-ship';
    if (status === 'shipped' || status === 'out-for-delivery') return 'to-receive';
    return 'to-rate';
  };

  const sectionLabels: Record<'to-pay' | 'to-ship' | 'to-receive' | 'to-rate', string> = {
    'to-pay': 'To Pay',
    'to-ship': 'To Ship',
    'to-receive': 'To Receive',
    'to-rate': 'To Rate'
  };

  const filteredOrders = orders.filter((order) => mapOrderToSection(order.status) === orderSection);
  const orderSectionCounts = {
    'to-pay': orders.filter((order) => mapOrderToSection(order.status) === 'to-pay').length,
    'to-ship': orders.filter((order) => mapOrderToSection(order.status) === 'to-ship').length,
    'to-receive': orders.filter((order) => mapOrderToSection(order.status) === 'to-receive').length,
    'to-rate': orders.filter((order) => mapOrderToSection(order.status) === 'to-rate').length
  };
  const redirectPath = new URLSearchParams(location.search).get('redirect') || '/account';

  const handleSwitchAccount = () => {
    logout();
    setAuthMode('login');
    setAuthError('');
    setAuthSuccess('');
    setEmail('');
    setPassword('');
    setName('');
    setConfirmPassword('');
    navigate('/account');
  };

  if (!user) {
    const handleAuthSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setAuthError('');
      setAuthSuccess('');

      if (authMode === 'register') {
        if (!name.trim()) {
          setAuthError('Please enter your name.');
          return;
        }
        if (password.length < 6) {
          setAuthError('Password must be at least 6 characters.');
          return;
        }
        if (password !== confirmPassword) {
          setAuthError('Passwords do not match.');
          return;
        }

        const result = register(name, email, password);
        if (!result.success) {
          setAuthError(result.message);
          return;
        }
        setAuthSuccess(result.message);
        setAuthMode('login');
        setName('');
        setPassword('');
        setConfirmPassword('');
        return;
      }

      const result = login(email, password);
      if (!result.success) {
        setAuthError(result.message);
        return;
      }
      navigate(redirectPath);
    };

    return (
      <div className="bg-brand-beige min-h-[80vh] flex items-center justify-center p-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-12 shadow-2xl border border-brand-gray w-full max-w-md">
          <h1 className="text-5xl font-serif mb-4 italic text-center tracking-tighter">Welcome back.</h1>
          <div className="grid grid-cols-2 gap-2 mb-8">
            <button
              type="button"
              onClick={() => { setAuthMode('login'); setAuthError(''); setAuthSuccess(''); }}
              className={cn(
                "border py-3 text-[10px] uppercase font-bold tracking-widest transition-all",
                authMode === 'login'
                  ? "bg-brand-charcoal text-white border-brand-charcoal"
                  : "border-brand-gray text-gray-500 hover:border-brand-charcoal hover:text-brand-charcoal"
              )}
            >
              Log In
            </button>
            <button
              type="button"
              onClick={() => { setAuthMode('register'); setAuthError(''); setAuthSuccess(''); }}
              className={cn(
                "border py-3 text-[10px] uppercase font-bold tracking-widest transition-all",
                authMode === 'register'
                  ? "bg-brand-charcoal text-white border-brand-charcoal"
                  : "border-brand-gray text-gray-500 hover:border-brand-charcoal hover:text-brand-charcoal"
              )}
            >
              Register
            </button>
          </div>
          <form
            onSubmit={handleAuthSubmit}
            className="space-y-8"
          >
            {authMode === 'register' && (
              <div className="flex flex-col space-y-2">
                <label className="uppercase text-[9px] font-bold tracking-widest text-gray-500">Full Name</label>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-transparent border-b border-brand-gray py-4 outline-none focus:border-brand-charcoal font-serif text-lg"
                  placeholder="Enter Full Name"
                />
              </div>
            )}
            <div className="flex flex-col space-y-2">
              <label className="uppercase text-[9px] font-bold tracking-widest text-gray-500">Account Email</label>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent border-b border-brand-gray py-4 outline-none focus:border-brand-charcoal font-serif text-lg"
                placeholder="Enter Email"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="uppercase text-[9px] font-bold tracking-widest text-gray-500">Password</label>
              <input
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-transparent border-b border-brand-gray py-4 outline-none focus:border-brand-charcoal font-serif text-lg"
                placeholder="Enter password"
              />
            </div>
            {authMode === 'register' && (
              <div className="flex flex-col space-y-2">
                <label className="uppercase text-[9px] font-bold tracking-widest text-gray-500">Confirm Password</label>
                <input
                  required
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="bg-transparent border-b border-brand-gray py-4 outline-none focus:border-brand-charcoal font-serif text-lg"
                  placeholder="Re-enter password"
                />
              </div>
            )}
            {authError && (
              <p className="text-xs text-red-500 font-medium">{authError}</p>
            )}
            {authSuccess && (
              <p className="text-xs text-green-600 font-medium">{authSuccess}</p>
            )}
            <button className="w-full bg-brand-charcoal text-white py-5 text-[11px] uppercase font-bold tracking-[0.2em] hover:bg-brand-gold transition-all">
              {authMode === 'register' ? 'Create Account' : 'Log In'}
            </button>
            <div className="pt-6 text-center border-t border-brand-gray">
               <p className="text-[10px] text-gray-400 italic">
                 {authMode === 'register'
                   ? 'Already have an account? Switch to Log In.'
                   : "No account yet? Switch to Register to create one."}
               </p>
            </div>
          </form>
        </motion.div>
      </div>
    );
  }

  const tabs = [
    { id: 'orders', label: 'Orders', icon: <Package size={18} /> },
    { id: 'wishlist', label: 'Wishlist', icon: <Heart size={18} /> },
    { id: 'address', label: 'Addresses', icon: <MapPin size={18} /> },
    { id: 'settings', label: 'Profile', icon: <User size={18} /> }
  ];

  return (
    <div className="bg-brand-beige min-h-screen py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <span className="uppercase text-[10px] tracking-[0.4em] font-bold text-brand-gold mb-2 block italic">Member Profile</span>
            <h1 className="text-7xl font-serif tracking-tighter leading-none">{user.name}</h1>
            <p className="text-gray-400 text-sm mt-4 font-light">{user.email}</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={logout}
              className="flex items-center space-x-2 text-[10px] uppercase font-bold tracking-widest text-gray-400 hover:text-red-500 transition-colors border border-brand-gray px-4 py-2"
            >
              <LogOut size={14} />
              <span>Log Out</span>
            </button>
            <button
              onClick={handleSwitchAccount}
              className="flex items-center space-x-2 text-[10px] uppercase font-bold tracking-widest text-gray-500 hover:text-brand-charcoal transition-colors border border-brand-gray px-4 py-2"
            >
              <User size={14} />
              <span>Switch Account</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Navigation */}
          <div className="lg:col-span-3">
             <div className="flex flex-col space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                      "flex items-center justify-between p-5 text-[11px] uppercase font-bold tracking-widest transition-all",
                      activeTab === tab.id ? "bg-white border-l-4 border-brand-black shadow-lg" : "text-gray-400 hover:text-brand-black"
                    )}
                  >
                    <div className="flex items-center space-x-4">
                      {tab.icon}
                      <span>{tab.label}</span>
                    </div>
                    <ChevronRight size={14} />
                  </button>
                ))}
             </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-9 bg-white border border-brand-gray p-8 md:p-12 shadow-sm min-h-[600px]">
             {activeTab === 'orders' && (
               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <h2 className="text-3xl font-serif mb-8 italic">My Orders.</h2>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                    {(Object.keys(sectionLabels) as Array<'to-pay' | 'to-ship' | 'to-receive' | 'to-rate'>).map((section) => (
                      <button
                        key={section}
                        onClick={() => setOrderSection(section)}
                        className={cn(
                          "border px-4 py-3 text-[10px] uppercase font-bold tracking-widest transition-all",
                          orderSection === section
                            ? "bg-brand-charcoal text-white border-brand-charcoal"
                            : "border-brand-gray text-gray-500 hover:border-brand-charcoal hover:text-brand-charcoal"
                        )}
                      >
                        {sectionLabels[section]} ({orderSectionCounts[section]})
                      </button>
                    ))}
                  </div>

                  {orders.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                       <Package size={48} className="text-gray-100 mb-6" />
                       <p className="text-gray-400 text-sm italic">You haven't made any curated acquisitions yet.</p>
                       <Link to="/shop" className="mt-8 border-b border-brand-black pb-1 text-[10px] font-bold uppercase tracking-widest">Explore Shop</Link>
                    </div>
                  ) : (
                    <div className="space-y-8">
                       {filteredOrders.length === 0 && (
                         <div className="border border-dashed border-brand-gray p-10 text-center">
                           <p className="text-gray-500 text-sm">No orders in <span className="font-medium">{sectionLabels[orderSection]}</span> yet.</p>
                         </div>
                       )}
                       {filteredOrders.map((order) => (
                         <div key={order.id} className="border border-brand-gray p-6 hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start mb-6">
                               <div>
                                  <p className="text-[10px] uppercase font-bold tracking-widest text-brand-gold mb-1">{sectionLabels[mapOrderToSection(order.status)]}</p>
                                  <h4 className="font-serif text-xl">{order.id}</h4>
                                  <p className="text-[10px] text-gray-400 mt-1">{new Date(order.createdAt).toLocaleDateString()}</p>
                               </div>
                               <div className="text-right">
                                  <p className="text-lg font-medium">{formatPrice(order.total)}</p>
                                  <Link to={`/tracking?id=${order.id}`} className="text-[9px] uppercase font-bold tracking-widest border-b border-brand-black hover:text-brand-gold hover:border-brand-gold transition-colors mt-2 inline-block">Track Prestige</Link>
                               </div>
                            </div>
                            <div className="flex -space-x-2 overflow-hidden">
                               {order.items.slice(0, 4).map((item, idx) => (
                                 <img
                                  key={idx}
                                  src={item.images[0]}
                                  className="w-10 h-14 object-cover border-2 border-white"
                                  alt=""
                                 />
                               ))}
                               {order.items.length > 4 && (
                                 <div className="w-10 h-14 bg-gray-100 border-2 border-white flex items-center justify-center text-[10px] font-bold">
                                   +{order.items.length - 4}
                                 </div>
                               )}
                            </div>
                         </div>
                       ))}
                    </div>
                  )}
               </motion.div>
             )}

             {activeTab === 'wishlist' && (
               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-32">
                  <Heart size={48} className="text-gray-100 mx-auto mb-6" />
                  <p className="text-gray-400 text-sm italic">Your curated wishlist awaits its first addition.</p>
               </motion.div>
             )}

             {activeTab === 'address' && (
               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <h2 className="text-3xl font-serif mb-10 italic">Saved Addresses.</h2>
                  <div className="border-2 border-dashed border-brand-gray p-12 text-center hover:border-brand-gold transition-colors cursor-pointer group">
                     <p className="text-[10px] uppercase font-bold tracking-widest text-gray-400 group-hover:text-brand-black transition-colors">Add New Destination</p>
                  </div>
               </motion.div>
             )}

             {activeTab === 'settings' && (
               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <h2 className="text-3xl font-serif mb-10 italic">Profile Integrity.</h2>
                  <div className="space-y-8">
                     <div className="flex flex-col space-y-2">
                        <label className="text-[9px] uppercase font-bold tracking-widest text-gray-400">Display Name</label>
                        <p className="text-xl font-serif italic border-b border-brand-gray pb-4">{user.name}</p>
                     </div>
                     <div className="flex flex-col space-y-2">
                        <label className="text-[9px] uppercase font-bold tracking-widest text-gray-400">Secure Email</label>
                        <p className="text-xl font-serif italic border-b border-brand-gray pb-4">{user.email}</p>
                     </div>
                     <div className="bg-brand-beige p-6 flex items-center space-x-4 border border-brand-gray">
                        <Star size={24} className="text-brand-gold" />
                        <div>
                          <p className="text-[10px] uppercase font-bold tracking-widest">Harmajen Insider Status</p>
                          <p className="text-xs text-gray-500 font-light italic">Active Member since 2026</p>
                        </div>
                     </div>
                  </div>
               </motion.div>
             )}
          </div>
        </div>
      </div>
    </div>
  );
}
