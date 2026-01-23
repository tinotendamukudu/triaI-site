import React from 'react';
import Button from '../buttons/Button';
import { Smartphone, Globe, Hash, ArrowRight } from 'lucide-react';

export default function MobileAppTextContent() {
  return (
    <div className="space-y-8 max-w-xl">
      <div className="space-y-4">
        <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-[1.4]">
          Banking at your <br/>
          <span className="text-secondary relative inline-block">
            fingertips
          </span>
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed font-normal">
          NMBConnect gives you the freedom to bank on your own terms. Whether you prefer an app, a web browser, or USSD, we have you covered.
        </p>
      </div>

      {/* Feature Channels */}
      <div className="grid gap-4">
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-gray-100 group">
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white shadow-sm text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                  <Smartphone className="h-5 w-5" />
              </div>
              <div>
                  <h3 className="font-semibold text-gray-900">Mobile App</h3>
                  <p className="text-sm text-gray-500">Secure banking on iOS & Android.</p>
              </div>
          </div>

           <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-gray-100 group">
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white shadow-sm text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                  <Globe className="h-5 w-5" />
              </div>
              <div>
                  <h3 className="font-semibold text-gray-900">Internet Banking</h3>
                  <p className="text-sm text-gray-500">Full desktop experience, anywhere.</p>
              </div>
          </div>

           <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-gray-100 group">
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white shadow-sm text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                  <Hash className="h-5 w-5" />
              </div>
              <div>
                  <h3 className="font-semibold text-gray-900">USSD *241#</h3>
                  <p className="text-sm text-gray-500">No data? No problem. Dial *241#.</p>
              </div>
          </div>
      </div>

      <div className="pt-4 flex items-center gap-4">
           <Button variant="primary" className="!px-8 !py-3 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
               Get Started <ArrowRight className="h-4 w-4" />
           </Button>
      </div>
    </div>
  );
}
