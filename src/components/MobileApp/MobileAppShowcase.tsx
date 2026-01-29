'use client';

import Image from 'next/image';
import MobileAppTextContent from './MobileAppTextContent';

export default function MobileAppShowcase() {
  return (
    <section className="relative bg-white py-16 lg:py-24 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

           {/* Left Side: Devices Image */}
           <div className="order-last lg:order-first flex justify-center lg:justify-start w-full">
             <Image 
               src="/NMB-Devices.webp"
               alt="NMB Connect App on Devices"
               width={800}
               height={600}
               className="w-full h-auto object-contain hover:scale-105 transition-transform duration-700"
               priority
             />
           </div>
           
           {/* Right Side: Improved Text Content */}
           <div className="flex justify-center lg:justify-start lg:pl-4">
             <MobileAppTextContent />
           </div>
        </div>
      </div>
    </section>
  );
}

