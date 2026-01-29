import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight} from 'lucide-react';
import HoldingsTitle from './HoldingsTitle';

export default function HoldingsHero() {
    return (
        <section className="relative h-[95vh] min-h-[800px] flex items-center overflow-hidden bg-white font-sans">
            {/* Background Texture & Gradients */}
            <div className="absolute inset-0 z-0">
                {/* Subtle Grid Pattern for Texture */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{ 
                        backgroundImage: 'linear-gradient(to right, var(--color-primary) 1px, transparent 1px), linear-gradient(to bottom, var(--color-primary) 1px, transparent 1px)', 
                        backgroundSize: '50px 50px' 
                    }}>
                </div>

                {/* Soft Gradient Blobs for Smoothness */}
                <div className="absolute -top-[10%] -right-[5%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[100px]" />
                <div className="absolute top-[20%] -left-[10%] w-[30%] h-[30%] bg-primary/10 rounded-full blur-[80px]" />
                <div className="absolute -bottom-[10%] right-[20%] w-[35%] h-[35%] bg-primary/5 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-[98%] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
                {/* Left Content */}
                <div className="text-gray-900 space-y-8 animate-in slide-in-from-left-4 duration-700 fade-in pl-4 lg:pl-12">
                    <HoldingsTitle />

                    <p className="text-lg md:text-xl text-gray-600 max-w-xl font-light leading-relaxed">
                        A diversified investment holding company driving sustainable growth through Banking, Real Estate, and Technology.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Link
                            href="/investor-relations"
                            className="px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-all transform hover:-translate-y-1 shadow-sm shadow-primary/20 flex items-center justify-center gap-2"
                        >
                            Investor Relations <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="/banking-for-me"
                            className="px-8 py-4 bg-transparent border border-primary/30 text-primary font-semibold rounded-full hover:bg-primary/5 transition-colors flex items-center justify-center backdrop-blur-sm"
                        >
                            Explore NMB Bank
                        </Link>
                    </div>
                </div>
                {/* Right Visual - Vertical Scroll Carousel */}
                <div className="hidden lg:grid grid-cols-2 gap-6 relative h-[800px] overflow-hidden">
                    {/* Gradient Overlay for Fade Effect - Top and Bottom */}
                    <div className="absolute top-0 left-0 right-0 z-20 pointer-events-none bg-gradient-to-b from-white to-transparent h-32"></div>
                    <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none bg-gradient-to-t from-white to-transparent h-32"></div>

                    {/* Column 1 - Scroll Up */}
                    <div className="flex flex-col animate-scroll-up will-change-transform" style={{ backfaceVisibility: 'hidden' }}>
                        {/* Card 1: NMB Bank */}
                        <div className="relative h-80 w-full rounded-2xl overflow-hidden group mb-6">
                            <Image
                                src="https://images.unsplash.com/photo-1541535650810-10d26f5c2ab3?q=80&w=1000&auto=format&fit=crop"
                                alt="NMB Bank"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                        </div>
                        {/* Card 2: Properties */}
                        <div className="relative h-80 w-full rounded-2xl overflow-hidden group mb-6">
                            <Image
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop"
                                alt="NMB Properties"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                        </div>

                        {/* Card 3: Community (Added for height buffer) */}
                        <div className="relative h-80 w-full rounded-2xl overflow-hidden group mb-6">
                            <Image
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop"
                                alt="Community"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                        </div>

                        {/* Duplicate Set for Loop */}
                        <div className="relative h-80 w-full rounded-2xl overflow-hidden group mb-6">
                            <Image
                                src="https://images.unsplash.com/photo-1541535650810-10d26f5c2ab3?q=80&w=1000&auto=format&fit=crop"
                                alt="NMB Bank"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                        </div>
                        <div className="relative h-80 w-full rounded-2xl overflow-hidden group mb-6">
                            <Image
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop"
                                alt="NMB Properties"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                        </div>
                        <div className="relative h-80 w-full rounded-2xl overflow-hidden group mb-6">
                            <Image
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop"
                                alt="Community"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                        </div>
                    </div>

                    {/* Column 2 - Scroll Down */}
                    <div className="flex flex-col animate-scroll-down will-change-transform" style={{ backfaceVisibility: 'hidden' }}>
                        {/* Card 1: Xplug */}
                        <div className="relative h-80 w-full rounded-2xl overflow-hidden group mb-6 flex-shrink-0">
                            <Image
                                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop"
                                alt="Xplug"
                                fill
                                priority
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/30 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                        </div>

                        {/* Card 2: Community */}
                        <div className="relative h-80 w-full rounded-2xl overflow-hidden group mb-6 flex-shrink-0">
                            <Image
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop"
                                alt="Community"
                                fill
                                priority
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                        </div>

                        {/* Card 3: Bank (Added for height buffer) */}
                        <div className="relative h-80 w-full rounded-2xl overflow-hidden group mb-6 flex-shrink-0">
                            <Image
                                src="https://images.unsplash.com/photo-1541535650810-10d26f5c2ab3?q=80&w=1000&auto=format&fit=crop"
                                alt="NMB Bank"
                                fill
                                priority
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                        </div>

                        {/* Duplicate Set for Loop */}
                        <div className="relative h-80 w-full rounded-2xl overflow-hidden group mb-6 flex-shrink-0">
                            <Image
                                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop"
                                alt="Xplug"
                                fill
                                priority
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/30 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                        </div>
                        <div className="relative h-80 w-full rounded-2xl overflow-hidden group mb-6 flex-shrink-0">
                            <Image
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop"
                                alt="Community"
                                fill
                                priority
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                        </div>
                        <div className="relative h-80 w-full rounded-2xl overflow-hidden group mb-6 flex-shrink-0">
                            <Image
                                src="https://images.unsplash.com/photo-1541535650810-10d26f5c2ab3?q=80&w=1000&auto=format&fit=crop"
                                alt="NMB Bank"
                                fill
                                priority
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}