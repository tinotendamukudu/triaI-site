import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Building2, Briefcase, Landmark } from 'lucide-react';
import HoldingsHero from '@/components/Hero/HoldingsHero';
import SubsidiariesGrid from '@/components/Holdings/SubsidiariesGrid';

export default function HoldingsHome() {
  return (
    <main className="min-h-screen bg-white">
      {/* Group Hero */}
      <HoldingsHero />
      {/* Subsidiaries Grid */}
      <SubsidiariesGrid />

    </main>
  );
}


