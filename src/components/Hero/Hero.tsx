'use client';

import { useState, useEffect } from 'react';
import { Bell } from 'lucide-react';
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
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2576&auto=format&fit=crop"
    },
    {
        title: "Sustainability & Innovation",
        description: "Highlighting our commitment to sustainability and continuous innovation.",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2576&auto=format&fit=crop"
    },
    {
         title: "We Value You",
         description: "Offering useful content, financial literacy, and dedicated support.",
         image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2576&auto=format&fit=crop"
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

      <div className="relative z-10 max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24 lg:pt-20 lg:pb-32">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Column: Text & Slider */}
          <div className="flex-1 w-full max-w-2xl lg:max-w-none space-y-10">
            
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
                        Learn More
                    </Button>
                </div>
            </div>

            {/* Content Slider */}
            <div className="relative h-24 mt-12 overflow-hidden border-l-4 border-primary pl-6">
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
                                width={600} 
                                height={700}
                                className="object-contain drop-shadow-2xl rounded-tr-[5rem] rounded-bl-[5rem] max-h-full w-auto"
                                priority={index === 0}
                            />
                        )}
                    </div>
                ))}
             </div>

             {/* Floating Card 1: Notification */}
             <div className="absolute top-[20%] -left-4 sm:left-0 bg-white p-4 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex items-center gap-3 animate-float-slow z-20 max-w-[200px]">
                 <div className="bg-yellow-100 p-2 rounded-full">
                     <Bell className="w-5 h-5 text-yellow-600" />
                 </div>
                 <div>
                     <p className="text-xs font-bold text-gray-800">Payment Received</p>
                     <p className="text-[10px] text-gray-500">Just now</p>
                 </div>
             </div>

              {/* Floating Card 2: Candidates/Success */}
             <div className="absolute bottom-[10%] -right-4 sm:right-0 bg-white p-4 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] animate-float-delayed z-20">
                 <div className="flex items-center gap-2 mb-2">
                     <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                     <p className="text-sm font-bold text-gray-800">System Active</p>
                 </div>
                 <p className="text-xs text-gray-500">99.9% Uptime</p>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}
