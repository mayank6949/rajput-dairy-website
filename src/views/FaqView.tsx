import React, { useState } from 'react';
import { FAQS } from '../data/faqs';
import { ChevronDown, Search, MessageCircle, Phone } from 'lucide-react';
import { PageRoute } from '../types';

interface FaqViewProps {
  onRouteChange: (route: PageRoute) => void;
}

export const FaqView: React.FC<FaqViewProps> = ({ onRouteChange }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeFaqId, setActiveFaqId] = useState<string | null>(FAQS[0]?.id || null);

  const categories = ['All', 'General', 'Products', 'Delivery', 'Bulk Orders', 'Quality', 'Payments'];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const whatsappNumber = '919839000000';

  return (
    <div className="pt-24 pb-20 font-poppins bg-[#FAFAFA] space-y-12">
      
      {/* Hero Banner */}
      <section className="py-16 bg-neutral-900 text-white text-center space-y-4">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-xs font-semibold text-[#C9A227] uppercase tracking-widest block mb-2">
            Help Center
          </span>
          <h1 className="font-cinzel font-extrabold text-4xl sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="text-sm sm:text-base text-gray-300 font-light max-w-2xl mx-auto mt-2">
            Everything you need to know about our products, delivery terms, bulk orders, and hygiene standards.
          </p>
        </div>
      </section>

      {/* Search & Category Filters */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search questions (e.g. paneer, delivery, bulk quote, cow ghee)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 rounded-[16px] border border-[#ECECEC] bg-white text-sm shadow-sm focus:outline-none focus:border-[#F57C00]"
            id="faq-search-input"
          />
        </div>

        {/* Category Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-[#F57C00] text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-[#ECECEC]'
              }`}
              id={`faq-cat-${cat.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Accordion List */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {filteredFaqs.length === 0 ? (
          <div className="bg-white p-8 rounded-[20px] text-center border border-[#ECECEC] space-y-2">
            <p className="font-semibold text-gray-800">No matching questions found.</p>
            <p className="text-xs text-gray-500">
              Try adjusting your search terms or contact us directly on WhatsApp.
            </p>
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isOpen = activeFaqId === faq.id;
            return (
              <div key={faq.id} className="bg-white border border-[#ECECEC] rounded-[18px] overflow-hidden shadow-sm">
                <button
                  onClick={() => setActiveFaqId(isOpen ? null : faq.id)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-poppins font-semibold text-sm sm:text-base text-[#222222] hover:bg-gray-50/80 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-[10px] uppercase font-bold text-[#F57C00] bg-orange-50 px-2 py-0.5 rounded-full border border-orange-200 shrink-0">
                      {faq.category}
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown className={`w-5 h-5 text-[#F57C00] transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="p-5 bg-[#FAFAFA] border-t border-[#ECECEC] text-xs sm:text-sm text-gray-700 leading-relaxed font-poppins animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })
        )}
      </section>

      {/* Have More Questions CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-[24px] border border-[#ECECEC] text-center space-y-4 shadow-sm">
          <h3 className="font-cinzel font-bold text-2xl text-[#222222]">
            Still Have Questions?
          </h3>
          <p className="text-xs sm:text-sm text-gray-600">
            Our team is happy to answer any questions about our products, delivery areas, or custom orders.
          </p>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello Rajput Dairy, I have a question regarding your products.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2E7D32] hover:bg-[#256628] text-white font-semibold text-sm px-6 py-3.5 rounded-[14px] shadow-md transition-all inline-flex items-center gap-2"
            id="faq-whatsapp-cta"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </section>

    </div>
  );
};
