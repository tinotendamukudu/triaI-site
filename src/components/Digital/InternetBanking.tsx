'use client';

import Image from 'next/image';
import Button from '../buttons/Button';
import { Laptop, ShieldCheck, Zap, Globe, ArrowRight } from 'lucide-react';

export default function InternetBanking() {
    return (
        <section id="internet-banking" className="py-24 bg-surface relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 -skew-x-12 transform origin-top-right -z-10" />
            
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left Content */}
                    <div className="space-y-8">
                         <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-primary text-xs font-bold uppercase tracking-wider">
                            <Laptop className="w-3.5 h-3.5" />
                            Digital Platform
                        </div>
                        
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            Bank from your desk, <br/>
                            <span className="text-primary">Secured & Simplified.</span>
                        </h2>
                        
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Experience the power of comprehensive banking on a larger screen. Our Internet Banking platform offers enterprise-grade security for bulk payments, salary processing, and international transfers.
                        </p>

                        <div className="space-y-4">
                            <FeatureItem 
                                icon={<Zap className="w-5 h-5 text-secondary" />}
                                title="Bulk & Salary Payments"
                                description="Process multiple transactions at once with ease."
                            />
                            <FeatureItem 
                                icon={<Globe className="w-5 h-5 text-secondary" />}
                                title="International Transfers"
                                description="SWIFT and RTGS transfers right from your dashboard."
                            />
                            <FeatureItem 
                                icon={<ShieldCheck className="w-5 h-5 text-secondary" />}
                                title="Two-Factor Authentication"
                                description="Enhanced security for peace of mind."
                            />
                        </div>

                        <div className="pt-4 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <Button variant="primary" className="!px-10 py-4 shadow-lg shadow-blue-900/20 hover:shadow-blue-900/30 w-full sm:w-auto flex items-center justify-center">
                                Login Now
                            </Button>
                            <Button variant="outline" className="group !px-8 py-4 w-full sm:w-auto flex items-center justify-center">
                                Enrollment Guide <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </div>

                    {/* Right Visuals - Laptop Mockup */}
                    <div className="relative">
                        {/* Abstract Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-secondary/10 rounded-full blur-3xl -z-10" />

                        <div className="relative mx-auto bg-gray-900 rounded-xl shadow-2xl border-[6px] border-gray-800 overflow-hidden transform hover:-translate-y-2 transition-transform duration-500">
                             {/* Screen Content */}
                             <div className="aspect-[16/10] bg-gray-800 relative w-full h-full overflow-hidden group">
                                <Image
                                    src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2670&auto=format&fit=crop"
                                    alt="Internet Banking Dashboard"
                                    fill
                                    className="object-cover opacity-80"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
                                
                                {/* UI Overlay */}
                                <div className="absolute bottom-0 left-0 w-full p-6">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="h-10 w-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                                            <ShieldCheck className="w-5 h-5 text-green-400" />
                                        </div>
                                        <div>
                                            <p className="text-white font-medium text-sm">Secure Session Active</p>
                                            <p className="text-white/60 text-xs">Last login: Today, 10:42 AM</p>
                                        </div>
                                    </div>
                                    <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                                        <div className="h-full bg-secondary w-full animate-pulse"></div>
                                    </div>
                                </div>
                             </div>
                        </div>
                        
                        {/* Decorative Elements */}
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-2xl flex items-center justify-center shadow-xl z-20 animate-bounce-slow">
                            <span className="text-white font-bold text-center text-xs leading-tight">
                                24/7<br/>Access
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function FeatureItem({ icon, title, description }: Readonly<{ icon: React.ReactNode, title: string, description: string }>) {
    return (
        <div className="flex gap-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <div className="shrink-0 h-10 w-10 flex items-center justify-center rounded-lg bg-blue-50">
                {icon}
            </div>
            <div>
                <h3 className="font-semibold text-gray-900 text-sm">{title}</h3>
                <p className="text-gray-500 text-sm leading-snug">{description}</p>
            </div>
        </div>
    )
}
