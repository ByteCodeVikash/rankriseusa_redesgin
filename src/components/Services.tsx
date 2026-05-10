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

export default function Services() {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      icon: Search,
      title: 'GEO + AI SEO',
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
    <section id="services" className="py-24 relative overflow-hidden bg-[#05070a]">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/5 blur-[150px] rounded-full -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-primary text-[10px] font-black uppercase tracking-widest mb-6"
            >
              <Sparkles className="w-3 h-3 fill-primary" />
              <span>Elite Intelligence Hub</span>
            </motion.div>

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
      className="group relative cursor-pointer"
    >
      <div className="relative h-full min-h-[480px] bg-[#0d1117] rounded-[3rem] p-12 border border-white/5 transition-all duration-700 hover:border-primary/50 flex flex-col overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.4)]">
        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[60px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-all duration-700" />
        
        {/* Icon Overlay */}
        <div className="absolute -right-8 -top-8 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-700">
          <service.icon className="w-48 h-48" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          <div className="w-20 h-20 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-700">
            <service.icon className="w-10 h-10 text-primary" />
          </div>

          <h3 className="text-3xl font-black mb-6 text-white leading-tight group-hover:text-primary transition-colors tracking-tighter">
            {service.title}
          </h3>
          
          <p className="text-lg text-white/50 mb-10 leading-relaxed font-medium group-hover:text-white/70 transition-colors">
            {service.description}
          </p>
          
          <div className="mt-auto">
            <div className="flex flex-wrap gap-2 mb-8">
              {service.features.slice(0, 2).map((feature: string, i: number) => (
                <span key={i} className="text-[10px] font-black uppercase tracking-widest bg-white/5 border border-white/5 text-white/40 px-3 py-1.5 rounded-lg group-hover:border-primary/10 group-hover:text-primary/60 transition-all">
                  {feature}
                </span>
              ))}
            </div>

            <Button className="w-full h-16 rounded-2xl bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-xs group-hover:bg-primary group-hover:text-background transition-all duration-700">
              <span>View Protocol</span>
              <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-2 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}