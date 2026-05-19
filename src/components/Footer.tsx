import { motion } from 'framer-motion';
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Heart,
  Sparkles,
  MapPin,
  Phone,
  Globe,
  ExternalLink,
  Github,
  Zap,
  Shield,
  Search,
  ShieldCheck
} from 'lucide-react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState, useRef } from 'react';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';
import { submitToSheet } from '@/lib/utils';

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';
const DC_COORDS: [number, number] = [-77.0369, 38.9072];
const NOIDA_COORDS: [number, number] = [77.4538, 28.4744];
const UK_COORDS: [number, number] = [-1.5, 54.0];
const UAE_COORDS: [number, number] = [55.2708, 25.2048];

function GlobalPresenceMap() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };


  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="w-full rounded-[3rem] overflow-hidden border border-white/5 mb-16 relative bg-[#05070a] group"
    >
      {/* Interactive Lighting Effect */}
      <div
        className="absolute w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
        style={{
          left: mousePos.x - 250,
          top: mousePos.y - 250,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none z-0" />

      {/* Legend */}
      <div className="flex items-center justify-end gap-6 px-10 pt-8 pb-2 relative z-10">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_rgba(255,215,0,0.5)]" />
          <span className="text-muted-foreground text-[10px] font-black uppercase tracking-widest">Global HQ</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
          <span className="text-muted-foreground text-[10px] font-black uppercase tracking-widest">Neural Hub</span>
        </div>
      </div>

      {/* Map */}
      <div className="px-6 py-4">
        <ComposableMap
          width={960}
          height={320}
          projectionConfig={{ scale: 150, center: [20, 10] }}
          style={{ width: '100%', height: 'auto', display: 'block', position: 'relative', zIndex: 10 }}
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="rgba(255,215,0,0.02)"
                  stroke="rgba(255,215,0,0.1)"
                  strokeWidth={0.5}
                  style={{
                    default: { outline: 'none', transition: 'all 0.3s' },
                    hover: { outline: 'none', fill: 'rgba(250,204,21,0.2)', stroke: 'rgba(250,204,21,0.6)', transition: 'all 0.3s' },
                    pressed: { outline: 'none' },
                  }}
                />
              ))
            }
          </Geographies>

          {/* ── Washington DC ── */}
          <Marker coordinates={DC_COORDS}>
            <circle r={15} fill="var(--primary)" opacity={0}>
              <animate attributeName="r" values="5;20;5" dur="3s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.3;0;0.3" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle r={6} fill="var(--primary)" />
            <circle r={3} fill="#ffffff" />
            <text textAnchor="middle" y={-15} style={{ fill: 'var(--primary)', fontSize: '10px', fontWeight: '900', fontFamily: 'Inter' }}>USA HQ</text>
          </Marker>

          {/* ── Greater Noida ── */}
          <Marker coordinates={NOIDA_COORDS}>
            <circle r={15} fill="#3b82f6" opacity={0}>
              <animate attributeName="r" values="5;20;5" dur="3s" begin="1.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.3;0;0.3" dur="3s" begin="1.5s" repeatCount="indefinite" />
            </circle>
            <circle r={6} fill="#3b82f6" />
            <circle r={3} fill="#ffffff" />
            <text textAnchor="middle" y={-15} style={{ fill: '#3b82f6', fontSize: '10px', fontWeight: '900', fontFamily: 'Inter' }}>INDIA HUB</text>
          </Marker>
        </ComposableMap>
      </div>

      {/* Address Strip */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 px-10 pb-10 relative z-10">
        {[
          { city: 'Washington, DC', status: 'Global HQ', flag: '🇺🇸', color: 'primary' },
          { city: 'Greater Noida', status: 'Neural Hub', flag: '🇮🇳', color: 'blue-500' },
          { city: 'London', status: 'Coming Soon', flag: '🇬🇧', color: 'white/20' },
          { city: 'Dubai', status: 'Coming Soon', flag: '🇦🇪', color: 'white/20' }
        ].map((office, idx) => (
          <div key={idx} className="glass-card p-5 rounded-3xl border-white/5 hover:border-primary/20 transition-all group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xl">{office.flag}</span>
              <div className={`px-2 py-0.5 rounded-full bg-${office.color}/10 border border-${office.color}/20 text-[8px] font-black uppercase tracking-tighter`}>
                {office.status}
              </div>
            </div>
            <h4 className="text-foreground font-bold">{office.city}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitToSheet('Newsletter', { email });
    toast.success('Intelligence Feed Subscribed. Welcome to the elite.');
    setEmail('');
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', colorClass: 'text-[#0077b5] group-hover:shadow-[0_0_15px_#0077b5]' },
    { icon: Twitter, href: '#', colorClass: 'text-[#1da1f2] group-hover:shadow-[0_0_15px_#1da1f2]' },
    { icon: Instagram, href: '#', colorClass: 'text-[#e1306c] group-hover:shadow-[0_0_15px_#e1306c]' },
    { icon: Github, href: '#', colorClass: 'text-white group-hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]' },
  ];

  const offices = [
    { country: 'United States', city: 'Washington, DC', status: 'Global HQ', flag: '🇺🇸', address: '1200 Pennsylvania Avenue NW' },
    { country: 'United Kingdom', city: 'London', status: 'Strategy Hub', flag: '🇬🇧', address: '20-22 Wenlock Road' },
    { country: 'India', city: 'Greater Noida', status: 'Engineering Hub', flag: '🇮🇳', address: 'Knowledge Park II' }
  ];


  // Email list
  const emailList = [
    'info@rankriseusa.com',
    'hr@rankriseusa.com',
    'sam@rankriseusa.com',
    'sid.rankriseusa@gmail.com',
  ];

  // Phone numbers
  const phoneList = [
    { number: '+1 202 888 2806', label: 'US' },
    { number: '+1 202 780 0370', label: 'US' },
    { number: '+1 425 943 9223', label: 'US' },
  ];
  return (
    <footer className="bg-background pt-32 pb-12 relative overflow-hidden">
      {/* Mesh Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <GlobalPresenceMap />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-24">
          {/* Brand & Newsletter – YELLOW BORDER AROUND LOGO CONTAINER */}
          <div className="lg:col-span-4 space-y-12 border border-yellow-400 rounded-2xl p-6">
            <Link to="/" className="inline-block">
              <img
                src="/assets/images/logo1.png"
                alt="Rankriseusa"
                className="h-14 w-auto object-contain grayscale invert brightness-200 mix-blend-screen"
              />
            </Link>

            <p className="text-xl text-muted-foreground leading-relaxed font-medium">
              We architect the digital future. Our neural systems empower the world's most
              ambitious founders and tech leaders.
            </p>

            <form onSubmit={handleNewsletter} className="space-y-6">
              <div className="relative group">
                <Input
                  type="email"
                  placeholder="Professional Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/5 border-white/10 h-16 rounded-2xl px-6 text-foreground placeholder:text-muted-foreground/50 focus:ring-primary focus:border-primary transition-all font-bold"
                />
                <Button
                  type="submit"
                  className="absolute right-2 top-2 h-12 px-6 rounded-xl button-premium text-[10px] uppercase tracking-widest"
                >
                  Join Elite
                </Button>
              </div>
              <p className="text-[10px] text-muted-foreground/60 uppercase font-black tracking-[0.2em] px-2 flex items-center gap-2">
                <Shield className="w-3 h-3 text-primary" />
                No Spam. Just Pure Intelligence.
              </p>
            </form>

            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center border-white/5 hover:border-primary/50 text-muted-foreground hover:text-primary transition-all group"
                >
                  <social.icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* Office Locations + Contact Info */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
              {offices.map((office, i) => (
                <div key={i} className="space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{office.flag}</span>
                    <div>
                      <h4 className="text-primary font-black text-[10px] uppercase tracking-[0.2em]">
                        {office.status}
                      </h4>
                      <p className="text-lg font-black text-foreground">{office.country}</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground font-medium">
                    {office.address ? (
                      <>
                        <p className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-primary/50" /> {office.city}
                        </p>
                        <p className="flex items-center gap-2">
                          <Globe className="w-4 h-4 text-primary/50" /> {office.address}
                        </p>
                      </>
                    ) : (
                      <p className="text-xs uppercase tracking-wider font-bold text-muted-foreground/60">
                        Coming Soon
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* ---------- CONTACT DETAILS SECTION ---------- */}
            <div className="mt-8 p-6 bg-white/[0.03] backdrop-blur-sm rounded-3xl border border-white/5">
              <h3 className="text-foreground font-black text-[10px] uppercase tracking-[0.3em] mb-6">
                Connect With Us
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Email Block */}
                <div>
                  <h4 className="flex items-center gap-2 text-primary font-bold text-sm mb-4">
                    <Mail className="w-4 h-4" /> Email Us
                  </h4>
                  <ul className="space-y-3">
                    {emailList.map((emailAddr, idx) => (
                      <li key={idx}>
                        <a
                          href={`mailto:${emailAddr}`}
                          className="text-muted-foreground hover:text-primary text-xs font-medium transition-colors break-all"
                        >
                          {emailAddr}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Phone Block */}
                <div>
                  <h4 className="flex items-center gap-2 text-primary font-bold text-sm mb-4">
                    <Phone className="w-4 h-4" /> Call Us
                  </h4>
                  <ul className="space-y-3">
                    {phoneList.map((phone, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <a
                          href={`tel:${phone.number.replace(/\s/g, '')}`}
                          className="text-muted-foreground hover:text-primary text-xs font-medium transition-colors"
                        >
                          {phone.number}
                        </a>
                        <span className="text-[10px] text-muted-foreground/60 font-bold uppercase">
                          ({phone.label})
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {/* ---------- END CONTACT DETAILS ---------- */}

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 pt-12 border-t border-white/5">
              {[
                {
                  title: 'Core Systems',
                  links: [
                    { name: 'Neural SEO', path: '/services' },
                    { name: 'AI Engineering', path: '/services' },
                    { name: 'Growth Engines', path: '/services' },
                    { name: 'Brand Authority', path: '/services' },
                  ],
                },
                {
                  title: 'Ecosystem',
                  links: [
                    { name: 'Case Studies', path: '/portfolio' },
                    { name: 'The Process', path: '/about' },
                    { name: 'Founder Network', path: '/about' },
                    { name: 'Success Stories', path: '/about' },
                  ],
                },
                {
                  title: 'Legal',
                  links: [
                    { name: 'Privacy Policy', path: '/privacy-policy' },
                    { name: 'Terms & Conditions', path: '/terms-and-conditions' },
                    { name: 'Refund / Cancellation', path: '/refund-cancellation' },
                    { name: 'Cookies Policy', path: '/cookies-policy' },
                    { name: 'Disclaimer', path: '/disclaimer' },
                  ],
                },
              ].map((column, i) => (
                <div key={i}>
                  <h3 className="text-foreground font-black text-[10px] uppercase tracking-[0.3em] mb-10">
                    {column.title}
                  </h3>
                  <ul className="space-y-5">
                    {column.links.map((link, j) => (
                      <li key={j}>
                        <Link
                          to={link.path}
                          className="text-muted-foreground hover:text-primary font-bold text-xs uppercase tracking-widest transition-colors block"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom – Yellow bordered copyright + single line legal links */}
        <div className="pt-12 border-t border-white/5">
          {/* Copyright line with yellow border, centered */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-muted-foreground border border-yellow-400 rounded-lg px-4 py-2">
              <span className="text-xs font-bold uppercase tracking-wider">
                © 2026 Rankrise USA.
              </span>
              <span className="hidden sm:inline text-muted-foreground/40">|</span>
              <span className="text-xs text-muted-foreground/70 hidden sm:inline">
                Transforming businesses with cutting-edge solutions
              </span>
              <span className="hidden sm:inline text-muted-foreground/40">|</span>
              <span className="text-xs">
                Designed & developed by{' '}
                <strong className="text-primary font-black">Shivam Pandey</strong>
              </span>
            </div>
          </div>

          {/* Legal links – single horizontal line, centered */}
          <div className="flex justify-center">
            <div className="flex flex-nowrap gap-x-6 text-[10px] sm:text-xs uppercase tracking-widest font-black overflow-x-auto whitespace-nowrap py-2 text-muted-foreground">
              <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/terms-and-conditions" className="hover:text-primary transition-colors">Terms & Conditions</Link>
              <Link to="/refund-cancellation" className="hover:text-primary transition-colors">Refund / Cancellation</Link>
              <Link to="/cookies-policy" className="hover:text-primary transition-colors">Cookies Policy</Link>
              <Link to="/disclaimer" className="hover:text-primary transition-colors">Disclaimer</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>

  );
}