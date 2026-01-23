'use client';

import Button from '../buttons/Button';
import MobileAppPhone from '../MobileApp/MobileAppPhone';

export default function HeroDigitalMain() {
  return (
    <div className="relative bg-surface font-sans overflow-hidden">
      {/* Background Texture & Gradients */}
      <div className="absolute inset-0 z-0">
          {/* Subtle Grid Pattern for Texture */}
          <div className="absolute inset-0 opacity-[0.03]" 
               style={{ backgroundImage: 'radial-gradient(#1e3a8a 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
          </div>
          
          {/* Soft Gradient Blobs for Smoothness */}
          <div className="absolute -top-[10%] -right-[5%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[100px]" />
          <div className="absolute top-[20%] -left-[10%] w-[30%] h-[30%] bg-blue-300/10 rounded-full blur-[80px]" />
          <div className="absolute -bottom-[10%] right-[20%] w-[35%] h-[35%] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 lg:pt-16 lg:pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Left Column: Text */}
          <div className="flex-1 w-full max-w-2xl lg:max-w-none space-y-10 lg:pl-12">
            
            {/* Main Static Message */}
            <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl font-extrabold text-primary leading-[1.3]">
                  Banking at your <br/>
                  <span className="text-secondary relative inline-block">
                    fingertips
                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none">
                        <path d="M0 5 Q 50 10 100 5 L 100 0 Q 50 5 0 0 Z" fill="currentColor" />
                    </svg>
                  </span>
                </h1>
                <p className="text-xl text-gray-600 font-medium max-w-lg">
                  NMBConnect gives you the freedom to bank on your own terms. Whether you prefer an app, a web browser, or USSD, we have you covered.
                </p>
                <div className="flex gap-4 pt-2">
                     <Button variant="primary">
                        Get Started
                    </Button>
                    <Button variant="outline">
                        Learn More
                    </Button>
                </div>
            </div>
          </div>
          {/* Right Column: Phone Component */}
          <div className="flex-1 w-full relative perspective-1000 flex justify-center items-center">
             {/* Main Circle Background */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50 rounded-full opacity-60 -z-10 blur-3xl"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-white rounded-full opacity-40 -z-10"></div>
             
             {/* Main Phone Visual */}
             <div className="relative z-10 transform scale-90 sm:scale-95 lg:scale-100 transition-transform duration-500 origin-center">
                <MobileAppPhone />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
