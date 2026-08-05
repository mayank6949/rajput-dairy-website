import React, { useState } from 'react';
import { MessageCircle, CheckCircle2, Send, Building2, UtensilsCrossed, Hotel, Coffee, Store, Users } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export const BulkOrdersView: React.FC = () => {
  const [b2bState, setB2bState] = useState({
    businessName: '',
    contactPerson: '',
    phone: '',
    businessType: 'Hotel / Restaurant',
    monthlyRequirement: '50kg - 100kg',
    productsRequired: [] as string[],
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const productOptions = [
    'Cow Desi Ghee',
    'Buffalo Desi Ghee',
    'Fresh Paneer',
    'White Butter',
    'Fresh Cream',
    'Khowa (Mawa)',
    'Fresh Curd',
    'Separated Curd',
    'Low Fat Curd'
  ];

  const handleProductToggle = (prod: string) => {
    if (b2bState.productsRequired.includes(prod)) {
      setB2bState({
        ...b2bState,
        productsRequired: b2bState.productsRequired.filter((p) => p !== prod)
      });
    } else {
      setB2bState({
        ...b2bState,
        productsRequired: [...b2bState.productsRequired, prod]
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!b2bState.businessName || !b2bState.phone) return;

    setFormSubmitted(true);
    const text = encodeURIComponent(
      `B2B BULK QUOTE REQUEST:\nBusiness Name: ${b2bState.businessName}\nContact Person: ${b2bState.contactPerson}\nPhone: ${b2bState.phone}\nBusiness Type: ${b2bState.businessType}\nEst. Monthly Volume: ${b2bState.monthlyRequirement}\nProducts Needed: ${b2bState.productsRequired.join(', ') || 'All Dairy Range'}\nDetails: ${b2bState.message || 'Standard B2B Quote'}`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp.fullWithCountry}?text=${text}`, '_blank');
  };

  return (
    <div className="pt-24 pb-20 font-poppins bg-[#FAFAFA] space-y-16">
      
      {/* Hero Banner */}
      <section className="py-16 bg-neutral-900 text-white text-center space-y-4">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-xs font-semibold text-[#C9A227] uppercase tracking-widest block mb-2">
            Commercial & Wholesale
          </span>
          <h1 className="font-cinzel font-extrabold text-4xl sm:text-5xl">
            Bulk Orders & Business Supply
          </h1>
          <p className="text-sm sm:text-base text-gray-300 font-light max-w-2xl mx-auto mt-2">
            Reliable, morning-fresh dairy supply for hotels, restaurants, sweet shops, caterers, and wholesalers across Varanasi.
          </p>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-semibold text-[#F57C00] uppercase tracking-widest">
            Commercial Partners
          </span>
          <h2 className="font-cinzel font-bold text-3xl text-[#222222]">
            Who We Proudly Serve
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {[
            { icon: Hotel, title: 'Hotels', desc: '4-Star & Heritage Stays' },
            { icon: UtensilsCrossed, title: 'Restaurants', desc: 'Fine Dining & Mughlai' },
            { icon: Store, title: 'Sweet Shops', desc: 'Halwais & Mithai Brands' },
            { icon: Coffee, title: 'Cafés & Bakeries', desc: 'Cream & White Butter' },
            { icon: Building2, title: 'Wholesalers', desc: 'Regional Distributors' },
            { icon: Users, title: 'Event Caterers', desc: 'Weddings & Banquets' },
          ].map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div key={idx} className="bg-white p-5 rounded-[18px] border border-[#ECECEC] text-center space-y-2 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-amber-50 text-[#C9A227] flex items-center justify-center mx-auto">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="font-cinzel font-bold text-base text-[#222222]">{item.title}</h3>
                <p className="text-[11px] text-gray-500">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Choose Rajput Dairy for B2B */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-12 rounded-[24px] border border-[#ECECEC] shadow-sm space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="font-cinzel font-bold text-2xl sm:text-3xl text-[#222222]">
              Why Commercial Buyers Trust {COMPANY_INFO.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-xs sm:text-sm font-poppins text-gray-700">
            <div className="p-4 bg-[#FAFAFA] rounded-[14px] border border-gray-200 space-y-1">
              <span className="font-bold text-[#F57C00] block">Daily Morning Dispatch</span>
              <p>Fresh supply dispatched early every morning.</p>
            </div>
            <div className="p-4 bg-[#FAFAFA] rounded-[14px] border border-gray-200 space-y-1">
              <span className="font-bold text-[#F57C00] block">Consistent Fat & Softness</span>
              <p>No unexpected variation between daily batches.</p>
            </div>
            <div className="p-4 bg-[#FAFAFA] rounded-[14px] border border-gray-200 space-y-1">
              <span className="font-bold text-[#F57C00] block">FSSAI Compliance</span>
              <p>Lab-tested quality for luxury hotel standards.</p>
            </div>
            <div className="p-4 bg-[#FAFAFA] rounded-[14px] border border-gray-200 space-y-1">
              <span className="font-bold text-[#F57C00] block">Competitive B2B Pricing</span>
              <p>Wholesale volume margins for long-term accounts.</p>
            </div>
            <div className="p-4 bg-[#FAFAFA] rounded-[14px] border border-gray-200 space-y-1">
              <span className="font-bold text-[#F57C00] block">Direct Owner Support</span>
              <p>Direct contact line at {COMPANY_INFO.phones[0].display}.</p>
            </div>
          </div>
        </div>
      </section>

      {/* B2B Quote Form */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-[24px] border border-[#ECECEC] shadow-lg space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-semibold text-[#F57C00] uppercase tracking-widest">
              Request Commercial Quote
            </span>
            <h2 className="font-cinzel font-bold text-2xl sm:text-3xl text-[#222222]">
              B2B Bulk Enquiry Form
            </h2>
            <p className="text-xs text-gray-500">
              Submit your requirements and our team will get back to you with custom volume rates.
            </p>
          </div>

          {formSubmitted ? (
            <div className="bg-green-50 border border-green-200 p-6 rounded-[16px] text-center space-y-2 text-green-800">
              <CheckCircle2 className="w-8 h-8 text-[#2E7D32] mx-auto" />
              <p className="font-semibold text-base">Commercial Quote Request Sent!</p>
              <p className="text-xs text-gray-600">
                You have been redirected to {COMPANY_INFO.name} on WhatsApp for immediate B2B rate discussion.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Business / Hotel Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Grand Heritage Hotel"
                    value={b2bState.businessName}
                    onChange={(e) => setB2bState({ ...b2bState, businessName: e.target.value })}
                    className="w-full px-4 py-3 rounded-[12px] border border-gray-300 focus:outline-none focus:border-[#F57C00] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Contact Person Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Ramesh Kumar"
                    value={b2bState.contactPerson}
                    onChange={(e) => setB2bState({ ...b2bState, contactPerson: e.target.value })}
                    className="w-full px-4 py-3 rounded-[12px] border border-gray-300 focus:outline-none focus:border-[#F57C00] text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9807682217"
                    value={b2bState.phone}
                    onChange={(e) => setB2bState({ ...b2bState, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-[12px] border border-gray-300 focus:outline-none focus:border-[#F57C00] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Business Type
                  </label>
                  <select
                    value={b2bState.businessType}
                    onChange={(e) => setB2bState({ ...b2bState, businessType: e.target.value })}
                    className="w-full px-4 py-3 rounded-[12px] border border-gray-300 focus:outline-none focus:border-[#F57C00] text-sm bg-white"
                  >
                    <option value="Hotel / Resort">Hotel / Resort</option>
                    <option value="Restaurant / Cafe">Restaurant / Cafe</option>
                    <option value="Sweet Shop / Halwai">Sweet Shop / Halwai</option>
                    <option value="Event Caterer">Event Caterer / Banquet</option>
                    <option value="Wholesaler / Retailer">Wholesaler / Retailer</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-2">
                  Select Products Required:
                </label>
                <div className="flex flex-wrap gap-2">
                  {productOptions.map((prod) => {
                    const isSelected = b2bState.productsRequired.includes(prod);
                    return (
                      <button
                        type="button"
                        key={prod}
                        onClick={() => handleProductToggle(prod)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                          isSelected
                            ? 'bg-[#F57C00] text-white border-[#F57C00]'
                            : 'bg-gray-50 text-gray-700 border-gray-300 hover:bg-gray-100'
                        }`}
                      >
                        {isSelected ? '✓ ' : '+ '}{prod}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Estimated Monthly Volume
                </label>
                <select
                  value={b2bState.monthlyRequirement}
                  onChange={(e) => setB2bState({ ...b2bState, monthlyRequirement: e.target.value })}
                  className="w-full px-4 py-3 rounded-[12px] border border-gray-300 focus:outline-none focus:border-[#F57C00] text-sm bg-white"
                >
                  <option value="20kg - 50kg">20kg - 50kg per month</option>
                  <option value="50kg - 100kg">50kg - 100kg per month</option>
                  <option value="100kg - 500kg">100kg - 500kg per month</option>
                  <option value="500kg+">500kg+ per month (Large Account)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Special Instructions / Delivery Frequency
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Daily morning delivery required by 6:30 AM..."
                  value={b2bState.message}
                  onChange={(e) => setB2bState({ ...b2bState, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-[12px] border border-gray-300 focus:outline-none focus:border-[#F57C00] text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#F57C00] hover:bg-[#e06c00] text-white font-semibold py-3.5 rounded-[14px] shadow-sm transition-all inline-flex items-center justify-center gap-2 text-sm"
                id="submit-b2b-form-btn"
              >
                <Send className="w-4 h-4" />
                <span>Request B2B Quote on WhatsApp</span>
              </button>
            </form>
          )}
        </div>
      </section>

    </div>
  );
};
