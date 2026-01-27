'use client';

import { useState, useEffect } from 'react';
import {
    ChevronDown,
    ShieldCheck,
    Lock,
    Wallet,
    CreditCard,
    Banknote,
    Briefcase,
    Building2,
    Store,
    Smartphone,
    Laptop,
    Phone,
    FileText,
    BookOpen,
    ArrowRightLeft,
    TrendingUp,
    Users,
    Award,
    MessageSquare,
    Calculator,
    X
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Button from '../buttons/Button';
import MenuDropdown from './MenuDropdown';

// Define the structure for menu items
interface MenuItem {
    title: string;
    items: { label: string; href: string }[];
}

// Deleted MENU_ITEMS constant as it is now in MenuDropdown component

// Define the structure for navigation items
interface NavItemData {
    id: string;
    label: string;
    icon: React.ReactNode;
    href?: string;
}

// Configuration for different tabs
const NAV_CONFIG: Record<string, NavItemData[]> = {
    personal: [
        { id: 'accounts', label: 'Accounts', icon: <Wallet className="h-4 w-4" /> },
        { id: 'cards', label: 'Cards', icon: <CreditCard className="h-4 w-4" /> },
        { id: 'loans', label: 'Loans', icon: <Banknote className="h-4 w-4" /> },
        { id: 'insurance', label: 'Insurance', icon: <ShieldCheck className="h-4 w-4" /> },
    ],
    business: [
        { id: 'sme-banking', label: 'SME Banking', icon: <Briefcase className="h-4 w-4" /> },
        { id: 'corporate-solutions', label: 'Corporate Solutions', icon: <Building2 className="h-4 w-4" /> },
        { id: 'pos-merchant', label: 'POS & Merchant Services', icon: <Store className="h-4 w-4" /> },
    ],
    digital: [
        { id: 'nmbconnect-app', label: 'NMBConnect App', icon: <Smartphone className="h-4 w-4" /> },
        { id: 'internet-banking', label: 'Internet Banking', icon: <Laptop className="h-4 w-4" />, href: 'https://www.nmbconnectonline.co.zw/nmbconnectonline/' },
        { id: 'ussd', label: 'USSD', icon: <Phone className="h-4 w-4" /> },
    ],
    investor: [
        { id: 'current-reports', label: 'Current Reports', icon: <FileText className="h-4 w-4" /> },
        { id: 'annual-reports', label: 'Annual Reports', icon: <BookOpen className="h-4 w-4" /> },
        { id: 'exchange-rates', label: 'Exchange Rates', icon: <ArrowRightLeft className="h-4 w-4" /> },
        { id: 'stocks-trade', label: 'Stocks and Trade (Real Time)', icon: <TrendingUp className="h-4 w-4" /> },
    ],
    about: [
        { id: 'who-we-are', label: 'Who We Are', icon: <Users className="h-4 w-4" /> },
        { id: 'leadership', label: 'Leadership', icon: <Award className="h-4 w-4" /> },
        { id: 'careers', label: 'Careers', icon: <Briefcase className="h-4 w-4" /> },
        { id: 'contact-us', label: 'Contact Us', icon: <MessageSquare className="h-4 w-4" /> },
    ]
};

const TAB_LABELS: Record<string, string> = {
    personal: 'Banking for me',
    business: 'Business Banking',
    digital: 'Digital Banking',
    investor: 'Investor Relations',
    about: 'About NMB'
};

export default function Navbar() {
    const pathname = usePathname();
    const [activeTab, setActiveTab] = useState<string>('personal');
    const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

    useEffect(() => {
        if (pathname === '/business') {
            setActiveTab('business');
        } else if (pathname === '/digital-banking') {
            setActiveTab('digital');
        } else if (pathname === '/investor-relations') {
            setActiveTab('investor');
        } else if (pathname === '/about') {
            setActiveTab('about');
        } else if (pathname === '/calculator') {
            setActiveTab('calculator');
        } else if (pathname === '/') {
            setActiveTab('personal');
        }
    }, [pathname]);

    return (
        <div className="w-full bg-white font-sans sticky top-0 z-50">
            {/* Top Bar */}
            <div className="border-b border-gray-200">
                <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Left: Logo and Segments */}
                        <div className="flex items-center gap-8">
                            {/* Logo */}
                            <Link href="/" className="flex items-center gap-2 group">
                                <Image
                                    src="/logo.png"
                                    alt="NMB Logo"
                                    width={120}
                                    height={40}
                                    className="h-12 w-auto object-contain"
                                    priority
                                />
                            </Link>

                            {/* Tabs */}
                            <div className="hidden lg:flex h-20 items-end space-x-8 pb-0">
                                {Object.keys(NAV_CONFIG).map((tabKey) => {
                                    const isActive = activeTab === tabKey;
                                    const className = `pb-7 pt-1 px-1 font-medium text-sm border-b-[3px] transition-colors ${isActive
                                        ? 'border-primary text-primary'
                                        : 'border-transparent text-gray-400 hover:border-gray-300 hover:text-gray-900'
                                        }`;

                                    if (['personal', 'business', 'digital', 'investor', 'about'].includes(tabKey)) {
                                        let href = '/';
                                        if (tabKey === 'business') href = '/business';
                                        else if (tabKey === 'digital') href = '/digital-banking';
                                        else if (tabKey === 'investor') href = '/investor-relations';
                                        else if (tabKey === 'about') href = '/about';

                                        return (
                                            <Link
                                                key={tabKey}
                                                href={href}
                                                onClick={() => setActiveTab(tabKey)}
                                                className={className}
                                            >
                                                {TAB_LABELS[tabKey] || tabKey.charAt(0).toUpperCase() + tabKey.slice(1)}
                                            </Link>
                                        );
                                    }

                                    return (
                                        <button
                                            key={tabKey}
                                            onClick={() => setActiveTab(tabKey)}
                                            className={className}
                                        >
                                            {TAB_LABELS[tabKey] || tabKey.charAt(0).toUpperCase() + tabKey.slice(1)}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Right: Menu & Online Banking */}
                        <div className="flex items-center space-x-8">
                            {/* Menu with Dropdown */}
                            <div className="relative group h-full flex items-center">
                                <button className="flex items-center text-gray-600 font-medium gap-1 text-sm py-4 outline-none group-hover:text-primary transition-colors">
                                    More <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                                </button>
                                {/* Dropdown Container with Hover Bridge */}
                                <div className="absolute top-14 right-0 pt-4 invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out z-[100]">
                                    <MenuDropdown />
                                </div>
                            </div>

                            <Link href="https://www.nmbconnectonline.co.zw/nmbconnectonline/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-900 font-medium hover:text-primary transition-colors">
                                <Lock className="h-5 w-5 text-primary" />
                                <div className="flex flex-col leading-none">
                                    <span className="text-sm font-semibold">Online Banking</span>
                                    <span className="text-[10px] text-gray-500 uppercase tracking-wide">Sign in</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar - Navigation Items */}
            <div className="bg-gray-50 border-b border-gray-200">
                <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-2">
                        {/* Dynamic Navigation Links based on activeTab */}
                        <nav className="hidden lg:flex space-x-12">
                            {NAV_CONFIG[activeTab]?.map((item) => (
                                <NavItem key={item.id} icon={item.icon} label={item.label} href={item.href} />
                            ))}
                        </nav>

                        {/* Action Buttons */}
                        <div className="flex items-center space-x-6">
                            <Link href="/calculator" className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors font-medium text-sm">
                                <Calculator className="h-4 w-4" />
                                Calculator
                            </Link>
                            <Button 
                                variant="primary" 
                                className="!px-6 !py-2 text-sm shadow-sm"
                                onClick={() => setIsDownloadModalOpen(true)}
                            >
                                Download app
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Download App Modal */}
            {isDownloadModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={() => setIsDownloadModalOpen(false)}>
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 relative animate-in fade-in zoom-in duration-200" onClick={(e) => e.stopPropagation()}>
                        <button 
                            onClick={() => setIsDownloadModalOpen(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-1 bg-gray-100 rounded-full transition-colors"
                        >
                            <X className="h-5 w-5" />
                        </button>
                        
                        <div className="text-center mb-8 pt-2">
                             <h3 className="text-xl font-bold text-gray-900 mb-2">Download NMBConnect</h3>
                             <p className="text-gray-600 text-sm">Choose your platform to get started</p>
                        </div>

                        <div className="space-y-4">
                            <Link href="https://play.google.com/store/search?q=nmb+connect+app&c=apps&hl=en-US" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-4 border border-gray-200 rounded-lg hover:border-primary hover:bg-gray-50 transition-all group">
                                <div className="flex items-center gap-4">
                                     <img 
                                        src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                                        alt="Get it on Google Play" 
                                        className="h-12 w-auto" 
                                     />
                                </div>
                            </Link>

                             <Link href="https://play.google.com/store/search?q=nmb+connect+app&c=apps&hl=en-US" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-4 border border-gray-200 rounded-lg hover:border-primary hover:bg-gray-50 transition-all group">
                                <div className="flex items-center gap-4">
                                     <img 
                                        src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                                        alt="Download on the App Store" 
                                        className="h-12 w-auto" 
                                     />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

function NavItem({ icon, label, href = '#' }: Readonly<{ icon: React.ReactNode; label: string; href?: string }>) {
    return (
        <Link 
            href={href} 
            className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
            {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
            <span className="text-gray-500">{icon}</span>
            <span className="font-medium text-sm">{label}</span>
        </Link>
    );
}
