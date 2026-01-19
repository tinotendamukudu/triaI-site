'use client';

import { ArrowRight, Globe, Shield, Smartphone, CreditCard } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative bg-white">
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
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-300 ring-1 ring-white/10 hover:ring-white/20">
                Current Business Conditions Review is out. <a href="#" className="font-semibold text-white"><span className="absolute inset-0" aria-hidden="true" />Read more <span aria-hidden="true">&rarr;</span></a>
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Excellence in <br/>
              <span className="text-yellow-400">Every Transaction</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              We provide world-class financial solutions tailored to empower your growth. Whether for personal goals or corporate expansion, NMB is your partner in success.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="#"
                className="rounded-md bg-yellow-400 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
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
                    icon={<Globe className="h-6 w-6 text-white" />}
                    title="International Banking"
                    description="Seamless cross-border payments & trade finance."
                    href="#"
                />
                 <FeatureCard 
                    icon={<Smartphone className="h-6 w-6 text-white" />}
                    title="Digital Solutions"
                    description="NMBConnect App & Internet Banking."
                    href="#"
                />
                 <FeatureCard 
                    icon={<CreditCard className="h-6 w-6 text-white" />}
                    title="Cards & Payments"
                    description="Visa, Mastercard & Local debit cards."
                    href="#"
                />
                 <FeatureCard 
                    icon={<Shield className="h-6 w-6 text-white" />}
                    title="Safe & Secure"
                    description="Advanced security for peace of mind."
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
        <Link href={href} className="group relative flex flex-col gap-3 rounded-2xl bg-white/10 p-6 hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/10">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 group-hover:bg-blue-500 transition-colors">
                {icon}
            </div>
            <h3 className="text-lg font-semibold leading-6 text-white">
                <span className="absolute inset-0" />
                {title}
            </h3>
            <p className="text-sm text-gray-300">
                {description}
            </p>
        </Link>
    )
}
