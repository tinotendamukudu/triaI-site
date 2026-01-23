'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Button from '../buttons/Button';
import { ChevronRight, TrendingUp } from 'lucide-react';

const SLIDES = [
    {
        title: "Financial Excellence",
        description: "Delivering consistent value through strategic growth and prudent management.",
        image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "Transparent Governance",
        description: "Upholding the highest standards of integrity and accountability for our stakeholders.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "Sustainable Impact",
        description: "Investing in a future that benefits our community and shareholders alike.",
        image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=2670&auto=format&fit=crop"
    }
];

export default function InvestorHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative bg-surface font-sans overflow-hidden">
      {/* Background Texture & Gradients */}
      <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 opacity-[0.03]" 
               style={{ backgroundImage: 'radial-gradient(#1e3a8a 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
          </div>
          <div className="absolute -top-[10%] -right-[5%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[100px]" />
          <div className="absolute top-[20%] -left-[10%] w-[30%] h-[30%] bg-blue-300/10 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 lg:pt-16 lg:pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Left Column: Text & Slider */}
          <div className="flex-1 w-full max-w-2xl lg:max-w-none space-y-10 lg:pl-12">
            
            <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl font-extrabold text-primary leading-[1.1]">
                  Building Value. <br/>
                  <span className="text-secondary">Driving Growth.</span>
                </h1>
                <p className="text-xl text-gray-600 font-medium max-w-lg">
                  Access comprehensive financial data, stock information, and corporate reports to make informed investment decisions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-2 w-full sm:w-auto">
                     <Button variant="primary" className="!px-10 py-4 w-full sm:w-auto flex items-center justify-center shadow-lg shadow-blue-900/20 hover:shadow-blue-900/30">
                        View Annual Report
                    </Button>
                    <Button variant="outline" className="group !px-8 py-4 w-full sm:w-auto flex items-center justify-center bg-white/50 backdrop-blur-sm border-2">
                        Shareholder Info <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </div>

            {/* Content Slider */}
            <div className="relative h-24 mt-12 overflow-hidden border-l-4 border-secondary pl-6">
                 {SLIDES.map((slide, index) => (
                    <div 
                        key={index}
                        className={`absolute top-0 left-6 transition-all duration-700 ease-in-out transform ${
                            index === currentSlide 
                                ? 'opacity-100 translate-y-0' 
                                : 'opacity-0 translate-y-4'
                        }`}
                    >
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{slide.title}</h3>
                        <p className="text-gray-600 max-w-md">{slide.description}</p>
                    </div>
                 ))}
            </div>

             {/* Slider Indicators */}
            <div className="flex gap-2">
                {SLIDES.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                            currentSlide === index ? 'w-8 bg-secondary' : 'w-2 bg-gray-300'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
          </div>

          {/* Right Column: Dynamic Image Card */}
           <div className="flex-1 w-full relative h-[500px] lg:h-[600px] hidden lg:block">
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-white rounded-[2rem] transform rotate-3 scale-95 opacity-50"></div>
             <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-700">
                {SLIDES.map((slide, index) => (
                    <Image
                        key={index}
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className={`object-cover transition-opacity duration-1000 ${
                            index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                        priority={index === 0}
                    />
                ))}
                 <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div> {/* Overlay */}
                 <div className="absolute bottom-10 left-10 text-white max-w-md">
                     <p className="font-bold text-secondary mb-2 tracking-widest uppercase text-sm">Invest in NMB</p>
                     <h2 className="text-3xl font-bold leading-tight">Your partner in financial progress.</h2>
                 </div>
             </div>
             
             {/* Floating Stats Card */}
             <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs animate-bounce-slow">
                 <div className="flex items-center gap-4 mb-3">
                     <div className="p-3 bg-green-100 rounded-full text-green-600">
                         <TrendingUp size={24} />
                     </div>
                     <div>
                         <p className="text-sm text-gray-500 font-medium">Stock Price</p>
                         <p className="text-2xl font-bold text-primary">TZS 3,450</p>
                     </div>
                 </div>
                 <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                     <div className="bg-green-500 h-full w-[75%]"></div>
                 </div>
                 <p className="text-xs text-green-600 mt-2 font-medium">▲ +2.4% Today</p>
             </div>
           </div>

        </div>
      </div>
    </div>
  );
}
