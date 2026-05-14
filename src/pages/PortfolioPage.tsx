import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  ArrowRight,
  Search,
  Palette,
  Share2,
  BarChart3,
  Mail,
  Zap,
  Sparkles,
  Target,
  Shield
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Web Design', 'Marketing & Branding', 'GROWTH ARCHITECTURE'];

  const projects = [
    {
      id: 1,
      title: 'Attention Seeker 3D Portfolio',
      category: 'Web Design',
      tag: 'PORTFOLIO',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      description: 'Immersive 3D portfolio experience with bold motion, modern layout, and a high-impact first impression.'
    },
    {
      id: 2,
      title: 'Digital Mark Seven',
      category: 'Web Design',
      tag: 'AGENCY',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      description: 'Clean digital agency website built to present services, build trust, and convert visitors into inquiries.'
    },
    {
      id: 3,
      title: 'DJ Intro',
      category: 'GROWTH ARCHITECTURE',
      tag: 'WEB APP',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800',
      description: 'Stylish intro site with music-forward visuals and an energetic presentation for a DJ brand.'
    },
    {
      id: 4,
      title: 'GasXpert',
      category: 'Marketing & Branding',
      tag: 'GAS SERVICE',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800',
      description: 'Modern gas service platform with booking flow, customer support, and a clean service-first UI.'
    },
    {
      id: 5,
      title: 'Headphones Only',
      category: 'Web Design',
      tag: 'E-COMMERCE',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800',
      description: 'Premium headphone storefront with a product-focused layout and conversion-friendly shopping experience.'
    },
    {
      id: 6,
      title: 'Lava Flameflow Animation',
      category: 'GROWTH ARCHITECTURE',
      tag: 'WEB APP',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800',
      description: 'Experimental animated landing page with dramatic visuals and smooth motion-driven storytelling.'
    }
  ];

  const benefits = [
    {
      title: 'Brand Identity',
      icon: Palette,
      description: 'Logos, visual systems, and consistent brand assets that make your business look polished and memorable.',
      highlight: 'Clear brand direction',
      color: 'bg-primary/10 text-primary'
    },
    {
      title: 'Social Media Marketing',
      icon: Share2,
      description: 'Creative content planning and campaign direction to help your brand stay visible and engaging.',
      highlight: 'Better audience reach',
      color: 'bg-blue-500/10 text-blue-400'
    },
    {
      title: 'Performance Advertising',
      icon: BarChart3,
      description: 'Targeted ad strategies designed to bring in leads, boost sales, and improve campaign efficiency.',
      highlight: 'Focused conversions',
      color: 'bg-orange-500/10 text-orange-400'
    },
    {
      title: 'Email Marketing',
      icon: Mail,
      description: 'Simple, effective email flows that help you stay connected with customers and drive repeat business.',
      highlight: 'Stronger retention',
      color: 'bg-green-500/10 text-green-400'
    }
  ];

  const filteredProjects = projects.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#05070a] min-h-screen neural-grid pb-20 relative overflow-hidden text-foreground">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full animate-pulse" />
      </div>

      {/* Hero Section */}
      <section className="pt-40 pb-5 text-center container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-8 flex justify-center"
        >
          <div className="px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-3">
            <Sparkles className="w-3 h-3" />
            GROWTH ARCHIVE
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-9xl font-black text-white mb-8 tracking-tighter leading-[0.85]"
        >
          Proven <br />
          <span className="text-gradient-gold italic">Protocols.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground max-w-2xl mx-auto mb-16 font-bold text-xl md:text-2xl leading-relaxed"
        >
          A surgical showcase of digital dominance. Every project is a testament to our commitment to absolute performance.
        </motion.p>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`pill-button ${activeCategory === cat ? 'pill-button-dark-active' : 'pill-button-dark-inactive'}`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto mb-12 relative group"
        >
          <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-focus-within:opacity-100 transition-opacity" />
          <input
            type="text"
            placeholder="Search by title, tag, or description"
            className="w-full h-20 pl-16 pr-8 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-white text-lg placeholder:text-muted-foreground relative z-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-7 top-1/2 -translate-y-1/2 text-muted-foreground w-6 h-6 group-focus-within:text-primary transition-colors z-20" />
        </motion.div>
      </section>


      {/* Gallery Header */}
      <section className="pt-20 pb-10 container mx-auto px-4 relative z-10">
        <div className="flex justify-between items-end border-l-8 border-primary pl-10 mb-20">
          <div>
            <motion.h2
              key={activeCategory}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-5xl font-black text-white tracking-tighter"
            >
              {activeCategory === 'All' ? 'Dominating Web' : activeCategory}
            </motion.h2>
          </div>
          <div className="text-primary text-sm font-black uppercase tracking-[0.3em]">{filteredProjects.length} Execution Units</div>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                transition={{ duration: 0.5 }}
                className="glass-card-premium group cursor-pointer rounded-xl overflow-hidden"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05070a] via-transparent to-transparent opacity-60" />
                  <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <div className="w-14 h-14 rounded-2xl bg-primary text-background flex items-center justify-center shadow-[0_0_30px_rgba(250,204,21,0.4)]">
                      <ExternalLink className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                <div className="p-10">
                  <div className="flex items-center gap-3 mb-5">
                    <Zap className="w-4 h-4 text-primary" />
                    <span className="text-[11px] font-black text-primary uppercase tracking-[0.2em]">
                      {project.tag}
                    </span>
                  </div>
                  <h3 className="text-3xl font-black text-white mb-5 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-base mb-12 leading-relaxed font-bold line-clamp-2">
                    {project.description}
                  </p>

                  <Link
                    to="#"
                    className="inline-flex items-center gap-4 text-primary text-xs font-black uppercase tracking-[0.3em] group/link"
                  >
                    View Sync Detail
                    <ArrowRight className="w-5 h-5 group-hover/link:translate-x-3 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Start Project CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-40 text-center relative"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 blur-[100px] rounded-full" />
          <Link to="/contact">
            <Button className="h-24 px-20 rounded-[2rem] button-premium font-black uppercase tracking-[0.3em] text-lg flex items-center gap-5 mx-auto relative z-10 group">
              Start Protocol Sync
              <ArrowRight className="w-7 h-7 group-hover:translate-x-4 transition-transform" />
            </Button>
          </Link>
          <p className="mt-12 text-muted-foreground font-black uppercase tracking-[0.4em] text-xs">
            Ascend to digital dominance today.
          </p>
        </motion.div>
      </section>
      {/* Marketing Section (Grow Faster) */}
      <section className="py-32 bg-white/[0.02] border-y border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="mb-6"
          >
            <span className="px-5 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.3em] border border-primary/20">
              GROWTH ARCHITECTURE
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter"
          >
            Grow Faster With <br />
            <span className="text-gradient-gold">Marketing + Brand Identity</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-3xl mx-auto mb-24 font-bold text-lg leading-relaxed"
          >
            A combined strategy section for lead generation, visibility, and memorable brand presence — built to help your business look premium and perform better.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto text-left">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-card-premium p-10 rounded-[3rem] border border-white/5 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className={`w-16 h-16 rounded-2xl ${benefit.color} flex items-center justify-center mb-8 shadow-2xl relative z-10`}>
                  <benefit.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-white mb-4 relative z-10">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm mb-10 leading-relaxed font-bold relative z-10">
                  {benefit.description}
                </p>
                <div className="flex items-center gap-3 pt-8 border-t border-white/5 relative z-10">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(250,204,21,0.5)]" />
                  <span className="text-[11px] font-black text-primary uppercase tracking-widest">
                    {benefit.highlight}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Proof Stats (Optional from previous versions) */}
      <section className="py-40 bg-white/[0.01] border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-16 max-w-6xl mx-auto">
            {[
              { label: 'Conversion Surge', value: '185%', icon: Target },
              { label: 'Time To Rank #1', value: '72 Days', icon: Zap },
              { label: 'Avg ROI Boost', value: '340%', icon: BarChart3 },
              { label: 'Success Protocol', value: '98%', icon: Shield },
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="w-20 h-20 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-8 group-hover:border-primary/50 transition-all shadow-xl">
                  <stat.icon className="w-10 h-10 text-primary" />
                </div>
                <div className="text-5xl font-black text-white mb-3 tracking-tighter">{stat.value}</div>
                <div className="text-[11px] font-black uppercase tracking-[0.3em] text-primary/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}