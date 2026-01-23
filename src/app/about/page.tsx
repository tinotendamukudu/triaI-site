import { Metadata } from 'next';
import AboutHero from '@/components/About/AboutHero';
import WhoWeAre from '@/components/About/WhoWeAre';
import Leadership from '@/components/About/Leadership';
import Careers from '@/components/About/Careers';
import ContactSection from '@/components/About/ContactSection';

export const metadata: Metadata = {
    title: "About Us | NMB Bank",
    description: "Learn about NMB Bank's history, leadership, mission, vision, and values. Discover why we are the partner of choice in Zimbabwe.",
};

export default function AboutPage() {
    return (
        <main className="bg-white min-h-screen">
            <AboutHero />
            <div id="who-we-are">
                <WhoWeAre />
            </div>
            <div id="leadership">
                <Leadership />
            </div>
            <div id="careers">
                <Careers />
            </div>
            <div id="contact-us">
                <ContactSection />
            </div>
        </main>
    );
}
