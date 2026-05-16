import { motion } from 'framer-motion';
import { Users, Award, Target, Zap, Rocket, TrendingUp, Heart, Shield, Sparkles, Brain, Cpu, Globe } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

export default function About() {
  const [counts, setCounts] = useState({ projects: 0, clients: 0, years: 0, satisfaction: 0 });

  useEffect(() => {
    const targets = { projects: 500, clients: 200, years: 5, satisfaction: 98 };
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const timer = setInterval(() => {
      setCounts(prev => ({
        projects: Math.min(prev.projects + Math.ceil(targets.projects / steps), targets.projects),
        clients: Math.min(prev.clients + Math.ceil(targets.clients / steps), targets.clients),
        years: Math.min(prev.years + Math.ceil(targets.years / steps), targets.years),
        satisfaction: Math.min(prev.satisfaction + Math.ceil(targets.satisfaction / steps), targets.satisfaction),
      }));
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      label: 'AI Integrations',
      value: counts.projects,
      suffix: '+',
      icon: Brain,
      color: 'from-primary to-accent',
      description: 'Neural networks deployed'
    },
    {
      label: 'Global Partners',
      value: counts.clients,
      suffix: '+',
      icon: Globe,
      color: 'from-primary to-accent',
      description: 'Across 15 countries'
    },
    {
      label: 'Elite Engineers',
      value: 45,
      suffix: '+',
      icon: Cpu,
      color: 'from-primary to-accent',
      description: 'Specialized experts'
    },
    {
      label: 'Success Rate',
      value: counts.satisfaction,
      suffix: '%',
      icon: TrendingUp,
      color: 'from-primary to-accent',
      description: 'Growth achieved'
    },
  ];

  const values = [
    {
      title: 'Neural Innovation',
      description: 'We leverage large language models and predictive AI to create strategies that are always three steps ahead.',
      icon: Sparkles,
      color: 'from-primary to-accent'
    },
    {
      title: 'Data Sovereignty',
      description: 'Your data is your power. We build systems that protect your intellectual property while maximizing its utility.',
      icon: Shield,
      color: 'from-primary to-accent'
    },
    {
      title: 'Hyper-Scale',
      description: 'Our solutions are built on elastic infrastructure, designed to scale from zero to millions of users seamlessly.',
      icon: Rocket,
      color: 'from-primary to-accent'
    },
    {
      title: 'Human-Centric AI',
      description: 'We believe AI should empower humans, not replace them. We focus on enhancing creativity and productivity.',
      icon: Users,
      color: 'from-primary to-accent'
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Main Content Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-20 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gray-50 border border-gray-100 text-primary text-[11px] font-black uppercase tracking-[0.3em]"
            >
              <Zap className="w-3.5 h-3.5 fill-primary" />
              <span>Defining The Global Standard</span>
            </motion.div>

            <h2 className="text-5xl sm:text-6xl lg:text-8xl font-black text-black leading-[0.85] tracking-tighter uppercase">
              Beyond Conventional <br />
              <span className="text-primary italic">Consultancy.</span>
            </h2>

            <p className="text-lg sm:text-xl text-gray-500 leading-relaxed font-medium max-w-xl">
              Rankriseusa is a high-performance digital consultancy. We merge human expertise with neural engineering to architect comprehensive ecosystems that outpace the market.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 pt-4">
              <Button className="button-premium w-full sm:w-auto px-8 sm:px-12 py-6 sm:py-9 text-xs sm:text-sm uppercase tracking-[0.2em] h-auto rounded-2xl">
                Our Methodology
              </Button>
              <Button variant="outline" className="w-full sm:w-auto px-8 sm:px-12 py-6 sm:py-9 text-xs sm:text-sm uppercase tracking-[0.2em] h-auto rounded-2xl border-gray-200 text-white hover:bg-gray-50 transition-all font-black">
                Consultancy Intel
              </Button>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-8 lg:p-12 rounded-[2.5rem] lg:rounded-[3rem] border border-gray-100 hover:border-primary/30 transition-all duration-700 group relative overflow-hidden shadow-sm"
              >
                <div className="absolute top-0 right-0 p-8 opacity-[0.05] group-hover:scale-110 transition-transform">
                  <stat.icon className="w-24 h-24 text-primary" />
                </div>

                <div className={`w-16 h-16 rounded-2xl bg-white border border-gray-100 flex items-center justify-center mb-8 shadow-sm group-hover:bg-primary/10 transition-all duration-700 relative z-10`}>
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>

                <div className="text-4xl lg:text-5xl font-black text-black mb-3 tracking-tighter relative z-10">
                  {stat.value}{stat.suffix}
                </div>
                <div className="font-black text-gray-400 uppercase text-[10px] tracking-[0.2em] relative z-10">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="pt-16 lg:pt-24 border-t border-gray-100">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 lg:mb-24"
          >
            <h3 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 lg:mb-8 tracking-tighter text-black uppercase">Technical <span className="text-primary italic">Sovereignty.</span></h3>
            <p className="text-lg sm:text-xl text-gray-500 max-w-3xl mx-auto font-medium">
              We operate at the intersection of technical brilliance and strategic authority.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-16 text-center sm:text-left">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="mb-10 relative inline-block">
                  <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className={`relative w-20 h-20 sm:w-24 sm:h-24 mx-auto sm:mx-0 rounded-[2rem] sm:rounded-[2.5rem] bg-gray-50 border border-gray-300 flex items-center justify-center group-hover:border-primary/30 transition-all duration-700 group-hover:-translate-y-2 group-hover:bg-white group-hover:shadow-xl`}>
                    <value.icon className="w-10 h-10 text-primary transition-transform group-hover:scale-110" />
                  </div>
                </div>
                <h4 className="text-2xl font-black mb-4 text-black tracking-tighter uppercase group-hover:text-primary transition-colors">{value.title}</h4>
                <p className="text-gray-500 leading-relaxed font-medium text-lg">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}