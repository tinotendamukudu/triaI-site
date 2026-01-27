'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    category: 'Corporate News',
    title: "NMB Bank Named Best Digital Bank in Zimbabwe 2024",
    excerpt: "NMB Bank continues to lead the way in digital innovation, earning prestigious recognition for our seamless NMBConnect platform and customer-centric digital solutions.",
    date: 'Oct 24, 2024',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800', // Corporate meet/award vibe
  },
  {
    id: 2,
    category: 'Sustainability',
    title: "Driving Green Growth: NMB's Commitment to Sustainability",
    excerpt: "We are proud to announce our new eco-financing initiative, supporting sustainable business practices and green energy projects across the nation.",
    date: 'Nov 12, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800', // Nature/Green vibe
  },
  {
    id: 3,
    category: 'Financial Insights',
    title: "Quarterly Financial Results: Strong Growth Amidst Challenges",
    excerpt: "NMB Bank reports solid third-quarter earnings, driven by increased lending activity and strong performance in our digital channels.",
    date: 'Dec 05, 2024',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800', // Finance/Graph vibe
  }
];

export default function Newsroom() {
  return (
    <section className="py-24 bg-gray-50 font-sans">
      <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h4 className="text-secondary font-bold uppercase tracking-wider mb-2 text-sm">Newsroom</h4>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Latest Updates & Insights
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Stay informed with the latest news, financial reports, and stories from NMB Bank.
            </p>
          </div>
          
          <Link 
            href="/newsroom" 
            className="group inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-semibold rounded-full border border-gray-200 shadow-sm hover:shadow-md hover:border-secondary hover:text-secondary transition-all duration-300"
          >
            View All News
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, idx) => (
            <article 
              key={item.id} 
              className="group bg-white rounded-2xl overflow-hidden transition-all duration-500 flex flex-col h-full border border-gray-300/50 hover:border-secondary/50"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-secondary uppercase tracking-wider shadow-sm">
                  {item.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {item.date}
                  </span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full" />
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {item.readTime}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-secondary transition-colors line-clamp-2">
                  <Link href={`/news/${item.id}`} className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {item.title}
                  </Link>
                </h3>
                
                <p className="text-gray-600 line-clamp-3 mb-6 flex-grow">
                  {item.excerpt}
                </p>

                <div className="flex items-center text-secondary font-semibold group-hover:translate-x-1 transition-transform duration-300">
                  Read Article
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
