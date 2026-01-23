'use client';

import { Award, Users, Target } from 'lucide-react';

export default function AboutHero() {
    return (
        <div className="relative bg-surface font-sans overflow-hidden py-20 lg:py-28">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-2/3 h-full bg-blue-50/50 skew-x-12 transform origin-top-right"></div>
                <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-secondary/5 rounded-tr-[100px]"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 bg-blue-100 text-primary px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                        <Users size={16} />
                        <span>About NMB Bank</span>
                    </div>
                    <h1 className="text-4xl lg:text-7xl font-extrabold text-primary tracking-tight leading-tight mb-6">
                        Excellence <br/>
                        <span className="text-secondary relative">
                            Personified.
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5 L 100 0 Q 50 5 0 0 Z" fill="currentColor" />
                            </svg>
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        For over 30 years, we have been more than just a bank. We are a partner in your growth, a guardian of your wealth, and a pioneer in Zimbabwe's financial landscape.
                    </p>
                </div>

                {/* Stats / Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: Award, label: "Experience", value: "30+ Years", desc: "Of Banking Excellence" },
                        { icon: Users, label: "Customers", value: "500k+", desc: "Trust Us Daily" },
                        { icon: Target, label: "Innovation", value: "#1", desc: "Digital First Bank" },
                    ].map((stat, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-2xl shadow-xl shadow-blue-900/5 border border-blue-50 transition-colors group">
                            <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors mb-4">
                                <stat.icon size={24} />
                            </div>
                            <h3 className="text-4xl font-black text-gray-900 mb-2">{stat.value}</h3>
                            <p className="font-bold text-primary mb-1">{stat.label}</p>
                            <p className="text-sm text-gray-500">{stat.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
