'use client';

import { Eye, Target, Heart } from 'lucide-react';
import Image from 'next/image';

export default function WhoWeAre() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Visual Side */}
                    <div className="flex-1 w-full relative">
                        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
                             <Image 
                                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop" 
                                alt="NMB Team Meeting" 
                                width={800} 
                                height={600} 
                                className="object-cover w-full h-[500px]"
                             />
                             <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
                             <div className="absolute bottom-10 left-10 right-10 text-white">
                                 <p className="font-serif italic text-2xl border-l-4 border-secondary pl-4">
                                     "To stay relevant, we must not only adapt to change but lead it."
                                 </p>
                             </div>
                        </div>
                        {/* Decorative blob */}
                        <div className="absolute -z-10 top-10 -left-10 w-full h-full bg-blue-100 rounded-[3rem] -rotate-3"></div>
                    </div>

                    {/* Content Side */}
                    <div className="flex-1 space-y-12">
                        <div>
                            <h2 className="text-3xl font-bold text-primary mb-4">Who We Are</h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                NMB Bank Limited is a registered commercial bank in Zimbabwe, dedicated to providing premium financial services to individuals, businesses, and corporates. We are driven by a culture of excellence and a commitment to innovation.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="flex gap-6">
                                <div className="flex-shrink-0 w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary">
                                    <Eye size={28} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Our Vision</h3>
                                    <p className="text-gray-600">To be the preferred provider of financial solutions in Zimbabwe and beyond.</p>
                                </div>
                            </div>
                            
                            <div className="flex gap-6">
                                <div className="flex-shrink-0 w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary">
                                    <Target size={28} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
                                    <p className="text-gray-600">We enable our clients to achieve their financial goals through our service excellence, innovation, and ethical conduct.</p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="flex-shrink-0 w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary">
                                    <Heart size={28} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Our Values</h3>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {['Integrity', 'Excellence', 'Innovation', 'Customer Focus', 'Teamwork'].map((val) => (
                                            <span key={val} className="px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded-full">
                                                {val}
                                            </span>
                                        ))}
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
