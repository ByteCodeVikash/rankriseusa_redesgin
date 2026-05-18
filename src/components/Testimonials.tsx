import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star, TrendingUp, Zap, Sparkles, Brain, Cpu, MessageSquare, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, NeuralBridge',
      company: 'AI Infrastructure',
      content: 'Rankriseusa completely revolutionized our digital presence. Their GEO strategy didn\'t just bring traffic; it positioned us as the primary authority on ChatGPT and Gemini. A masterclass in modern marketing.',
      rating: 5,
      image: 'https://i.pravatar.cc/150?img=1',
      metric: '450% Authority Lift',
      icon: Brain,
      color: 'from-primary to-accent',
    },
    {
      name: 'Michael Chen',
      role: 'Product Lead, QuantumOps',
      company: 'Enterprise SaaS',
      content: 'The custom AI agents Rankriseusa built for our operations saved us thousands of man-hours. It\'s rare to find an agency that truly understands LLM architecture and business ROI simultaneously.',
      rating: 5,
      image: 'https://i.pravatar.cc/150?img=2',
      metric: '85% Cost Reduction',
      icon: Cpu,
      color: 'from-primary to-accent',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Growth Director, Omni Retail',
      company: 'Headless Commerce',
      content: 'Moving to a headless architecture with Rankriseusa was the best decision for our brand. Our site speed is now world-class, and our mobile conversion has skyrocketed by 3x.',
      rating: 5,
      image: 'https://i.pravatar.cc/150?img=3',
      metric: '3x Conversion Rate',
      icon: TrendingUp,
      color: 'from-primary to-accent',
    },
    {
      name: 'David Park',
      role: 'Founder, Apex Digital',
      company: 'Web3 Ecosystem',
      content: 'From the initial brand concept to the final high-performance deployment, Rankriseusa delivered excellence at every step. They are the only choice for founders who want to win.',
      rating: 5,
      image: 'https://i.pravatar.cc/150?img=4',
      metric: '200% Organic Scale',
      icon: Zap,
      color: 'from-primary to-accent',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const navigate = (dir: 'prev' | 'next') => {
    setDirection(dir === 'next' ? 1 : -1);
    setCurrent((prev) => {
      if (dir === 'prev') return prev === 0 ? testimonials.length - 1 : prev - 1;
      return (prev + 1) % testimonials.length;
    });
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <section className="py-24 sm:py-16 relative overflow-hidden bg-background">
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-6"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Success Echoes</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl font-black mb-6 text-foreground"
          >
            Trusted By <span className="text-gradient-gold">Industry Giants</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Don't just take our word for it. Hear from the leaders who are
            shaping the future with our intelligence.
          </motion.p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto relative px-4 sm:px-0">
          <div className="relative min-h-[500px] sm:min-h-[450px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 200, damping: 25 },
                  opacity: { duration: 0.3 },
                }}
                className="absolute inset-0"
              >
                <div className="h-full glass-card rounded-[3rem] p-10 sm:p-16 border-white/5 relative overflow-hidden flex flex-col justify-between">
                  {/* Quote Background */}
                  <Quote className="absolute -top-10 -left-10 w-48 h-48 text-primary/5 -rotate-12" />

                  <div className="relative z-10">
                    <div className="flex gap-1 mb-8">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                      ))}
                    </div>

                    <p className="text-2xl sm:text-3xl text-foreground font-medium italic leading-relaxed mb-10">
                      "{testimonials[current].content}"
                    </p>
                  </div>

                  <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 pt-8 border-t border-white/5">
                    <div className="flex items-center gap-5">
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                        <img
                          src={testimonials[current].image}
                          alt={testimonials[current].name}
                          className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-primary/20 relative z-10"
                        />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-foreground">{testimonials[current].name}</h4>
                        <p className="text-muted-foreground font-medium">{testimonials[current].role}</p>
                        <p className="text-primary text-xs font-black uppercase tracking-widest mt-1">
                          {testimonials[current].company}
                        </p>
                      </div>
                    </div>

                    <div className="glass-card px-6 py-4 rounded-2xl border-primary/30 flex items-center gap-3">
                      {(() => {
                        const Icon = testimonials[current].icon;
                        return <Icon className="w-6 h-6 text-primary" />;
                      })()}
                      <span className="text-lg font-black text-primary">{testimonials[current].metric}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center absolute top-1/2 -translate-y-1/2 -left-20 -right-20 pointer-events-none hidden lg:flex">
            <Button
              onClick={() => navigate('prev')}
              variant="outline"
              size="icon"
              className="w-14 h-14 rounded-full border-white/10 hover:border-primary/50 bg-card/50 backdrop-blur-xl text-foreground pointer-events-auto transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              onClick={() => navigate('next')}
              variant="outline"
              size="icon"
              className="w-14 h-14 rounded-full border-white/10 hover:border-primary/50 bg-card/50 backdrop-blur-xl text-foreground pointer-events-auto transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Mobile Dots */}
          <div className="flex justify-center gap-3 mt-12 lg:hidden">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-10 bg-primary' : 'w-2 bg-white/10 hover:bg-white/20'
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Global Impact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 pt-16 border-t border-white/5 flex flex-wrap justify-center gap-12 sm:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all"
        >
          <div className="flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-primary" />
            <span className="font-bold text-foreground">99.9% Uptime SLA</span>
          </div>
          <div className="flex items-center gap-3">
            <Users className="w-6 h-6 text-primary" />
            <span className="font-bold text-foreground">500M+ Requests Served</span>
          </div>
          <div className="flex items-center gap-3">
            <Star className="w-6 h-6 text-primary" />
            <span className="font-bold text-foreground">4.9/5 G2 Rating</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}