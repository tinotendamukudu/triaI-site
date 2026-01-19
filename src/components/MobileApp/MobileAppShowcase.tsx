'use client';

import Image from 'next/image';
import Button from '../buttons/Button';
import { CheckCircle2 } from 'lucide-react';

export default function MobileAppShowcase() {
  return (
    <section className="relative bg-white py-20">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
           {/* Phone Container - Centered in its own section */}
           <div className="w-[280px] md:w-[320px] lg:w-[360px] relative transition-transform duration-500 hover:scale-105">    
                {/* Phone Device Mockup */}
                <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl border-4 border-gray-800">
                    <div className="relative bg-white rounded-[2.5rem] overflow-hidden aspect-[9/19.5]">
                        {/* Status Bar Mock */}
                        <div className="absolute top-0 w-full h-8 bg-black/90 z-20 flex justify-between items-center px-6">
                             <div className="text-[10px] text-white font-medium">9:41</div>
                             <div className="flex gap-1.5">
                                 <div className="w-3 h-3 bg-white/20 rounded-full" />
                                 <div className="w-3 h-3 bg-white/20 rounded-full" />
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
           </div>
        </div>
      </div>
    </section>
  );
}
