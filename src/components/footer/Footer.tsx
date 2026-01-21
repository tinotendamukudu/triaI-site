import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

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
            {/* Store Badges */}
            <Link href="#" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <img 
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                    alt="Download on the App Store" 
                    className="h-10 w-auto" 
                />
            </Link>
            <Link href="#" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                    alt="Get it on Google Play" 
                    className="h-10 w-auto" 
                />
            </Link>
          </div>
        </div>

        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
            
          {/* Column 1: Quick Links */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-3">
                <li><Link href="/" className="text-gray-600 hover:text-secondary hover:underline transition-colors">Home</Link></li>
                <li><Link href="/about" className="text-gray-600 hover:text-secondary hover:underline transition-colors">About Us</Link></li>
                <li><Link href="/personal" className="text-gray-600 hover:text-secondary hover:underline transition-colors">Personal Banking</Link></li>
                <li><Link href="/business" className="text-gray-600 hover:text-secondary hover:underline transition-colors">Business Banking</Link></li>
                <li><Link href="/investor-relations" className="text-gray-600 hover:text-secondary hover:underline transition-colors">Investor Relations</Link></li>
                <li><Link href="/careers" className="text-gray-600 hover:text-secondary hover:underline transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Column 2: Locations */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6 text-lg">Locations</h3>
            <div className="text-gray-600 space-y-4">
                <p>First Floor, Unity Court</p>
                <p>Cnr 1st Street & Kwame Nkrumah</p>
                <p>Harare, Zimbabwe</p>
            </div>

            <h3 className="font-bold text-gray-900 mt-8 mb-6 text-lg">Get In Touch</h3>
            <div className="text-gray-600 space-y-2">
                 <p className="hover:text-secondary transition-colors"><a href="mailto:support@nmb.co.zw">support@nmb.co.zw</a></p>
                 <p>+263 772 241 241</p>
                 <p>086 770 08686</p>
            </div>
          </div>

           {/* Column 3: Branch Locator */}
           <div>
             <h3 className="font-bold text-gray-900 mb-6 text-lg">Branch Locator</h3>
             <p className="text-gray-600 mb-4">Find your nearest branch or ATM for convenient banking services.</p>
             <Link href="/locator" className="inline-flex items-center text-secondary font-bold hover:underline gap-2">
                Find a Branch or ATM
                <span aria-hidden="true">&rarr;</span>
             </Link>
           </div>

           {/* Column 4: Social & Legal */}
           <div className="space-y-8">
             <div>
                <h3 className="font-bold text-gray-900 mb-6 text-lg">Stay Connected</h3>
                <div className="flex gap-4">
                    <Link href="#" className="bg-blue-600 text-white p-2.5 rounded-full hover:bg-blue-700 transition-transform hover:-translate-y-1">
                        <FaFacebookF size={18} />
                    </Link>
                    <Link href="#" className="bg-black text-white p-2.5 rounded-full hover:bg-gray-800 transition-transform hover:-translate-y-1">
                        <FaTwitter size={18} />
                    </Link>
                    <Link href="#" className="bg-blue-800 text-white p-2.5 rounded-full hover:bg-blue-900 transition-transform hover:-translate-y-1">
                        <FaLinkedinIn size={18} />
                    </Link>
                    <Link href="#" className="bg-pink-600 text-white p-2.5 rounded-full hover:bg-pink-700 transition-transform hover:-translate-y-1">
                        <FaInstagram size={18} />
                    </Link>
                </div>
            </div>
            
            <div className="pt-4 border-t border-gray-100">
                <ul className="space-y-2 text-sm">
                    <li><Link href="/privacy" className="text-gray-500 hover:text-secondary hover:underline">Privacy Policy</Link></li>
                    <li><Link href="/terms" className="text-gray-500 hover:text-secondary hover:underline">Terms & Conditions</Link></li>
                    <li><Link href="/security" className="text-gray-500 hover:text-secondary hover:underline">Security Center</Link></li>
                </ul>
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
