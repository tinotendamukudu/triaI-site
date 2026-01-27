'use client';

import { FileText, Download, TrendingUp, Calendar, ArrowRight } from 'lucide-react';
import Button from '../buttons/Button';

const CURRENT_REPORTS = [
    { title: "Q3 2025 Financial Results", date: "Oct 24, 2025", type: "PDF", size: "2.4 MB" },
    { title: "H1 2025 Interim Report", date: "Jul 15, 2025", type: "PDF", size: "3.1 MB" },
    { title: "Q1 2025 Trading Update", date: "Apr 10, 2025", type: "PDF", size: "1.8 MB" },
];

const ANNUAL_REPORTS = [
    { year: "2024", title: "Integrated Annual Report 2024", image: "/report-cover-2024.jpg" }, // improved placeholder logic would be better
    { year: "2023", title: "Annual Report & Accounts 2023", image: "/report-cover-2023.jpg" },
    { year: "2022", title: "Sustainability Report 2022", image: "/report-cover-2022.jpg" },
];

export default function FinancialReports() {
    return (
        <section className="py-20 bg-gray-50 font-sans">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Financial Reporting</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Access our latest financial statements, presentations, and annual reports to track our performance.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Current Reports Section */}
                    <div className="bg-white rounded-3xl p-8 border border-gray-300/50">
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-blue-100 rounded-xl text-primary">
                                    <TrendingUp size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Current Reports</h3>
                            </div>
                            <Button variant="outline" className="!px-4 !py-2 text-sm">View Archive</Button>
                        </div>

                        <div className="space-y-4">
                            {CURRENT_REPORTS.map((report, idx) => (
                                <div key={idx} className="group flex items-center justify-between p-4 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-200 hover:shadow-md transition-all duration-300 cursor-pointer">
                                    <div className="flex items-center gap-4">
                                        <div className="h-12 w-12 rounded-lg bg-red-100 flex items-center justify-center text-red-600 group-hover:scale-110 transition-transform">
                                            <FileText size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">{report.title}</h4>
                                            <p className="text-xs text-gray-500 mt-1 flex items-center gap-2">
                                                <Calendar size={12} /> {report.date} • {report.type} ({report.size})
                                            </p>
                                        </div>
                                    </div>
                                    <div className="p-2 rounded-full text-gray-400 group-hover:text-primary group-hover:bg-blue-50 transition-all">
                                        <Download size={20} />
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                         <div className="mt-8 pt-6 border-t border-gray-100">
                             <Button variant="outline" className="w-full flex items-center justify-center gap-2 group">
                                 Read More Financial News <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                             </Button>
                         </div>
                    </div>

                    {/* Annual Reports Section */}
                    <div className="bg-white rounded-3xl p-8 border border-gray-300/50">
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-secondary/10 rounded-xl text-secondary-dark">
                                    <FileText size={24} className="text-secondary" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Annual Reports</h3>
                            </div>
                            <span className="text-sm font-semibold text-primary cursor-pointer hover:underline">View All Years</span>
                        </div>

                        <div className="space-y-6">
                             {/* Featured Latest Report */}
                             <div className="relative overflow-hidden rounded-2xl bg-primary text-white p-6 flex flex-col sm:flex-row gap-6 items-center">
                                 <div className="absolute top-0 right-0 w-32 h-32 bg-secondary opacity-20 rounded-full blur-2xl transform translate-x-10 -translate-y-10"></div>
                                 
                                 <div className="flex-shrink-0 w-24 h-32 bg-white/10 rounded-lg border border-white/20 flex items-center justify-center shadow-lg transform -rotate-3">
                                     <span className="font-bold text-lg opacity-80">2024</span>
                                 </div>
                                 
                                 <div className="flex-1 text-center sm:text-left z-10">
                                     <div className="inline-block px-2 py-1 bg-secondary text-primary text-xs font-bold rounded mb-2">LATEST</div>
                                     <h4 className="text-xl font-bold mb-2">Integrated Annual Report 2024</h4>
                                     <p className="text-blue-200 text-sm mb-4">Comprehensive overview of our strategy, governance, and performance.</p>
                                     <button className="text-sm font-bold flex items-center gap-2 hover:text-secondary transition-colors">
                                         Download PDF <ArrowRight size={16} />
                                     </button>
                                 </div>
                             </div>

                             {/* Previous Years List */}
                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {ANNUAL_REPORTS.slice(1).map((report, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors border border-dashed border-gray-200 cursor-pointer group">
                                         <div className="h-10 w-10 flex items-center justify-center bg-gray-100 rounded-lg text-xs font-bold text-gray-500 group-hover:bg-primary group-hover:text-white transition-colors">
                                             {report.year}
                                         </div>
                                         <div className="flex-1 min-w-0">
                                             <p className="text-sm font-medium text-gray-900 truncate">{report.title}</p>
                                         </div>
                                         <Download size={16} className="text-gray-400 group-hover:text-primary" />
                                    </div>
                                ))}
                             </div>
                             
                             <div className="mt-8 pt-6 border-t border-gray-100">
                                 <Button variant="outline" className="w-full flex items-center justify-center gap-2 group">
                                     View All Annual Reports <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                 </Button>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
