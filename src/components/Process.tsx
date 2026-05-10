import { motion } from 'framer-motion';
import { Search, Target, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Discovery & Audit',
    description: 'We conduct a deep-dive analysis into your current digital footprint, market position, and AI search presence.',
    details: ['Generative Engine Audit', 'Competitive Neural Mapping', 'Brand Sentiment Analysis'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Target,
    title: 'Strategic Blueprint',
    description: 'Our AI engineers architect a bespoke growth system designed to dominate your specific market niche.',
    details: ['Semantic Content Strategy', 'AI Agent Integration Planning', 'Predictive ROI Modeling'],
    color: 'from-primary to-accent'
  },
  {
    icon: Cpu,
    title: 'Neural Implementation',
    description: 'Deployment of custom models, GEO optimizations, and high-performance scaling systems.',
    details: ['LLM Optimization (GEO)', 'Automated Growth Loops', 'Real-time Performance Scaling'],
    color: 'from-purple-500 to-pink-500'
  }
];

export default function Process() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest mb-6"
          >
            <CheckCircle2 className="w-3 h-3" />
            <span>Our Methodology</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl font-black mb-6 text-foreground"
          >
            The <span className="text-gradient-gold">Growth Architecture.</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground leading-relaxed"
          >
            A systematic approach to scaling brands in the era of artificial intelligence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              <div className="glass-card p-10 rounded-[2.5rem] border-white/5 hover:border-primary/30 transition-all duration-500 h-full flex flex-col">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-8 shadow-lg`}>
                  <step.icon className="w-8 h-8 text-background" />
                </div>

                <div className="absolute top-10 right-10 text-6xl font-black text-white/5 group-hover:text-primary/10 transition-colors">
                  0{index + 1}
                </div>

                <h3 className="text-2xl font-black mb-4 text-foreground group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {step.description}
                </p>

                <div className="space-y-3 mt-auto">
                  {step.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm font-bold text-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {detail}
                    </div>
                  ))}
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 z-20">
                  <ArrowRight className="w-8 h-8 text-white/10" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
