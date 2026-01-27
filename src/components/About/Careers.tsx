'use client';

import Button from '../buttons/Button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Careers() {
    return (
        <section className="py-24 bg-primary text-white relative overflow-hidden font-sans">
             {/* Decorative Background */}
             <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-800/20 skew-x-12 transform origin-bottom-right"></div>
             <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-secondary/10 rounded-tr-full"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1">
                        <div className="inline-block px-4 py-1 bg-white/10 rounded-full text-secondary font-bold text-sm mb-6 uppercase tracking-wider">
                            Join Our Team
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
                            Build a career that <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-white">
                                makes a difference.
                            </span>
                        </h2>
                        <p className="text-blue-100 text-lg mb-8 leading-relaxed max-w-xl">
                            At NMB Bank, we don't just offer jobs; we offer pathways to excellence. Join a team of innovators, problem-solvers, and leaders who are shaping the future of banking.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <Button variant="primary" className="!bg-secondary !text-primary hover:!bg-white hover:!text-primary !border-none !px-8 w-full sm:w-auto flex items-center justify-center">
                                View Openings
                            </Button>
                            <Button variant="outline" className="!border-white !text-white hover:!bg-white/10 group !px-8 w-full sm:w-auto flex items-center justify-center whitespace-nowrap">
                                Life at NMB <ArrowRight className="ml-2 w-4 h-4 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </div>

                    <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {[
                            { title: "Growth", desc: "Continuous learning and professional development." },
                            { title: "Innovation", desc: "Work with cutting-edge fintech solutions." },
                            { title: "Impact", desc: "Contribute to Zimbabwe's economic growth." },
                            { title: "Wellness", desc: "Comprehensive health and wellness programs." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                                <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center text-secondary mb-4">
                                    <CheckCircle2 size={20} />
                                </div>
                                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                                <p className="text-blue-200 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
