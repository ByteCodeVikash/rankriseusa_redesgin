import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView, useSpring } from 'framer-motion';
import { ArrowUpRight, Sparkles, Zap, Box, Cpu, Workflow, Database, Network } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: '01',
    title: 'Design',
    icon: Box,
    accentIcon: Network,
    items: [
      'Web design',
      'App design',
      'Product interface',
      'Touch screen displays',
      'IoT experiences',
      'Visual Identity',
      'User Research',
      'Prototyping'
    ],
    link: '/services#design'
  },
  {
    id: '02',
    title: 'Branding',
    icon: Sparkles,
    accentIcon: Workflow,
    items: [
      'Strategy',
      'Naming',
      'Positioning',
      'Logo and identity',
      'Copywriting',
      'Voice & Tone',
      'Brand Guidelines',
      'Market Strategy'
    ],
    link: '/services#branding'
  },
  {
    id: '03',
    title: 'Development',
    icon: Cpu,
    accentIcon: Database,
    items: [
      'Creative development',
      'Front-end development',
      'Back-end development',
      'Cloud engineering',
      'Headless shopify',
      'Mobile Development',
      'API Integration',
      'System Architecture'
    ],
    link: '/services#development'
  }
];

export default function AnmlServices() {
  const headerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start end", "end start"]
  });

  const headerY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section className="bg-[#05070a] py-32 overflow-visible font-['Inter',_sans-serif] relative">
      {/* Cinematic Grain Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-[100] grain-texture" />

      {/* Global Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(250,204,21,0.03),transparent_70%)] pointer-events-none" />

      <style dangerouslySetInnerHTML={{
        __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap');
        
        .grain-texture {
          background-image: url("https://grainy-gradients.vercel.app/noise.svg");
          filter: contrast(150%) brightness(100%);
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .spotlight-container {
          --x: 50%;
          --y: 50%;
        }
        .spotlight-container:hover .spotlight {
          background: radial-gradient(600px circle at var(--x) var(--y), rgba(250,204,21,0.04), transparent 80%);
        }
      `}} />

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="mb-40 relative">
          <motion.div
            style={{ opacity: headerOpacity, y: headerY }}
          >
            <motion.h4
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[11px] font-black uppercase tracking-[0.6em] text-primary mb-10 flex items-center gap-4"
            >
              <div className="w-12 h-[1px] bg-primary/30" />
              Our Ecosystem
            </motion.h4>
            <h2 className="text-4xl lg:text-[7rem] font-medium text-white max-w-6xl leading-[1] tracking-[-0.05em]">
              <LineReveal text="We're equally fluent in strategy," />
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-white/10"
              >
                <LineReveal text="technology, design, brand," />
              </motion.span>
              <LineReveal text="and business growth." delay={0.8} />
            </h2>
          </motion.div>
        </div>

        {/* Services List with Stacking Effect */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <ServiceBlock key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LineReveal({ text, delay = 0 }: { text: string, delay?: number }) {
  return (
    <span className="block overflow-hidden pb-2">
      <motion.span
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
        className="block"
      >
        {text}
      </motion.span>
    </span>
  );
}

function ServiceBlock({ service, index }: { service: typeof services[0], index: number }) {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const progressWidth = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!container.current) return;
    const rect = container.current.getBoundingClientRect();
    container.current.style.setProperty('--x', `${e.clientX - rect.left}px`);
    container.current.style.setProperty('--y', `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={container}
      onMouseMove={handleMouseMove}
      className="sticky top-0 h-screen flex items-center bg-[#05070a] border-t border-white/5 overflow-hidden group/block spotlight-container will-change-transform"
      style={{ zIndex: index + 1 }}
    >
      {/* Interactive Spotlight Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0 spotlight transition-opacity duration-1000 opacity-0 group-hover/block:opacity-100" />

      {/* Progress Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/5 z-20">
        <motion.div
          style={{ scaleX: progressWidth, originX: 0 }}
          className="absolute top-0 left-0 w-full h-full bg-primary shadow-[0_0_20px_rgba(250,204,21,0.6)]"
        />
      </div>

      <motion.div
        style={{
          scale: index === services.length - 1 ? 1 : scale,
          opacity: index === services.length - 1 ? 1 : opacity
        }}
        className="w-full h-full flex flex-col lg:flex-row px-6 lg:px-20 relative z-10"
      >
        {/* Left Column: Number & Title */}
        <div className="lg:w-[45%] flex flex-col justify-center items-center py-16 lg:py-0 text-center">
          <motion.div
            style={{ y: titleY }}
            className="flex flex-col items-center gap-8 lg:gap-14"
          >
            <div className="flex flex-col items-center gap-4">
              <span className="text-[10px] font-black uppercase tracking-[1em] text-primary/50">
                Protocol
              </span>
              <span className="text-3xl font-black text-primary leading-none">
                {service.id}
              </span>
            </div>

            <div className="relative">
              <h3 className="text-3xl lg:text-[4.5rem] font-black text-white tracking-[-0.06em] leading-[0.85] mb-12 lg:mb-20">
                {service.title}
              </h3>

              <Link
                to={service.link}
                className="inline-flex flex-col items-center gap-6 group/link relative"
              >
                <div className="absolute inset-0 bg-primary/20 blur-[40px] rounded-full opacity-0 group-hover/link:opacity-100 transition-opacity duration-500" />

                <motion.div
                  whileHover={{ scale: 1.1, rotate: 15 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 lg:w-28 lg:h-28 rounded-full border-2 border-white/10 flex items-center justify-center group-hover/link:bg-primary group-hover/link:border-primary group-hover/link:text-background transition-all duration-700 relative z-10"
                >
                  <ArrowUpRight className="w-8 h-8 lg:w-12 lg:h-12" />
                </motion.div>

                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/30 group-hover/link:text-primary transition-all duration-500 group-hover/link:tracking-[0.7em]">
                  View Ecosystem
                </span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Right Column: List items */}
        <div className="lg:w-[55%] flex flex-col justify-start overflow-y-auto no-scrollbar h-full relative py-20 lg:py-48">
          <div className="space-y-8 lg:space-y-20 lg:pl-32 border-l border-white/5">
            {service.items.map((item, i) => (
              <ServiceItem key={i} item={item} index={i} icon={service.accentIcon} />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function ServiceItem({ item, index, icon: Icon }: { item: string, index: number, icon: any }) {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, { once: false, margin: "-15% 0px -15% 0px" });

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, x: 40, filter: "blur(15px)", scale: 0.95 }}
      animate={isInView
        ? { opacity: 1, x: 0, filter: "blur(0px)", scale: 1 }
        : { opacity: 0, x: 40, filter: "blur(15px)", scale: 0.95 }
      }
      transition={{
        duration: 1,
        delay: index * 0.05,
        ease: [0.16, 1, 0.3, 1]
      }}
      className="group flex items-center gap-10"
    >
      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-500">
        <Icon className="w-5 h-5 text-white/20 group-hover:text-primary transition-colors" />
      </div>

      <div className="flex-1 border-b border-white/5 pb-8 group-hover:border-primary/20 transition-colors duration-700">
        <div className="flex items-center justify-between">
          <h4 className="text-sm lg:text-[3rem] font-bold text-white/10 group-hover:text-white transition-all duration-1000 cursor-default tracking-tighter leading-tight">
            {item}
          </h4>
          <span className="text-[10px] font-black text-white/5 group-hover:text-primary transition-colors">
            0{index + 1}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
