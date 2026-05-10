import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import LoadingScreen from './components/LoadingScreen';
import ErrorBoundary from './components/ErrorBoundary';

import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import PricingPage from './pages/PricingPage';
import FreeAuditPage from './pages/FreeAuditPage';
import CustomPlanPage from '@/pages/CustomPlanPage';
import Costcalculatorpage from '@/pages/Costcalculatorpage';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage';
import TermsPage from '@/pages/TermsPage';
import RefundCancellationPage from '@/pages/RefundCancellationPage';
import DisclaimerPage from '@/pages/DisclaimerPage';
import CoursesPage from '@/pages/CoursesPage';
import CookiesPolicyPage from '@/pages/CookiesPolicyPage';

import { Toaster } from '@/components/ui/sonner';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen">
          <AnimatePresence>
            {isLoading && <LoadingScreen />}
          </AnimatePresence>

          <ScrollProgress />
          <Navigation />

          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/free-audit" element={<FreeAuditPage />} />
              <Route path="/custom-plan" element={<CustomPlanPage />} />
              <Route path="/cost-calculator" element={<Costcalculatorpage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms-and-conditions" element={<TermsPage />} />
              <Route path="/refund-cancellation" element={<RefundCancellationPage />} />
              <Route path="/disclaimer" element={<DisclaimerPage />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/cookies-policy" element={<CookiesPolicyPage />} />
            </Routes>
          </main>

          <Footer />
          <Toaster />
        </div>
      </Router>
    </ErrorBoundary>
  );
}