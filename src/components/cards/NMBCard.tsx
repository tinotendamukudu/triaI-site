'use client';
import { Nfc, Key } from 'lucide-react';

interface NMBCardProps {
    title: string;
    subtitle: string;
    description: string;
    isActive: boolean;
    onClick: () => void;
    type: 'classic' | 'gold' | 'business' | 'platinum';
}

export default function NMBCard({ title, subtitle, description, isActive, onClick, type }: Readonly<NMBCardProps>) {

    // Define styles for each card variation
    const getCardStyles = (type: string) => {
        switch(type) {
            case 'gold':
                return {
                    background: 'radial-gradient(circle at 100% 0%, #FDB931 0%, #906F21 40%, #D1B464 100%)',
                    accentColor: '#FFFFFF',
                    textColor: 'text-white/90', // Gold cards sometimes have dark text, but let's stick to white for consistency with NMB style
                    borderColor: 'border-yellow-200/30'
                };
            case 'business':
                return {
                    background: 'radial-gradient(circle at 100% 0%, #0f172a 0%, #1e3a8a 50%, #000000 100%)',
                    accentColor: '#3b82f6',
                    textColor: 'text-white/90',
                    borderColor: 'border-blue-500/20'
                };
            case 'platinum':
                return {
                    background: 'radial-gradient(circle at 100% 0%, #E5E4E2 0%, #767676 50%, #000000 100%)',
                     accentColor: '#C0C0C0',
                     textColor: 'text-white/90',
                     borderColor: 'border-white/20'
                };
            case 'classic':
            default:
                return {
                    background: 'radial-gradient(circle at 100% 0%, #D4AF37 0%, #8B6914 20%, #1A3C40 50%, #0D1F22 100%)',
                    accentColor: '#FFD700',
                    textColor: 'text-white/90',
                    borderColor: 'border-white/10'
                };
        }
    };

    const styles = getCardStyles(type);

    return (
        <div
            onClick={onClick}
            className={`relative rounded-[1.5rem] overflow-hidden cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] shadow-2xl
            ${isActive ? 'md:flex-[20] flex-[3]' : 'md:flex-[3] flex-[1]'}
            group border ${styles.borderColor}
            `}
            style={{
                background: styles.background
            }}
        >
            {/* Abstract Waves/Curves Overlay to mimic the card texture */}
            <div className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none">
                 <div className="absolute top-[-20%] right-[-20%] w-[100%] h-[150%] border-[2px] border-white/10 rounded-[100%] -rotate-45 blur-sm"></div>
                 <div className="absolute top-[-10%] right-[-10%] w-[90%] h-[140%] border-[1px] border-white/20 rounded-[100%] -rotate-45 blur-[1px]"></div>
                 <div className="absolute top-[0%] right-[0%] w-[80%] h-[120%] border-[1px] border-white/30 rounded-[100%] -rotate-45"></div>
                 
                 {/* Light streaks */}
                 <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,215,0,0.2),transparent_60%)]"></div>
            </div>

            {/* Card Content Wrapper */}
            <div className="relative h-full w-full p-6 md:p-8 flex flex-col justify-between z-10 font-sans">
                
                {/* Top Header: Logo & Type */}
                <div className={`flex items-center gap-4 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0 md:opacity-0'}`}>
                    {/* NMB Logo Simulation */}
                    <div className="flex items-center gap-1">
                        <span className="font-black text-3xl italic tracking-tighter text-white drop-shadow-md">NMB</span>
                        <div className="text-[#FFD700]">
                            <Key size={24} className="rotate-45 stroke-[2.5]" />
                        </div>
                    </div>
                    {/* Card Title */}
                    <div className="text-white/90 font-light text-3xl tracking-wide uppercase drop-shadow-md">{title.replace('NMB ', '')}</div>
                </div>

                {/* Middle: Chip & Contactless */}
                <div className={`mt-8 transition-all duration-500 delay-100 ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                    <div className="flex items-center gap-6">
                        {/* EMV Chip Simulation (Gold) */}
                        <div className="w-14 h-11 bg-gradient-to-br from-[#FFD700] to-[#B8860B] rounded-lg border border-[#8B4513]/30 relative overflow-hidden shadow-md">
                            <div className="absolute inset-0 border-[0.5px] border-black/20 rounded-lg"></div>
                            {/* Chip contact lines */}
                            <div className="absolute top-1/2 left-0 w-full h-[0.5px] bg-black/20"></div>
                            <div className="absolute top-0 left-1/3 h-full w-[0.5px] bg-black/20"></div>
                            <div className="absolute top-0 right-1/3 h-full w-[0.5px] bg-black/20"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-4 border-[0.5px] border-black/20 rounded-sm"></div>
                        </div>
                        {/* Contactless Icon */}
                        <Nfc className="text-white w-10 h-10 -rotate-90 opacity-90 drop-shadow-sm" strokeWidth={2.5} />
                    </div>
                </div>

                {/* Bottom Section */}
                <div className={`mt-auto transition-all duration-500 delay-200 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                   
                   {/* Dates Row */}
                   <div className="flex gap-8 mb-4">
                        <div className="text-[9px] text-white/90 leading-tight font-bold uppercase tracking-wider">
                            <div>Valid</div>
                            <div>From</div>
                        </div>
                        <div className="text-[9px] text-white/90 leading-tight font-bold uppercase tracking-wider">
                            <div>Expires</div>
                            <div>End</div>
                        </div>
                   </div>

                   <div className="flex justify-between items-end w-full">
                        {/* Left: ZimSwitch Logo */}
                        <div className="flex flex-col gap-1">
                            <div className="bg-[#FFFF00] text-black px-2 py-1 rounded-[2px] font-bold text-[10px] tracking-tight inline-block w-fit shadow-lg border border-black/10">
                                <div className="leading-none text-center">ZIM</div>
                                <div className="leading-none text-center tracking-widest">SWITCH</div>
                            </div>
                        </div>

                        {/* Center: Valid Text (Desktop only mostly) */}
                        <div className="hidden md:block text-white/90 text-[10px] uppercase font-bold tracking-wide mt-auto mb-1 text-center w-full absolute left-0">
                            Valid in Zimbabwe Only
                        </div>

                        {/* Right: DEBIT */}
                        <div className="text-white font-bold text-xl tracking-wider drop-shadow-sm">{subtitle}</div>
                   </div>

                   {/* Description Overlay (Hover/Active extra info) */}
                   <div className="mt-6 pt-4 border-t border-white/10 text-xs text-white/70 font-light max-w-md">
                        {description}
                   </div>
                </div>
            </div>

            {/* Inactive Vertical Title */}
            <div 
            className={`absolute inset-0 bg-[#0D1F22] flex items-center justify-center transition-opacity duration-300 pointer-events-none
                ${!isActive ? 'opacity-100' : 'opacity-0'}
            `}
            >
                {/* Vertical Strip for inactive state */}
                 <div className="h-full w-full absolute inset-0 bg-gradient-to-b from-[#1A3C40] to-[#0D1F22]"></div>
                <span className="rotate-[-90deg] text-white/50 font-bold text-2xl tracking-[0.2em] whitespace-nowrap uppercase z-10 relative">
                {title}
                </span>
            </div>
        </div>
    );
}
