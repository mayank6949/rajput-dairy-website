import React from 'react';
import { Award, ShieldCheck, Sparkles, ArrowRight, MessageCircle } from 'lucide-react';
import { PageRoute } from '../types';
import { COMPANY_INFO } from '../data/company';

interface AboutViewProps {
  onRouteChange: (route: PageRoute) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onRouteChange }) => {
  return (
    <div className="pt-24 pb-20 font-poppins bg-[#FAFAFA] space-y-16">
      
      {/* Hero Banner */}
      <section className="relative py-20 bg-neutral-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src='/images/IMG_8013.PNG'
            alt="Rajput Dairy History"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="text-xs text-[#C9A227] font-semibold uppercase tracking-widest">
            Home → About Us
          </div>
          <h1 className="font-cinzel font-extrabold text-4xl sm:text-6xl">
            About {COMPANY_INFO.name}
          </h1>
          <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto font-light">
            {COMPANY_INFO.tagline} — A Legacy of Purity, Trust & Craftsmanship
          </p>
        </div>
      </section>

      {/* SECTION 1 — Our Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white p-8 sm:p-12 rounded-[24px] border border-[#ECECEC] shadow-sm">
          
          <div className="relative bg-[#7B5012] rounded-[20px] p-6 overflow-hidden border border-gray-200">
            <img
              src="/images/rajput-dairy-logo.svg"
              alt="Rajput Dairy Heritage"
              referrerPolicy="no-referrer"
              className="w-full h-[380px] object-contain"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-[14px] text-xs text-gray-800 border border-gray-200">
              <span className="font-bold block text-sm font-cinzel text-[#222222]">{COMPANY_INFO.name}</span>
              <span>{COMPANY_INFO.tagline} • {COMPANY_INFO.shortAddress}</span>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold text-[#F57C00] uppercase tracking-widest">
                Our Heritage Story
              </span>
              <h2 className="font-cinzel font-bold text-3xl text-[#222222]">
                From a Small Beginning to a Trusted Name
              </h2>
            </div>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Rajput Dairy was established in 1984 with a clear purpose—to provide families with pure and authentic dairy products at a time when quality dairy options were hard to find in Varanasi.
            </p>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Built on honesty, consistency, and uncompromising quality, our business grew organically through customer word-of-mouth trust across Varanasi.
            </p>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Located at {COMPANY_INFO.address}, Rajput Dairy continues this journey combining traditional Indian dairy craftsmanship with modern food-grade machinery and strict hygiene.
            </p>

            <div className="pt-2 flex items-center gap-6 text-xs text-gray-600 font-poppins">
              <div>
                <span className="font-bold text-[#C9A227] text-lg font-cinzel block">40+</span>
                <span>Years of Legacy</span>
              </div>
              <div className="h-8 w-[1px] bg-gray-200" />
              <div>
                <span className="font-bold text-[#F57C00] text-lg font-cinzel block">10,000+</span>
                <span>Varanasi Families Served</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2 — Our Journey Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-2">
          <span className="text-xs font-semibold text-[#C9A227] uppercase tracking-widest">
            Milestones
          </span>
          <h2 className="font-cinzel font-bold text-3xl text-[#222222]">
            Our Journey Timeline
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { year: '1984', title: 'The Genesis', desc: 'Founded in Varanasi as a neighborhood fresh dairy.' },
            { year: '1995', title: 'Trusted Name', desc: 'Became preferred choice for local households & sweets.' },
            { year: '2005', title: 'Range Expansion', desc: 'Introduced machine-pressed paneer & khowa kettles.' },
            { year: '2015', title: 'Modernization', desc: 'Adopted stainless steel machinery & cold chain.' },
            { year: '2026', title: 'Verified Standard', desc: 'Official product portfolio with digital showcase.' },
            { year: 'Future', title: 'Regional Scale', desc: 'Expanding trust and purity across Eastern UP.' },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-5 rounded-[18px] border border-[#ECECEC] space-y-2 hover:border-[#C9A227] transition-all">
              <span className="font-cinzel font-bold text-2xl text-[#C9A227] block">{item.year}</span>
              <h4 className="font-cinzel font-semibold text-sm text-[#222222]">{item.title}</h4>
              <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3 — Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white p-8 rounded-[20px] border border-[#ECECEC] space-y-4 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-amber-50 text-[#C9A227] flex items-center justify-center font-bold">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-cinzel font-bold text-2xl text-[#222222]">
              Our Mission
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Deliver fresh, authentic, and unadulterated dairy products prepared with uncompromising quality, traditional craftsmanship, and hygienic care to every household and business in Varanasi.
            </p>
          </div>

          <div className="bg-white p-8 rounded-[20px] border border-[#ECECEC] space-y-4 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-orange-50 text-[#F57C00] flex items-center justify-center font-bold">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-cinzel font-bold text-2xl text-[#222222]">
              Our Vision
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              To evolve into one of Northern India’s most revered heritage dairy brands while preserving the timeless values of purity, family trust, and craftsmanship established in 1984.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 4 — Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-2">
          <span className="text-xs font-semibold text-[#F57C00] uppercase tracking-widest">
            Guided Principles
          </span>
          <h2 className="font-cinzel font-bold text-3xl text-[#222222]">
            Our Core Brand Values
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {[
            { label: 'Purity', desc: 'Zero adulteration or chemicals' },
            { label: 'Trust', desc: 'Built over four decades' },
            { label: 'Freshness', desc: 'Daily morning preparation' },
            { label: 'Quality', desc: 'Rigorous fat & lab testing' },
            { label: 'Tradition', desc: 'Authentic Indian recipes' },
            { label: 'Commitment', desc: 'Customer satisfaction first' },
          ].map((val, idx) => (
            <div key={idx} className="bg-white p-5 rounded-[18px] border border-[#ECECEC] text-center space-y-2 hover:border-[#C9A227] hover:shadow-md transition-all group">
              <div className="w-10 h-10 rounded-full bg-gray-50 text-[#C9A227] group-hover:bg-[#C9A227] group-hover:text-white flex items-center justify-center mx-auto transition-colors">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-cinzel font-bold text-base text-[#222222]">{val.label}</h4>
              <p className="text-[11px] text-gray-500">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6 — Final CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#F57C00] to-amber-600 text-white rounded-[24px] p-10 sm:p-14 text-center space-y-6 shadow-xl">
          <h2 className="font-cinzel font-bold text-3xl sm:text-4xl">
            Experience the Taste of Tradition
          </h2>
          <p className="text-sm sm:text-base max-w-xl mx-auto font-light text-amber-100">
            Taste the unadulterated freshness that Varanasi has trusted since 1984. Place your order on WhatsApp or browse our signature products.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp.fullWithCountry}?text=${encodeURIComponent('Hello Rajput Dairy, I would like to order fresh dairy products.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2E7D32] hover:bg-[#256628] text-white font-semibold text-sm px-7 py-3.5 rounded-[14px] shadow-md transition-transform active:scale-95 inline-flex items-center gap-2"
              id="about-cta-whatsapp"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Order on WhatsApp</span>
            </a>

            <button
              onClick={() => {
                onRouteChange('products');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-white text-[#F57C00] hover:bg-gray-100 font-semibold text-sm px-7 py-3.5 rounded-[14px] shadow-md transition-transform active:scale-95 inline-flex items-center gap-2"
              id="about-cta-products"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
