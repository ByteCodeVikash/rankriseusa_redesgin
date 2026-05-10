import { motion } from 'framer-motion';

export default function PayPalFloating({ onClick }: { onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 1 }}
      className="fixed bottom-10 left-10 z-[100]"
    >
      <button
        onClick={onClick}
        className="flex items-center gap-3 bg-[#FFC439] hover:bg-[#F2BA36] px-6 py-4 rounded-xl shadow-[0_10px_30px_rgba(255,196,57,0.3)] transition-all duration-300 group"
      >
        <img 
          src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg" 
          alt="PayPal" 
          className="h-6 w-auto"
        />
        <span className="text-black font-black uppercase tracking-widest text-[11px]">PayPal</span>
      </button>
    </motion.div>
  );
}
