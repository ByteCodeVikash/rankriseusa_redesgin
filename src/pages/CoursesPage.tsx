import { motion } from 'framer-motion';
import { GraduationCap, ArrowLeft, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CoursesPage = () => {
  return (
    <div className="min-h-screen bg-background relative flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[200px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/5 blur-[150px] rounded-full -translate-x-1/2 translate-y-1/2" />
      </div>

      {/* Coming Soon Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 glass-card p-10 sm:p-16 rounded-[3rem] border-white/10 max-w-2xl w-full mx-4 text-center shadow-[0_30px_100px_rgba(0,0,0,0.5)]"
      >
        <div className="w-24 h-24 mx-auto rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(250,204,21,0.2)]">
          <Clock className="w-10 h-10 text-primary animate-pulse" />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
        >
          <GraduationCap className="w-4 h-4 text-primary" />
          <span className="text-primary text-[10px] font-black uppercase tracking-[0.3em]">Rankriseusa Academy</span>
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-black text-foreground mb-6 tracking-tighter uppercase">
          Coming <span className="text-gradient-gold italic">Soon</span>
        </h1>

        <p className="text-lg text-muted-foreground font-medium mb-12 max-w-lg mx-auto leading-relaxed">
          Our elite intelligence protocols and academic courses are currently undergoing final calibration. Prepare for launch.
        </p>

        <Link to="/">
          <Button className="h-16 px-10 rounded-2xl button-premium font-black uppercase tracking-[0.2em] text-sm group">
            <ArrowLeft className="mr-3 w-5 h-5 group-hover:-translate-x-2 transition-transform" />
            Return to Base
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default CoursesPage;