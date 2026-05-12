import { motion, useMotionValue, useSpring } from 'framer-motion';
import {
  Search, Share2, Code, Brain, Megaphone, BarChart3, ArrowRight, Sparkles,
  Zap, ShoppingCart, Target, Shield, Smartphone, Server, Bot, Database,
  Users, GraduationCap, LayoutGrid, Cloud, ShieldCheck, Eye, Wrench, Cpu
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
      image: '/assets/images/services/service_web_dev.png',
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
      image: '/assets/images/services/service_app_dev.png',
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
      image: '/assets/images/services/service_brand.png',
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


  const handleAction = (service: any, e: React.MouseEvent) => {
    e.stopPropagation();
    if (service.comingSoon) return;
    alert(service.isQuote ? `Requesting quote for ${service.title}` : `Purchasing ${service.title}`);
  };

  return (
    <section id="services" className="py-24 relative overflow-visible bg-[#05070a]">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/5 blur-[150px] rounded-full -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl sm:text-7xl font-black mb-6 text-white leading-[0.95]"
            >
              Architecting <br />
              <span className="text-gradient-gold">Digital Dominance.</span>
            </motion.h2>

            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl text-white/50 leading-relaxed max-w-2xl font-medium"
            >
              We merge neural engineering with high-performance marketing to 
              deliver unfair competitive advantages.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link to="/portfolio">
              <Button className="button-premium text-xs uppercase tracking-widest px-10 py-8 h-auto rounded-2xl">
                Explore Portfolio
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              onClick={() => setSelectedService(index)}
              onAction={handleAction}
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 p-[1px] bg-gradient-to-r from-white/10 via-primary/50 to-white/10 rounded-[3rem]"
        >
          <div className="bg-[#05070a] rounded-[2.9rem] p-10 sm:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-[0.03]">
              <Zap className="w-48 h-48 text-primary" />
            </div>
            <h3 className="text-4xl sm:text-5xl font-black mb-6 text-white">Need a Bespoke AI System?</h3>
            <p className="text-xl text-white/50 mb-10 max-w-3xl mx-auto font-medium">
              Our neural engineering team architects custom LLM integrations and 
              autonomous growth engines tailored to your enterprise DNA.
            </p>
            <Link to="/contact">
              <Button className="button-premium text-sm uppercase tracking-widest px-12 py-8 h-auto rounded-2xl">
                Initiate Consultation
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Service Detail Modal */}
      <Dialog open={selectedService !== null} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-2xl bg-[#0d1117]/95 backdrop-blur-2xl border-white/5 p-8 rounded-[2.5rem]">
          {selectedService !== null && (
            <div className="space-y-8">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-4 text-3xl font-black text-white">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${services[selectedService].color} flex items-center justify-center shadow-lg`}>
                    {(() => {
                      const IconComponent = services[selectedService].icon;
                      return <IconComponent className="w-7 h-7 text-background" />;
                    })()}
                  </div>
                  {services[selectedService].title}
                </DialogTitle>
                <DialogDescription className="text-xl pt-4 text-white/50 leading-relaxed">
                  {services[selectedService].details}
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-8">
                <div className="grid grid-cols-2 gap-4">
                  {services[selectedService].features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-3 bg-white/5 px-4 py-3 rounded-xl border border-white/5"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-sm font-bold text-white">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-primary/[0.03] p-6 rounded-2xl border border-primary/20 flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-white/40 uppercase text-xs tracking-widest mb-1">Estimated Investment</h4>
                    <span className="text-3xl font-black text-primary">
                      {services[selectedService].price}
                    </span>
                  </div>
                  <Button 
                    className="button-premium px-8 py-6"
                    onClick={(e) => handleAction(services[selectedService], e)}
                  >
                    {services[selectedService].isQuote ? 'Get Quote' : 'Secure Now'}
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
function ServiceCard({ service, index, onClick, onAction }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onClick}
      className="group relative cursor-pointer overflow-hidden rounded-[2.5rem] h-[500px]"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
        />
        {/* Dark Overlays for Readability */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full p-10 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
            <service.icon className="w-6 h-6 text-white group-hover:text-background" />
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-black text-white mb-6 leading-tight tracking-tighter group-hover:text-primary transition-colors">
            {service.title}
          </h3>
          
          <Button className="w-full h-14 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold uppercase tracking-widest text-[10px] group-hover:bg-primary group-hover:text-background group-hover:border-primary transition-all duration-500">
            <span>View Protocol</span>
            <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-2 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div className="absolute inset-0 border-2 border-primary/30 rounded-[2.5rem]" />
      </div>
    </motion.div>

  );
}