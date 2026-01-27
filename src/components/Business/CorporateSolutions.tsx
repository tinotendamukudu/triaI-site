'use client';

import Image from 'next/image';
import Button from '../buttons/Button';
import { Building2, Globe, ShieldCheck, PieChart } from 'lucide-react';

export default function CorporateSolutions() {
    return (
        <section id="corporate-solutions" className="py-24 bg-primary text-white overflow-hidden relative font-sans">
            {/* Abstract Background Design */}
            <div className="absolute top-0 right-0 w-[50%] h-full bg-white/5 skew-x-12 transform origin-top-right"></div>
            <div className="absolute bottom-0 left-0 w-[30%] h-[70%] bg-secondary/10 rounded-tr-[100px]"></div>

            <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left: Visuals */}
                    <div className="order-2 lg:order-1 relative">
                        <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                             <Image
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
                                alt="Modern Corporate Building"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-primary/60 mix-blend-multiply"></div>
                            
                            {/* Overlay Stats */}
                            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent">
                                <div className="grid grid-cols-2 gap-8 border-t border-white/20 pt-6">
                                    <div>
                                        <p className="text-3xl font-bold text-secondary">500+</p>
                                        <p className="text-sm text-white/80">Corporate Partners</p>
                                    </div>
                                    <div>
                                        <p className="text-3xl font-bold text-secondary">$2B+</p>
                                        <p className="text-sm text-white/80">Assets Managed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Floating Icon Card */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary rounded-xl flex items-center justify-center shadow-lg transform rotate-12 hidden lg:flex">
                             <Building2 className="w-12 h-12 text-white" />
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="order-1 lg:order-2 space-y-8">
                        <div>
                            <span className="text-secondary font-bold tracking-widest uppercase text-sm">Enterprise Level</span>
                            <h2 className="text-4xl md:text-5xl font-bold mt-2 leading-tight">
                                Corporate Solutions for <br/> Global Reach
                            </h2>
                        </div>                      
                        <p className="text-lg text-blue-100/90 leading-relaxed">
                            Tailored financial strategies for large-scale enterprises. We provide comprehensive treasury management, trade finance, and corporate lending solutions designed to optimize your capital efficiency.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                             <FeatureCard 
                                icon={<Globe className="w-5 h-5 text-secondary" />}
                                title="Trade Finance"
                                description="Letters of credit, guarantees, and import/export financing."
                             />
                             <FeatureCard 
                                icon={<PieChart className="w-5 h-5 text-secondary" />}
                                title="Asset Management"
                                description="Strategic investment solutions to maximize returns."
                             />
                             <FeatureCard 
                                icon={<ShieldCheck className="w-5 h-5 text-secondary" />}
                                title="Risk Advisory"
                                description="Hedging solutions for currency and interest rate exposure."
                             />
                        </div>
                        <div className="pt-6">
                            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-primary min-w-[180px]">
                                Contact Corporate Team
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

function FeatureCard({ icon, title, description }: Readonly<{ icon: React.ReactNode, title: string, description: string }>) {
    return (
        <div className="flex gap-4 items-start">
            <div className="mt-1 p-2 bg-white/10 rounded-lg backdrop-blur-sm border border-white/10">
                {icon}
            </div>
            <div>
                <h4 className="font-semibold text-white/95">{title}</h4>
                <p className="text-sm text-white/60 leading-snug mt-1">{description}</p>
            </div>
        </div>
    )
}
