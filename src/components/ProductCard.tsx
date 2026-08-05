import React from 'react';
import { MessageCircle, Info, CheckCircle2 } from 'lucide-react';
import { Product } from '../types';
import { COMPANY_INFO } from '../data/company';

interface ProductCardProps {
  product: Product;
  onSelectProduct: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelectProduct }) => {
  const whatsappMessage = encodeURIComponent(`Hello Rajput Dairy, I would like to order ${product.name}. Please share details.`);

  return (
    <div className="group bg-white rounded-[18px] border border-[#ECECEC] hover:border-[#C9A227]/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1">
      <div>
        {/* Product Image Banner */}
        <div className="relative h-56 sm:h-64 w-full bg-[#FAFAFA] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Signature Badge */}
          {product.isSignature && (
            <div className="absolute top-3 left-3 bg-[#C9A227] text-white text-[11px] font-poppins font-semibold px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
              Signature Collection
            </div>
          )}

          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-gray-800 text-[11px] font-poppins font-medium px-2.5 py-1 rounded-full border border-gray-200">
            {product.category}
          </div>
        </div>

        {/* Content Details */}
        <div className="p-5 sm:p-6 space-y-3">
          <h3 className="font-cinzel font-bold text-xl text-[#222222] group-hover:text-[#F57C00] transition-colors">
            {product.name}
          </h3>

          <p className="text-gray-600 font-poppins text-xs sm:text-sm leading-relaxed line-clamp-2">
            {product.shortDescription}
          </p>

          {/* Feature Highlights */}
          <div className="pt-2 border-t border-gray-100 space-y-1.5">
            {product.highlights.slice(0, 2).map((highlight, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs font-poppins text-gray-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D32] shrink-0" />
                <span className="truncate">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-5 sm:p-6 pt-0 space-y-2">
        <div className="grid grid-cols-2 gap-2">
          <a
            href={`https://wa.me/${COMPANY_INFO.whatsapp.fullWithCountry}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-1.5 bg-[#2E7D32] hover:bg-[#256628] text-white text-xs font-poppins font-medium py-2.5 px-3 rounded-[14px] shadow-sm transition-all duration-200 active:scale-95"
            id={`whatsapp-btn-${product.id}`}
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span className="truncate">WhatsApp</span>
          </a>

          <button
            onClick={() => onSelectProduct(product)}
            className="w-full inline-flex items-center justify-center gap-1.5 border border-[#F57C00] text-[#F57C00] hover:bg-[#F57C00] hover:text-white text-xs font-poppins font-medium py-2.5 px-3 rounded-[14px] transition-all duration-200 active:scale-95"
            id={`enquire-btn-${product.id}`}
          >
            <Info className="w-3.5 h-3.5" />
            <span className="truncate">Enquire</span>
          </button>
        </div>
      </div>
    </div>
  );
};
