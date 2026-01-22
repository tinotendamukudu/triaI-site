'use client';

import { useState, useEffect } from 'react';
import { 
    Search, 
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
    MessageSquare
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Button from '../buttons/Button';

// Define the structure for navigation items
interface NavItemData {
    id: string;
    label: string;
    icon: React.ReactNode;
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
        { id: 'internet-banking', label: 'Internet Banking', icon: <Laptop className="h-4 w-4" /> },
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
    personal: 'Personal',
    business: 'Business',
    digital: 'Digital Banking',
    investor: 'Investor Relations',
    about: 'About NMB'
};

export default function Navbar() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState<string>('personal');

  useEffect(() => {
    if (pathname === '/business') {
        setActiveTab('business');
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
                                const className = `pb-7 pt-1 px-1 font-medium text-sm border-b-[3px] transition-colors ${
                                    isActive
                                    ? 'border-primary text-primary' 
                                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-900'
                                }`;

                                if (tabKey === 'personal' || tabKey === 'business') {
                                    return (
                                        <Link 
                                            key={tabKey}
                                            href={tabKey === 'business' ? '/business' : '/'}
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
                        <button className="flex items-center text-gray-600 font-medium gap-1 text-sm">
                            Menu <ChevronDown className="h-4 w-4" />
                        </button>
                        <Link href="#" className="flex items-center gap-2 text-gray-900 font-medium">
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
                            <NavItem key={item.id} icon={item.icon} label={item.label} />
                        ))}
                    </nav>

                    {/* Action Buttons */}
                    <div className="flex items-center space-x-4">
                        <Button variant="primary" className="!px-6 !py-2 text-sm shadow-sm">
                            Get the app
                        </Button>
                    </div>
                </div>
             </div>
        </div>
    </div>
  );
}

function NavItem({ icon, label }: Readonly<{ icon: React.ReactNode; label: string }>) {
    return (
        <Link href="#" className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors">
            <span className="text-gray-500">{icon}</span>
            <span className="font-medium text-sm">{label}</span>
        </Link>
    );
}
