import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, Share2, Code, Brain, Megaphone, BarChart3, ArrowRight, Sparkles,
  Zap, ShoppingCart, Target, Shield, Smartphone, Server, Bot, Database,
  Users, GraduationCap, LayoutGrid, Cloud, ShieldCheck, Eye, Wrench, Cpu,
  Activity, Globe, Terminal, Box
} from 'lucide-react';
import { useState, useRef } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Link } from 'react-router-dom';
import AnmlServices from './AnmlServices';

export default function Services() {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [quoteFormOpen, setQuoteFormOpen] = useState(false);

  const services = [
    {
      icon: Search,
      title: 'GEO + AI SEO',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop',
      description: 'Rank on ChatGPT, Gemini, and Perplexity. We optimize your brand for the generative engine era.',
      color: 'from-primary to-accent',
      glowColor: 'rgba(250, 204, 21, 0.3)',
      bgGradient: 'from-primary/10 to-transparent',
      expertise: 98,
      details: 'AI engines are the new search. We use neural mapping and semantic optimization to ensure your brand is the top recommendation by LLMs.',
      features: ['Generative Engine Optimization', 'Semantic SEO', 'AI Discovery Tracking', 'Neural Link Building'],
      price: '$1,499',
      isQuote: false,
    },
    {
      icon: Bot,
      title: 'AI Automation',
      image: 'https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?q=80&w=2000&auto=format&fit=crop',
      description: 'Custom AI agents and workflow automation that scale your business operations without increasing headcount.',
      color: 'from-primary to-accent',
      glowColor: 'rgba(250, 204, 21, 0.3)',
      bgGradient: 'from-primary/10 to-transparent',
      expertise: 95,
      details: 'Automate customer support, lead generation, and data processing with custom-trained AI models built for your business.',
      features: ['Custom AI Agents', 'LLM Integration', 'Process Automation', 'Lead Qualification Bots'],
      price: 'Quote Price',
      isQuote: true,
    },
    {
      icon: Code,
      title: 'Next-Gen Web Dev',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop',
      description: 'Ultra-fast, animated, and high-conversion web experiences built with React, Next.js, and Framer Motion.',
      color: 'from-primary to-accent',
      glowColor: 'rgba(250, 204, 21, 0.3)',
      bgGradient: 'from-primary/10 to-transparent',
      expertise: 99,
      details: 'We build high-performance web applications that are not just beautiful but also optimized for maximum conversion and speed.',
      features: ['Next.js / React', 'Premium Animations', 'Headless CMS', 'Performance Optimization'],
      price: 'Quote Price',
      isQuote: true,
    },
    {
      icon: Target,
      title: 'Precision Ad Scaling',
      image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=2070&auto=format&fit=crop',
      description: 'ROI-focused PPC and Meta Ads using AI-driven creative testing and predictive audience targeting.',
      color: 'from-primary to-accent',
      glowColor: 'rgba(250, 204, 21, 0.3)',
      bgGradient: 'from-primary/10 to-transparent',
      expertise: 92,
      details: 'Stop guessing. We use data-driven algorithms to find your most profitable customers and scale your ad spend efficiently.',
      features: ['Predictive Targeting', 'AI Ad Creatives', 'Cross-Platform Scaling', 'LTV Optimization'],
      price: '$1,999',
      isQuote: false,
    },
    {
      icon: Smartphone,
      title: 'App Development',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2000&auto=format&fit=crop',
      description: 'Premium mobile experiences for iOS and Android. Native performance with elite UI/UX design.',
      color: 'from-primary to-accent',
      glowColor: 'rgba(250, 204, 21, 0.3)',
      bgGradient: 'from-primary/10 to-transparent',
      expertise: 94,
      details: 'We turn your ideas into world-class mobile applications using modern frameworks like Flutter and React Native.',
      features: ['iOS & Android', 'Cloud Integration', 'Real-time Features', 'User Centered Design'],
      price: 'Quote Price',
      isQuote: true,
    },
    {
      icon: Shield,
      title: 'Brand Authority',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2000&auto=format&fit=crop',
      description: 'Manage your digital reputation and build unwavering trust through strategic ORM and content authority.',
      color: 'from-primary to-accent',
      glowColor: 'rgba(250, 204, 21, 0.3)',
      bgGradient: 'from-primary/10 to-transparent',
      expertise: 88,
      details: 'We monitor your brand presence across the web and use strategic content to build high authority in your niche.',
      features: ['Crisis Management', 'Review Optimization', 'Authority Building', 'Sentiment Repair'],
      price: '$999',
      isQuote: false,
    },
    {
      icon: Users,
      title: 'Custom CRM/ERP',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
      description: 'Tailor-made enterprise software that unifies your sales, finance, and operations into one powerful system.',
      color: 'from-primary to-accent',
      glowColor: 'rgba(250, 204, 21, 0.3)',
      bgGradient: 'from-primary/10 to-transparent',
      expertise: 90,
      details: 'Off-the-shelf software doesn’t always work. We build custom platforms designed specifically for your unique workflows.',
      features: ['Sales Pipeline', 'Inventory Management', 'Financial Reporting', 'Custom Dashboards'],
      price: 'Quote Price',
      isQuote: true,
    },
    {
      icon: LayoutGrid,
      title: 'UI/UX Design',
      image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2000&auto=format&fit=crop',
      description: 'World-class visual design that prioritizes user psychology and brand narrative. Design that converts.',
      color: 'from-primary to-accent',
      glowColor: 'rgba(250, 204, 21, 0.3)',
      bgGradient: 'from-primary/10 to-transparent',
      expertise: 96,
      details: 'We create intuitive interfaces that guide users through a seamless journey, turning visitors into loyal brand advocates.',
      features: ['User Psychology', 'Design Systems', 'Interactive Prototypes', 'Conversion Audits'],
      price: 'Coming Soon',
      isQuote: false,
      comingSoon: true,
    },
  ];

  const handleGetQuote = () => {
    setQuoteFormOpen(true);
  };

  const handleSubmitQuote = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Quote request submitted! Our team will get back to you shortly.');
    setQuoteFormOpen(false);
  };

  return (
    <section id="services" className="py-32 relative overflow-visible bg-[#05070a]">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-600/5 blur-[150px] rounded-full -translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.02] neural-grid" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-16 lg:mb-24 gap-8 lg:gap-12 text-center lg:text-left">
          <div className="max-w-4xl flex flex-col items-center lg:items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-[1px] bg-primary" />
              <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em]">Our Capabilities</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl sm:text-6xl lg:text-8xl font-black mb-8 text-white leading-[0.85] tracking-tighter"
            >
              Architecting <br />
              <span className="text-gradient-gold">Digital Dominance.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl text-white/40 leading-relaxed max-w-2xl font-medium"
            >
              We merge neural engineering with high-performance marketing to
              deliver unfair competitive advantages in the AI-first world.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center lg:items-end gap-6"
          >
            <div className="flex -space-x-4 mb-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-[#05070a] bg-zinc-800 flex items-center justify-center overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Client" className="w-full h-full object-cover opacity-80" />
                </div>
              ))}
              <div className="w-12 h-12 rounded-full border-2 border-[#05070a] bg-primary flex items-center justify-center text-[10px] font-black text-background">
                +50
              </div>
            </div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-2">Trusted by global innovators</p>
            <Link to="/portfolio">
              <Button className="button-premium text-xs uppercase tracking-[0.3em] px-12 py-9 h-auto rounded-2xl group">
                <span>Explore Ecosystem</span>
                <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              onClick={() => setSelectedService(index)}
              isHovered={hoveredIndex === index}
              onHover={() => setHoveredIndex(index)}
              onLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>

        {/* ANML Style Services Section */}
        <AnmlServices />

        {/* Custom Solution Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 lg:mt-32 p-[1px] bg-gradient-to-r from-white/5 via-primary/40 to-white/5 rounded-[3rem] lg:rounded-[4rem]"
        >
          <div className="bg-[#080a0f] rounded-[2.9rem] lg:rounded-[3.9rem] p-8 sm:p-12 lg:p-24 text-center relative overflow-hidden group">
            {/* Animated Background Icon */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] transition-transform duration-1000 group-hover:scale-110 pointer-events-none">
              <Zap className="w-[400px] lg:w-[600px] h-[400px] lg:h-[600px] text-primary" />
            </div>

            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-10 border border-primary/20"
              >
                <Sparkles className="w-10 h-10 text-primary" />
              </motion.div>

              <h3 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-8 text-white tracking-tighter">
                Need a Bespoke <br className="sm:hidden" />
                <span className="text-gradient-gold italic">AI System?</span>
              </h3>

              <p className="text-xl text-white/50 mb-14 max-w-3xl mx-auto font-medium leading-relaxed">
                Our neural engineering team architects custom LLM integrations and
                autonomous growth engines tailored to your enterprise DNA.
              </p>

              <div className="flex justify-center w-full">
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button className="button-premium text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] px-8 sm:px-16 py-5 sm:py-9 h-auto rounded-2xl sm:rounded-3xl w-full sm:w-auto mx-auto block">
                    Initiate Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Service Detail Modal */}
      <Dialog open={selectedService !== null} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-4xl bg-[#0d1117]/95 backdrop-blur-3xl border-white/5 p-0 overflow-hidden rounded-[3rem] shadow-[0_50px_100px_rgba(0,0,0,0.8)]">
          {selectedService !== null && (
            <div className="flex flex-col lg:flex-row h-full">
              {/* Left Column: Visual */}
              <div className="lg:w-2/5 relative h-64 lg:h-auto overflow-hidden">
                <img
                  src={services[selectedService].image}
                  alt={services[selectedService].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0d1117] via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${services[selectedService].color} flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform`}>
                    {(() => {
                      const IconComponent = services[selectedService].icon;
                      return <IconComponent className="w-8 h-8 text-background" />;
                    })()}
                  </div>
                </div>
              </div>

              {/* Right Column: Content */}
              <div className="lg:w-3/5 p-8 sm:p-12 space-y-8 bg-[#0d1117]">
                <DialogHeader>
                  <DialogTitle className="text-4xl font-black text-white tracking-tighter mb-4">
                    {services[selectedService].title}
                  </DialogTitle>
                  <DialogDescription className="text-lg text-white/50 leading-relaxed font-medium">
                    {services[selectedService].details}
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {services[selectedService].features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-4 bg-white/5 px-5 py-4 rounded-2xl border border-white/5 group hover:border-primary/30 transition-colors"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(250,204,21,0.5)]" />
                        <span className="text-sm font-bold text-white/90">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* REPLACED: Two action buttons (no price, no deploy) */}
                  <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <Link to="/pricing" className="w-full sm:w-auto">
                      <Button className="w-full sm:w-auto px-8 py-5 rounded-2xl text-xs uppercase tracking-[0.2em] bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                        Go to Pricing Page
                      </Button>
                    </Link>
                    <Button
                      className="button-premium w-full sm:w-auto px-8 py-5 rounded-2xl text-xs uppercase tracking-[0.2em]"
                      onClick={handleGetQuote}
                    >
                      Get Quote
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Quote Form Modal */}
      <Dialog open={quoteFormOpen} onOpenChange={setQuoteFormOpen}>
        <DialogContent className="max-w-2xl bg-[#0d1117]/95 backdrop-blur-3xl border-white/5 p-0 overflow-hidden rounded-[3rem] shadow-[0_50px_100px_rgba(0,0,0,0.8)]">
          {selectedService !== null && (
            <div className="p-6 sm:p-10 space-y-8">
              <DialogHeader>
                <DialogTitle className="text-2xl sm:text-3xl font-black text-white tracking-tighter">
                  Get a Quote for {services[selectedService].title}
                </DialogTitle>
                <DialogDescription className="text-white/50">
                  Fill out the form and we'll prepare a tailored proposal.
                </DialogDescription>
              </DialogHeader>

              {/* Show selected features */}
              <div className="space-y-3">
                <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white/30">Selected Services</h4>
                <div className="flex flex-wrap gap-2">
                  {services[selectedService].features.map((feat, idx) => (
                    <span key={idx} className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full border border-primary/30">
                      {feat}
                    </span>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmitQuote} className="space-y-6">
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
                <div>
                  <label className="block text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <Button type="submit" className="button-premium w-full py-6 rounded-2xl text-sm uppercase tracking-[0.3em]">
                  Submit Inquiry
                </Button>
              </form>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

function ServiceCard({ service, index, onClick, isHovered, onHover, onLeave }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onClick}
      className="group relative cursor-pointer overflow-hidden rounded-[2.5rem] h-[550px] bg-[#0d1117] border border-white/5 hover:border-primary/20 transition-all duration-700"
    >
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src={service.image}
          alt={service.title}
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-60"
        />
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#05070a] via-[#05070a]/40 to-transparent opacity-90" />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full p-10 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <motion.div
            animate={{
              y: isHovered ? -5 : 0,
              rotate: isHovered ? 5 : 0
            }}
            className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500 shadow-2xl"
          >
            <service.icon className="w-7 h-7 text-white group-hover:text-background transition-colors duration-500" />
          </motion.div>

          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="bg-primary/20 backdrop-blur-md border border-primary/30 px-3 py-1 rounded-full"
              >
                <span className="text-[10px] font-black text-primary uppercase tracking-widest">{service.expertise}% Excellence</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <h3 className="text-3xl font-black text-white leading-[0.95] tracking-tighter group-hover:text-primary transition-colors duration-500">
              {service.title}
            </h3>
            <p className="text-white/40 text-sm font-medium line-clamp-2 group-hover:text-white/60 transition-colors duration-500">
              {service.description}
            </p>
          </div>

          <div className="pt-6 relative">
            <div className="absolute top-0 left-0 w-12 h-[2px] bg-primary group-hover:w-full transition-all duration-700" />
            <Button className="w-full h-14 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-white font-black uppercase tracking-[0.2em] text-[10px] group-hover:bg-primary group-hover:text-background group-hover:border-primary transition-all duration-500 flex items-center justify-between px-6">
              <span>View Protocol</span>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-background/20 transition-colors">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Glow */}
      <div
        className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full blur-[100px] opacity-0 group-hover:opacity-20 transition-opacity duration-1000"
        style={{ backgroundColor: 'var(--primary)' }}
      />
    </motion.div>
  );
}