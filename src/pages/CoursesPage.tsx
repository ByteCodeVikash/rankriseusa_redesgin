// src/pages/CoursesPage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Code2, Globe, Megaphone, Cpu, Briefcase,
  Video, Users, Rocket, Gift, BookOpen, Award,
  CalendarRange, Clock, CalendarDays, School,
  Sparkles, ArrowRight, Zap, GraduationCap, CheckCircle2, Shield
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const CoursesPage = () => {
  const navigate = useNavigate();

  // Key highlights / USP features
  const features = [
    { icon: Video, title: 'Live Intelligence', desc: 'Surgical live class protocols' },
    { icon: Users, title: 'Tactical Support', desc: 'Real-time problem solving' },
    { icon: Rocket, title: 'Active Deployment', desc: 'Hands-on practical training' },
    { icon: Gift, title: 'Alpha Sessions', desc: 'Complimentary trial classes' },
    { icon: BookOpen, title: 'Master Assets', desc: 'Comprehensive study materials' },
    { icon: Award, title: 'Verified Status', desc: 'Industry-standard certification' },
  ];

  // Flexible learning format options
  const learningFormats = [
    { icon: Zap, title: 'Crash Courses', color: 'text-amber-500 bg-amber-500/10 border-amber-500/20' },
    { icon: Users, title: 'Workshops', color: 'text-blue-500 bg-blue-500/10 border-blue-500/20' },
    { icon: CalendarDays, title: 'Weekend Ops', color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20' },
    { icon: CalendarRange, title: 'Weekly / Monthly', color: 'text-purple-500 bg-purple-500/10 border-purple-500/20' },
  ];

  // Course categories data
  const categories = [
    {
      id: 1,
      title: 'Neural Programming',
      icon: Code2,
      color: 'from-blue-600 to-indigo-600',
      skills: ['MERN', 'MEAN', 'PHP/CMS', 'Python', 'Java', 'OOPs & DSA'],
      price: '$120',
      description: 'Master full-stack architectures and core programming protocols.'
    },
    {
      id: 2,
      title: 'Digital Ecosystems',
      icon: Globe,
      color: 'from-emerald-600 to-teal-600',
      skills: ['WordPress', 'Shopify', 'Wix', 'Elementor'],
      price: '$75',
      description: 'Build stunning digital storefronts and enterprise CMS solutions.'
    },
    {
      id: 3,
      title: 'Growth Mechanics',
      icon: Megaphone,
      color: 'from-rose-600 to-pink-600',
      skills: ['SEO', 'Social Media', 'Email', 'Performance Marketing'],
      price: '$95',
      description: 'Scale brands with data-driven tactical marketing frameworks.'
    },
    {
      id: 4,
      title: 'Future Systems',
      icon: Cpu,
      color: 'from-violet-600 to-purple-600',
      skills: ['AI / ML', 'Blockchain', 'Deep Learning'],
      price: '$160',
      description: 'Future-ready technology and high-end innovation training.'
    },
    {
      id: 5,
      title: 'Strategic Ops',
      icon: Briefcase,
      color: 'from-amber-600 to-orange-600',
      skills: ['Excel', 'Power BI', 'Business Comm'],
      price: '$55',
      description: 'Boost enterprise productivity and high-level analytical skills.'
    }
  ];

  const handleContact = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-24 relative overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[200px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/5 blur-[150px] rounded-full -translate-x-1/2 translate-y-1/2" />
      </div>

      {/* Hero Section */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-12 shadow-[0_0_30px_rgba(250,204,21,0.1)]"
            >
              <GraduationCap className="w-4 h-4 text-primary" />
              <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em]">Rankriseusa Academy v4.0</span>
            </motion.div>
            
            <h1 className="text-6xl md:text-9xl font-black text-foreground mb-12 leading-[0.85] tracking-tighter">
              Master the <br />
              <span className="text-gradient-gold italic">Digital Craft.</span>
            </h1>
            
            <p className="text-xl text-muted-foreground font-medium max-w-3xl mx-auto mb-16 leading-relaxed">
              Industry-focused "Intelligence Protocols" designed for real-world dominance. <br />
              <span className="text-primary/70 font-black text-xs uppercase tracking-widest">Learn from experts, deploy active projects, and earn elite certification.</span>
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              {learningFormats.map((format, idx) => (
                <div key={idx} className={`flex items-center gap-3 px-8 py-4 rounded-[2rem] border ${format.color} font-black text-[10px] uppercase tracking-[0.3em] backdrop-blur-xl shadow-xl hover:scale-105 transition-all duration-500`}>
                  <format.icon className="w-5 h-5" />
                  {format.title}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-32 relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-8 p-10 rounded-[3.5rem] glass-card border-white/10 bg-white/[0.02] hover:border-primary/40 hover:bg-primary/[0.03] transition-all duration-500 group shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500">
                  <feature.icon className="w-8 h-8 text-primary shadow-[0_0_20px_rgba(250,204,21,0.2)]" />
                </div>
                <div>
                  <h3 className="font-black text-foreground uppercase tracking-[0.2em] text-sm mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-xs font-medium text-muted-foreground leading-relaxed group-hover:text-foreground/70 transition-colors">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Protocols Grid */}
      <section className="py-32 relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
            <div className="max-w-3xl">
              <h2 className="text-5xl md:text-7xl font-black text-foreground mb-6 leading-tight tracking-tighter uppercase">
                Academic <span className="text-gradient-gold italic">Protocols.</span>
              </h2>
              <p className="text-muted-foreground font-black uppercase tracking-[0.4em] text-xs">
                Select your specialized trajectory for operational success.
              </p>
            </div>
            <Button variant="outline" className="h-20 px-12 rounded-3xl border-white/10 bg-white/[0.02] hover:border-primary/50 text-foreground font-black uppercase tracking-widest text-sm group">
              View All Academy Data
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-[4rem] overflow-hidden border-white/10 bg-white/[0.01] group hover:border-primary/30 transition-all duration-700 flex flex-col shadow-[0_30px_100px_rgba(0,0,0,0.5)] hover:shadow-primary/5"
              >
                <div className={`h-6 bg-gradient-to-r ${category.color} opacity-80 group-hover:opacity-100 transition-opacity`} />
                
                <div className="p-12 flex flex-col h-full">
                  <div className="flex items-center gap-6 mb-12">
                    <div className="w-18 h-18 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <category.icon className="w-9 h-9 text-primary" />
                    </div>
                    <h3 className="text-3xl font-black text-foreground group-hover:text-primary transition-colors tracking-tighter">
                      {category.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground font-medium text-lg leading-relaxed mb-12 flex-grow group-hover:text-foreground/80 transition-colors">
                    {category.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-12">
                    {category.skills.map((skill, idx) => (
                      <span key={idx} className="text-[10px] font-black uppercase tracking-[0.2em] bg-white/5 border border-white/10 text-muted-foreground px-4 py-2 rounded-2xl group-hover:bg-primary/5 group-hover:text-primary group-hover:border-primary/20 transition-all duration-500">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="pt-12 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-2">Tuition Protocol</div>
                      <div className="text-4xl font-black text-foreground tracking-tighter">{category.price}</div>
                    </div>
                    <Button onClick={handleContact} className="h-18 px-10 rounded-2xl button-premium font-black uppercase tracking-widest text-xs group shadow-[0_15px_40px_rgba(250,204,21,0.2)]">
                      Enroll Now
                      <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Guidance CTA */}
      <section className="py-40 relative overflow-hidden z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="glass-card rounded-[5rem] p-16 lg:p-32 border-primary/20 relative overflow-hidden text-center bg-primary/[0.02] shadow-[0_40px_120px_rgba(0,0,0,0.6)]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />
            <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
            
            <div className="relative z-10 max-w-4xl mx-auto">
              <div className="w-32 h-32 rounded-[3.5rem] bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-16 shadow-[0_0_50px_rgba(250,204,21,0.2)]">
                <Shield className="w-16 h-16 text-primary" />
              </div>
              
              <h3 className="text-5xl md:text-8xl font-black text-foreground mb-10 leading-[0.85] tracking-tighter uppercase">
                Ready for <br />
                <span className="text-gradient-gold italic">Active Duty?</span>
              </h3>
              
              <p className="text-2xl text-muted-foreground font-medium mb-16 leading-relaxed">
                Unsure which protocol fits your operational goals? <br />
                <span className="text-primary/70 font-black text-sm uppercase tracking-[0.4em]">Initialize a complimentary career guidance briefing with our tactical leads.</span>
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-8 mb-20">
                <Button onClick={handleContact} className="h-22 px-16 rounded-2xl button-premium font-black uppercase tracking-[0.2em] text-sm shadow-[0_30px_60px_rgba(250,204,21,0.3)] hover:scale-105 transition-transform duration-500">
                  Start Enrollment
                </Button>
                <Button variant="outline" className="h-22 px-16 rounded-2xl border-white/10 bg-white/[0.02] text-foreground font-black uppercase tracking-[0.2em] text-sm hover:border-primary/50 hover:bg-primary/5 transition-all duration-500">
                  Request Briefing
                </Button>
              </div>

              <div className="flex flex-wrap justify-center gap-16 md:gap-24">
                {[
                  { label: 'Global Network', value: '10K+' },
                  { label: 'Certified Leads', value: '100%' },
                  { label: 'Placement Rate', value: '94%' },
                ].map((stat, idx) => (
                  <div key={idx} className="text-center group">
                    <div className="text-4xl font-black text-foreground mb-2 tracking-tighter group-hover:text-primary transition-colors">{stat.value}</div>
                    <div className="text-[10px] font-black uppercase tracking-[0.5em] text-primary/60 group-hover:text-primary transition-colors">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;