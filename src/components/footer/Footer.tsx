import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-8">
      <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* App Download Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-200 pb-10 mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 md:mb-0">
            Download the NMBConnect App today
          </h2>
          <div className="flex gap-4">
            {/* Store Buttons (Placeholders styled to look like badges) */}
            <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-3 hover:bg-gray-800 transition-colors">
                <div className="text-left">
                    <div className="text-[10px] leading-tight">Download on the</div>
                    <div className="text-sm font-bold leading-tight">App Store</div>
                </div>
            </button>
            <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-3 hover:bg-gray-800 transition-colors">
                <div className="text-left">
                    <div className="text-[10px] leading-tight">GET IT ON</div>
                    <div className="text-sm font-bold leading-tight">Google Play</div>
                </div>
            </button>
             <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-3 hover:bg-gray-800 transition-colors">
                <div className="text-left">
                    <div className="text-[10px] leading-tight">EXPLORE IT ON</div>
                    <div className="text-sm font-bold leading-tight">AppGallery</div>
                </div>
            </button>
          </div>
        </div>

        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
            
          {/* Column 1: Social & Tools */}
          <div className="space-y-8">
            <div>
                <h3 className="font-bold text-gray-900 mb-4">Social</h3>
                <div className="flex gap-4">
                    <Link href="#" className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition">
                        <Facebook size={20} />
                    </Link>
                    <Link href="#" className="bg-black text-white p-2 rounded-full hover:bg-gray-800 transition">
                        <Twitter size={20} />
                    </Link>
                    <Link href="#" className="bg-blue-800 text-white p-2 rounded-full hover:bg-blue-900 transition">
                        <Linkedin size={20} />
                    </Link>
                    <Link href="#" className="bg-pink-600 text-white p-2 rounded-full hover:bg-pink-700 transition">
                        <Instagram size={20} />
                    </Link>
                </div>
            </div>

            <div>
                <h3 className="font-bold text-gray-900 mb-4">Useful Tools</h3>
                <ul className="space-y-3">
                    <li><Link href="#" className="text-gray-600 hover:text-primary hover:underline">Digital Banking</Link></li>
                    <li><Link href="#" className="text-gray-600 hover:text-primary hover:underline">Banking rates and fees</Link></li>
                    <li><Link href="#" className="text-gray-600 hover:text-primary hover:underline">Latest offers</Link></li>
                    <li><Link href="#" className="text-gray-600 hover:text-primary hover:underline">Find a branch</Link></li>
                    <li><Link href="#" className="text-gray-600 hover:text-primary hover:underline">Safety and security</Link></li>
                </ul>
            </div>
          </div>

          {/* Column 2: Who We Are & Sites */}
          <div className="space-y-8">
            <div>
                <h3 className="font-bold text-gray-900 mb-4">Who we are</h3>
                <ul className="space-y-3">
                    <li><Link href="#" className="text-gray-600 hover:text-primary hover:underline">About NMB</Link></li>
                    <li><Link href="#" className="text-gray-600 hover:text-primary hover:underline">Investor Relations</Link></li>
                    <li><Link href="#" className="text-gray-600 hover:text-primary hover:underline">Citizenship</Link></li>
                    <li><Link href="#" className="text-gray-600 hover:text-primary hover:underline">Media Centre</Link></li>
                    <li><Link href="#" className="text-gray-600 hover:text-primary hover:underline">Careers</Link></li>
                </ul>
            </div>
          </div>

           {/* Column 3: Sites & Legal */}
           <div className="space-y-8">
             <div>
                <h3 className="font-bold text-gray-900 mb-4">Our Sites</h3>
                <ul className="space-y-3">
                    <li><Link href="#" className="text-gray-600 hover:text-primary hover:underline">Personal Banking</Link></li>
                    <li><Link href="#" className="text-gray-600 hover:text-primary hover:underline">Business Banking</Link></li>
                    <li><Link href="#" className="text-gray-600 hover:text-primary hover:underline">Corporate Solutions</Link></li>
                </ul>
            </div>
            <div>
                <h3 className="font-bold text-gray-900 mb-4">Legal</h3>
                <ul className="space-y-3">
                    <li><Link href="#" className="text-gray-600 hover:text-primary hover:underline">Legal and compliance</Link></li>
                    <li><Link href="#" className="text-gray-600 hover:text-primary hover:underline">Terms of use</Link></li>
                    <li><Link href="#" className="text-gray-600 hover:text-primary hover:underline">Privacy policy</Link></li>
                </ul>
            </div>
           </div>

          {/* Column 4: Support & Contact */}
          <div className="space-y-8">
            <div>
                <h3 className="font-bold text-gray-900 mb-4">Support</h3>
                <ul className="space-y-3">
                    <li><Link href="#" className="text-gray-600 hover:text-primary hover:underline">Contact Us</Link></li>
                    <li><Link href="#" className="text-gray-600 hover:text-primary hover:underline">Switch to NMB</Link></li>
                    <li><Link href="#" className="text-gray-600 hover:text-primary hover:underline">Give Feedback</Link></li>
                </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">Lost or stolen cards?</h3>
                <p className="text-sm text-gray-600 mb-4">Call us immediately to block your card.</p>
                <div className="flex items-center gap-2 text-primary font-bold text-lg">
                    <Phone className="h-5 w-5" />
                    <span>+263 772 123 456</span>
                </div>
                <div className="mt-2 text-sm text-gray-500"> or Dial *241# </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} NMB Bank Limited. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Registered Commercial Bank</p>
        </div>
      </div>
    </footer>
  );
}
