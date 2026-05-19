import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, Search, Sparkles, Facebook, Instagram, Linkedin, Youtube, Phone, Mail, Clock, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Link, useLocation } from 'react-router-dom';

function TopBar() {
  return (
    <div className="hidden lg:block bg-[#05070a] border-b border-white/5 py-3">
      <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center text-[11px] font-black uppercase tracking-[0.2em] text-white/70">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-primary transition-colors"><Facebook className="w-3.5 h-3.5" /></a>
            <a href="#" className="hover:text-primary transition-colors"><Instagram className="w-3.5 h-3.5" /></a>
            <a href="#" className="hover:text-primary transition-colors"><Linkedin className="w-3.5 h-3.5" /></a>
            <a href="#" className="hover:text-primary transition-colors"><Youtube className="w-3.5 h-3.5" /></a>
          </div>
          <div className="h-4 w-px bg-white/10" />
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-primary" />
            <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <a href="mailto:hello@Rankriseusa.com" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail className="w-3.5 h-3.5 text-primary" />
            hello@Rankriseusa.com
          </a>
          <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone className="w-3.5 h-3.5 text-primary" />
            +1 202 888 2806
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [auditFormOpen, setAuditFormOpen] = useState(false);
  const { scrollY } = useScroll();
  const navY = useTransform(scrollY, [0, 100], [0, 0]);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
  }, [location]);

  const handleSubmitAudit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Audit request submitted! Our team will get back to you shortly.');
    setAuditFormOpen(false);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Courses', path: '/courses' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
    // { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 pt-4 px-4">
        <TopBar />
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="container mx-auto max-w-7xl mt-4"
        >
          <div className="bg-[#2D1B1B]/90 backdrop-blur-xl border border-white/10 rounded-[3rem] px-8 py-4 flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
            {/* Logo */}
            <Link to="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center"
              >
                <img
                  src="/assets/images/logo1.png"
                  alt="Rankriseusa Logo"
                  className="h-10 w-auto object-contain grayscale invert brightness-200 mix-blend-screen"
                />
              </motion.div>
            </Link>

            {/* Nav Items */}
            <div className="hidden lg:flex items-center gap-2">
              {navItems.map((item, index) => (
                <Link key={item.name} to={item.path}>
                  <motion.div
                    className="relative px-4 py-2 group"
                  >
                    <span
                      className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${location.pathname === item.path
                        ? 'text-primary'
                        : 'text-white/70 group-hover:text-primary'
                        }`}
                    >
                      {item.name}
                    </span>
                    {location.pathname === item.path && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary rounded-full"
                      />
                    )}
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex flex-col items-center gap-1.5 translate-y-1.5">
                <div className="flex items-center gap-3">
                  <Button 
                    onClick={() => setAuditFormOpen(true)}
                    className="bg-transparent border border-white/20 hover:bg-white/5 text-white font-black uppercase tracking-widest text-[10px] px-8 py-6 rounded-full transition-all duration-300 shadow-lg backdrop-blur-sm"
                  >
                    Get Free Audit
                  </Button>
                  <Link to="/contact">
                    <Button className="bg-[#EAB308] hover:bg-[#D4A017] text-black font-black uppercase tracking-widest text-[10px] px-8 py-6 rounded-full transition-all duration-300 shadow-lg">
                      Let's Talk
                    </Button>
                  </Link>
                </div>
                <a
                  href="https://www.washingtonadvert.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[9px] text-white/30 hover:text-primary transition-colors font-medium tracking-wider"
                >
                  Powered by Washington Advert
                </a>
              </div>

              <motion.button
                whileTap={{ scale: 0.9 }}
                className="lg:hidden p-2 text-white"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>
        </motion.nav>
      </div>

      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          x: isMobileMenuOpen ? 0 : '100%',
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
        className="fixed inset-0 bg-background/98 backdrop-blur-2xl lg:hidden pt-24 z-40 overflow-y-auto"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-2 mb-8">
            {navItems.map((item, index) => (
              <Link key={item.name} to={item.path}>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`text-2xl font-bold p-5 rounded-2xl transition-all ${location.pathname === item.path
                    ? 'text-primary bg-primary/10 border-2 border-primary/20'
                    : 'text-foreground hover:bg-muted'
                    }`}
                >
                  {item.name}
                </motion.div>
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <Link to="/pricing">
              <Button variant="outline" size="lg" className="w-full rounded-xl h-14 text-lg font-semibold">
                Pricing Plans
              </Button>
            </Link>
            <Button 
              size="lg" 
              onClick={() => setAuditFormOpen(true)}
              className="w-full button-elite text-white rounded-xl h-14 text-lg font-semibold"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Free Audit
            </Button>
          </div>
        </div>
      </motion.div>

      <Dialog open={auditFormOpen} onOpenChange={setAuditFormOpen}>
        <DialogContent className="max-w-2xl bg-[#0d1117]/95 backdrop-blur-3xl border-white/5 p-0 overflow-hidden rounded-[3rem] shadow-[0_50px_100px_rgba(0,0,0,0.8)] z-[100]">
          <div className="p-6 sm:p-10 space-y-8">
            <DialogHeader>
              <DialogTitle className="text-2xl sm:text-3xl font-black text-white tracking-tighter">
                Get Your Free SEO Audit
              </DialogTitle>
              <DialogDescription className="text-white/50">
                Enter your details and website URL, and our experts will analyze your digital presence.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmitAudit} className="space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-2">Website URL</label>
                <input
                  type="url"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder="https://yourwebsite.com"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="+1 234 567 890"
                  />
                </div>
              </div>
              <Button type="submit" className="button-premium w-full py-6 rounded-2xl text-sm uppercase tracking-[0.3em]">
                Request Audit
              </Button>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}