'use client';
import Link from 'next/link';
import { ArrowRight, Wallet, CreditCard, PiggyBank, Shield } from 'lucide-react';

export default function PersonalBankingPromo() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden font-sans">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=2000')`
        }}
      >
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
      </div>

      <div className="relative z-10 max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <span className="inline-block py-1.5 px-4 rounded-full bg-secondary/20 border border-secondary/30 text-secondary text-sm font-bold mb-8 backdrop-blur-md uppercase tracking-wider">
            Designed for You
        </span>
        
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 tracking-tighter leading-tight">
          Banking that fits your <br className="hidden md:block"/> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-white">lifestyle.</span>
        </h2>
        
        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-16 leading-relaxed font-light">
           Whether you are saving for a dream home, managing daily expenses, or planning for retirement, 
           NMB Personal Banking offers world-class financial solutions tailored to your unique journey.
        </p>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16 text-left">
            {[
                { icon: Wallet, title: "Current Accounts", desc: "Flexible accounts with low fees and 24/7 digital access." },
                { icon: PiggyBank, title: "Savings & Investments", desc: "Grow your wealth with competitive interest rates." },
                { icon: CreditCard, title: "Cards & Payments", desc: "Virtual and physical VISA cards for global access." },
                { icon: Shield, title: "Personal Loans", desc: "Quick, hassle-free financing when you need it most." },
            ].map((item, i) => (
                <div key={i} className="group bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                    <div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-primary transition-colors duration-300">
                        <item.icon className="w-6 h-6 text-secondary group-hover:text-primary transition-colors" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                    <p className="text-sm text-gray-300 leading-relaxed">{item.desc}</p>
                </div>
            ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
                href="/personal" 
                className="inline-flex items-center gap-2 bg-secondary text-primary font-bold py-4 px-10 rounded-full hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-xl shadow-black/20"
            >
                Start Banking With Us
                <ArrowRight className="w-5 h-5" />
            </Link>
             <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-transparent border border-white/30 text-white font-semibold py-4 px-10 rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
                Contact a Consultant
            </Link>
        </div>
      </div>
    </section>
  );
}
