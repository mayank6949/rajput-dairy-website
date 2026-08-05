import React from 'react';
import { ShieldCheck, CheckCircle2, Award, Clock, ArrowRight, MessageCircle } from 'lucide-react';
import { PageRoute } from '../types';

interface ManufacturingViewProps {
  onRouteChange: (route: PageRoute) => void;
}

export const ManufacturingView: React.FC<ManufacturingViewProps> = ({ onRouteChange }) => {
  const whatsappNumber = '919839000000';

  const steps = [
    {
      step: 'STEP 1',
      title: 'Fresh Milk Procurement',
      desc: 'Milk is sourced daily from verified, trusted local village farmers around Varanasi, forming the fresh unadulterated foundation of every product.'
    },
    {
      step: 'STEP 2',
      title: 'Quality & Fat Testing',
      desc: 'Each raw milk batch undergoes strict fat testing, lactometer density checks, and purity validation before being cleared for processing.'
    },
    {
      step: 'STEP 3',
      title: 'Hygienic Paneer Machine Pressing',
      desc: 'Fresh paneer is prepared using pasteurized milk and shaped using dedicated automated pneumatic paneer presses in clean stainless-steel chambers.'
    },
    {
      step: 'STEP 4',
      title: 'Gas-Fired Khowa Preparation',
      desc: 'Khowa is condensed in heavy gas-fired kettles equipped with continuous electric rotating stirrers. This eliminates scorching and produces uniform sweetness.'
    },
    {
      step: 'STEP 5',
      title: 'Slow-Heat Ghee Clarification',
      desc: 'Ghee is clarified using controlled temperature pots, alongside traditional Bilona method for selected small batches to yield maximum grainy texture.'
    },
    {
      step: 'STEP 6',
      title: 'Food-Grade Sealed Packaging',
      desc: 'Products are packed in airtight, food-grade jars and sealed pouches to preserve fresh aroma and protect against environmental dust.'
    },
    {
      step: 'STEP 7',
      title: 'Chilled Storage & Cold Chain',
      desc: 'Paneer, curd, cream, and butter are immediately transferred to dedicated 2°C–4°C refrigeration units to maintain moisture and bacterial safety.'
    },
    {
      step: 'STEP 8',
      title: 'Fresh Morning Delivery',
      desc: 'Same-day morning delivery is dispatched across Varanasi for orders meeting delivery terms, ensuring maximum freshness on your table.'
    }
  ];

  return (
    <div className="pt-24 pb-20 font-poppins bg-[#FAFAFA] space-y-16">
      
      {/* Hero Banner */}
      <section className="py-16 bg-neutral-900 text-white text-center space-y-4">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-xs font-semibold text-[#C9A227] uppercase tracking-widest block mb-2">
            Transparency & Quality
          </span>
          <h1 className="font-cinzel font-extrabold text-4xl sm:text-5xl">
            Crafted with Care, Every Step of the Way
          </h1>
          <p className="text-sm sm:text-base text-gray-300 font-light max-w-2xl mx-auto mt-2">
            From trusted village milk to premium dairy products served across Varanasi.
          </p>
        </div>
      </section>

      {/* Production Journey Vertical Timeline */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-semibold text-[#F57C00] uppercase tracking-widest">
            8-Stage Process
          </span>
          <h2 className="font-cinzel font-bold text-3xl text-[#222222]">
            Our Manufacturing Journey
          </h2>
        </div>

        <div className="relative border-l-2 border-[#C9A227]/40 pl-6 sm:pl-10 space-y-10 ml-4 sm:ml-8">
          {steps.map((s, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1 w-6 h-6 rounded-full bg-[#C9A227] text-white flex items-center justify-center font-bold text-xs ring-4 ring-white shadow-md">
                {idx + 1}
              </div>

              <div className="bg-white p-6 rounded-[18px] border border-[#ECECEC] shadow-sm space-y-2 group-hover:border-[#F57C00] transition-colors">
                <span className="text-[11px] font-semibold text-[#F57C00] uppercase tracking-widest block">
                  {s.step}
                </span>
                <h3 className="font-cinzel font-bold text-xl text-[#222222]">
                  {s.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-poppins">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quality Badges */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-[24px] border border-[#ECECEC] shadow-sm text-center space-y-6">
          <h3 className="font-cinzel font-bold text-2xl text-[#222222]">
            Certified Quality Standards
          </h3>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-semibold text-gray-800">
            {[
              '✔ Hygienic SS Production',
              '✔ FSSAI Certified Facility',
              '✔ Daily Fat & Density Testing',
              '✔ Zero Chemical Preservatives',
              '✔ Food-Grade Packaging'
            ].map((badge, idx) => (
              <span key={idx} className="bg-amber-50 text-amber-900 px-4 py-2 rounded-full border border-amber-200">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#2E7D32] to-emerald-800 text-white rounded-[24px] p-10 text-center space-y-6 shadow-xl">
          <h2 className="font-cinzel font-bold text-3xl sm:text-4xl">
            Experience Dairy Crafted with Care
          </h2>
          <p className="text-sm max-w-xl mx-auto font-light text-emerald-100">
            Have questions about our production process or need a bulk supply? Talk to our team directly on WhatsApp.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello Rajput Dairy, I would like to inquire about your manufacturing process and product supply.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#2E7D32] hover:bg-gray-100 font-semibold text-sm px-7 py-3.5 rounded-[14px] shadow-md transition-transform active:scale-95 inline-flex items-center gap-2"
              id="mfg-whatsapp-cta"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Order on WhatsApp</span>
            </a>

            <button
              onClick={() => {
                onRouteChange('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-emerald-900/60 hover:bg-emerald-900 text-white border border-white/30 font-semibold text-sm px-7 py-3.5 rounded-[14px] transition-transform active:scale-95 inline-flex items-center gap-2"
              id="mfg-contact-cta"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
