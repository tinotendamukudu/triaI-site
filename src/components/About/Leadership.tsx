'use client';

import { Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';

const LEADERS = [
    {
        name: "Gerald Gore",
        role: "Chief Executive Officer",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop", // Placeholder
        bio: "Driving NMB's digital transformation strategy."
    },
    {
        name: "Benedict Chichetu",
        role: "Chairman",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2574&auto=format&fit=crop", // Placeholder
        bio: "Leading the board with decades of financial expertise."
    },
    {
        name: "Margret Chipunza",
        role: "Chief Finance Officer",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop", // Placeholder
        bio: "Ensuring financial stability and sustainable growth."
    }
];

export default function Leadership() {
    return (
        <section className="py-24 bg-surface relative overflow-hidden font-sans">
             {/* Background Pattern */}
             <div className="absolute inset-0 opacity-[0.05]" 
                  style={{ backgroundImage: 'radial-gradient(circle at 10px 10px, #1e3a8a 2px, transparent 0)', backgroundSize: '40px 40px' }}>
             </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-primary mb-4">Our Leadership</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Guided by a team of visionary leaders dedicated to steering NMB Bank towards greater heights.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {LEADERS.map((leader, idx) => (
                        <div key={idx} className="group bg-white rounded-3xl p-4 shadow-xl shadow-gray-200 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 transform hover:-translate-y-2">
                            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6">
                                <Image
                                    src={leader.image}
                                    alt={leader.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <p className="text-white/90 text-sm mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">{leader.bio}</p>
                                    <div className="flex gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                                        <button className="p-2 bg-white/20 hover:bg-white text-white hover:text-primary rounded-full backdrop-blur-md transition-colors">
                                            <Linkedin size={18} />
                                        </button>
                                        <button className="p-2 bg-white/20 hover:bg-white text-white hover:text-primary rounded-full backdrop-blur-md transition-colors">
                                            <Twitter size={18} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="text-center">
                                <h3 className="text-xl font-bold text-gray-900">{leader.name}</h3>
                                <p className="text-primary font-medium text-sm mt-1">{leader.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
