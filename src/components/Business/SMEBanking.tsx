'use client';

import Image from 'next/image';
import Button from '../buttons/Button';
import { BadgeCheck, Zap, TrendingUp } from 'lucide-react';

export default function SMEBanking() {
    return (
        <section id="sme-banking" className="py-24 bg-white overflow-hidden">
            <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    
                    {/* Left: Content */}
                    <div className="flex-1 space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-primary text-xs font-semibold uppercase tracking-wider">
                            <BadgeCheck className="w-4 h-4" />
                            SME Banking
                        </div>
                        
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            Open an <span className="text-secondary">Entrepreneur Account</span>
                        </h2>
                        
                        <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                            Run your business from your phone. Plus, get access to credit, a personalised bank card and rewards tailored for growing businesses.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button variant="primary" className="!rounded-full !px-8">
                                Open Account
                            </Button>
                            <Button variant="outline" className="!rounded-full !px-8">
                                Learn more
                            </Button>
                        </div>
                    </div>

                    {/* Right: Visual Composition */}
                    <div className="flex-1 w-full relative">
                        {/* Background Shapes */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gray-50 rounded-[3rem] -z-10 transform -rotate-3"></div>
                        
                        <div className="relative z-10">
                            {/* Main Image Container */}
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-gray-200 aspect-[4/3] sm:aspect-[16/10]">
                                <Image
                                    src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2669&auto=format&fit=crop"
                                    alt="SME Entrepreneur"
                                    fill
                                    className="object-cover"
                                />
                                
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                                
                                {/* Card Overlay */}
                                <div className="absolute bottom-8 left-8 right-8 text-white">
                                    <p className="font-semibold text-lg">Growth Business Account</p>
                                    <p className="text-white/80 text-sm">Everything you need to scale</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
