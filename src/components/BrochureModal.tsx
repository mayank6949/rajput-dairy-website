import React, { useState } from 'react';
import { X, Download, CheckCircle, ShieldCheck, Phone, FileText } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({ isOpen, onClose }) => {
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloaded(true);
    
    // Simulate generating and downloading company profile
    const content = `
RAJPUT DAIRY - COMPANY PROFILE & PRODUCT CATALOGUE
${COMPANY_INFO.tagline}
Address: ${COMPANY_INFO.address}
Phones: ${COMPANY_INFO.phones.map(p => p.display).join(', ')}
WhatsApp: ${COMPANY_INFO.whatsapp.display}
Instagram: ${COMPANY_INFO.instagram.handle}
Google Maps: ${COMPANY_INFO.googleMapsUrl}

PRODUCT PORTFOLIO (Exact Verified Order):
1. Cow Desi Ghee - Pure, Danedar, Slow-Cooked Aroma
2. Buffalo Desi Ghee - Dense, High Smoke Point, Rich
3. Fresh Paneer - Soft Machine Pressed Daily
4. White Butter - Unsalted & Cultured Safed Makhan
5. Fresh Cream - Centrifugally Separated Whole Cream
6. Khowa (Mawa) - Gas-Fired Kettle Evaporated
7. Fresh Curd - Naturally Cultured Probiotic Dahi
8. Separated Curd - Ultra-Thick Muslin Strained Chakka
9. Low Fat Curd - Refreshing Light Skimmed Curd

FSSAI Certified | Bulk Hotel, Sweet Shop & Event Catering Supplier
Contact: ${COMPANY_INFO.phones[0].display} | ${COMPANY_INFO.whatsapp.display}
    `;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Rajput_Dairy_Company_Profile_2026.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-white rounded-[20px] max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#ECECEC] relative font-poppins"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-100 text-gray-700 hover:text-black flex items-center justify-center transition-colors"
          aria-label="Close"
          id="close-brochure-modal-btn"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-3 mb-6">
          <div className="w-14 h-14 bg-amber-50 rounded-full flex items-center justify-center mx-auto text-[#C9A227] border border-amber-200">
            <FileText className="w-7 h-7" />
          </div>
          <h3 className="font-cinzel font-bold text-2xl text-[#222222]">
            Company Profile & Brochure
          </h3>
          <p className="text-xs sm:text-sm text-gray-600">
            Download the official Rajput Dairy company overview, production standards, and complete product specifications.
          </p>
        </div>

        <div className="bg-[#FAFAFA] p-4 rounded-[14px] border border-[#ECECEC] space-y-2.5 text-xs text-gray-700 mb-6">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#2E7D32]" />
            <span>Complete 9-Product Technical Specifications</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#2E7D32]" />
            <span>Serving Varanasi Since 1984 - Trusted Quality</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#2E7D32]" />
            <span>Bulk B2B Hotel & Restaurant Supply Terms</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#C9A227]" />
            <span>FSSAI Hygiene Certification Details</span>
          </div>
        </div>

        {downloaded ? (
          <div className="p-4 bg-green-50 border border-green-200 rounded-[14px] text-center space-y-2 text-green-800 text-xs sm:text-sm">
            <p className="font-semibold flex items-center justify-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-[#2E7D32]" />
              Download Initiated Successfully!
            </p>
            <p className="text-gray-600 text-xs">
              Thank you for your interest in Rajput Dairy. Feel free to contact us on WhatsApp for custom bulk pricing.
            </p>
          </div>
        ) : (
          <button
            onClick={handleDownload}
            className="w-full flex items-center justify-center gap-2 bg-[#F57C00] hover:bg-[#e06c00] text-white font-semibold py-3.5 px-6 rounded-[14px] shadow-md transition-all active:scale-98 text-sm"
            id="download-brochure-submit-btn"
          >
            <Download className="w-5 h-5" />
            <span>Download Company Brochure</span>
          </button>
        )}

        <div className="mt-4 text-center">
          <a
            href={`https://wa.me/${COMPANY_INFO.whatsapp.fullWithCountry}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#2E7D32] hover:underline inline-flex items-center gap-1 font-medium"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Need immediate delivery or bulk quote? Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
