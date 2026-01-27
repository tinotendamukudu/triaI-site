'use client';

import { ArrowRight, Smartphone, Laptop, Phone, Globe, Lock } from 'lucide-react';
import Link from 'next/link';

export default function HeroDigital() {
    return (
        <div className="relative bg-white font-sans">
            {/* Main Hero Content */}
            <div className="relative isolate overflow-hidden min-h-[90vh] flex items-center">
                {/* Background Image with Overlay - Matching the "High Impact" style */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-teal-900/40 z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2670&auto=format&fit=crop"
                        alt="Digital Banking Lifestyle"
                        className="h-full w-full object-cover"
                    />
                </div>

                <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 relative z-20 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <div className="mx-auto max-w-2xl lg:mx-0">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium mb-6">
                                <Globe className="h-4 w-4" /> Digital First Banking
                            </div>
                            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl leading-tight">
                                Banking that <br />
                                <span className="text-secondary bg-clip-text text-transparent bg-gradient-to-r from-secondary to-teal-300">moves with you</span>
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-300 max-w-lg">
                                Experience the freedom of NMB Digital. Secure, instant, and borderless banking designed for your modern lifestyle.
                            </p>
                            <div className="mt-10 flex items-center gap-x-6">
                                <Link
                                    href="#download"
                                    className="rounded-full bg-secondary px-8 py-3.5 text-sm font-semibold text-gray-900 shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] hover:bg-white hover:scale-105 transition-all duration-300"
                                >
                                    Get the App
                                </Link>
                                <Link href="#internet-banking" className="text-sm font-semibold leading-6 text-white group flex items-center gap-2 hover:text-secondary transition-colors">
                                    Internet Banking <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>

                        {/* Right Side Visuals - "Interactive" feel */}
                        <div className="relative hidden lg:block h-[600px] w-full">
                            {/* Background subtle glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/20 blur-[100px] rounded-full pointer-events-none" />

                            {/* Floating Glass Cards - Now with better contrast */}
                            <div className="absolute top-20 right-10 animate-float-slow">
                                <GlassCard
                                    icon={<Smartphone className="h-6 w-6 text-teal-300" />}
                                    title="Mobile App"
                                    subtitle="Bank on the go"
                                    delay="0s"
                                />
                            </div>
                            <div className="absolute top-1/2 left-10 -translate-y-1/2 animate-float-delayed">
                                <GlassCard
                                    icon={<Laptop className="h-6 w-6 text-blue-300" />}
                                    title="Internet Banking"
                                    subtitle="Desktop power"
                                    delay="1s"
                                />
                            </div>
                            <div className="absolute bottom-20 right-20 animate-float-slow">
                                <GlassCard
                                    icon={<Phone className="h-6 w-6 text-purple-300" />}
                                    title="USSD *240#"
                                    subtitle="No internet banking"
                                    delay="2s"
                                />
                            </div>

                            {/* Decorative Central Element - e.g. a phone frame or abstract symbol */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className="relative w-64 h-64">
                                    <div className="absolute inset-0 border-2 border-white/10 rounded-full animate-spin-slow-reverse"></div>
                                    <div className="absolute inset-4 border border-teal-500/30 rounded-full animate-spin-slow"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Lock className="h-16 w-16 text-white/80" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function GlassCard({ icon, title, subtitle, delay }: Readonly<{ icon: React.ReactNode, title: string, subtitle: string, delay: string }>) {
    return (
        <div
            className="flex items-center gap-4 bg-gray-900/40 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-2xl hover:bg-gray-800/60 hover:border-teal-500/50 transition-all duration-300 hover:scale-105 cursor-pointer min-w-[240px]"
            style={{ animationDelay: delay }}
        >
            <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                {icon}
            </div>
            <div className="flex flex-col">
                <span className="text-white font-semibold text-base">{title}</span>
                <span className="text-gray-400 text-xs">{subtitle}</span>
            </div>
        </div>
    )
}
