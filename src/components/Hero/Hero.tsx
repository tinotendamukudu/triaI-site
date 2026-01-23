'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Button from '../buttons/Button';
import NMBCard from '../cards/NMBCard';

const SLIDES = [
    {
        title: "Modern, Digital-First Banking",
        description: "Presenting NMB as a modern, digital-first bank designed for your lifestyle.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop"
    },
    {
        title: "Access Key Services Instantly",
        description: "Making it easy for customers to access key services like Accounts, Loans, and Cards.",
        image: "/banner-women.png"
    },
    {
        title: "Sustainability & Innovation",
        description: "Highlighting our commitment to sustainability and continuous innovation.",
        image: "/hero-slide-4.png"
    }
];


export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

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
          
          {/* Left Column: Text & Slider */}
          <div className="flex-1 w-full max-w-2xl lg:max-w-none space-y-10 lg:pl-12">
            
            {/* Main Static Message */}
            <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl font-extrabold text-primary leading-[1.1]">
                  Virtual is the <br/>
                  <span className="text-secondary">New Reality</span> with <br/>
                   NMB Bank.
                </h1>
                <p className="text-xl text-gray-600 font-medium max-w-lg">
                  We can help you change the way you bank. Dial <span className="text-primary font-bold">*241#</span> to get started.
                </p>
                <div className="flex gap-4 pt-2">
                     <Button variant="primary">
                        Open Account
                    </Button>
                    <Button variant="outline">
                        Contact
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
                        className={`h-2 rounded-full transition-all duration-300 ${
                            currentSlide === index ? 'w-8 bg-primary' : 'w-2 bg-gray-300'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
          </div>
          {/* Right Column: Image & Floating Cards */}
          <div className="flex-1 w-full relative perspective-1000">
             {/* Main Circle Background */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50 rounded-full opacity-60 -z-10 blur-3xl"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-white rounded-full opacity-40 -z-10"></div>
             
             {/* Main Image with Rotation */}
             <div className="relative z-10 mx-auto w-full max-w-md lg:max-w-full h-[400px] sm:h-[500px] lg:h-[600px]">
                {SLIDES.map((slide, index) => (
                    <div 
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out flex items-center justify-center ${
                             index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                    >
                         {index === 0 ? (
                            <div className="relative w-full h-full perspective-1000">
                                {/* Card Fan Composition */}
                                <div className="absolute top-[5%] left-[0%] transform -rotate-12 z-10 w-[300px] h-[190px] sm:w-[420px] sm:h-[265px] transition-transform hover:scale-105 hover:rotate-[-10deg] duration-500">
                                    <NMBCard title="NMB CLASSIC" subtitle="DEBIT" description="" isActive={true} onClick={()=>{}} type="classic" />
                                </div>
                                <div className="absolute top-[18%] left-[15%] transform -rotate-3 z-20 w-[300px] h-[190px] sm:w-[420px] sm:h-[265px] transition-transform hover:scale-105 hover:rotate-[-1deg] duration-500 shadow-xl">
                                    <NMBCard title="NMB GOLD" subtitle="PREMIUM" description="" isActive={true} onClick={()=>{}} type="gold" />
                                </div>
                                <div className="absolute top-[32%] left-[30%] transform rotate-6 z-30 w-[300px] h-[190px] sm:w-[420px] sm:h-[265px] transition-transform hover:scale-105 hover:rotate-[8deg] duration-500 shadow-2xl">
                                    <NMBCard title="NMB ELITE" subtitle="PLATINUM" description="" isActive={true} onClick={()=>{}} type="platinum" />
                                </div>
                            </div>
                        ) : (
                            <Image 
                                src={slide.image}
                                alt={slide.title}
                                width={800} 
                                height={900}
                                className="object-contain drop-shadow-2xl rounded-tr-[5rem] rounded-bl-[5rem] max-h-full w-auto scale-125"
                                priority={index === 0}
                            />
                        )}
                    </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
