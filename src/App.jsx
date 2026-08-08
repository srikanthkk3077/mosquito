import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import TawkChat from './components/TawkChat';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProcessPage from './pages/ProcessPage';
import PricingPage from './pages/PricingPage';
import GalleryPage from './pages/GalleryPage';
import ReviewsPage from './pages/ReviewsPage';
import AreasPage from './pages/AreasPage';
import FAQPage from './pages/FAQPage';
import BlogPage from './pages/BlogPage';
import BookingPage from './pages/BookingPage';
import ContactPage from './pages/ContactPage';

// ScrollToTop component to reset window scroll position on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-theme-light text-slate-900 flex flex-col font-body selection:bg-sky-500 selection:text-white">
        
        {/* Persistent Multi-Page Navigation Header */}
        <Header />

        {/* Multi-Page Route Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/areas" element={<AreasPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/book" element={<BookingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        {/* Persistent Footer */}
        <Footer />

        {/* Floating Actions Bar & Chat Board */}
        <FloatingActions />

        {/* Tawk.to Live Chat Integration with Pre-Chat Form */}
        <TawkChat />

      </div>
    </Router>
  );
}
