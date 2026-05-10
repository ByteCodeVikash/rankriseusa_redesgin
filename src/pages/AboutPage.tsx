import { motion } from 'framer-motion';
import About from '../components/About';
import Team from '../components/Team';
import { Target, Zap, Award, Users, Rocket, TrendingUp, Heart, Sparkles, Star, CheckCircle, ArrowRight, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function AboutPage() {
  const values = [
    { 
      icon: Zap, 
      title: 'Velocity First', 
      description: 'We ship fast, test faster, and iterate based on real data. While others are planning, we\'re already capturing market share.',
    },
    { 
      icon: Target, 
      title: 'Precision Growth', 
      description: 'We don\'t do fluff. Every strategy is surgically engineered. Every campaign has clear KPIs. If it doesn\'t move the needle, it doesn\'t exist.',
    },
    { 
      icon: Award, 
      title: 'Elite Excellence', 
      description: 'We\'re obsessed with being the top 0.1%. Industry-leading conversion rates and organic rankings or we don\'t consider it a win.',
    },
    { 
      icon: Shield, 
      title: 'Partner Security', 
      description: 'Your growth is our survival. That\'s why 89% of our partners have been with us for years. We\'re an extension of your command team.',
    },
  ];

  const milestones = [
    { year: '2020', event: 'Initial Deployment', desc: 'RankRiseUSA founded as a high-performance SEO lab.', icon: Rocket },
    { year: '2021', event: '$10M Impact', desc: 'Our partners crossed $10M in trackable revenue growth.', icon: TrendingUp },
    { year: '2022', event: 'Global Scaling', desc: 'Expanded operations to serve 100+ high-growth startups.', icon: Globe },
    { year: '2023', event: 'AI Integration', desc: 'Pioneered Generative Engine Optimization (GEO) protocols.', icon: Sparkles },
    { year: '2024', event: 'Market Authority', desc: 'Generated $50M+ for partners. Team of 15+ A-players.', icon: Award },
  ];

  const stats = [
    { number: '500+', label: 'Engines Scaled', icon: Rocket },
    { number: '$50M+', label: 'Revenue Architected', icon: TrendingUp },
    { number: '89%', label: 'Loyalty Rate', icon: Heart },
    { number: '15+', label: 'Surgical Experts', icon: Users },
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#05070a]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-primary text-[10px] font-black uppercase tracking-[0.3em]">The Alpha Growth Protocol</span>
            </motion.div>

            <h1 className="text-5xl md:text-8xl font-black text-foreground leading-[0.85] tracking-tighter mb-12">
              Beyond Conventional <br />
              <span className="text-gradient-gold italic">Intelligence.</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground font-bold leading-relaxed max-w-3xl mx-auto mb-16">
              We're a specialized squad of growth engineers, algorithmic architects, and performance hackers who redefined what's possible in the digital landscape.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-8 pt-12 border-t border-white/5">
              {stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-black text-foreground leading-none mb-1">{stat.number}</div>
                    <div className="text-[9px] font-black uppercase tracking-widest text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why We're Different (Modernized Component Injection) */}
      <About />

      {/* Operating Principles */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6">
              Surgical <span className="text-gradient-gold italic">Principles.</span>
            </h2>
            <p className="text-xl text-muted-foreground font-bold max-w-2xl mx-auto">
              Our operational logic is simple: Execution over rhetoric. Data over opinion. Growth over everything.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-10 rounded-[2.5rem] border-white/5 hover:border-primary/30 transition-all h-full"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(255,215,0,0.1)]">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-black text-foreground mb-4 leading-tight">{value.title}</h3>
                <p className="text-muted-foreground font-bold text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Journey (Timeline) */}
      <section className="py-32 bg-white/5 border-y border-white/5 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6">
              The Strategic <span className="text-gradient-gold italic">Timeline.</span>
            </h2>
            <p className="text-xl text-muted-foreground font-bold">
              Tracing the evolution of market dominance.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            {milestones.map((milestone, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="glass-card p-8 rounded-3xl border-white/5 relative flex flex-col md:flex-row items-center gap-10"
              >
                <div className="flex-shrink-0 w-24 h-24 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shadow-xl">
                  <span className="text-3xl font-black text-primary">{milestone.year}</span>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-black text-foreground mb-2">{milestone.event}</h3>
                  <p className="text-muted-foreground font-bold">{milestone.desc}</p>
                </div>
                <div className="hidden md:flex w-16 h-16 rounded-full bg-white/5 border border-white/10 items-center justify-center">
                  <milestone.icon className="w-6 h-6 text-primary" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Team Integration */}
      <Team />

      {/* High-Impact CTA */}
      <section className="py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 blur-[120px] rounded-full translate-y-1/2 pointer-events-none" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-5xl md:text-8xl font-black text-foreground mb-8 leading-[0.85] tracking-tighter">
              Ready to <br />
              <span className="text-gradient-gold italic">Scale?</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground font-bold mb-16 max-w-2xl mx-auto">
              Join 500+ market leaders who secured their future with the RankRise Protocol.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                <Button className="h-20 px-12 rounded-2xl button-premium font-black uppercase tracking-widest text-lg group">
                  Initialize Sync
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button variant="outline" className="h-20 px-12 rounded-2xl border-white/10 hover:border-primary/50 text-foreground font-black uppercase tracking-widest text-lg">
                  Verify Proof
                </Button>
              </Link>
            </div>
            
            <div className="flex items-center justify-center gap-8 mt-16">
              {['Surgical Precision', 'Zero Fluff', 'Pure ROI'].map((badge) => (
                <div key={badge} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {badge}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Missing Globe import fix
function Globe({ className }: { className?: string }) {
  return (
    <svg 
      className={className}
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}