import React from 'react';
import { PageRoute } from '../types';

interface LegalViewProps {
  type: 'privacy' | 'terms';
}

export const LegalView: React.FC<LegalViewProps> = ({ type }) => {
  return (
    <div className="pt-24 pb-20 font-poppins bg-[#FAFAFA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 sm:p-12 rounded-[24px] border border-[#ECECEC] shadow-sm space-y-6 text-gray-800">
        
        {type === 'privacy' ? (
          <>
            <h1 className="font-cinzel font-bold text-3xl sm:text-4xl text-[#222222]">
              Privacy Policy
            </h1>
            <p className="text-xs text-gray-500">Effective Date: January 1, 2026 • Rajput Dairy, Varanasi</p>

            <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-gray-700">
              <p>
                At Rajput Dairy (Serving Varanasi Since 1984), accessible from our website, the privacy of our visitors is of paramount importance. This Privacy Policy document outlines the types of information that is collected and recorded by Rajput Dairy and how we use it.
              </p>

              <h3 className="font-cinzel font-bold text-lg text-[#222222] pt-2">1. Information We Collect</h3>
              <p>
                When you submit an enquiry form or order request on our website, we may ask for information such as your Name, Phone Number, Email Address, and delivery location in Varanasi to process your dairy order.
              </p>

              <h3 className="font-cinzel font-bold text-lg text-[#222222] pt-2">2. How We Use Your Information</h3>
              <p>
                We use collected information solely to:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Process home delivery orders and commercial bulk quotes.</li>
                <li>Communicate order updates via WhatsApp or Phone call.</li>
                <li>Improve customer service and delivery efficiency across Varanasi.</li>
              </ul>

              <h3 className="font-cinzel font-bold text-lg text-[#222222] pt-2">3. Data Protection & Non-Sharing</h3>
              <p>
                Rajput Dairy strictly respects customer trust. We do not sell, rent, or lease customer contact information to third-party advertisers or telemarketers.
              </p>

              <h3 className="font-cinzel font-bold text-lg text-[#222222] pt-2">4. Contact Us</h3>
              <p>
                For any privacy concerns, contact Mayank Singh directly at info@rajputdairy.com or visit our store at Lanka - Ravindrapuri Rd, Varanasi, UP.
              </p>
            </div>
          </>
        ) : (
          <>
            <h1 className="font-cinzel font-bold text-3xl sm:text-4xl text-[#222222]">
              Terms & Conditions
            </h1>
            <p className="text-xs text-gray-500">Effective Date: January 1, 2026 • Rajput Dairy, Varanasi</p>

            <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-gray-700">
              <p>
                Welcome to Rajput Dairy! These terms and conditions outline the rules and regulations for the use of Rajput Dairy's Website and dairy order services in Varanasi.
              </p>

              <h3 className="font-cinzel font-bold text-lg text-[#222222] pt-2">1. Product Quality & Freshness</h3>
              <p>
                All dairy products (Paneer, Desi Ghee, Khowa, Curd, White Butter, Cream) are prepared fresh under strict FSSAI certified standards. Customers are advised to store perishable products according to recommended refrigeration instructions.
              </p>

              <h3 className="font-cinzel font-bold text-lg text-[#222222] pt-2">2. Delivery Terms</h3>
              <p>
                Home delivery is offered within 5 km of our store for orders meeting the ₹2,000 minimum order value. Same-day delivery is subject to morning batch availability.
              </p>

              <h3 className="font-cinzel font-bold text-lg text-[#222222] pt-2">3. B2B & Wholesale Orders</h3>
              <p>
                Bulk supply contracts for Hotels, Sweet Shops, and Restaurants are subject to custom volume pricing agreed upon directly with management.
              </p>

              <h3 className="font-cinzel font-bold text-lg text-[#222222] pt-2">4. Governing Law</h3>
              <p>
                These terms are governed by the laws of Uttar Pradesh, India, under the jurisdiction of Varanasi courts.
              </p>
            </div>
          </>
        )}

      </div>
    </div>
  );
};
