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
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-80 relative group"
          >
            {/* Glowing effect behind button */}
            <div className="absolute inset-0 bg-[#EAB308]/20 blur-3xl rounded-full scale-150 animate-pulse group-hover:bg-[#EAB308]/40 transition-colors" />
            
            <Link to="/contact" className="relative z-10">
              <Button className="bg-[#EAB308] hover:bg-[#D4A017] text-black font-black uppercase tracking-[0.2em] px-10 py-6 h-auto rounded-full text-[11px] group shadow-[0_15px_40px_rgba(234,179,8,0.25)] transition-all duration-500 hover:scale-105 active:scale-95 border-b-2 border-black/10">
                Initiate Strategy
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
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