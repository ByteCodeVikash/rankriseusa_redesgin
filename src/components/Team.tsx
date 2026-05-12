import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Linkedin, Twitter, Mail, Phone, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

export default function Team() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const team = [
    {
      name: 'Sarah Anderson',
      role: 'Growth Strategy',
      email: 'sarah@Rankriseusa.com',
      phone: '+1 (202) 780-0370',
      gradient: 'from-[#FFD700]/20 to-transparent',
      social: { linkedin: '#', twitter: '#', email: 'sarah@Rankriseusa.com' }
    },
    {
      name: 'Samuel Smith',
      role: 'Neural Engineering',
      email: 'sam@Rankriseusa.com',
      phone: '+1 (425) 943-9223',
      gradient: 'from-[#FFD700]/20 to-transparent',
      social: { linkedin: '#', twitter: '#', email: 'sam@Rankriseusa.com' }
    },
    {
      name: 'Sidney Miller',
      role: 'Data Intelligence',
      email: 'sid@Rankriseusa.com',
      phone: '+1 (555) 123-4569',
      gradient: 'from-[#FFD700]/20 to-transparent',
      social: { linkedin: '#', twitter: '#', email: 'sid@Rankriseusa.com' }
    },
    {
      name: 'Meera Patel',
      role: 'Creative Director',
      email: 'meera@Rankriseusa.com',
      phone: '+1 (555) 123-4570',
      gradient: 'from-[#FFD700]/20 to-transparent',
      social: { linkedin: '#', twitter: '#', email: 'meera@Rankriseusa.com' }
    },
    {
      name: 'Luna Chen',
      role: 'Product Architect',
      email: 'luna@Rankriseusa.com',
      phone: '+1 (555) 123-4571',
      gradient: 'from-[#FFD700]/20 to-transparent',
      social: { linkedin: '#', twitter: '#', email: 'luna@Rankriseusa.com' }
    },
    {
      name: 'Michael Ross',
      role: 'Performance Lead',
      email: 'mike@Rankriseusa.com',
      phone: '+1 (555) 123-4572',
      gradient: 'from-[#FFD700]/20 to-transparent',
      social: { linkedin: '#', twitter: '#', email: 'mike@Rankriseusa.com' }
    },
  ];

  const getItemsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1280) return 4;
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768) return 2;
      return 1;
    }
    return 4;
  };

  const [itemsPerView, setItemsPerView] = useState(getItemsPerView());

  useEffect(() => {
    const handleResize = () => setItemsPerView(getItemsPerView());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const maxIndex = Math.max(0, team.length - itemsPerView);
  const slidePercentage = 100 / itemsPerView;

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary text-xs font-black uppercase tracking-[0.2em]">Our Brain Trust</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground mb-8 leading-[1.1]"
            >
              The Minds <br />
              <span className="text-gradient-gold italic">Redefining Tech.</span>
            </motion.h2>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground lg:max-w-md leading-relaxed"
          >
            A collective of specialists dedicated to scaling high-impact digital products and experiences.
          </motion.p>
        </div>

        {/* Team Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6 px-2"
              animate={{ x: `-${currentIndex * (100 / itemsPerView)}%` }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  className={`flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)]`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="glass-card rounded-[2.5rem] p-8 border-white/5 hover:border-primary/30 transition-all duration-500 group relative h-full flex flex-col">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem]" />
                    
                    {/* Header */}
                    <div className="flex justify-between items-start mb-8 relative z-10">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                        <img src="/assets/images/logo.png" className="w-8 invert opacity-50" />
                      </div>
                      <div className="flex gap-2">
                        <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-white/10 transition-all">
                          <Linkedin className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                    {/* Member Info */}
                    <div className="space-y-2 relative z-10 flex-grow">
                      <h3 className="text-2xl font-black text-foreground group-hover:text-primary transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-xs font-black uppercase tracking-widest text-primary/80">
                        {member.role}
                      </p>
                    </div>

                    {/* Contact Detail */}
                    <div className="mt-8 pt-8 border-t border-white/5 space-y-4 relative z-10">
                      <div className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground transition-colors">
                        <Mail className="w-4 h-4 text-primary" />
                        <span className="text-sm font-bold truncate">{member.email}</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground transition-colors">
                        <Phone className="w-4 h-4 text-primary" />
                        <span className="text-sm font-bold">{member.phone}</span>
                      </div>
                    </div>

                    <div className="absolute bottom-6 right-8 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                      <ExternalLink className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-12 px-2">
            <div className="flex gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    i === currentIndex ? 'w-12 bg-primary' : 'w-4 bg-white/10'
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="w-14 h-14 rounded-2xl border-white/10 bg-white/5 hover:border-primary/50 text-foreground disabled:opacity-20"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={handleNext}
                disabled={currentIndex >= maxIndex}
                className="w-14 h-14 rounded-2xl border-white/10 bg-white/5 hover:border-primary/50 text-foreground disabled:opacity-20"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <Button className="h-20 px-12 rounded-[2rem] text-lg button-premium">
            Join Our Neural Network
          </Button>
        </motion.div>
      </div>
    </section>
  );
}