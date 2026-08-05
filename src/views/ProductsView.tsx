import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { Product, PageRoute } from '../types';
import { ProductCard } from '../components/ProductCard';
import { MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface ProductsViewProps {
  onRouteChange: (route: PageRoute) => void;
  onSelectProduct: (product: Product) => void;
}

export const ProductsView: React.FC<ProductsViewProps> = ({ onRouteChange, onSelectProduct }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Ghee', 'Paneer', 'Khowa', 'Butter & Cream', 'Curd'];

  const filteredProducts = selectedCategory === 'All'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === selectedCategory);

  return (
    <div className="pt-24 pb-20 font-poppins bg-[#FAFAFA] space-y-16">
      
      {/* Hero Banner */}
      <section className="py-16 bg-neutral-900 text-white text-center space-y-4">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-xs font-semibold text-[#C9A227] uppercase tracking-widest block mb-2">
            {COMPANY_INFO.name} Official Portfolio
          </span>
          <h1 className="font-cinzel font-extrabold text-4xl sm:text-5xl">
            Premium Dairy Collection
          </h1>
          <p className="text-sm sm:text-base text-gray-300 font-light max-w-2xl mx-auto mt-2">
            Crafted with purity. Prepared with care. {COMPANY_INFO.tagline}.
          </p>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-[#F57C00] text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-[#ECECEC]'
              }`}
              id={`filter-cat-${cat.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Products Grid (All 9 products in exact verified order) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelectProduct={onSelectProduct}
            />
          ))}
        </div>
      </section>

      {/* Product Comparison Section for All 9 Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-semibold text-[#C9A227] uppercase tracking-widest">
            Craft Specification
          </span>
          <h2 className="font-cinzel font-bold text-3xl text-[#222222]">
            Complete 9-Product Specification Guide
          </h2>
          <p className="text-xs sm:text-sm text-gray-600">
            Compare textures, preparation crafts, and best uses across our 9 verified dairy products.
          </p>
        </div>

        <div className="bg-white rounded-[20px] border border-[#ECECEC] shadow-sm overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-[#FAFAFA] border-b border-[#ECECEC] text-[#222222] font-cinzel">
              <tr>
                <th className="p-4 font-bold">#</th>
                <th className="p-4 font-bold">Product Name</th>
                <th className="p-4 font-bold">Texture</th>
                <th className="p-4 font-bold">Preparation Craft</th>
                <th className="p-4 font-bold">Best Use</th>
                <th className="p-4 font-bold">Storage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#ECECEC] text-gray-700 font-poppins">
              {PRODUCTS.map((prod, idx) => (
                <tr key={prod.id} className="hover:bg-gray-50/80 transition-colors">
                  <td className="p-4 font-bold text-[#C9A227] font-cinzel">{idx + 1}</td>
                  <td className="p-4 font-semibold text-[#222222] font-cinzel">
                    {prod.name}
                  </td>
                  <td className="p-4">{prod.texture}</td>
                  <td className="p-4 text-xs">{prod.preparationMethod}</td>
                  <td className="p-4 text-xs">{prod.bestUses[0]}</td>
                  <td className="p-4 text-xs">{prod.storage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Bulk Quote CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-neutral-900 to-neutral-800 text-white rounded-[24px] p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <span className="text-xs font-semibold text-[#C9A227] uppercase tracking-widest block">
              B2B Commercial Supply
            </span>
            <h3 className="font-cinzel font-bold text-2xl sm:text-3xl">
              Need Bulk Dairy Supplies for Business?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300">
              We supply fresh Paneer, Desi Ghee, Khowa, White Butter, Cream, and Curd to Hotels, Restaurants, Sweet Shops, and Caterers across Varanasi.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => {
                onRouteChange('bulk-orders');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-[#F57C00] hover:bg-[#e06c00] text-white font-semibold text-sm px-6 py-3.5 rounded-[14px] shadow-md transition-all"
              id="bulk-quote-products-cta"
            >
              Request Bulk Quote
            </button>

            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp.fullWithCountry}?text=${encodeURIComponent('Hello Rajput Dairy, I am inquiring regarding bulk commercial supply.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2E7D32] hover:bg-[#256628] text-white font-semibold text-sm px-6 py-3.5 rounded-[14px] shadow-md transition-all inline-flex items-center gap-2"
              id="bulk-whatsapp-products-cta"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
