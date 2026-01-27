'use client';

import { Phone, Smartphone } from 'lucide-react';

export default function USSD() {
    return (
        <section className="py-24 bg-primary text-white relative overflow-hidden font-sans">
             {/* Pattern Background */}
             <div className="absolute inset-0 opacity-10" 
                  style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}>
             </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
                    
                    {/* Left: Text Content */}
                    <div className="flex-1 space-y-8 text-center md:text-left">
                        <div className="inline-flex items-center justify-center md:justify-start gap-3">
                            <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
                                <Phone className="h-6 w-6 text-secondary" />
                            </div>
                            <span className="font-bold tracking-wider text-secondary uppercase text-sm">Offline Banking</span>
                        </div>
                        
                        <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-none">
                            No Data? <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
                                No Problem.
                            </span>
                        </h2>
                        
                        <p className="text-lg md:text-xl text-blue-100 max-w-lg leading-relaxed mx-auto md:mx-0">
                            Access your bank account instantly from any mobile phone. Dial our USSD code to check balances, buy airtime, and transfer money.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                             <div className="flex items-center gap-2 text-sm font-medium text-white/80 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                                Works on any network
                             </div>
                             <div className="flex items-center gap-2 text-sm font-medium text-white/80 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                                No internet required
                             </div>
                        </div>
                    </div>

                    {/* Right: The Code Visual */}
                    <div className="flex-1 w-full flex justify-center md:justify-end">
                        <div className="relative group cursor-pointer">
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-secondary rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                            
                            {/* Circle Container */}
                            <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full border-4 border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center transform hover:scale-105 transition-all duration-500">
                                <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/20 animate-spin-slow"></div>
                                
                                <div className="text-center space-y-2">
                                    <p className="text-sm font-semibold text-secondary tracking-widest uppercase">DIAL</p>
                                    <h3 className="text-6xl sm:text-7xl font-black text-white tracking-tighter drop-shadow-lg">
                                        *241#
                                    </h3>
                                    <div className="inline-flex items-center gap-1 text-xs text-white/60 bg-black/20 px-3 py-1 rounded-full mt-2">
                                        <Smartphone className="w-3 h-3" />
                                        <span>Instant Access</span>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Floating Particles */}
                            <div className="absolute top-0 right-10 w-4 h-4 bg-secondary rounded-full animate-bounce delay-75"></div>
                            <div className="absolute bottom-10 left-0 w-6 h-6 bg-blue-400 rounded-full animate-bounce delay-150"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
