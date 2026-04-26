import React from 'react';

export default function Privacy() {
  return (
    <div className="bg-brand-beige min-h-screen py-24 px-10">
      <div className="max-w-3xl mx-auto bg-white p-12 border border-brand-gray-med shadow-sm">
        <h1 className="text-4xl font-serif mb-8 italic">Privacy Policy.</h1>
        <div className="space-y-6 text-sm text-gray-600 font-light leading-relaxed">
          <p className="font-bold uppercase tracking-widest text-[10px] text-brand-gold">I. Data Collection</p>
          <p>We collect only the necessary information to facilitate your luxury procurement and delivery process.</p>
          
          <p className="font-bold uppercase tracking-widest text-[10px] text-brand-gold">II. Secure Transactions</p>
          <p>Your payment data is processed through secure channels and is never stored on Harmajen's primary servers.</p>
          
          <p className="font-bold uppercase tracking-widest text-[10px] text-brand-gold">III. Client Rights</p>
          <p>You have the right to request access to or deletion of your personal profile data at any time through our service center.</p>
        </div>
      </div>
    </div>
  );
}
