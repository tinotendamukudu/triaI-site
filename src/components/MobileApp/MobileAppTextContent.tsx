import React from 'react';
import Button from '../buttons/Button';

export default function MobileAppTextContent() {
  return (
    <div className="space-y-8 max-w-xl">
      <div className="space-y-4">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-[#1a1a2e] leading-[1.1]">
          Connect with your bank <span className="text-primary relative inline-block">
            anytime
            <span className="absolute bottom-1 left-0 w-full h-3 bg-primary/10 -z-10 rounded-sm"></span>
          </span>
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed font-medium">
          NMBConnect allows you access to your bank anytime and from anywhere. Access your accounts via App, Web, or USSD (*241#).
        </p>
      </div>

      <div className="bg-surface/50 p-8 rounded-2xl border border-blue-50 relative overflow-hidden group hover:border-blue-100 transition-colors duration-300">
         <div className="absolute top-0 left-0 w-1 h-full bg-primary/20 group-hover:bg-primary transition-colors duration-300"></div>
         <p className="text-gray-700 italic text-lg leading-relaxed relative z-10">
            "Choose your preferred banking lifestyle with NMBConnect. Eliminate paper-based transactions and take full control."
         </p>
         <div className="absolute -bottom-4 -right-4 text-9xl text-primary/5 font-serif select-none z-0">”</div>
      </div>

      <div className="pt-2">
           <Button variant="primary" className="!px-8 !py-4 shadow-lg shadow-primary/20 hover:shadow-primary/30 transform hover:-translate-y-1 transition-all duration-300">
               Learn More
           </Button>
      </div>
    </div>
  );
}
