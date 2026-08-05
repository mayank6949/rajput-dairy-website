import React from 'react';
import { REVIEWS } from '../data/reviews';
import { Star, MessageCircle, ExternalLink, ShieldCheck } from 'lucide-react';
import { PageRoute } from '../types';

interface ReviewsViewProps {
  onRouteChange: (route: PageRoute) => void;
}

export const ReviewsView: React.FC<ReviewsViewProps> = () => {
  const whatsappNumber = '919839000000';

  return (
    <div className="pt-24 pb-20 font-poppins bg-[#FAFAFA] space-y-16">
      
      {/* Hero Banner */}
      <section className="py-16 bg-neutral-900 text-white text-center space-y-4">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-xs font-semibold text-[#C9A227] uppercase tracking-widest block mb-2">
            Four Decades of Trust
          </span>
          <h1 className="font-cinzel font-extrabold text-4xl sm:text-5xl">
            Loved by Generations
          </h1>
          <p className="text-sm sm:text-base text-gray-300 font-light max-w-2xl mx-auto mt-2">
            For over four decades, our customers in Varanasi have been the heart of our journey.
          </p>
        </div>
      </section>

      {/* Google Rating Card */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-[24px] border border-[#ECECEC] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="font-cinzel font-bold text-4xl text-[#222222]">4.9</span>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
              </div>
            </div>
            <p className="font-bold text-sm text-gray-800">Verified Google Reviews</p>
            <p className="text-xs text-gray-500">Based on authentic customer feedback in Varanasi</p>
          </div>

          <a
            href="https://maps.google.com/?q=Rajput+Dairy+Lanka+Varanasi"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#F57C00] hover:bg-[#e06c00] text-white font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-[14px] shadow-sm transition-all inline-flex items-center gap-2"
            id="write-google-review-btn"
          >
            <span>Write a Google Review</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Review Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((rev) => (
            <div key={rev.id} className="bg-white p-6 rounded-[20px] border border-[#ECECEC] shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  {rev.isVerified && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#2E7D32] bg-green-50 px-2 py-0.5 rounded-full">
                      <ShieldCheck className="w-3 h-3" />
                      Verified
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-gray-700 italic leading-relaxed">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                <div>
                  <p className="font-bold text-[#222222] font-poppins">{rev.author}</p>
                  <p className="text-gray-500 text-[11px]">{rev.role || rev.location}</p>
                </div>
                <span className="text-[10px] text-gray-400">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Statistics Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-neutral-900 text-white p-8 sm:p-12 rounded-[24px] grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <span className="font-cinzel font-bold text-3xl sm:text-4xl text-[#C9A227]">1984</span>
            <p className="text-xs text-gray-300">Established in Varanasi</p>
          </div>
          <div className="space-y-1">
            <span className="font-cinzel font-bold text-3xl sm:text-4xl text-[#F57C00]">10,000+</span>
            <p className="text-xs text-gray-300">Happy Local Families</p>
          </div>
          <div className="space-y-1">
            <span className="font-cinzel font-bold text-3xl sm:text-4xl text-[#C9A227]">100+</span>
            <p className="text-xs text-gray-300">Hotels & Sweet Shops Supplied</p>
          </div>
          <div className="space-y-1">
            <span className="font-cinzel font-bold text-3xl sm:text-4xl text-[#F57C00]">4.9 ★</span>
            <p className="text-xs text-gray-300">Average Satisfaction Score</p>
          </div>
        </div>
      </section>

    </div>
  );
};
