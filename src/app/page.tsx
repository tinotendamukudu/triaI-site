import Hero from "@/components/Hero/Hero";
import { ChevronRight } from 'lucide-react';
import ServiceCard from "@/components/cards/ServiceCard";
import MobileAppShowcase from "@/components/MobileApp/MobileAppShowcase";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <MobileAppShowcase />
      
      {/* Quick Services Section */}
      <section className="py-16 bg-gray-50/50">
        <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ServiceCard 
                    title="Open an Account" 
                    description="Open a shiny new bank account with us digitally in under 3 minutes." 
                    actionText="Open Now" 
                />
                <ServiceCard 
                    title="Get a Loan" 
                    description="Need funds? Apply for a personal or business loan tailored to your needs." 
                    actionText="Apply Now" 
                />
                <ServiceCard 
                    title="Digital Banking" 
                    description="Bank on the go with our secure NMBConnect App and Internet Banking." 
                    actionText="Learn More" 
                />
            </div>
        </div>
      </section>

      {/* Featured offering */}
      <section className="py-20 bg-white">
        <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="w-full md:w-1/2 bg-gray-100 rounded-2xl h-[400px] flex items-center justify-center relative overflow-hidden">
                    {/* Placeholder for feature image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-blue-50"></div>
                     <span className="text-gray-400 font-medium relative z-10">Feature Image</span>
                </div>
                <div className="w-full md:w-1/2">
                    <span className="text-primary font-semibold uppercase tracking-wider text-sm">NMBConnect App</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">Banking that fits in your pocket</h2>
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                        Experience the freedom of banking on your terms. Pay bills, transfer funds, manage cards, and track your spending all from one secure app.
                    </p>
                    <button className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors inline-flex items-center">
                        Download App <ChevronRight className="ml-2 h-5 w-5" />
                    </button>
                </div>
            </div>
        </div>
      </section>
    </main>
  );
}

