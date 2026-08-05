import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageRoute, Product } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { ProductDetailModal } from './components/ProductDetailModal';
import { BrochureModal } from './components/BrochureModal';

// Views
import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { ProductsView } from './views/ProductsView';
import { ManufacturingView } from './views/ManufacturingView';
import { GalleryView } from './views/GalleryView';
import { ReviewsView } from './views/ReviewsView';
import { FaqView } from './views/FaqView';
import { ContactView } from './views/ContactView';
import { BulkOrdersView } from './views/BulkOrdersView';
import { CareersView } from './views/CareersView';
import { BlogView } from './views/BlogView';
import { LegalView } from './views/LegalView';
import { DesiGheeVaranasiView } from './views/DesiGheeVaranasiView';
import { PaneerVaranasiView } from './views/PaneerVaranasiView';
export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);

  // Sync route with URL hash for deep links and back button support
  useEffect(() => {
  const path = window.location.pathname.slice(1);
  console.log("PATHNAME =", window.location.pathname);
console.log("PATH =", path);

  const validRoutes: PageRoute[] = [
    'home',
    'about',
    'products',
    'manufacturing',
    'gallery',
    'reviews',
    'faq',
    'contact',
    'bulk-orders',
    'careers',
    'blog',
    'privacy-policy',
    'terms',
    'desi-ghee-varanasi',
    'paneer-varanasi'
  ];

  if (validRoutes.includes(path as PageRoute)) {
    setCurrentRoute(path as PageRoute);
  } else {
    setCurrentRoute('home');
  }
}, []);
  const handleRouteChange = (route: PageRoute) => {
  setCurrentRoute(route);

  window.history.pushState(
    {},
    '',
    route === 'home' ? '/' : `/${route}`
  );
};

  const renderCurrentView = () => {
    console.log("CURRENT ROUTE:", currentRoute);
    switch (currentRoute) {
      case 'home':
        return (
          <HomeView
            onRouteChange={handleRouteChange}
            onSelectProduct={setSelectedProduct}
            onOpenBrochureModal={() => setIsBrochureOpen(true)}
          />
        );
      case 'about':
        return <AboutView onRouteChange={handleRouteChange} />;
      case 'products':
        return (
          <ProductsView
            onRouteChange={handleRouteChange}
            onSelectProduct={setSelectedProduct}
          />
        );
      case 'manufacturing':
        return <ManufacturingView onRouteChange={handleRouteChange} />;
      case 'gallery':
        return <GalleryView onRouteChange={handleRouteChange} />;
      case 'reviews':
        return <ReviewsView onRouteChange={handleRouteChange} />;
      case 'faq':
        return <FaqView onRouteChange={handleRouteChange} />;
      case 'contact':
        return <ContactView />;
      case 'bulk-orders':
        return <BulkOrdersView />;
      case 'careers':
        return <CareersView />;
      case 'blog':
        return <BlogView onRouteChange={handleRouteChange} />;
      case 'privacy-policy':
        return <LegalView type="privacy" />;
      case 'terms':
        return <LegalView type="terms" />;
        case 'desi-ghee-varanasi':
          return <DesiGheeVaranasiView onRouteChange={handleRouteChange} />;

          case 'paneer-varanasi':
  return <PaneerVaranasiView onRouteChange={handleRouteChange} />;
      default:
        return (
          <HomeView
            onRouteChange={handleRouteChange}
            onSelectProduct={setSelectedProduct}
            onOpenBrochureModal={() => setIsBrochureOpen(true)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-[#222222] font-poppins selection:bg-[#F57C00]/20 selection:text-[#F57C00]">
      {/* Sticky Navigation Bar */}
      <Header
        currentRoute={currentRoute}
        onRouteChange={handleRouteChange}
        onOpenBrochureModal={() => setIsBrochureOpen(true)}
      />

      {/* Main Content View */}
      <main className="flex-grow">
        {renderCurrentView()}
      </main>

      {/* Footer */}
      <Footer
        onRouteChange={handleRouteChange}
        onOpenBrochureModal={() => setIsBrochureOpen(true)}
      />

      {/* Floating Action Buttons (WhatsApp, Call, Scroll Top) */}
      <FloatingActions />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      {/* Download Company Brochure Modal */}
      <BrochureModal
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
      />
    </div>
  );
}
