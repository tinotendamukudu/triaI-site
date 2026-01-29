'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const HOLDINGS_LINKS = [
    { label: 'About Us', href: '/about' },
    { label: 'Investor Relations', href: '/investor-relations' },
    { label: 'Sustainability', href: '#' },
    { label: 'Media Centre', href: '#' },
    { label: 'Contact', href: '/about#contact-us' },
];

export default function HoldingsNavbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="w-full bg-white font-sans sticky top-0 z-50 border-b border-gray-300/20">
            <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/logo.png"
                            alt="NMB Holdings Logo"
                            width={140}
                            height={45}
                            className="h-12 w-auto object-contain"
                            priority
                        />
                         <div className="hidden md:flex flex-col ml-2 border-l border-gray-300 pl-3">
                            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-semibold leading-tight">Holdings</span>
                            <span className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-semibold leading-tight">Limited</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {HOLDINGS_LINKS.map((link) => (
                            <Link 
                                key={link.label}
                                href={link.href} 
                                className="text-sm font-medium text-gray-400 hover:text-primary transition-colors relative group"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full"></span>
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop Action - REMOVED */}
                    {/* Mobile Menu Toggle */}
                     <button 
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 text-gray-400 hover:text-primary"
                    >
                        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-xl lg:hidden animate-in slide-in-from-top-2">
                    <div className="flex flex-col p-4 space-y-4">
                        {HOLDINGS_LINKS.map((link) => (
                            <Link 
                                key={link.label}
                                href={link.href}
                                className="text-base font-medium text-gray-700 py-2 border-b border-gray-50"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
