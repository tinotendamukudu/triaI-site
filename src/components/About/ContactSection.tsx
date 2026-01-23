'use client';

import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';
import Button from '../buttons/Button';

export default function ContactSection() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 rounded-[3rem] bg-white text-gray-900 p-10 lg:p-16 border border-gray-300/50 overflow-hidden relative">
                    
                    {/* Decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-bl-full -mr-16 -mt-16 pointer-events-none"></div>

                    {/* Left: Contact Info */}
                    <div className="space-y-10 relative z-10">
                        <div>
                            <h2 className="text-3xl font-bold text-primary mb-4">Get in touch</h2>
                            <p className="text-gray-600 mb-8">Have questions or need assistance? Our dedicated support team is here to help you.</p>
                        </div>                     
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-gray-100 rounded-xl text-gray-600 flex-shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">24/7 Support Line</h3>
                                    <p className="text-gray-600">+263 772 241 241 / +263 8677 002 002</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-gray-100 rounded-xl text-gray-600 flex-shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Email Us</h3>
                                    <p className="text-gray-600">enquiries@nmbz.co.zw</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-gray-100 rounded-xl text-gray-600 flex-shrink-0">
                                    <MessageSquare size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">WhatsApp Banking</h3>
                                    <p className="text-gray-600">+263 775 710 000</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4">
                            <Button variant="outline" className="w-full sm:w-auto">
                                View Branch Locator
                            </Button>
                        </div>
                    </div>

                    {/* Right: Map / Visual */}
                    <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden bg-gray-200">
                        {/* Placeholder for Map or HQ Image */}
                         <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                            <div className="text-center p-8">
                                <MapPin size={48} className="text-primary mx-auto mb-4" />
                                <h3 className="font-bold text-xl text-primary">Head Office</h3>
                                <p className="text-gray-600 mt-2">Plot 19 F. C. Mullin Road,<br/> Alexandra Park, Harare</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
