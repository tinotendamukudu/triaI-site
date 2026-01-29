import Hero from "@/components/Hero/Hero";
import ServiceCard from "@/components/cards/ServiceCard";
import MobileAppShowcase from "@/components/MobileApp/MobileAppShowcase";
import Featured from "@/components/Featured/Featured";
import Newsroom from "@/components/Newsroom/Newsroom";
import PersonalBankingPromo from "@/components/Promo/PersonalBankingPromo";
import CustomizePayments from "@/components/Digital/CustomizePayments";

export default function BankingHome() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <MobileAppShowcase />
      <CustomizePayments />
      
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
      <PersonalBankingPromo />
      <Featured />
      <Newsroom />
    </main>
  );
}
