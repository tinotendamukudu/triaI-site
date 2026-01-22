import HeroHighImpact from "@/components/Hero/HeroHighImpact";
import ServiceCard from "@/components/cards/ServiceCard";
import MobileAppShowcase from "@/components/MobileApp/MobileAppShowcase";
import Featured from "@/components/Featured/Featured";
import Newsroom from "@/components/Newsroom/Newsroom";
import PersonalBankingPromo from "@/components/Promo/PersonalBankingPromo"; // Using placeholder as requested

export default function Business() {
  return (
    <main className="min-h-screen bg-white">
      <HeroHighImpact />
      <MobileAppShowcase />
      
      {/* Quick Services Section - Reused Layout */}
      <section className="py-16 bg-gray-50/50">
        <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ServiceCard 
                    title="Open a Business Account" 
                    description="Open a business account with us digitally in under 5 minutes." 
                    actionText="Open Now" 
                />
                <ServiceCard 
                    title="Business Loans" 
                    description="Need funds for growth? Apply for a business loan tailored to your needs." 
                    actionText="Apply Now" 
                />
                <ServiceCard 
                    title="Merchant Services" 
                    description="Accept payments seamlessly with our POS and digital solutions." 
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
