import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Zap, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import PayPalModal from '@/components/PayPalModal';
import PayPalFloating from '@/components/PayPalFloating';

export default function Hero() {
  const [isPayModalOpen, setIsPayModalOpen] = useState(false);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#2D1B1B]">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="/assets/hero_sectionvideo.mp4" type="video/mp4" />
        </video>
        {/* Gradient Overlay to match screenshot */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/40 via-[#2D1B1B]/60 to-[#F43F5E]/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          {/* Subtext Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-10 inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-primary text-[11px] font-black uppercase tracking-[0.4em]"
          >
            <Zap className="w-4 h-4 fill-primary" />
            <span>THE ELITE INTELLIGENCE ERA</span>
          </motion.div>

          {/* Primary Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tighter drop-shadow-2xl max-w-5xl"
          >
            Engineering Market Dominance with <br />
            <span className="text-primary italic">Generative Neural Systems.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-16 flex gap-6"
          >
            <Link to="/contact">
              <Button className="bg-[#EAB308] hover:bg-[#D4A017] text-black font-black uppercase tracking-[0.2em] px-16 py-10 h-auto rounded-full text-sm group shadow-2xl">
                Initiate Strategy
                <ArrowRight className="w-6 h-6 ml-4 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* PayPal Floating Button */}
      <PayPalFloating onClick={() => setIsPayModalOpen(true)} />

      <PayPalModal isOpen={isPayModalOpen} onClose={() => setIsPayModalOpen(false)} />
    </section>
  );
}