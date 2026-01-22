'use client';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Pause, Play, ChevronRight, UserPlus, Smartphone, Banknote, ShieldCheck } from 'lucide-react';
import CarouselIndicators from '../shared/CarouselIndicators';

const features = [
  {
    id: 1,
    title: 'Open an NMB Account',
    description: 'Start your journey with us today. Open a personal or business account digitally in minutes.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    pillText: 'Easy Onboarding',
    linkText: 'Open Account',
    icon: UserPlus
  },
  {
    id: 2,
    title: 'NMB Connect',
    description: 'Bank on the go with our secure mobile application. Manage your finances anytime, anywhere.',
    image: 'https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&q=80&w=800',
    pillText: 'Download App',
    linkText: 'Get NMB Connect',
    icon: Smartphone
  },
  {
    id: 3,
    title: 'Loans',
    description: 'Flexible financing solutions to fuel your dreams. Personal, business, and mortgage loans.',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=800',
    pillText: 'Low Interest',
    linkText: 'View Loan Options',
    icon: Banknote
  },
  {
    id: 4,
    title: 'Insurance',
    description: 'Comprehensive coverage to protect what matters most to you and your loved ones.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
    pillText: 'Secure Future',
    linkText: 'Get Insured',
    icon: ShieldCheck
  }
];

export default function Featured() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  
  const DURATION = 5000;
  const UPDATE_INTERVAL = 50;

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % features.length);
    setProgress(0);
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            return 100;
          }
          return prev + (UPDATE_INTERVAL / DURATION) * 100;
        });
      }, UPDATE_INTERVAL);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  useEffect(() => {
    if (progress >= 100) {
      nextSlide();
    }
  }, [progress, nextSlide]);

  const handleCardClick = (index: number) => {
    setCurrent(index);
    setProgress(0);
    // Optional: Pause on manual interaction
    // setIsPlaying(false);
  };

  return (
    <section className="py-24 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl md:text-5xl font-bold text-center mb-16 text-gray-800 dark:text-white tracking-tight">
          Banking for you made easier
        </h3>
        
        {/* Accordion Cards Container - Flex Row */}
        <div className="flex flex-col md:flex-row gap-4 max-w-5xl mx-auto w-full mb-12 items-start justify-center min-h-[600px]">
          {features.map((feature, idx) => {
             const Icon = feature.icon;
             return (
              <button
                type="button"
                key={feature.id}
                onClick={() => handleCardClick(idx)}
                className={`flex flex-col gap-6 cursor-pointer transition-[flex-grow,flex-shrink,flex-basis] duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] outline-none bg-transparent border-none p-0 text-left
                  ${current === idx ? 'md:flex-[1.5] flex-[1.5] grow' : 'md:flex-[1] flex-[1] shrink'}
                  group min-w-0 md:min-w-[100px]
                `}
              >
                {/* Image Card */}
                <div className={`relative h-[550px] w-full rounded-[2.5rem] overflow-hidden shadow-xl
                    ${current === idx ? 'shadow-2xl ring-1 ring-black/5 dark:ring-white/10' : 'shadow-lg hover:shadow-xl'}
                `}>
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className={`object-cover transition-transform duration-1000 ease-out
                      ${current === idx ? 'scale-100' : 'scale-125 grayscale-[30%] group-hover:grayscale-0'}
                    `}
                    priority
                  />
                  
                  {/* Dark Overlay for inactive items */}
                  <div 
                    className={`absolute inset-0 bg-black/30 transition-opacity duration-500 
                    ${current === idx ? 'opacity-0' : 'opacity-100 group-hover:opacity-20'}`} 
                  />
                  
                  {/* Floating Pill - Only visible on active card */}
                  <div 
                    className={`absolute bottom-8 left-8 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full flex items-center gap-3 shadow-lg transition-all duration-500 delay-200
                      ${current === idx ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-90'}
                    `}
                  >
                    <div className="p-1.5 bg-secondary/10 rounded-full text-secondary">
                      <Icon size={16} />
                    </div>
                    <span className="font-semibold text-gray-900 text-sm tracking-wide whitespace-nowrap">
                      {feature.pillText}
                    </span>
                  </div>
                </div>

                {/* Use invisible for layout stability if needed, but here we want to hide it completely when inactive to save space/layout */}
                <div 
                  className={`space-y-4 transition-all duration-500 ease-out overflow-hidden px-2
                    ${current === idx ? 'opacity-100 max-h-[200px] translate-y-0' : 'opacity-0 max-h-0 translate-y-4'}
                  `}
                >
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white leading-tight">
                      {feature.description}
                    </h3>
                    
                    <span className="group inline-flex items-center gap-2 text-secondary font-semibold text-lg hover:text-secondary/80 transition-colors">
                      {feature.linkText}
                      <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Global Controls - Centered below everything */}
        <div className="flex justify-center mt-4">
            <div className="bg-white flex items-center gap-5 px-6 py-3 rounded-full border border-gray-300/50 shadow-sm">
                {/* Play/Pause */}
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsPlaying(!isPlaying);
                    }}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-full transition-colors text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-secondary"
                    aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
                >
                    {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" />}
                </button>

                 {/* Separator */}
                 <div className="w-px h-5 bg-gray-200 dark:bg-zinc-600"></div>

                {/* Progress Indicators - Linked to all 4 images */}

                <CarouselIndicators 
                  total={features.length}
                  current={current}
                  progress={progress}
                  isPlaying={isPlaying}
                  onSelect={handleCardClick}
                />
            </div>
        </div>
      </div>
    </section>
  );
}
