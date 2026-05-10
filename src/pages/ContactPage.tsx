import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Shield, Zap, Target, ArrowRight, Sparkles, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
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
            <span className="text-primary text-[10px] font-black uppercase tracking-[0.3em]">Direct Command Link</span>
          </motion.div>

          <h1 className="text-5xl md:text-8xl font-black text-foreground leading-[0.85] tracking-tighter mb-12">
            Initiate <br />
            <span className="text-gradient-gold italic">Briefing.</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground font-bold leading-relaxed max-w-3xl mx-auto mb-16">
            Secure a strategic sync with our performance engineers. We don't just talk—we architect growth.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-32 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Contact Form Portal */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="glass-card p-1 rounded-[3rem] border-white/5 shadow-2xl"
            >
              <div className="bg-[#05070a]/80 backdrop-blur-3xl p-10 md:p-12 h-full rounded-[2.8rem]">
                <h2 className="text-3xl font-black text-foreground mb-8 flex items-center gap-4">
                  <span className="w-2 h-8 bg-primary rounded-full" />
                  Secure Briefing Portal
                </h2>
                
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground ml-2">Operator Name</label>
                      <input 
                        type="text" 
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground ml-2">Secure Email</label>
                      <input 
                        type="email" 
                        placeholder="john@company.ai"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground ml-2">Primary Objective</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all appearance-none">
                      <option className="bg-background">SEO Intelligence</option>
                      <option className="bg-background">Neural Web Development</option>
                      <option className="bg-background">Social Amplification</option>
                      <option className="bg-background">AI Automation Protocol</option>
                      <option className="bg-background">Other Strategic Need</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground ml-2">Mission Details</label>
                    <textarea 
                      placeholder="Describe your current landscape and targets..."
                      rows={5}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none"
                    />
                  </div>

                  <Button className="w-full h-20 rounded-[2rem] button-premium font-black uppercase tracking-[0.3em] text-lg group">
                    Initialize Protocol
                    <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-3 transition-transform" />
                  </Button>
                </form>

                <p className="mt-8 text-center text-muted-foreground text-[10px] font-black uppercase tracking-widest">
                  ⚡ Response Latency: &lt; 1 Hour
                </p>
              </div>
            </motion.div>

            {/* Strategic Intelligence */}
            <div className="flex flex-col justify-center space-y-12">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="space-y-8"
              >
                <div className="glass-card p-8 rounded-3xl border-white/5 hover:border-primary/20 transition-all group">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <Mail className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">Electronic Mail</div>
                      <div className="text-xl font-black text-foreground">intel@rankrise.ai</div>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-8 rounded-3xl border-white/5 hover:border-primary/20 transition-all group">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <Phone className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">Direct Command Line</div>
                      <div className="text-xl font-black text-foreground">+1 (888) RANK-AI</div>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-8 rounded-3xl border-white/5 hover:border-primary/20 transition-all group">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <MapPin className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">Global Headquarters</div>
                      <div className="text-xl font-black text-foreground">Silicon Valley • New York</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Trust Dashboard */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="bg-white/5 rounded-[3rem] p-10 border border-white/5"
              >
                <div className="flex items-center gap-3 mb-8">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <span className="text-xs font-black uppercase tracking-widest text-foreground">Neural Metrics</span>
                </div>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-3xl font-black text-foreground mb-1">98%</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Partner Retention</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-foreground mb-1">5x</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Median ROI Surge</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Support Map Placeholder */}
      <section className="py-20 bg-white/5 border-t border-white/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-black text-foreground mb-6 uppercase tracking-widest">Global Command Network</h3>
            <div className="aspect-[21/9] bg-[#05070a] rounded-[3rem] border border-white/5 flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.1),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="text-muted-foreground font-bold italic tracking-widest text-sm flex items-center gap-3">
                <Target className="w-5 h-5 text-primary animate-pulse" />
                Live Network Visualization Active
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}