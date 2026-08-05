import React from 'react';
import { X, MessageCircle, Phone, Check, ShieldCheck, Sparkles } from 'lucide-react';
import { Product } from '../types';
import { COMPANY_INFO } from '../data/company';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello Rajput Dairy, I would like to place an order/enquiry for ${product.name}. Please share availability and details.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div 
        className="bg-white rounded-[20px] max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#ECECEC] my-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 text-gray-700 hover:text-black flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors"
          aria-label="Close product details"
          id="close-modal-btn"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image Header */}
        <div className="relative h-64 sm:h-72 w-full bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
            <span className="inline-block bg-[#C9A227] text-white text-xs font-poppins font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
              {product.category}
            </span>
            <h2 className="font-cinzel font-bold text-2xl sm:text-3xl">
              {product.name}
            </h2>
            <p className="text-xs sm:text-sm text-gray-200 font-poppins">
              Crafted in Varanasi Since 1984
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 font-poppins text-gray-800">
          
          {/* Detailed Description */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-[#F57C00] font-semibold mb-2">
              Product Overview
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-gray-700">
              {product.fullDescription}
            </p>
          </div>

          {/* Key Highlights */}
          <div className="bg-[#FAFAFA] p-5 rounded-[16px] border border-[#ECECEC] space-y-3">
            <h3 className="text-xs uppercase tracking-widest text-[#222222] font-semibold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#C9A227]" />
              <span>Key Purity Highlights</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
              {product.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-center gap-2 text-gray-700">
                  <Check className="w-4 h-4 text-[#2E7D32] shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Specifications Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="border border-[#ECECEC] p-4 rounded-[14px] space-y-1">
              <span className="text-gray-400 text-[11px] uppercase font-semibold block">Texture & Aroma</span>
              <p className="font-medium text-gray-800">{product.texture}</p>
            </div>

            <div className="border border-[#ECECEC] p-4 rounded-[14px] space-y-1">
              <span className="text-gray-400 text-[11px] uppercase font-semibold block">Preparation Craft</span>
              <p className="font-medium text-gray-800">{product.preparationMethod}</p>
            </div>
          </div>

          {/* Recommended Best Uses */}
          <div className="space-y-2">
            <h3 className="text-xs uppercase tracking-widest text-gray-500 font-semibold">
              Recommended Best Uses
            </h3>
            <div className="flex flex-wrap gap-2">
              {product.bestUses.map((use, idx) => (
                <span
                  key={idx}
                  className="bg-orange-50 text-[#F57C00] text-xs font-medium px-3 py-1.5 rounded-full border border-orange-200"
                >
                  {use}
                </span>
              ))}
            </div>
          </div>

          {/* Storage Instructions */}
          <div className="bg-amber-50/60 p-4 rounded-[14px] border border-amber-200 text-xs sm:text-sm space-y-1">
            <span className="font-semibold text-amber-900 block">Care & Storage Instructions:</span>
            <p className="text-amber-800">{product.storage}</p>
          </div>

          {/* FSSAI Guarantee */}
          <div className="flex items-center gap-3 text-xs text-gray-500 pt-2 border-t border-gray-100">
            <ShieldCheck className="w-5 h-5 text-[#2E7D32]" />
            <span>FSSAI Certified • Freshly Prepared Daily • 100% Unadulterated Guarantee</span>
          </div>

          {/* Direct CTA Buttons */}
          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp.fullWithCountry}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#2E7D32] hover:bg-[#256628] text-white font-poppins font-semibold py-3.5 px-6 rounded-[14px] shadow-md transition-transform active:scale-95 text-sm"
              id="modal-whatsapp-order-btn"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Order on WhatsApp</span>
            </a>

            <a
              href={`tel:${COMPANY_INFO.phones[0].raw}`}
              className="flex items-center justify-center gap-2 bg-[#F57C00] hover:bg-[#e06c00] text-white font-poppins font-semibold py-3.5 px-6 rounded-[14px] shadow-md transition-transform active:scale-95 text-sm"
              id="modal-call-btn"
            >
              <Phone className="w-5 h-5" />
              <span>Call For Enquiry</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
