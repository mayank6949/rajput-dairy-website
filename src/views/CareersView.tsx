import React, { useState } from 'react';
import { Send, CheckCircle2, HeartHandshake, TrendingUp, ShieldCheck, Sparkles } from 'lucide-react';

export const CareersView: React.FC = () => {
  const [applicantState, setApplicantState] = useState({
    name: '',
    phone: '',
    email: '',
    position: 'General Application',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const whatsappNumber = '919839000000';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantState.name || !applicantState.phone) return;

    setSubmitted(true);
    const text = encodeURIComponent(
      `JOB APPLICATION:\nName: ${applicantState.name}\nPhone: ${applicantState.phone}\nEmail: ${applicantState.email || 'N/A'}\nPosition: ${applicantState.position}\nMessage: ${applicantState.message || 'General application'}`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="pt-24 pb-20 font-poppins bg-[#FAFAFA] space-y-16">
      
      {/* Hero Banner */}
      <section className="py-16 bg-neutral-900 text-white text-center space-y-4">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-xs font-semibold text-[#C9A227] uppercase tracking-widest block mb-2">
            Join Our Team
          </span>
          <h1 className="font-cinzel font-extrabold text-4xl sm:text-5xl">
            Build Your Career with Rajput Dairy
          </h1>
          <p className="text-sm sm:text-base text-gray-300 font-light max-w-2xl mx-auto mt-2">
            Be part of a 40+ year heritage brand committed to purity, quality craftsmanship, and human respect.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-semibold text-[#F57C00] uppercase tracking-widest">
            Work Culture
          </span>
          <h2 className="font-cinzel font-bold text-3xl text-[#222222]">
            Why Work at Rajput Dairy?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: HeartHandshake, title: 'Supportive Environment', desc: 'Family-like team culture based on mutual respect and honesty.' },
            { icon: TrendingUp, title: 'Growth Opportunities', desc: 'Learn modern food processing, quality control, and retail management.' },
            { icon: ShieldCheck, title: 'Traditional Values', desc: 'Rooted in 40 years of ethical business practices in Varanasi.' },
            { icon: Sparkles, title: 'Modern Work Standards', desc: 'Hygienic stainless-steel processing and automated machinery.' },
          ].map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div key={idx} className="bg-white p-6 rounded-[20px] border border-[#ECECEC] space-y-3 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-amber-50 text-[#C9A227] flex items-center justify-center font-bold">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="font-cinzel font-bold text-lg text-[#222222]">{item.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Vacancy Notice / Form */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-[24px] border border-[#ECECEC] shadow-sm space-y-6">
          
          <div className="bg-amber-50/60 p-4 rounded-[16px] border border-amber-200 text-xs text-amber-900 text-center space-y-1">
            <span className="font-bold block text-sm">Notice Regarding Openings:</span>
            <p>
              We are always interested in meeting passionate, hardworking individuals for production, quality control, store sales, and logistics. Feel free to submit your application below.
            </p>
          </div>

          <h3 className="font-cinzel font-bold text-xl text-[#222222] text-center">
            Submit Your Details / Resume
          </h3>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 p-6 rounded-[16px] text-center space-y-2 text-green-800">
              <CheckCircle2 className="w-8 h-8 text-[#2E7D32] mx-auto" />
              <p className="font-semibold text-base">Application Submitted!</p>
              <p className="text-xs text-gray-600">
                Your details have been forwarded to Mayank Singh on WhatsApp.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter full name"
                    value={applicantState.name}
                    onChange={(e) => setApplicantState({ ...applicantState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-[12px] border border-gray-300 focus:outline-none focus:border-[#F57C00] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98390 00000"
                    value={applicantState.phone}
                    onChange={(e) => setApplicantState({ ...applicantState, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-[12px] border border-gray-300 focus:outline-none focus:border-[#F57C00] text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@domain.com"
                    value={applicantState.email}
                    onChange={(e) => setApplicantState({ ...applicantState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-[12px] border border-gray-300 focus:outline-none focus:border-[#F57C00] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Position Interested In
                  </label>
                  <select
                    value={applicantState.position}
                    onChange={(e) => setApplicantState({ ...applicantState, position: e.target.value })}
                    className="w-full px-4 py-3 rounded-[12px] border border-gray-300 focus:outline-none focus:border-[#F57C00] text-sm bg-white"
                  >
                    <option value="General Application">General Application</option>
                    <option value="Store Retail Sales">Store Retail Sales</option>
                    <option value="Dairy Processing & Machine Operator">Dairy Processing & Machine Operator</option>
                    <option value="Quality Control Assistant">Quality Control Assistant</option>
                    <option value="Morning Delivery Logistics">Morning Delivery Logistics</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Brief Introduction / Past Experience
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your background, location in Varanasi, and work experience..."
                  value={applicantState.message}
                  onChange={(e) => setApplicantState({ ...applicantState, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-[12px] border border-gray-300 focus:outline-none focus:border-[#F57C00] text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#F57C00] hover:bg-[#e06c00] text-white font-semibold py-3.5 rounded-[14px] shadow-sm transition-all inline-flex items-center justify-center gap-2 text-sm"
                id="submit-careers-app-btn"
              >
                <Send className="w-4 h-4" />
                <span>Submit Job Application</span>
              </button>
            </form>
          )}

        </div>
      </section>

    </div>
  );
};
