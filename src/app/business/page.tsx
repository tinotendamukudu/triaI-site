import HeroHighImpact from "@/components/Hero/HeroHighImpact";
import SMEBanking from "@/components/Business/SMEBanking";
import CorporateSolutions from "@/components/Business/CorporateSolutions";
import POSMerchant from "@/components/Business/POSMerchant";

export default function Business() {
  return (
    <main className="min-h-screen bg-white">
      <HeroHighImpact />
      
      {/* Defined Unique Business Sections */}
      <SMEBanking />
      <CorporateSolutions />
      <POSMerchant />
    </main>
  );
}
