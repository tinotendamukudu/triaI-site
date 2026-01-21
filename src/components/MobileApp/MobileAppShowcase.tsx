'use client';

import MobileAppTextContent from './MobileAppTextContent';
import MobileAppPhone from './MobileAppPhone';

export default function MobileAppShowcase() {
  return (
    <section className="relative bg-white py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
           
           {/* Left Side: Improved Text Content */}
           <div className="flex justify-center lg:justify-start">
             <MobileAppTextContent />
           </div>

           {/* Right Side: Phone Component */}
           <div className="flex justify-center lg:justify-end">
             <MobileAppPhone />
           </div>

        </div>
      </div>
    </section>
  );
}

