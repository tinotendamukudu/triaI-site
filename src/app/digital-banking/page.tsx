import HeroDigitalMain from "@/components/Hero/HeroDigitalMain";
import MobileAppShowcase from "@/components/MobileApp/MobileAppShowcase";
import InternetBanking from "@/components/Digital/InternetBanking";
import USSD from "@/components/Digital/USSD";

export default function DigitalBanking() {
    return (
        <main className="min-h-screen bg-white">
            <HeroDigitalMain />
            <div id="download">
                <MobileAppShowcase />
            </div>
            <InternetBanking />
            <USSD />
        </main>
    );
}
