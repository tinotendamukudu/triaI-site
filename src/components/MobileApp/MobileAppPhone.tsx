'use client';

import Image from 'next/image';

export default function MobileAppPhone() {
  return (
    <div className="w-[280px] md:w-[300px] lg:w-[320px] relative transition-transform duration-500 hover:scale-[1.02]">    
        {/* Phone Device Mockup */}
        <div className="relative bg-[#1a1a2e] rounded-[3rem] p-3 shadow-2xl border-[6px] border-[#2a2a3e]">
            {/* Side Buttons */}
            <div className="absolute top-24 -right-[10px] w-1 h-12 bg-[#2a2a3e] rounded-r-md"></div>
            <div className="absolute top-24 -left-[10px] w-1 h-8 bg-[#2a2a3e] rounded-l-md"></div>
            <div className="absolute top-36 -left-[10px] w-1 h-12 bg-[#2a2a3e] rounded-l-md"></div>

            <div className="relative bg-white rounded-[2.5rem] overflow-hidden aspect-[9/19.5]">
                {/* Status Bar Mock */}
                <div className="absolute top-0 w-full h-10 bg-black/40 backdrop-blur-sm z-20 flex justify-between items-center px-6">
                        <div className="text-[10px] text-white font-medium tracking-wide">9:41</div>
                        <div className="flex gap-1.5 opacity-80">
                            <div className="w-1.5 h-1.5 bg-white rounded-full" />
                            <div className="w-1.5 h-1.5 bg-white rounded-full" />
                            <div className="w-4 h-1.5 bg-white rounded-full" />
                        </div>
                </div>

                    {/* App Screen Image */}
                <Image
                    src="/homepage.jpg"
                    alt="NMB Banking App Interface"
                    fill
                    className="object-cover"
                />                      
            </div>
        </div>
        
        {/* Decorative shadow/glow */}
        <div className="absolute -inset-4 bg-primary/20 blur-3xl z-[-1] rounded-full opacity-50"></div>
    </div>
  );
}
