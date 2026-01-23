'use client';

import Image from 'next/image';
import Button from '../buttons/Button';
import { Store, CreditCard, Smartphone } from 'lucide-react';



export default function POSMerchant() {
    return (
        <section id="pos-merchant" className="py-24 bg-gray-50 overflow-hidden">
            <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                        Seamless Payments, <span className="text-primary">Anywhere</span>
                    </h2>
                    <p className="text-lg text-gray-600">
                        Accept payments in-store, online, or on the go with our modern POS terminals and e-commerce gateways.
                    </p>
                </div>

                {/* Main POS Showcase */}
                <div className="relative bg-white rounded-[3rem] border border-gray-300/50 p-8 lg:p-16 overflow-hidden">
                     {/* Background Gradient */}
                     <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white via-blue-50/30 to-secondary/5 z-0"></div>

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        
                        {/* Left: Text & Specs */}
                        <div className="space-y-8">
                            <h3 className="text-3xl font-bold text-gray-900">
                                Smart POS Terminal
                            </h3>
                            
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                                        <CreditCard className="w-4 h-4 text-secondary" />
                                    </div>
                                    <span className="text-gray-700 font-medium">Accepts Visa, Mastercard, & ZimSwitch</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                                        <Store className="w-4 h-4 text-secondary" />
                                    </div>
                                    <span className="text-gray-700 font-medium">Instant settlement to your NMB account</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                                        <Smartphone className="w-4 h-4 text-secondary" />
                                    </div>
                                    <span className="text-gray-700 font-medium">Android-based touch interface</span>
                                </li>
                            </ul>
                            <div className="pt-4 flex flex-wrap gap-4">
                                <Button variant="primary">
                                    Request Terminal
                                </Button>
                                <Button variant="outline">
                                    Learn More
                                </Button>
                            </div>
                        </div>

                        {/* Right: Device Interactive View (Simulated) */}
                        <div className="relative flex items-center justify-center h-[500px]">
                            {/* POS Machine Image */}
                            <div className="relative w-full h-full flex items-center justify-center transform hover:scale-105 transition-transform duration-500">
                                <Image 
                                    src="/POS.jpg" 
                                    alt="NMB Smart POS Terminal" 
                                    width={600} 
                                    height={800}
                                    className="object-contain drop-shadow-2xl max-h-full w-auto"
                                    priority
                                />
                            </div>
                            
                            {/* Floating "Accepted Here" Badge */}
                            <div className="absolute top-10 right-0 w-32 bg-white p-3 shadow-lg rounded-xl border border-gray-100 transform rotate-12 animate-float hidden md:block">
                                <div className="text-center">
                                    <p className="text-[10px] uppercase font-bold text-gray-400 mb-1">Accepted Here</p>
                                    <div className="flex justify-center gap-2">
                                        <div className="w-6 h-4 bg-blue-600 rounded"></div>
                                        <div className="w-6 h-4 bg-orange-500 rounded"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
