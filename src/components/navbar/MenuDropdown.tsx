'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface MenuItem {
    title: string;
    items: { label: string; href: string; external?: boolean }[];
}

export const MENU_ITEMS: MenuItem[] = [
    {
        title: "NMB Properties",
        items: [{ label: "Visit NMB Properties Site", href: "#", external: true }]
    },
    {
        title: "X Plug Solutions",
        items: [{ label: "Visit X Plug Solutions Site", href: "#", external: true }]
    },
    {
        title: "ESG",
        items: [
            { label: "Our focus", href: "#" },
            { label: "Aim", href: "#" },
            { label: "ESG Highlights", href: "#" }
        ]
    },
    {
        title: "Help Centre",
        items: [{ label: "Visit Help Centre", href: "#", external: true }]
    },
    {
        title: "Business Conditions",
        items: [{ label: "Current Business Conditions", href: "#" }]
    },
    {
        title: "Updates",
        items: [
            { label: "Notices", href: "#" },
            { label: "RBZ Notices", href: "#" }
        ]
    },
    {
        title: "News",
        items: [{ label: "Latest News", href: "#" }]
    }
];

export default function MenuDropdown() {
    return (
        <div className="w-[700px] bg-white rounded-2xl shadow-[0_10px_40px_-5px_rgba(0,0,0,0.15)] border border-gray-100 p-8 z-[60] overflow-hidden">
             <div className="grid grid-cols-3 gap-y-8 gap-x-6">
                {MENU_ITEMS.map((section, idx) => (
                    <div key={idx} className="space-y-3">
                        <h3 className="font-bold text-primary text-xs uppercase tracking-widest border-b border-gray-100 pb-2 mb-2">{section.title}</h3>
                        <ul className="space-y-2">
                            {section.items.map((item, itemIdx) => (
                                <li key={itemIdx}>
                                    <Link 
                                        href={item.href} 
                                        className="text-gray-600 hover:text-secondary text-sm flex items-center gap-1.5 group transition-colors font-medium"
                                    >
                                        {item.label}
                                        {item.external && <ArrowUpRight className="h-3 w-3 text-gray-400 group-hover:text-secondary" />}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
             </div>
             {/* Footer area if needed */}
             <div className="mt-8 pt-6 border-t border-gray-50 flex justify-between items-center text-xs text-gray-400">
                <span>© NMB Bank Limited</span>
                <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
             </div>
        </div>
    );
}
