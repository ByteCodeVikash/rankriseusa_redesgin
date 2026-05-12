import { motion } from 'framer-motion';
import { ExternalLink, Star, ArrowRight, Sparkles, Filter, Shield, Zap, Target, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'SEO Intelligence', 'Neural Web', 'Social Growth', 'AI Automation'];

  const projects = [
    {
      title: 'Global Fintech Engine',
      category: 'Neural Web',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      stats: '15% Conv Rate',
      results: '+300% Revenue',
      description: 'Full architectural overhaul of a global fintech platform focused on sub-second load times and high-trust UX.'
    },
    {
      title: 'E-commerce Domination',
      category: 'SEO Intelligence',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      stats: '#1 Rankings',
      results: '+450% Traffic',
      description: 'Strategic SEO protocol implementation resulting in page 1 rankings for 200+ high-intent transactional keywords.'
    },
    {
      title: 'Neural Brand Identity',
      category: 'Neural Web',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800',
      stats: '1.2s Load Time',
      results: 'Elite Design',
      description: 'Modernizing a legacy brand into a premium AI-focused digital headquarters with cinematic animations.'
    },
    {
      title: 'Viral Loop Framework',
      category: 'Social Growth',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800',
      stats: '500K+ Reach',
      results: '20K+ Leads',
      description: 'Architecting an autonomous social amplification system that generates viral engagement loops daily.'
    },
    {
      title: 'Predictive Ops Bot',
      category: 'AI Automation',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
      stats: '90% Accuracy',
      results: '$200K Saved',
      description: 'Deployment of custom LLM agents to handle customer intelligence and predictive operational scaling.'
    },
    {
      title: 'SaaS Growth Shield',
      category: 'SEO Intelligence',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800',
      stats: '5x ROAS',
      results: 'Unfair Advantage',
      description: 'Surgical PPC and SEO synchronization for an enterprise SaaS provider to capture enterprise-level leads.'
    }
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-primary text-[10px] font-black uppercase tracking-[0.3em]">The Execution Archive</span>
          </motion.div>

          <h1 className="text-5xl md:text-8xl font-black text-foreground leading-[0.85] tracking-tighter mb-12">
            Proven <br />
            <span className="text-gradient-gold italic">Protocols.</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground font-bold leading-relaxed max-w-3xl mx-auto mb-16">
            A surgical showcase of digital dominance. Every project is a testament to our commitment to absolute performance.
          </p>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all border ${
                  activeCategory === cat 
                  ? 'bg-primary text-background border-primary shadow-[0_0_20px_rgba(255,215,0,0.3)]' 
                  : 'bg-white/5 text-muted-foreground border-white/10 hover:border-primary/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-32 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={i}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="glass-card group overflow-hidden rounded-[2.5rem] border-white/5 hover:border-primary/30 transition-all"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  <div className="absolute top-6 left-6">
                    <div className="px-4 py-1.5 rounded-full bg-primary/20 backdrop-blur-xl border border-primary/30 text-primary text-[10px] font-black uppercase tracking-widest">
                      {project.category}
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-black text-foreground">{project.title}</h3>
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-primary group-hover:text-background transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </div>
                  </div>

                  <p className="text-muted-foreground font-bold text-sm mb-8 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 pt-8 border-t border-white/5">
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">Performance</div>
                      <div className="text-lg font-black text-foreground">{project.stats}</div>
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">Result</div>
                      <div className="text-lg font-black text-primary">{project.results}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="py-32 bg-white/5 border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full translate-x-1/2 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6">
              The Rankriseusa <span className="text-gradient-gold italic">Advantage.</span>
            </h2>
            <p className="text-xl text-muted-foreground font-bold">Unmatched results for world-class partners.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
            {[
              { label: 'Avg ROI Increase', value: '340%', icon: TrendingUp },
              { label: 'Time To Rank #1', value: '72 Days', icon: Zap },
              { label: 'Conv Rate Surge', value: '185%', icon: Target },
              { label: 'Partner Success', value: '98%', icon: Star },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl font-black text-foreground mb-2">{stat.value}</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-5xl md:text-8xl font-black text-foreground leading-[0.8] tracking-tighter mb-12">
              Start Your <br />
              <span className="text-gradient-gold italic">Ascension.</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground font-bold mb-16">
              Join the elite circle of businesses dominating their digital landscapes.
            </p>
            <Link to="/contact">
              <Button className="h-20 px-16 rounded-2xl button-premium font-black uppercase tracking-widest text-lg group">
                Apply For Protocol Sync
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-3 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}