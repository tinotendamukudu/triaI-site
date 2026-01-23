import { Metadata } from 'next';
import InvestorHero from '@/components/Investor/InvestorHero';
import FinancialReports from '@/components/Investor/FinancialReports';
import MarketData from '@/components/Investor/MarketData';

export const metadata: Metadata = {
    title: "Investor Relations | NMB Bank",
    description: "Access NMB Bank's financial reports, stock information, corporate governance, and share price data.",
};

export default function InvestorRelationsPage() {
    return (
        <main className="bg-white min-h-screen">
            <InvestorHero />
            <div id="financial-reports">
                <FinancialReports />
            </div>
            <div id="market-data">
                <MarketData />
            </div>
        </main>
    );
}
