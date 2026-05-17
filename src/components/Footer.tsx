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
import { useState } from 'react';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';
import { submitToSheet } from '@/lib/utils';

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';
const DC_COORDS: [number, number] = [-77.0369, 38.9072];
const NOIDA_COORDS: [number, number] = [77.4538, 28.4744];
const UK_COORDS: [number, number] = [-1.5, 54.0];
const UAE_COORDS: [number, number] = [55.2708, 25.2048];

function GlobalPresenceMap() {
  return (
    <div
      className="w-full rounded-[3rem] overflow-hidden border border-white/5 mb-16 relative bg-[#05070a]"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

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
          style={{ width: '100%', height: 'auto', display: 'block' }}
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
                    default: { outline: 'none' },
                    hover: { outline: 'none', fill: 'rgba(255,215,0,0.05)' },
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
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 px-10 pb-10">
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

  return (
    <footer className="bg-background pt-32 pb-12 relative overflow-hidden">
      {/* Mesh Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <GlobalPresenceMap />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-24">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-4 space-y-12">
            <Link to="/" className="inline-block">
              <img
                src="/assets/images/logo1.png"
                alt="Rankriseusa"
                className="h-14 w-auto object-contain grayscale invert brightness-200 mix-blend-screen"
              />
            </Link>

            <p className="text-xl text-muted-foreground leading-relaxed font-medium">
              We architect the digital future. Our neural systems empower
              the world's most ambitious founders and tech leaders.
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
                <Button type="submit" className="absolute right-2 top-2 h-12 px-6 rounded-xl button-premium text-[10px] uppercase tracking-widest">
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
                <a key={i} href={social.href} className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center border-white/5 transition-all group hover:-translate-y-1 bg-[#0a0a0a]">
                  <social.icon className={`w-6 h-6 transition-all group-hover:scale-110 ${social.colorClass}`} />
                </a>
              ))}
            </div>
          </div>

          {/* Office Locations */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
              {offices.map((office, i) => (
                <div key={i} className="space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{office.flag}</span>
                    <div>
                      <h4 className="text-primary font-black text-[10px] uppercase tracking-[0.2em]">{office.status}</h4>
                      <p className="text-lg font-black text-foreground">{office.country}</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground font-medium">
                    <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary/50" /> {office.city}</p>
                    <p className="flex items-center gap-2"><Globe className="w-4 h-4 text-primary/50" /> {office.address}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 pt-12 border-t border-white/5">
              {[
                {
                  title: 'Core Systems',
                  links: [
                    { name: 'Neural SEO', path: '/services' },
                    { name: 'AI Engineering', path: '/services' },
                    { name: 'Growth Engines', path: '/services' },
                    { name: 'Brand Authority', path: '/services' },
                  ]
                },
                {
                  title: 'Ecosystem',
                  links: [
                    { name: 'Case Studies', path: '/portfolio' },
                    { name: 'The Process', path: '/about' },
                    { name: 'Founder Network', path: '/about' },
                    { name: 'Success Stories', path: '/about' },
                  ]
                },
                {
                  title: 'Governance',
                  links: [
                    { name: 'Privacy Policy', path: '/privacy-policy' },
                    { name: 'Terms of Service', path: '/terms-and-conditions' },
                    { name: 'Security Protocol', path: '/disclaimer' },
                    { name: 'Refund Policy', path: '/refund-cancellation' },
                  ]
                }
              ].map((column, i) => (
                <div key={i}>
                  <h3 className="text-foreground font-black text-[10px] uppercase tracking-[0.3em] mb-10">
                    {column.title}
                  </h3>
                  <ul className="space-y-5">
                    {column.links.map((link, j) => (
                      <li key={j}>
                        <Link to={link.path} className="text-muted-foreground hover:text-primary font-bold text-xs uppercase tracking-widest transition-colors block">
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

        {/* Footer Bottom */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/60">
            <span>© 2026 Rankriseusa Global Ltd.</span>
            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-primary" />
            <div className="flex items-center gap-2">
              Neural Integrity <ShieldCheck className="w-3 h-3 text-primary" />
            </div>
          </div>

        </div>
      </div>
    </footer>

  );
}