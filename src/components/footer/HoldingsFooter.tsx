import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn} from 'react-icons/fa';

export default function HoldingsFooter() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-8 font-sans">
      <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">         
          {/* Column 1: Subsidiaries */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6 text-lg">Our Subsidiaries</h3>
            <ul className="space-y-3">
                <li><Link href="/banking-for-me" className="text-gray-600 hover:text-[#D4AF37] hover:underline transition-colors">NMB Bank</Link></li>
                <li><Link href="https://nmbproperties.co.zw/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#D4AF37] hover:underline transition-colors">NMB Properties</Link></li>
                <li><Link href="https://xplug.co.zw/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#D4AF37] hover:underline transition-colors">Xplug</Link></li>
            </ul>
          </div>

          {/* Column 2: Corporate */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6 text-lg">Corporate</h3>
            <ul className="space-y-3">
                <li><Link href="/about" className="text-gray-600 hover:text-[#D4AF37] hover:underline transition-colors">About NMBZ Holdings</Link></li>
                <li><Link href="/investor-relations" className="text-gray-600 hover:text-[#D4AF37] hover:underline transition-colors">Investor Relations</Link></li>
                <li><Link href="/governance" className="text-gray-600 hover:text-[#D4AF37] hover:underline transition-colors">Corporate Governance</Link></li>
                <li><Link href="/sustainability" className="text-gray-600 hover:text-[#D4AF37] hover:underline transition-colors">Sustainability</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6 text-lg">Contact Us</h3>
            <div className="text-gray-600 space-y-4">
                <p>NMBZ Holdings Limited</p>
                <p>First Floor, Unity Court</p>
                <p>Cnr 1st Street & Kwame Nkrumah</p>
                <p>Harare, Zimbabwe</p>
            </div>
            <div className="text-gray-600 space-y-2 mt-4">
                 <p className="hover:text-[#D4AF37] transition-colors"><a href="mailto:enquiries@nmbz.co.zw">enquiries@nmbz.co.zw</a></p>
                 <p>+263 772 241 241</p>
            </div>
          </div>

           {/* Column 4: Social & Legal */}
           <div className="space-y-8">
             <div>
                <h3 className="font-bold text-gray-900 mb-6 text-lg">Connect With Us</h3>
                <div className="flex gap-4">
                    <Link href="#" className="bg-[#002D59] text-white p-2.5 rounded-full hover:bg-[#D4AF37] hover:text-[#002D59] transition-all hover:-translate-y-1">
                        <FaFacebookF size={18} />
                    </Link>
                    <Link href="#" className="bg-[#002D59] text-white p-2.5 rounded-full hover:bg-[#D4AF37] hover:text-[#002D59] transition-all hover:-translate-y-1">
                        <FaTwitter size={18} />
                    </Link>
                    <Link href="#" className="bg-[#002D59] text-white p-2.5 rounded-full hover:bg-[#D4AF37] hover:text-[#002D59] transition-all hover:-translate-y-1">
                        <FaLinkedinIn size={18} />
                    </Link>
                </div>
            </div>
            
            <div className="pt-4 border-t border-gray-100">
                <ul className="space-y-2 text-sm">
                    <li><Link href="/privacy" className="text-gray-500 hover:text-[#D4AF37] hover:underline">Privacy Policy</Link></li>
                    <li><Link href="/terms" className="text-gray-500 hover:text-[#D4AF37] hover:underline">Terms of Use</Link></li>
                </ul>
            </div>
           </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} NMBZ Holdings Limited. All rights reserved.</p>
          <p>Registered Commercial Bank in Zimbabwe.</p>
        </div>
      </div>
    </footer>
  );
}
