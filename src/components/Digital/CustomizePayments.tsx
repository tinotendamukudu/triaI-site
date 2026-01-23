'use client';

import { BellRing, Smartphone, CreditCard } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function CustomizePayments() {
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side: Text Content */}
                    <div className="flex flex-col gap-8">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
                                Shop and Pay Beyond Borders
                            </h2>
                            <p className="text-lg text-gray-600">
                                Experience true financial freedom with <span className="font-semibold text-secondary">NMB VISA and Mastercard</span>. Secure, reliable, and accepted worldwide for all your digital transactions.
                            </p>
                        </div>

                        <div className="flex flex-col gap-6">
                            <FeatureRow
                                icon={<CreditCard className="h-6 w-6 text-primary" />}
                                title="Global Online Acceptance"
                                description="Your NMB Visa and Mastercards are enabled for secure online purchases at millions of merchants worldwide."
                            />
                            <FeatureRow
                                icon={<Smartphone className="h-6 w-6 text-primary" />}
                                title="Verified Security"
                                description="Protected by Verified by Visa and Mastercard SecureCode with OTP authentication for every transaction."
                            />
                            <FeatureRow
                                icon={<BellRing className="h-6 w-6 text-primary" />}
                                title="Instant Transaction Alerts"
                                description="Receive real-time SMS notifications for all your approved online payments and card activities."
                            />
                        </div>
                    </div>

                    {/* Right Side: Visuals (Fanned Cards) */}
                    <div ref={containerRef} className="relative h-[500px] w-full flex items-center justify-center">
                        {/* Background Organic Blob */}
                        <div className={`absolute inset-0 flex items-center justify-center z-0 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                           <div className="w-[380px] h-[380px] bg-[#FDF6E9] rounded-[3.5rem] -rotate-12 transform translate-x-8 -translate-y-8"></div>
                        </div>

                        {/* Cards Container - Adjusted for "Fan Left" look */}
                        <div className="relative w-72 h-48 perspective-1000 z-10">

                            {/* Card 3: NMB Visa (Teal/Slate) - Bottom */}
                            <div className={`absolute top-0 right-0 w-full h-full transform transition-all duration-700 ease-out origin-bottom-left ${
                                isVisible 
                                    ? 'opacity-100 rotate-[15deg] translate-x-24 -translate-y-36 hover:-translate-y-40' 
                                    : 'opacity-0 translate-y-48 rotate-0'
                            }`}>
                                <NMBCard
                                    variant="teal"
                                    type="VISA Classic"
                                    number="4000 1234 5678 9010"
                                    expiry="12/28"
                                />
                            </div>

                            {/* Card 2: NMB Visa Gold - Middle */}
                            {/* Fixed: Medium rotation (-12deg) and medium translation */}
                            <div className={`absolute top-0 right-0 w-full h-full transform transition-all duration-700 ease-out delay-150 origin-bottom-left shadow-xl ${
                                isVisible 
                                    ? 'opacity-100 -rotate-[12deg] translate-x-6 -translate-y-8 hover:-translate-y-10' 
                                    : 'opacity-0 translate-y-48 rotate-0'
                            }`}>
                                <NMBCard
                                    variant="gold"
                                    type="VISA Gold"
                                    number="4111 1111 1111 1111"
                                    expiry="09/26"
                                />
                            </div>

                            {/* Card 1: NMB Platinum - Top (The "Front" Card) */}
                            {/* Fixed: Most rotation (-24deg) to create the heavy tilt, no translation so it anchors the stack */}
                            <div className={`absolute top-0 right-0 w-full h-full transform transition-all duration-700 ease-out delay-300 shadow-2xl origin-bottom-left ${
                                isVisible 
                                    ? 'opacity-100 -rotate-[24deg] hover:-translate-y-2' 
                                    : 'opacity-0 translate-y-48 rotate-0'
                            }`}>
                                <NMBCard
                                    variant="black"
                                    type="VISA Platinum"
                                    number="4222 2222 2222 2222"
                                    expiry="06/30"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function FeatureRow({ icon, title, description }: Readonly<{ icon: React.ReactNode, title: string, description: string }>) {
    return (
        <div className="flex gap-4 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100 cursor-default">
            <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-xl bg-gray-100 group-hover:bg-white">
                {icon}
            </div>
            <div>
                <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
            </div>
        </div>
    );
}

// Simulated NMB Card Component
function NMBCard({ variant, type, number, expiry }: Readonly<{ variant: 'teal' | 'dark' | 'black' | 'gold', type: string, number: string, expiry: string }>) {

    const bgStyles = {
        teal: 'bg-slate-800', // Dark Slate/Teal for Visa
        dark: 'bg-[#4A235A]', // Deep Purple for Mastercard
        black: 'bg-black', // Premium Black
        gold: 'bg-gradient-to-br from-yellow-600 via-yellow-500 to-yellow-700', // Gold
    };

    return (
        <div className={`${bgStyles[variant]} w-full h-full rounded-2xl p-6 text-white shadow-lg flex flex-col justify-between relative overflow-hidden ring-1 ring-white/10`}>
            {/* Decorative Watermark Logo - Large 'NMB' or Shape */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 opacity-10 pointer-events-none flex items-center justify-center">
                <div className="text-[120px] font-black tracking-tighter loading-none">N</div>
            </div>

            {/* Top Row */}
            <div className="flex justify-between items-start z-10">
                <span className="font-medium tracking-wide text-white/90 text-sm">{type}</span>
                <span className="font-bold text-lg italic text-white/80">NMB</span>
            </div>

            {/* Middle: Chip */}
            <div className="flex items-center gap-4 z-10 mt-2">
                <div className="w-10 h-8 bg-yellow-100/20 rounded border border-yellow-200/30 flex items-center justify-center backdrop-blur-sm">
                    <div className="w-8 h-6 border border-yellow-200/30 rounded-sm grid grid-cols-2 gap-[1px]">
                        <div className="bg-yellow-200/20"></div><div className="bg-yellow-200/20"></div>
                        <div className="bg-yellow-200/20"></div><div className="bg-yellow-200/20"></div>
                    </div>
                </div>
                <div className="text-white/60">
                    <CreditCard className="h-6 w-6 rotate-90" />
                </div>
            </div>

            {/* Bottom Row */}
            <div className="z-10 mt-auto">
                <div className="text-lg font-mono tracking-widest mb-3 shadow-black drop-shadow-md">{number}</div>
                <div className="flex justify-between items-end">
                    <div className="text-xs text-white/70">
                        <span className="block text-[9px] uppercase tracking-wider mb-0.5">Valid Thru</span>
                        {expiry}
                    </div>
                    <div className="flex items-center">
                        {/* Brand Logo Circles */}
                        <div className="w-6 h-6 rounded-full bg-red-500/90 mix-blend-screen z-10"></div>
                        <div className="w-6 h-6 rounded-full bg-yellow-500/90 -ml-3 z-0"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
