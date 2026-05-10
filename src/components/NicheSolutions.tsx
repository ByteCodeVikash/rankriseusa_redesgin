import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight, ShoppingCart, Home, Briefcase, Rocket } from 'lucide-react';

const niches = [
  {
    id: 'ecommerce',
    title: 'E-commerce Mastery',
    icon: ShoppingCart,
    description: 'Custom neural architectures for high-conversion retail. We optimize for purchase intent and dynamic product discovery.',
    stats: ['94% Sales Lift', 'AI Upselling', 'Cart Recovery'],
  },
  {
    id: 'local',
    title: 'Local Authority',
    icon: Home,
    description: 'Hyper-local optimization for service providers. Dominate map packs and capture local intent before competitors.',
    stats: ['#1 Map Rankings', 'Lead Generation', 'Reputation AI'],
  },
  {
    id: 'enterprise',
    title: 'Enterprise Scalability',
    icon: Briefcase,
    description: 'Sophisticated systems for multi-location brands. Unified intelligence across global digital properties.',
    stats: ['Global Infrastructure', 'Brand Integrity', 'Workflow Automation'],
  },
  {
    id: 'startup',
    title: 'Startup Acceleration',
    icon: Rocket,
    description: 'Fast-track authority for emerging tech. Build market share through aggressive discovery optimization.',
    stats: ['Rapid Indexing', 'VC Ready ROI', 'Aggressive Growth'],
  }
];

export default function NicheSolutions() {
  const [activeNiche, setActiveNiche] = useState<string | null>(niches[0].id);

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Left Side: Accordion */}
          <div className="lg:w-1/2 space-y-6">
            <div className="mb-12">
              <h2 className="text-5xl md:text-7xl font-black text-black leading-tight tracking-tighter uppercase mb-6">
                Specialized <br />
                <span className="text-primary italic">Intelligence.</span>
              </h2>
              <p className="text-xl text-gray-500 font-medium max-w-xl">
                We deploy industry-specific neural models designed for your unique operational landscape.
              </p>
            </div>

            <div className="space-y-4">
              {niches.map((niche) => (
                <div key={niche.id} className="group">
                  <button
                    onClick={() => setActiveNiche(activeNiche === niche.id ? null : niche.id)}
                    className={`w-full text-left transition-all duration-500 ${
                      activeNiche === niche.id 
                        ? 'bg-primary p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(250,204,21,0.3)]' 
                        : 'bg-gray-50 p-8 rounded-2xl hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${
                          activeNiche === niche.id ? 'bg-black/10' : 'bg-primary/10'
                        }`}>
                          <niche.icon className={`w-7 h-7 ${activeNiche === niche.id ? 'text-black' : 'text-primary'}`} />
                        </div>
                        <span className={`text-2xl font-black uppercase tracking-tight ${
                          activeNiche === niche.id ? 'text-black' : 'text-gray-900'
                        }`}>
                          {niche.title}
                        </span>
                      </div>
                      {activeNiche === niche.id ? (
                        <Minus className="w-6 h-6 text-black" />
                      ) : (
                        <Plus className="w-6 h-6 text-gray-400 group-hover:text-primary transition-colors" />
                      )}
                    </div>

                    <AnimatePresence>
                      {activeNiche === niche.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pt-10 space-y-8">
                            <p className="text-lg text-black/70 font-medium leading-relaxed">
                              {niche.description}
                            </p>
                            <div className="flex flex-wrap gap-3">
                              {niche.stats.map((stat, i) => (
                                <span key={i} className="px-5 py-2.5 rounded-full bg-black/10 text-black text-[11px] font-black uppercase tracking-widest">
                                  {stat}
                                </span>
                              ))}
                            </div>
                            <div className="flex items-center gap-3 text-black font-black uppercase tracking-[0.2em] text-xs pt-4 group/btn cursor-pointer hover:opacity-70 transition-opacity">
                              Explore Architecture
                              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Visual Context */}
          <div className="lg:w-1/2 flex items-center justify-center">
            <div className="relative w-full max-w-xl aspect-square">
              <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full" />
              <motion.div
                key={activeNiche}
                initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative h-full bg-gray-50 rounded-[4rem] border border-gray-100 shadow-[0_40px_100px_rgba(0,0,0,0.1)] p-12 flex flex-col justify-center text-center"
              >
                {activeNiche ? (
                  <>
                    <div className="w-32 h-32 rounded-[3rem] bg-primary flex items-center justify-center mx-auto mb-10 shadow-2xl">
                      {(() => {
                        const Icon = niches.find(n => n.id === activeNiche)?.icon || ShoppingCart;
                        return <Icon className="w-16 h-16 text-black" />;
                      })()}
                    </div>
                    <h3 className="text-4xl font-black text-black mb-6 uppercase tracking-tighter">
                      {niches.find(n => n.id === activeNiche)?.title}
                    </h3>
                    <div className="space-y-4">
                      {niches.find(n => n.id === activeNiche)?.stats.map((stat, i) => (
                        <div key={i} className="flex items-center justify-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          <span className="text-xl font-black text-gray-900 uppercase tracking-tight">{stat}</span>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="text-center space-y-6">
                    <p className="text-gray-400 font-black uppercase tracking-widest text-sm">Initialize Data Stream</p>
                    <p className="text-2xl text-gray-300 font-bold">Select an Industry Protocol</p>
                  </div>
                )}
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 border-t-2 border-r-2 border-primary/20 rounded-tr-[5rem]" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 border-b-2 border-l-2 border-primary/20 rounded-bl-[5rem]" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
