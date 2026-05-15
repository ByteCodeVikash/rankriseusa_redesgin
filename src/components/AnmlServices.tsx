import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: '01',
    title: 'Design',
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
  return (
    <section className="bg-transparent py-32 overflow-visible font-['Inter',_sans-serif]">
      {/* Add Google Font for Inter if not present */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap');
      `}} />

      <div className="container mx-auto px-6 lg:px-16">
        {/* Section Header */}
        <div className="mb-40">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-black uppercase tracking-[0.4em] text-primary mb-10"
          >
            Our Ecosystem
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-[5.5rem] font-medium text-white max-w-6xl leading-[1.05] tracking-[-0.04em]"
          >
            We're equally fluent in strategy, <br />
            <span className="text-white/20">technology, design, brand,</span> <br />
            and business growth.
          </motion.h2>
        </div>

        {/* Services List */}
        <div className="border-t border-white/10">
          {services.map((service) => (
            <div 
              key={service.id}
              className="relative flex flex-col lg:flex-row border-b border-white/10 last:border-0"
            >
              {/* Left Column: Number & Title (Sticky/Pinned) */}
              <div className="lg:w-[45%] lg:sticky lg:top-0 lg:h-screen flex flex-col justify-center py-16 lg:py-0 z-10">
                <div className="flex items-start gap-12">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-primary mt-3">
                    {service.id}
                  </span>
                  <div>
                    <h3 className="text-6xl lg:text-[7.5rem] font-medium text-white tracking-[-0.05em] leading-[0.9] mb-12">
                      {service.title}
                    </h3>
                    <Link 
                      to={service.link}
                      className="inline-flex items-center gap-4 group/link"
                    >
                      <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover/link:bg-primary group-hover/link:border-primary group-hover/link:text-background transition-all duration-500">
                        <ArrowUpRight className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/50 group-hover/link:text-primary transition-colors">
                        Explore Protocols
                      </span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Column: List items (Scrolling) */}
              <div className="lg:w-[55%] py-16 lg:py-48">
                <div className="space-y-16 lg:space-y-28 lg:pl-24">
                  {service.items.map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, margin: "-50px" }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="group"
                    >
                      <div className="flex items-baseline gap-12 border-b border-white/5 pb-12">
                        <span className="text-[10px] font-bold text-white/10 uppercase tracking-widest group-hover:text-primary transition-colors">
                          0{i + 1}
                        </span>
                        <h4 className="text-3xl lg:text-[4rem] font-medium text-white/20 group-hover:text-white transition-colors duration-700 cursor-default tracking-tight leading-tight">
                          {item}
                        </h4>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
