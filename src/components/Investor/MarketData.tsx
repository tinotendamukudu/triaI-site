'use client';

import { ArrowRight, ArrowUpRight, ArrowDownRight, RefreshCw, Globe, TrendingUp, DollarSign } from 'lucide-react';
import { useState, useEffect } from 'react';
import Button from '../buttons/Button';

const EXCHANGE_RATES = [
    { currency: 'USD', buy: '2,650.00', sell: '2,780.00', flag: '🇺🇸', change: '+0.5%' },
    { currency: 'EUR', buy: '2,890.50', sell: '2,950.00', flag: '🇪🇺', change: '-0.2%' },
    { currency: 'GBP', buy: '3,340.20', sell: '3,480.00', flag: '🇬🇧', change: '+0.1%' },
    { currency: 'KES', buy: '19.50', sell: '21.00', flag: '🇰🇪', change: '+0.0%' },
];

export default function MarketData() {
    // Mock live updating effect
    const [price, setPrice] = useState(3450);
    const [lastUpdate, setLastUpdate] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
            setPrice(prev => prev + (Math.random() > 0.5 ? 5 : -5));
            setLastUpdate(new Date().toLocaleTimeString());
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-20 bg-white relative overflow-hidden">
             {/* Background Decoration */}
             <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50/50 skew-x-12 transform origin-top-right -z-10" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    
                    {/* Stocks Section (Left / Large) */}
                    <div className="lg:col-span-7 space-y-8">
                        <div className="flex items-end gap-4 mb-2">
                             <div className="space-y-2">
                                <h2 className="text-3xl font-bold text-gray-900">Stocks & Trade</h2>
                                <p className="text-gray-500">Real-time market performance (DSE: NMB)</p>
                             </div>
                             <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-green-600 bg-green-50 px-3 py-1 rounded-full animate-pulse">
                                 <div className="w-2 h-2 bg-green-500 rounded-full" />
                                 MARKET OPEN
                             </div>
                        </div>

                        {/* Stock Card */}
                        <div className="bg-gradient-to-br from-primary to-blue-900 rounded-3xl p-8 text-white relative overflow-hidden group">
                            {/* Glow Lines */}
                            <div className="absolute top-0 right-0 p-32 bg-secondary opacity-10 rounded-full blur-[80px] group-hover:opacity-20 transition-opacity" />
                            
                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-12">
                                    <div>
                                        <p className="text-blue-200 font-medium mb-1">Current Share Price</p>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-6xl font-black tracking-tighter">
                                                {price.toLocaleString()}
                                            </span>
                                            <span className="text-lg font-medium text-secondary">TZS</span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="inline-flex items-center gap-1 bg-green-500/20 text-green-300 px-3 py-1 rounded-lg text-sm font-bold mb-1">
                                            <ArrowUpRight size={16} /> +2.45%
                                        </div>
                                        <p className="text-xs text-blue-300">Last updated: {lastUpdate}</p>
                                    </div>
                                </div>

                                {/* Mock Graph Area */}
                                <div className="h-40 w-full flex items-end gap-1 pb-4 border-b border-white/10">
                                    {[40, 65, 55, 78, 85, 95, 70, 88, 92, 100, 40, 65, 55, 78, 85, 95, 70, 88, 92, 100, 110, 105, 120, 115].map((h, i) => (
                                        <div 
                                            key={i} 
                                            className="flex-1 bg-secondary hover:bg-white rounded-t-sm transition-all duration-300"
                                            style={{ height: `${h}%` }}
                                        />
                                    ))}
                                </div>
                                <div className="flex justify-between text-xs text-blue-300 mt-4 font-mono uppercase tracking-wider">
                                    <span>09:00 AM</span>
                                    <span>Today's Volume: 1.2M</span>
                                    <span>04:00 PM</span>
                                </div>
                                <div className="mt-8 pt-4 border-t border-white/10 flex justify-end">
                                     <button className="text-sm font-bold text-secondary hover:text-white transition-colors flex items-center gap-2 group">
                                         View Full Market Report <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                     </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Exchange Rates Section (Right / Compact) */}
                    <div className="lg:col-span-5 flex flex-col justify-center">
                         <div className="flex items-center justify-between mb-8">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                                    <Globe className="text-primary" size={24} /> Exchange Rates
                                </h3>
                                <p className="text-gray-500 text-sm">Indicative rates against TZS</p>
                            </div>
                            <button className="p-2 text-primary hover:bg-blue-50 rounded-full transition-colors" title="Refresh Rates">
                                <RefreshCw size={20} />
                            </button>
                        </div>

                        <div className="bg-white rounded-2xl border border-gray-100 shadow-xl shadow-gray-200/50 overflow-hidden">
                            <div className="grid grid-cols-4 bg-gray-50 p-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-center">
                                <div className="text-left pl-2">Currency</div>
                                <div>Buy</div>
                                <div>Sell</div>
                                <div>Trend</div>
                            </div>
                            
                            <div className="divide-y divide-gray-100">
                                {EXCHANGE_RATES.map((rate) => (
                                    <div key={rate.currency} className="grid grid-cols-4 p-5 items-center hover:bg-blue-50/50 transition-colors cursor-default">
                                        <div className="flex items-center gap-3 font-bold text-gray-900">
                                            <span className="text-2xl">{rate.flag}</span>
                                            {rate.currency}
                                        </div>
                                        <div className="text-center font-medium text-gray-600">{rate.buy}</div>
                                        <div className="text-center font-medium text-gray-600">{rate.sell}</div>
                                        <div className={`flex justify-center ${rate.change.startsWith('+') ? 'text-green-500' : rate.change.startsWith('-') ? 'text-red-500' : 'text-gray-400'}`}>
                                            {rate.change.startsWith('+') ? <ArrowUpRight size={18} /> : rate.change.startsWith('-') ? <ArrowDownRight size={18} /> : <div className="w-4 h-0.5 bg-gray-300 my-2"></div>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="p-4 bg-gray-50 border-t border-gray-100 text-center">
                                <Button variant="outline" className="w-full justify-center !py-3 !text-sm">
                                    View All Currencies
                                </Button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
