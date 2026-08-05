import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/gallery';
import { GalleryItem, PageRoute } from '../types';
import { X, ChevronLeft, ChevronRight, MessageCircle, Phone, Maximize2 } from 'lucide-react';

interface GalleryViewProps {
  onRouteChange: (route: PageRoute) => void;
}

export const GalleryView: React.FC<GalleryViewProps> = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    'All',
    'Desi Ghee',
    'Paneer',
    'Khowa',
    'Butter & Cream',
    'Curd',
    'Store',
    'Packaging',
    'Production'
  ];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  const whatsappNumber = '919839000000';
  const phoneNumber = '+919839000000';

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(lightboxIndex === 0 ? filteredItems.length - 1 : lightboxIndex - 1);
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(lightboxIndex === filteredItems.length - 1 ? 0 : lightboxIndex + 1);
  };

  return (
    <div className="pt-24 pb-20 font-poppins bg-[#FAFAFA] space-y-16">
      
      {/* Hero Banner */}
      <section className="py-16 bg-neutral-900 text-white text-center space-y-4">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-xs font-semibold text-[#C9A227] uppercase tracking-widest block mb-2">
            Visual Craftsmanship
          </span>
          <h1 className="font-cinzel font-extrabold text-4xl sm:text-5xl">
            Experience Rajput Dairy
          </h1>
          <p className="text-sm sm:text-base text-gray-300 font-light max-w-2xl mx-auto mt-2">
            Take a closer look at our products, traditional craftsmanship, hygienic store, and 40+ year legacy.
          </p>
        </div>
      </section>

      {/* Category Filter Buttons */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-[#F57C00] text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-[#ECECEC]'
              }`}
              id={`gal-cat-${cat.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Masonry Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative h-72 rounded-[20px] overflow-hidden bg-gray-100 border border-[#ECECEC] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-md p-2 rounded-full text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                <span className="text-[10px] font-semibold text-[#C9A227] uppercase tracking-wider block">
                  {item.category}
                </span>
                <h3 className="font-cinzel font-bold text-lg text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-300 line-clamp-1">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
            aria-label="Close Lightbox"
            id="close-lightbox-btn"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
            aria-label="Previous image"
            id="lightbox-prev-btn"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div 
            className="max-w-4xl w-full max-h-[85vh] space-y-4 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredItems[lightboxIndex].image}
              alt={filteredItems[lightboxIndex].title}
              referrerPolicy="no-referrer"
              className="max-h-[70vh] max-w-full mx-auto object-contain rounded-[16px] shadow-2xl"
            />
            <div className="text-white space-y-1">
              <h3 className="font-cinzel font-bold text-xl text-[#C9A227]">
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto font-poppins">
                {filteredItems[lightboxIndex].caption}
              </p>
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
            aria-label="Next image"
            id="lightbox-next-btn"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-12 rounded-[24px] border border-[#ECECEC] text-center space-y-6 shadow-sm">
          <h2 className="font-cinzel font-bold text-3xl text-[#222222]">
            Want Fresh Dairy Products Delivered Today?
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 max-w-lg mx-auto">
            Order fresh Cow Ghee, Paneer, Khowa, Butter or Curd straight from our store in Varanasi.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello Rajput Dairy, I would like to order fresh products.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2E7D32] hover:bg-[#256628] text-white font-semibold text-sm px-6 py-3.5 rounded-[14px] shadow-md transition-all inline-flex items-center gap-2"
              id="gallery-whatsapp-cta"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Order on WhatsApp</span>
            </a>

            <a
              href={`tel:${phoneNumber}`}
              className="bg-[#F57C00] hover:bg-[#e06c00] text-white font-semibold text-sm px-6 py-3.5 rounded-[14px] shadow-md transition-all inline-flex items-center gap-2"
              id="gallery-call-cta"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
