'use client';

import { ArrowRight, Globe, TrendingUp, Store, Briefcase } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative bg-white font-sans">
      {/* Main Hero Content */}
      <div className="relative isolate overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/40 z-10" />
            <img
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2669&auto=format&fit=crop"
                alt="Business meeting"
                className="h-full w-full object-cover"
            />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 relative z-20">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <div className="mb-8 flex">
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Empowering <br/>
              <span className="text-secondary">Business Growth</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              From SME banking and tailored investments to seamless POS solutions, NMB Business provides the financial tools you need to scale.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="#"
                className="rounded-md bg-secondary px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
              >
                Open an Account
              </Link>
              <Link href="#" className="text-sm font-semibold leading-6 text-white group flex items-center gap-1">
                Explore Services <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform"/>
              </Link>
            </div>
          </div>
        </div>

        {/* Feature Cards floating at the bottom */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-12">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <FeatureCard 
                    icon={<Briefcase className="h-6 w-6" />}
                    title="SME Banking"
                    description="Tailored financing & support to fuel your business growth."
                    href="#"
                />
                 <FeatureCard 
                    icon={<TrendingUp className="h-6 w-6" />}
                    title="Investments"
                    description="Expert wealth management & capital growth strategies."
                    href="#"
                />
                 <FeatureCard 
                    icon={<Store className="h-6 w-6" />}
                    title="POS Services"
                    description="Seamless payment solutions for your retail locations."
                    href="#"
                />
                 <FeatureCard 
                    icon={<Globe className="h-6 w-6" />}
                    title="Trade Finance"
                    description="Connect your business to global markets efficiently."
                    href="#"
                />
            </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description, href }: { icon: React.ReactNode, title: string, description: string, href: string }) {
    return (
        <Link href={href} className="group relative flex flex-col gap-3 rounded-2xl bg-white/5 p-6 hover:bg-white/10 transition-colors backdrop-blur-sm border border-white/10 hover:border-secondary/50">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-primary transition-colors duration-300">
                {icon}
            </div>
            <h3 className="text-lg font-semibold leading-6 text-white group-hover:text-secondary transition-colors">
                <span className="absolute inset-0" />
                {title}
            </h3>
            <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors">
                {description}
            </p>
        </Link>
    )
}
