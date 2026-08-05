import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock, Instagram, Send, CheckCircle2, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export const ContactView: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Product Enquiry',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.phone) return;

    setFormSubmitted(true);
    const text = encodeURIComponent(
      `New Website Enquiry:\nName: ${formState.name}\nPhone: ${formState.phone}\nEmail: ${formState.email || 'N/A'}\nSubject: ${formState.subject}\nMessage: ${formState.message || 'General enquiry'}`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp.fullWithCountry}?text=${text}`, '_blank');
  };

  return (
    <div className="pt-24 pb-20 font-poppins bg-[#FAFAFA] space-y-16">
      
      {/* Hero Banner */}
      <section className="py-16 bg-neutral-900 text-white text-center space-y-4">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-xs font-semibold text-[#C9A227] uppercase tracking-widest block mb-2">
            Get In Touch
          </span>
          <h1 className="font-cinzel font-extrabold text-3xl sm:text-5xl">
            Contact {COMPANY_INFO.name}
          </h1>
          <p className="text-sm sm:text-base text-gray-300 font-light max-w-2xl mx-auto mt-2">
            {COMPANY_INFO.tagline} — Visit our store or connect directly with us via Phone or WhatsApp.
          </p>
        </div>
      </section>

      {/* Info Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white p-6 rounded-[20px] border border-[#ECECEC] shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-full bg-orange-50 text-[#F57C00] flex items-center justify-center font-bold">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="font-cinzel font-bold text-lg text-[#222222]">Phone Call</h3>
            <p className="text-xs text-gray-600">Mon - Sun: 9:00 AM - 10:00 PM</p>
            <div className="space-y-1 pt-1">
              {COMPANY_INFO.phones.map((p, idx) => (
                <a key={idx} href={`tel:${p.raw}`} className="text-sm font-semibold text-[#F57C00] hover:underline block">
                  {p.display}
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-[20px] border border-[#ECECEC] shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-full bg-green-50 text-[#2E7D32] flex items-center justify-center font-bold">
              <MessageCircle className="w-5 h-5" />
            </div>
            <h3 className="font-cinzel font-bold text-lg text-[#222222]">WhatsApp</h3>
            <p className="text-xs text-gray-600">Quick response within minutes</p>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp.fullWithCountry}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-[#2E7D32] hover:underline block pt-1"
            >
              WhatsApp: {COMPANY_INFO.whatsapp.display}
            </a>
          </div>

          <div className="bg-white p-6 rounded-[20px] border border-[#ECECEC] shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-full bg-pink-50 text-pink-600 flex items-center justify-center font-bold">
              <Instagram className="w-5 h-5" />
            </div>
            <h3 className="font-cinzel font-bold text-lg text-[#222222]">Instagram</h3>
            <p className="text-xs text-gray-600">Follow official updates & gallery</p>
            <a
              href={COMPANY_INFO.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-pink-600 hover:underline block pt-1"
            >
              {COMPANY_INFO.instagram.handle}
            </a>
          </div>

          <div className="bg-white p-6 rounded-[20px] border border-[#ECECEC] shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-full bg-amber-50 text-[#C9A227] flex items-center justify-center font-bold">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-cinzel font-bold text-lg text-[#222222]">Operating Hours</h3>
            <p className="text-xs text-gray-800 font-medium">Monday – Sunday</p>
            <p className="text-xs text-[#2E7D32] font-semibold pt-1">9:00 AM – 10:00 PM (Open Every Day)</p>
          </div>

        </div>
      </section>

      {/* Address & Store Location Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 sm:p-8 rounded-[24px] border border-[#ECECEC] shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#F57C00] uppercase tracking-wider">
              <MapPin className="w-4 h-4 text-[#F57C00]" />
              <span>Verified Store Address</span>
            </div>
            <h2 className="font-cinzel font-bold text-xl sm:text-2xl text-[#222222]">
              {COMPANY_INFO.name}
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed max-w-2xl font-medium">
              {COMPANY_INFO.address}
            </p>
          </div>

          <a
            href={COMPANY_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-[#C9A227] hover:bg-[#b08c1f] text-white font-semibold px-6 py-3.5 rounded-[14px] text-sm transition-all shadow-md inline-flex items-center gap-2"
            id="contact-maps-direct-btn"
          >
            <span>Open Google Maps</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Split Form & Embedded Map */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          
          {/* Form */}
          <div className="bg-white p-6 sm:p-8 rounded-[24px] border border-[#ECECEC] shadow-sm space-y-6">
            <div className="space-y-1">
              <h2 className="font-cinzel font-bold text-2xl text-[#222222]">
                Send Us an Enquiry
              </h2>
              <p className="text-xs text-gray-500">
                Fill out the details below and click send to redirect directly to WhatsApp.
              </p>
            </div>

            {formSubmitted ? (
              <div className="bg-green-50 border border-green-200 p-6 rounded-[16px] text-center space-y-2 text-green-800">
                <CheckCircle2 className="w-8 h-8 text-[#2E7D32] mx-auto" />
                <p className="font-semibold text-base">Enquiry Submitted!</p>
                <p className="text-xs text-gray-600">
                  Thank you! Your message has been sent to our team on WhatsApp.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-[12px] border border-gray-300 focus:outline-none focus:border-[#F57C00] text-sm"
                  />
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
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-[12px] border border-gray-300 focus:outline-none focus:border-[#F57C00] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="name@domain.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-[12px] border border-gray-300 focus:outline-none focus:border-[#F57C00] text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Enquiry Subject
                  </label>
                  <select
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-[12px] border border-gray-300 focus:outline-none focus:border-[#F57C00] text-sm bg-white"
                  >
                    <option value="General Product Enquiry">General Product Enquiry</option>
                    <option value="Home Delivery Order">Home Delivery Order</option>
                    <option value="Bulk B2B Supply">Bulk B2B Supply (Hotels / Sweets Shops)</option>
                    <option value="Store Location & Visit">Store Location & Visit</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us what dairy products or quantities you require..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-[12px] border border-gray-300 focus:outline-none focus:border-[#F57C00] text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#F57C00] hover:bg-[#e06c00] text-white font-semibold py-3.5 rounded-[14px] shadow-sm transition-all inline-flex items-center justify-center gap-2 text-sm"
                  id="contact-form-submit-btn"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Enquiry on WhatsApp</span>
                </button>
              </form>
            )}
          </div>

          {/* Map Section */}
          <div className="bg-white p-6 rounded-[24px] border border-[#ECECEC] shadow-sm space-y-4">
            <div className="space-y-1">
              <h3 className="font-cinzel font-bold text-xl text-[#222222]">
                Map Location & Address
              </h3>
              <p className="text-xs text-gray-600">
                {COMPANY_INFO.address}
              </p>
            </div>

            <div className="relative w-full h-[380px] bg-gray-100 rounded-[18px] overflow-hidden border border-[#ECECEC]">
              <iframe
                title="Rajput Dairy Store Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.321898741293!2d82.973400!3d25.328900!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE5JzQ0LjAiTiA4MsKwNTgnMjQuMiJF!5e0!3m2!1sen!2sin!4v1700000000000"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <a
              href={COMPANY_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-neutral-900 hover:bg-neutral-800 text-white font-medium py-3 rounded-[14px] text-center text-xs sm:text-sm transition-all inline-flex items-center justify-center gap-2"
              id="contact-get-directions-btn"
            >
              <MapPin className="w-4 h-4 text-[#C9A227]" />
              <span>Get Directions on Google Maps</span>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
};
