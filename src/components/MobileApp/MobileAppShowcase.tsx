'use client';

import MobileAppTextContent from './MobileAppTextContent';
import MobileAppPhone from './MobileAppPhone';

export default function MobileAppShowcase() {
  return (
    <section className="relative bg-white py-16 lg:py-24 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

           {/* Left Side: Phone Component */}
           <div className="order-last lg:order-first flex justify-center lg:justify-start">
             <MobileAppPhone />
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

