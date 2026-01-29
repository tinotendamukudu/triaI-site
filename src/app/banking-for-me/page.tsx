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
            <PersonalBankingPromo />
            <Featured />
            <Newsroom />
        </main>
    );
}
