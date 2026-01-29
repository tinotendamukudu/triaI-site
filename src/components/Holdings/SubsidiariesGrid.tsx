'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const SUBSIDIARIES = [
    {
        id: 'bank',
        name: 'NMB Bank',
        description: 'Award-winning banking excellence for personal, business, and corporate clients.',
        image: 'https://images.unsplash.com/photo-1601597111158-2fceff2926d6?q=80&w=1000&auto=format&fit=crop', // Modern banking hall/digital abstract
        href: '/banking-for-me',
        status: 'Active',
        accent: 'bg-[#D4AF37]', // Gold
        hoverColor: 'group-hover:text-[#D4AF37]'
    },
    {
        id: 'xplug',
        name: 'Xplug',
        description: 'Pioneering digital transformation and fintech innovation.',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop', // Tech/Code
        href: 'https://xplug.co.zw/',
        status: 'Active',
        accent: 'bg-[hsl(138,60%,30%)]',
        hoverColor: 'group-hover:text-[hsl(138,60%,45%)]'
    },
    {
        id: 'properties',
        name: 'NMB Properties',
        description: 'Sustainable real estate development and premium property management.',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop', // Modern architecture
        href: 'https://nmbproperties.co.zw/',
        status: 'Active',
        accent: 'bg-[#002D59]', // Blue
        hoverColor: 'group-hover:text-[#002D59]'
    }
];

export default function SubsidiariesGrid() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-[95%] mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <span className="text-[#D4AF37] font-bold tracking-widest text-sm uppercase mb-2 block">Our Structure</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#002D59]">A Diversified Portfolio</h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-auto lg:h-[500px]">
                    {SUBSIDIARIES.map((item) => (
                        <Link 
                            href={item.href} 
                            key={item.id}
                            target={item.href.startsWith('http') ? '_blank' : undefined}
                            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className={`group relative overflow-hidden rounded-2xl cursor-pointer ${item.href === '#' ? 'cursor-default' : ''}`}
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0 w-full h-full">
                                <Image 
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#001529] via-[#001529]/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                            </div>

                            {/* Content */}
                            <div className="relative h-full flex flex-col justify-end p-8 text-white">
                                {/* Top Badge (Status or Icon) */}
                                <div className="absolute top-6 right-6">
                                    <div className={`p-3 rounded-full backdrop-blur-md bg-white/10 border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0`}>
                                        <ArrowUpRight className="w-5 h-5 text-white" />
                                    </div>
                                </div>

                                <div className="transform transition-transform duration-300 translate-y-4 group-hover:translate-y-0">
                                    <div className={`w-12 h-1 mb-6 ${item.accent} rounded-full`} />
                                    
                                    <h3 className={`text-2xl font-bold mb-3 leading-tight ${item.hoverColor} transition-colors`}>
                                        {item.name}
                                    </h3>
                                    
                                    <p className="text-gray-300 text-sm leading-relaxed mb-6 opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-300 delay-75">
                                        {item.description}
                                    </p>

                                    <div className="flex items-center gap-2 text-sm font-bold tracking-wide uppercase">
                                        <span>{item.status === 'Active' ? 'Explore Subsidiary' : 'Coming Soon'}</span>
                                        {item.status === 'Active' && <ArrowUpRight className="w-4 h-4" />}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
