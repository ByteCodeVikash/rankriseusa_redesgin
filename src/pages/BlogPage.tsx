import { motion } from 'framer-motion';
import Blog from '../components/Blog';

export default function BlogPage() {
  return (
    <div className="pt-32 pb-24 relative overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[200px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/5 blur-[150px] rounded-full -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Hero Section */}
        <section className="py-24 text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-10"
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary text-[10px] font-black uppercase tracking-[0.3em]">Operational Intel v4.0</span>
          </motion.div>

          <h1 className="text-6xl md:text-9xl font-black text-foreground mb-10 leading-[0.85] tracking-tighter">
            Our <br />
            <span className="text-gradient-gold italic">Insights.</span>
          </h1>
          
          <p className="text-xl text-muted-foreground font-medium leading-relaxed max-w-2xl mx-auto">
            Stay updated with the latest trends, strategies, and insights in digital marketing and technology. <br />
            <span className="text-primary/70 font-black text-xs uppercase tracking-widest">Surgical breakdowns of market shifts.</span>
          </p>
        </section>

        {/* Blog Grid */}
        <div className="relative z-10">
          <Blog />
        </div>
      </div>
    </div>
  );
}
