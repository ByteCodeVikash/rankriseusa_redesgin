// src/pages/PricingPage.tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, Share2, Megaphone, Code, Sparkles, Calculator,
  X, Check, Shield, CreditCard, Smartphone, Cloud, Database,
  Globe, Lock, PenTool, Star, Rocket, Crown, Zap, Briefcase,
  TrendingUp, Users, Settings, HardDrive, Cpu, ArrowRight,
  ShieldCheck, ZapOff, Layers, Activity, Plus, Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { submitToSheet } from '@/lib/utils';
import { Button } from '@/components/ui/button';

// Types
interface PricingPlan {
  name: string;
  icon?: string;
  monthlyPrice?: number;        // undefined for custom quote
  isCustom?: boolean;
  description?: string;
  popular?: boolean;
  features?: string[];
  services?: any[];              // kept for compatibility
  technology?: string;           // for app dev, ai, software tools
  featuresFunctionality?: string;
}

interface PricingData {
  [key: string]: PricingPlan[];
}

export default function PricingPage() {
  const [selectedCategory, setSelectedCategory] = useState('seo');
  const [duration, setDuration] = useState<1 | 3 | 6 | 9 | 12>(1);
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan & { category: string } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    phone: '',
    budget: '',
    businessType: '',
    technology: '',
    features: ''
  });
  const [expandedPlan, setExpandedPlan] = useState<string | null>(null);


  // small helper to format currency
  function fmtCurrency(n: number) {
    return `$${n.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
  }

  // Discount factors (multiplier for total price)
  const discountFactor: Record<number, number> = {
    1: 1,
    3: 0.94,    // 6% off
    6: 0.85,    // 15% off
    9: 0.80,    // 20% off
    12: 0.75    // 25% off
  };

  // Pricing data for all categories
  const pricingData: PricingData = {
    // SEO – detailed packages from your input
    seo: [
      {
        name: 'BASIC',
        monthlyPrice: 400,
        popular: false,
        features: [
          'No. of Keywords – 20',
          'Landing Pages – 3',
          'Backlinks (per month) – 100',

          '---First Hand SEO Analysis',
          'Pre-Optimization Website Analysis – ✓',
          'Competitor Analysis – ✓',
          'Keyword Research & Analysis – ✓',
          'Baseline Ranking Check – ✓',
          'Duplicate Content Check – ✓',
          'Google Penalty Check – ✓',
          'Back Link Analysis ✘',

          '---On Page Optimization Activities',
          'Website Canonical Check – ✓',
          'Title Tag Optimization – ✓',
          'META Tags Optimization – ✓',
          'Heading Tags Optimization ✘',
          'Image Alt Tags Optimization – ✓',
          'Content Optimization – ✓',
          'SEO Friendly URL Setup – ✓',
          'Site navigation Analysis ✘',
          '404 Page Implementation – ✓',
          'Broken Link Check ✘',
          'Website Speed Check – ✓',
          'Google Indexed Pages Check – ✓',
          'Robots.txt Creation – ✓',
          'Google XML Sitemap – ✓',
          'PHP Sitemap Setup ✘',
          'Google Webmasters Tool Setup – ✓',
          'Google Analytics Setup – ✓',
          'Structured Data setup ✘',
          'On Site Blog Section Creation – ✓',
          'On Site Blog Posting (Draft Copy) | Applicable from 3rd month',

          '--- Off-page Optimization Activities',
          'Search Engine Submission – 10',
          'Article Writing – 1',
          'Article Posting – 1',
          'Article Bookmarking – 10',
          'Classified Submissions – 10',
          'Business Listing – 5',
          'Blog Writing – 1',
          'Blog Posting – 1',
          'Blog Bookmarking – 10',
          'On page Blog – 1',
          'On Page Blog Bookmarking – 5',
          'Image Sharing – 5',
          'PPT Submissions – 1',
          'PPT Bookmarking – 10',
          'Social Bookmarking – 30',
          'PDF Sharing – 1',
          'PDF Bookmarking – 5',
          'Profile Creation – 5',
          'Quora Answering – 1',
          'Info Graphic Creation – 1',
          'Info Graphic Bookmarking – 5',
          'Video Marketing (if Client provides) – ✓',
          'Press Release (If Client Provides News) – ✓',

          '---SMO Activities',
          'Facebook ✘',
          'Instagram ✘',
          'Twitter ✘',
          'Pinterest ✘',

          '--- Reports',
          'Monthly Website Analytics Report – ✓',
          'Monthly Keywords Ranking Report – ✓',
          'Monthly Off Page Submission Report – ✓',

          '--- Customer Support',
          'Email – ✓',
          'Phone – ✓',
          'Chat – ✓'
        ]
      },
      {
        name: 'STARTUP',
        monthlyPrice: 550,
        popular: false,
        features: [
          'No. of Keywords – 30',
          'Landing Pages – 5',
          'Backlinks (per month) – 120',

          '---First Hand SEO Analysis',
          'Pre-Optimization Website Analysis – ✓',
          'Competitor Analysis – ✓',
          'Keyword Research & Analysis – ✓',
          'Baseline Ranking Check – ✓',
          'Duplicate Content Check – ✓',
          'Google Penalty Check – ✓',
          'Back Link Analysis ✘',

          '---On Page Optimization Activities',
          'Website Canonical Check – ✓',
          'Title Tag Optimization – ✓',
          'META Tags Optimization – ✓',
          'Heading Tags Optimization ✘',
          'Image Alt Tags Optimization – ✓',
          'Content Optimization – ✓',
          'SEO Friendly URL Setup – ✓',
          'Site navigation Analysis ✘',
          '404 Page Implementation – ✓',
          'Broken Link Check ✘',
          'Website Speed Check – ✓',
          'Google Indexed Pages Check – ✓',
          'Robots.txt Creation – ✓',
          'Google XML Sitemap – ✓',
          'PHP Sitemap Setup ✘',
          'Google Webmasters Tool Setup – ✓',
          'Google Analytics Setup – ✓',
          'Structured Data setup ✘',
          'On Site Blog Section Creation – ✓',
          'On Site Blog Posting (Draft Copy) | Applicable from 3rd month',

          '--- Off-page Optimization Activities',
          'Search Engine Submission – 10',
          'Article Writing – 1',
          'Article Posting – 1',
          'Article Bookmarking – 10',
          'Classified Submissions – 10',
          'Business Listing – 5',
          'Blog Writing – 1',
          'Blog Posting – 1',
          'Blog Bookmarking – 10',
          'On page Blog – 1',
          'On Page Blog Bookmarking – 5',
          'Image Sharing – 5',
          'PPT Submissions – 1',
          'PPT Bookmarking – 10',
          'Social Bookmarking – 30',
          'PDF Sharing – 1',
          'PDF Bookmarking – 5',
          'Profile Creation – 5',
          'Quora Answering – 1',
          'Info Graphic Creation – 1',
          'Info Graphic Bookmarking – 5',
          'Video Marketing (if Client provides) – ✓',
          'Press Release (If Client Provides News) – ✓',

          '---SMO Activities',
          'Facebook ✘',
          'Instagram ✘',
          'Twitter ✘',
          'Pinterest ✘',

          '--- Reports',
          'Monthly Website Analytics Report – ✓',
          'Monthly Keywords Ranking Report – ✓',
          'Monthly Off Page Submission Report – ✓',

          '--- Customer Support',
          'Email – ✓',
          'Phone – ✓',
          'Chat – ✓'
        ]
      },
      {
        name: 'PROFESSIONAL',
        monthlyPrice: 800,
        popular: true, // best seller
        features: [
          'No. of Keywords – 40',
          'Landing Pages – 10',
          'Backlinks (per month) – 210',

          '---First Hand SEO Analysis',
          'Pre-Optimization Website Analysis – ✓',
          'Competitor Analysis – ✓',
          'Keyword Research & Analysis – ✓',
          'Baseline Ranking Check – ✓',
          'Duplicate Content Check – ✓',
          'Google Penalty Check – ✓',
          'Back Link Analysis ✘',

          '---On Page Optimization Activities',
          'Website Canonical Check – ✓',
          'Title Tag Optimization – ✓',
          'META Tags Optimization – ✓',
          'Heading Tags Optimization ✘',
          'Image Alt Tags Optimization – ✓',
          'Content Optimization – ✓',
          'SEO Friendly URL Setup – ✓',
          'Site navigation Analysis ✘',
          '404 Page Implementation – ✓',
          'Broken Link Check ✘',
          'Website Speed Check – ✓',
          'Google Indexed Pages Check – ✓',
          'Robots.txt Creation – ✓',
          'Google XML Sitemap – ✓',
          'PHP Sitemap Setup ✘',
          'Google Webmasters Tool Setup – ✓',
          'Google Analytics Setup – ✓',
          'Structured Data setup ✘',
          'On Site Blog Section Creation – ✓',
          'On Site Blog Posting (Draft Copy) | Applicable from 3rd month',

          '--- Off-page Optimization Activities',
          'Search Engine Submission – 10',
          'Article Writing – 1',
          'Article Posting – 1',
          'Article Bookmarking – 10',
          'Classified Submissions – 10',
          'Business Listing – 5',
          'Blog Writing – 1',
          'Blog Posting – 1',
          'Blog Bookmarking – 10',
          'On page Blog – 1',
          'On Page Blog Bookmarking – 5',
          'Image Sharing – 5',
          'PPT Submissions – 1',
          'PPT Bookmarking – 10',
          'Social Bookmarking – 30',
          'PDF Sharing – 1',
          'PDF Bookmarking – 5',
          'Profile Creation – 5',
          'Quora Answering – 1',
          'Info Graphic Creation – 1',
          'Info Graphic Bookmarking – 5',
          'Video Marketing (if Client provides) – ✓',
          'Press Release (If Client Provides News) – ✓',

          '---SMO Activities',
          'Facebook ✘',
          'Instagram ✘',
          'Twitter ✘',
          'Pinterest ✘',

          '--- Reports',
          'Monthly Website Analytics Report – ✓',
          'Monthly Keywords Ranking Report – ✓',
          'Monthly Off Page Submission Report – ✓',

          '--- Customer Support',
          'Email – ✓',
          'Phone – ✓',
          'Chat – ✓'
        ]
      },
      {
        name: 'ENTERPRISE',
        monthlyPrice: 1100,
        popular: false,
        features: [
          'No. of Keywords – 75',
          'Landing Pages – 20',
          'Backlinks (per month) – 180',
          'GBP (GMB) – ✓',
          'Geotagging – ✓',
          'First Hand SEO Analysis – ✓',
          'Pre-Optimization Website Analysis – ✓',
          'Competitor Analysis – ✓',
          'Keyword Research & Analysis – ✓',
          'Baseline Ranking Check – ✓',
          'Duplicate Content Check – ✓',
          'Google Penalty Check – ✓',
          'Back Link Analysis (If required) – ✓',
          '--- On-page Optimization ---',
          'Website Canonical Check – ✓',
          'Title Tag Optimization – ✓',
          'META Tags Optimization – ✓',
          'Heading Tags Optimization – ✓',
          'Image Alt Tags Optimization – ✓',
          'Content Optimization – ✓',
          'SEO Friendly URL Setup – ✓',
          'Site Navigation Analysis – ✓',
          '404 Page Implementation – ✓',
          'Broken Links Check – ✓',
          'Website Speed Check – ✓',
          'Google Indexed Pages Check – ✓',
          'Robots.txt Creation – ✓',
          'Google XML Sitemap – ✓',
          'php Sitemap Setup – ✓',
          'Google Webmasters Tool Setup – ✓',
          'Google Analytics Setup – ✓',
          'Structured Data Setup – ✓',
          'On Site Blog Section Creation – ✓',
          'On Site Blog Posting (Draft Copy) – Applicable from 3rd month – 3',
          '--- Off-page Optimization ---',
          'Search Engine Submission – 40',
          'Article Writing – 6',
          'Article Posting – 6',
          'Article Bookmarking – 40',
          'Classified Submissions – 80',
          'Business Listing – 10',
          'Blog Writing – 6',
          'Blog Posting – 6',
          'Blog Bookmarking – 80',
          'On page Blog – 6',
          'On Page Blog Bookmarking – 80',
          'Image sharing – 40',
          'PPT Submissions – 8',
          'PPT Bookmarking – 40',
          'Social Bookmarking – 80',
          'PDF Sharing – 6',
          'PDF bookmarking – 40',
          'Profile Creation – 10',
          'Quora Answering – 10',
          'Info Graphic Creation – 6',
          'Info Graphic Bookmarking – 50',
          'Video Marketing (if Client provides) – ✓',
          'Press Release (If Client Provides News) – ✓',
          '--- SMO ---',
          'Facebook Profile Creation – ✓',
          'Facebook Fan Page Creation – ✓',
          'Facebook Posting & Sharing – 16',
          'Instagram Business Profile Creation – ✓',
          'Creation of Interactive Branded Hashtag – ✓',
          'Instagram Posting – 16',
          'Twitter Profile Creation – ✓',
          'Twitter Post – 16',
          'Pinterest Account Creation/Management – ✓',
          'Pinterest Followers – ✓',
          'Updating of pin boards – 8',
          'Pins – ✓',
          '--- Reports ---',
          'Monthly Website Analytics Report – ✓',
          'Monthly Keywords Ranking Report – ✓',
          'Monthly Off Page Submission Report – ✓',
          '--- Customer Support ---',
          'Email – ✓',
          'Phone – ✓',
          'Chat – ✓'
        ]
      },
      {
        name: 'MASTER',
        monthlyPrice: 1800,
        popular: false,
        features: [
          'No. of Keywords – 100',
          'Landing Pages – 20',
          'Backlinks (per month) – 200',
          'GBP (GMB) – ✓',
          'Geotagging – ✓',
          'First Hand SEO Analysis – ✓',
          'Pre-Optimization Website Analysis – ✓',
          'Competitor Analysis – ✓',
          'Keyword Research & Analysis – ✓',
          'Baseline Ranking Check – ✓',
          'Duplicate Content Check – ✓',
          'Google Penalty Check – ✓',
          'Back Link Analysis (If required) – ✓',
          '--- On-page Optimization ---',
          'Website Canonical Check – ✓',
          'Title Tag Optimization – ✓',
          'META Tags Optimization – ✓',
          'Heading Tags Optimization – ✓',
          'Image Alt Tags Optimization – ✓',
          'Content Optimization – ✓',
          'SEO Friendly URL Setup – ✓',
          'Site Navigation Analysis – ✓',
          '404 Page Implementation – ✓',
          'Broken Links Check – ✓',
          'Website Speed Check – ✓',
          'Google Indexed Pages Check – ✓',
          'Robots.txt Creation – ✓',
          'Google XML Sitemap – ✓',
          'php Sitemap Setup – ✓',
          'Google Webmasters Tool Setup – ✓',
          'Google Analytics Setup – ✓',
          'Structured Data Setup – ✓',
          'On Site Blog Section Creation – ✓',
          'On Site Blog Posting (Draft Copy) – Applicable from 3rd month – 3',
          '--- Off-page Optimization ---',
          'Search Engine Submission – 40',
          'Article Writing – 6',
          'Article Posting – 6',
          'Article Bookmarking – 40',
          'Classified Submissions – 80',
          'Business Listing – 10',
          'Blog Writing – 6',
          'Blog Posting – 6',
          'Blog Bookmarking – 80',
          'On page Blog – 6',
          'On Page Blog Bookmarking – 80',
          'Image sharing – 40',
          'PPT Submissions – 8',
          'PPT Bookmarking – 40',
          'Social Bookmarking – 80',
          'PDF Sharing – 6',
          'PDF bookmarking – 40',
          'Profile Creation – 10',
          'Quora Answering – 10',
          'Info Graphic Creation – 6',
          'Info Graphic Bookmarking – 50',
          'Video Marketing (if Client provides) – ✓',
          'Press Release (If Client Provides News) – ✓',
          '--- SMO ---',
          'Facebook Profile Creation – ✓',
          'Facebook Fan Page Creation – ✓',
          'Facebook Posting & Sharing – 16',
          'Instagram Business Profile Creation – ✓',
          'Creation of Interactive Branded Hashtag – ✓',
          'Instagram Posting – 16',
          'Twitter Profile Creation – ✓',
          'Twitter Post – 16',
          'Pinterest Account Creation/Management – ✓',
          'Pinterest Followers – ✓',
          'Updating of pin boards – 8',
          'Pins – ✓',
          '--- Reports ---',
          'Monthly Website Analytics Report – ✓',
          'Monthly Keywords Ranking Report – ✓',
          'Monthly Off Page Submission Report – ✓',
          '--- Customer Support ---',
          'Email – ✓',
          'Phone – ✓',
          'Chat – ✓'
        ]
      }
    ],

    // SMO (fixed plans)
    smo: [
      { name: 'Starter SMO', monthlyPrice: 300, popular: false, features: ['2 Social Platforms', '10 Posts per Month', 'Basic Analytics'] },
      { name: 'Professional SMO', monthlyPrice: 500, popular: true, features: ['4 Social Platforms', '20 Posts per Month', 'Advanced Analytics', 'Social Listening'] },
      { name: 'Enterprise SMO', monthlyPrice: 800, popular: false, features: ['All Platforms', '30+ Posts', 'Influencer Outreach', 'Custom Reports'] }
    ],

    // PPC + Meta Ads (fixed plans)
    ppc: [
      { name: 'BASIC', monthlyPrice: 300, popular: false, features: ['Setup Fee – $200', 'Ad Budget up to $1000/month', '1 Full Optimization/month', 'Up to 5 Ad Groups'] },
      { name: 'SILVER', monthlyPrice: 400, popular: false, features: ['Setup Fee – $350', 'Ad Budget up to $2000/month', '2 Optimizations/month', 'Up to 10 Ad Groups'] },
      { name: 'GOLD', monthlyPrice: 600, popular: true, features: ['Setup Fee – $500', 'Ad Budget up to $3000/month', '3 Optimizations/month', 'Up to 20 Ad Groups'] },
      { name: 'PREMIUM', monthlyPrice: 800, popular: false, features: ['Setup Fee – $750', 'Ad Budget above $3000/month', '5 Optimizations/month', 'Up to 40 Ad Groups'] }
    ],

    // ORM (fixed plans)
    orm: [
      { name: 'Basic ORM', monthlyPrice: 300, popular: false, features: ['Review Monitoring (2 sites)', 'Monthly Report', '1 Reputation Alert'] },
      { name: 'Pro ORM', monthlyPrice: 600, popular: true, features: ['Review Monitoring (5 sites)', 'Weekly Reports', 'Response Assistance', 'Sentiment Analysis'] },
      { name: 'Enterprise ORM', monthlyPrice: 1000, popular: false, features: ['Unlimited Monitoring', 'Real-time Alerts', 'Crisis Management', 'Brand Reputation Strategy'] }
    ],

    // Web Development (custom quote)
    'web-dev': [
      {
        name: 'Custom Web Development',
        isCustom: true,
        description: 'Tailored websites and web applications built with modern technologies (React, Node.js, PHP, etc.). We create everything from simple landing pages to complex portals.',
        features: ['Responsive design', 'SEO friendly', 'CMS integration', 'E-commerce solutions', 'API development']
      }
    ],

    // App Development (custom quote)
    'app-dev': [
      {
        name: 'Custom App Development',
        isCustom: true,
        description: 'Native or cross-platform mobile apps for iOS and Android. We use React Native, Flutter, Swift, Kotlin. Include features like push notifications, offline sync, payment gateways.',
        technology: 'React Native, Flutter, Swift, Kotlin',
        featuresFunctionality: 'User authentication, real-time data, maps, camera, push notifications, in-app purchases'
      }
    ],

    // Hosting (fixed plans)
    hosting: [
      { name: 'Shared Hosting', monthlyPrice: 10, popular: false, features: ['10 GB SSD', '1 website', 'Free SSL', '24/7 support'] },
      { name: 'VPS Hosting', monthlyPrice: 50, popular: true, features: ['4 vCPU', '8 GB RAM', '100 GB SSD', 'Root access'] },
      { name: 'Dedicated Server', monthlyPrice: 200, popular: false, features: ['8 vCPU', '32 GB RAM', '1 TB SSD', 'Full management'] }
    ],

    // AI Automation (custom quote)
    'ai-auto': [
      {
        name: 'AI Automation Solutions',
        isCustom: true,
        description: 'Automate workflows, integrate chatbots, implement predictive analytics. We use OpenAI, TensorFlow, LangChain, and custom models.',
        technology: 'OpenAI, TensorFlow, LangChain, RPA tools',
        featuresFunctionality: 'Chatbots, document processing, lead scoring, email automation, data extraction'
      }
    ],

    // Software Tools (custom quote) – separate plans for CRM, LMS, ERP, EPS
    'software-tools': [
      {
        name: 'CRM (Customer Relationship Management)',
        isCustom: true,
        description: 'Custom CRM to manage contacts, sales pipelines, and customer interactions. Tailored to your business processes.',
        technology: 'React, Node.js, PostgreSQL, Salesforce integration',
        featuresFunctionality: 'Lead tracking, task management, email integration, reporting dashboards'
      },
      {
        name: 'LMS (Learning Management System)',
        isCustom: true,
        description: 'Build a platform to create, deliver, and track online courses. Multi-tenant support, SCORM compliance.',
        technology: 'Laravel, React, MySQL, SCORM',
        featuresFunctionality: 'Course creation, quizzes, certificates, student analytics, payment gateway'
      },
      {
        name: 'ERP (Enterprise Resource Planning)',
        isCustom: true,
        description: 'Integrated management of core business processes: inventory, HR, finance, supply chain.',
        technology: 'Odoo, Python, PostgreSQL, Docker',
        featuresFunctionality: 'Inventory management, accounting, HRMS, procurement, reporting'
      },
      {
        name: 'EPS (Enterprise Payment System)',
        isCustom: true,
        description: 'Secure payment processing platform with subscription management, invoicing, and multi-currency support.',
        technology: 'Node.js, Stripe/PayPal integration, React, PCI compliant',
        featuresFunctionality: 'Recurring billing, invoice generation, payment gateways, fraud detection'
      }
    ],

    // Website Security & Maintenance (fixed plans)
    'website-sec-maint': [
      { name: 'Basic Security & Maintenance', monthlyPrice: 100, popular: false, features: ['Malware scanning', 'Weekly backups', 'Plugin updates', 'Firewall protection'] },
      { name: 'Advanced Security & Maintenance', monthlyPrice: 250, popular: true, features: ['Daily backups', 'Real-time monitoring', 'DDoS protection', 'Performance optimization'] },
      { name: 'Enterprise Security Suite', monthlyPrice: 500, popular: false, features: ['24/7 security monitoring', 'Penetration testing', 'Incident response', 'SLA guarantee'] }
    ]
  };

  // Categories with icons
  const categories = [
    { id: 'seo', name: 'SEO', Icon: Search },
    { id: 'smo', name: 'SMO', Icon: Share2 },
    { id: 'ppc', name: 'PPC + Meta Ads', Icon: Megaphone },
    { id: 'orm', name: 'ORM', Icon: TrendingUp },
    { id: 'web-dev', name: 'Web Dev', Icon: Code },
    { id: 'app-dev', name: 'App Dev', Icon: Smartphone },
    { id: 'hosting', name: 'Hosting', Icon: Cloud },
    { id: 'ai-auto', name: 'AI Automation', Icon: Cpu },
    { id: 'software-tools', name: 'Software Tools', Icon: Database },
    { id: 'website-sec-maint', name: 'Security & Maintenance', Icon: Shield }
  ];

  const openModal = (plan: PricingPlan, category: string) => {
    setSelectedPlan({ ...plan, category });
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
    setFormData({ name: '', email: '', website: '', phone: '', budget: '', businessType: '', technology: '', features: '' });
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitToSheet('PricingQuote', {
      name: formData.name,
      email: formData.email,
      website: formData.website,
      phone: formData.phone,
      budget: formData.budget,
      businessType: formData.businessType,
      technology: formData.technology,
      features: formData.features,
      plan: selectedPlan?.name ?? '',
      category: selectedPlan?.category ?? '',
      duration: `${duration} month(s)`,
    });
    closeModal();
  };

  // Calculate total price for a fixed plan
  const getTotalPrice = (monthlyPrice: number) => {
    const total = monthlyPrice * duration * discountFactor[duration];
    return total;
  };

  return (
    <div className="min-h-screen bg-gray-950 pt-24 pb-16 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] -z-10" />

      {/* Fixed Tools - Desktop */}
      <div className="hidden lg:block">
        <Link
          to="/custom-plan"
          className="fixed left-8 top-1/2 -translate-y-1/2 z-50 flex items-center gap-3 bg-pink-700 backdrop-blur-xl border border-white/10 text-foreground px-6 py-4 rounded-xl text-sm font-bold shadow-2xl hover:border-primary/50 transition-all hover:scale-105 vertical-text group"
        >
          {/* <Sparkles className="w-5 h-5 text-primary group-hover:rotate-12 transition-transform" /> */}
          <span className="uppercase tracking-widest">Custom Plan</span>
        </Link>
        <Link
          to="/cost-calculator"
          className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex items-center gap-3 bg-blue-500 backdrop-blur-xl border border-white/10 text-foreground px-4 py-3 rounded-xl text-sm font-bold shadow-2xl hover:border-primary/50 transition-all hover:scale-105 vertical-text group"
        >
          {/* <Calculator className="w-5 h-5 text-primary group-hover:rotate-12 transition-transform" /> */}
          <span className="uppercase tracking-widest">Cost Calculator</span>
        </Link>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
          >
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span className="text-primary text-[10px] font-black uppercase tracking-[0.3em]">Neural Investment Framework v4.2</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-black text-foreground mb-10 leading-[0.85] tracking-tighter"
          >
            Growth <br />
            <span className="text-gradient-gold italic">Architectures.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground font-medium max-w-3xl mx-auto mb-16 leading-relaxed"
          >
            Transparent, performance-indexed pricing models engineered for
            global brands demanding unfair competitive advantages.
          </motion.p>

          {/* Duration Selector */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="glass-card p-2 rounded-3xl border-white/5 flex items-center gap-1.5">
              {([1, 3, 6, 9, 12] as const).map((dur) => {
                const discount = { 3: '6%', 6: '15%', 9: '20%', 12: '25%' }[dur];
                const isActive = duration === dur;
                return (
                  <button
                    key={dur}
                    onClick={() => setDuration(dur)}
                    className={`relative px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all ${isActive ? 'text-background' : 'text-foreground/50 hover:text-foreground'
                      }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-dur"
                        className="absolute inset-0 bg-primary rounded-2xl shadow-[0_0_30px_rgba(var(--primary),0.2)]"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10 flex flex-col items-center">
                      {dur} {dur === 1 ? 'Month' : 'Months'}
                      {discount && (
                        <span className={`text-[8px] mt-0.5 ${isActive ? 'text-background/70' : 'text-primary'}`}>
                          SAVINGS {discount}
                        </span>
                      )}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Service Category Navigation */}
        <div className="mb-24 overflow-x-auto pb-6 hide-scrollbar">
          <div className="flex justify-start lg:justify-center gap-5 min-w-max">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-4 px-8 py-5 rounded-2xl glass-card border-white/5 transition-all group relative overflow-hidden ${selectedCategory === category.id
                  ? 'border-primary/50 bg-primary/[0.03]'
                  : 'hover:border-white/20'
                  }`}
              >
                {selectedCategory === category.id && (
                  <motion.div
                    layoutId="active-cat-bg"
                    className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none"
                  />
                )}
                <category.Icon className={`w-5 h-5 transition-transform group-hover:scale-110 ${selectedCategory === category.id ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground'}`} />
                <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${selectedCategory === category.id ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground'}`}>
                  {category.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"
          >
            {pricingData[selectedCategory]?.map((plan, index) => {
              const isFixed = !plan.isCustom;
              const total = isFixed ? getTotalPrice(plan.monthlyPrice!) : null;
              const isExpanded = expandedPlan === plan.name;
              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`glass-card rounded-[2rem] p-8 border-white/5 flex flex-col group relative transition-all duration-500 hover:border-primary/30 hover:-translate-y-2 ${plan.popular ? 'border-primary/40 bg-primary/[0.03] ring-1 ring-primary/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)]' : ''
                    }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-8 py-2.5 rounded-full bg-primary text-background text-[9px] font-black uppercase tracking-[0.3em] shadow-[0_10px_30px_rgba(var(--primary),0.4)] whitespace-nowrap">
                      Industry Leader
                    </div>
                  )}

                  <div className="mb-10">
                    <h3 className="text-2xl font-black text-foreground mb-4 group-hover:text-primary transition-colors tracking-tight">
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline gap-2">
                      {isFixed ? (
                        <>
                          <span className="text-5xl font-black text-foreground tracking-tighter">
                            {fmtCurrency(total ?? 0)}
                          </span>
                          <span className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-1">
                            / {duration === 1 ? 'Month' : `${duration} Months`}
                          </span>
                        </>
                      ) : (
                        <span className="text-4xl font-black text-gradient-gold italic tracking-tight">Bespoke.</span>
                      )}
                    </div>
                    {isFixed && duration > 1 && (
                      <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[9px] font-black text-primary uppercase tracking-[0.2em]">
                        <Zap className="w-3 h-3 fill-primary" />
                        Save {Math.round((1 - discountFactor[duration]) * 100)}% Now
                      </div>
                    )}
                  </div>

                  {plan.description && (
                    <p className="text-sm text-muted-foreground font-medium leading-relaxed mb-10">
                      {plan.description}
                    </p>
                  )}

                  <div className="space-y-5 mb-12 flex-grow">
                    {(isExpanded
                      ? plan.features
                      : plan.features?.slice(0, 10)
                    ).map((feat, i) => (
                      <div
                        key={i}
                        className={`flex items-center justify-between gap-4 py-2 border-b border-white/5 ${feat.startsWith('---')
                          ? 'mt-5 pt-5 border-t border-primary/20 border-b-0'
                          : ''
                          }`}
                      >
                        {feat.startsWith('---') ? (
                          <div className="w-full px-1 py-1 text-[10px] uppercase tracking-[0.25em] font-black text-primary shadow-[0_0_20px_rgba(var(--primary),0.08)]">
                            {feat.replace(/---/g, '')}
                          </div>
                        ) : (
                          <>
                            <span className="text-xs font-medium text-foreground/80 leading-relaxed">
                              {feat
                                .replace(' – ✓', '')
                                .replace(' – ✘', '')
                                .replace(' ✘', '')}
                            </span>

                            {feat.includes('✓') ? (
                              <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                            ) : feat.includes('✘') ? (
                              <X className="w-4 h-4 text-red-400 flex-shrink-0" />
                            ) : (
                              <span className="text-xs font-black text-primary flex-shrink-0">
                                {feat.split(' – ')[1]}
                              </span>
                            )}
                          </>
                        )}
                      </div>
                    ))}
                    {(plan.features?.length ?? 0) > 10 && (
                      <>
                        <button
                          type="button"
                          onClick={() =>
                            setExpandedPlan(
                              isExpanded ? null : plan.name
                            )
                          }
                          className="mt-4 ml-9 md:ml-3 inline-flex items-center gap-1.5 rounded-full bg-primary/5 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.22em] text-primary transition-colors hover:bg-primary/10"
                        >
                          <Plus
                            className={`h-3 w-3 transition-transform ${isExpanded ? "rotate-45" : ""
                              }`}
                          />

                          {isExpanded
                            ? "Hide Metrics"
                            : `${(plan.features?.length ?? 0) - 10} Advanced Metrics`}
                        </button>


                      </>
                    )}
                  </div>

                  <Button
                    onClick={() => openModal(plan, selectedCategory)}
                    className={`w-full h-16 rounded-[1.5rem] font-black uppercase tracking-[0.2em] text-[10px] group overflow-hidden relative ${plan.popular ? 'button-premium' : 'bg-white/5 hover:bg-white/10 text-foreground border border-white/10'
                      }`}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Initialize Protocol
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                    {plan.popular && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
                      />
                    )}
                  </Button>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Modern Modal / Briefing Portal */}
      <AnimatePresence>
        {isModalOpen && selectedPlan && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-background/95 backdrop-blur-3xl"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 30 }}
              className="relative w-full max-w-5xl glass-card rounded-[3em] border-white/10 overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)]"
            >
              <button
                onClick={closeModal}
                className="absolute top-10 right-10 p-4 rounded-2xl bg-white/5 border border-white/10 text-foreground hover:bg-primary hover:text-background transition-all z-20 group"
              >
                <X className="w-6 h-6 transition-transform group-hover:rotate-90" />
              </button>

              <div className="grid lg:grid-cols-5 h-[85vh] lg:h-auto max-h-[90vh]">
                {/* Left Sidebar - Briefing Info */}
                <div className="lg:col-span-2 bg-primary/5 p-10 lg:p-14 border-r border-white/5 overflow-y-auto">
                  <div className="mb-16">
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                      <Layers className="w-4 h-4 text-primary" />
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Protocol Brief</span>
                    </div>
                    <h3 className="text-4xl font-black text-foreground mb-4 tracking-tight">
                      {selectedPlan.name}
                    </h3>
                    <p className="text-xs font-black text-muted-foreground uppercase tracking-[0.3em]">
                      {selectedCategory.replace('-', ' ')} Engineering
                    </p>
                  </div>

                  <div className="space-y-10">
                    <div className="p-8 rounded-[2.5rem] bg-[#05070a] border border-white/5 shadow-xl">
                      <div className="text-[9px] font-black text-muted-foreground uppercase tracking-[0.3em] mb-4">Investment Allocation</div>
                      <div className="text-4xl font-black text-foreground tracking-tighter">
                        {selectedPlan.isCustom ? 'Custom.' : fmtCurrency(getTotalPrice(selectedPlan.monthlyPrice!))}
                      </div>
                      {!selectedPlan.isCustom && (
                        <div className="inline-flex items-center gap-2 mt-4 text-[9px] font-black text-primary uppercase tracking-[0.2em]">
                          <Clock className="w-3 h-3" />
                          Term Length: {duration} months
                        </div>
                      )}
                    </div>

                    <div className="space-y-6">
                      <div className="flex items-center gap-4 text-[10px] font-black text-foreground uppercase tracking-[0.3em]">
                        <Activity className="w-5 h-5 text-primary" />
                        Core Deliverables
                      </div>
                      <div className="space-y-5">
                        {selectedPlan.features?.slice(0, 6).map((f, i) => (
                          <div key={i} className="flex items-start gap-4 text-xs font-bold text-muted-foreground leading-relaxed">
                            <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            {f.split(' – ')[0]}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Content - Secure Form */}
                <div className="lg:col-span-3 p-10 lg:p-16 overflow-y-auto bg-background/50">
                  <div className="mb-14">
                    <h4 className="text-3xl font-black text-foreground mb-4">Initialize Growth.</h4>
                    <p className="text-base text-muted-foreground font-medium">Transmit your business parameters to start the onboarding protocol.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid sm:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground ml-2">Director Name</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          className="w-full h-16 bg-white/5 border border-white/10 rounded-2xl px-8 font-bold text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-primary transition-all"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground ml-2">Corporate Email</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@company.com"
                          className="w-full h-16 bg-white/5 border border-white/10 rounded-2xl px-8 font-bold text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-primary transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground ml-2">Digital Asset URL</label>
                        <input
                          type="url"
                          name="website"
                          value={formData.website}
                          onChange={handleInputChange}
                          placeholder="https://company.com"
                          className="w-full h-16 bg-white/5 border border-white/10 rounded-2xl px-8 font-bold text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-primary transition-all"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground ml-2">Secure Contact</label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+1 (555) 000-0000"
                          className="w-full h-16 bg-white/5 border border-white/10 rounded-2xl px-8 font-bold text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-primary transition-all"
                        />
                      </div>
                    </div>

                    {selectedPlan.isCustom && (
                      <div className="space-y-8 animate-in fade-in slide-in-from-top-4 duration-500">
                        <div className="grid sm:grid-cols-2 gap-8">
                          <div className="space-y-3">
                            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground ml-2">Capital Allocation</label>
                            <input
                              type="text"
                              name="budget"
                              required
                              value={formData.budget}
                              onChange={handleInputChange}
                              placeholder="e.g. $10k - $50k"
                              className="w-full h-16 bg-white/5 border border-white/10 rounded-2xl px-8 font-bold text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-primary transition-all"
                            />
                          </div>
                          <div className="space-y-3">
                            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground ml-2">Market Sector</label>
                            <input
                              type="text"
                              name="businessType"
                              required
                              value={formData.businessType}
                              onChange={handleInputChange}
                              placeholder="e.g. Fintech, E-commerce"
                              className="w-full h-16 bg-white/5 border border-white/10 rounded-2xl px-8 font-bold text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-primary transition-all"
                            />
                          </div>
                        </div>
                        <div className="space-y-3">
                          <label className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground ml-2">Protocol Scope & Objectives</label>
                          <textarea
                            name="features"
                            required
                            rows={4}
                            value={formData.features}
                            onChange={handleInputChange}
                            placeholder="Describe your vision and technical requirements..."
                            className="w-full bg-white/5 border border-white/10 rounded-3xl p-8 font-bold text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-primary transition-all resize-none"
                          />
                        </div>
                      </div>
                    )}

                    <div className="pt-8">
                      <Button type="submit" className="w-full h-20 rounded-[1.5rem] button-premium font-black uppercase tracking-[0.3em] text-xs">
                        {selectedPlan.isCustom ? 'Initiate Secure Consultation' : 'Complete Onboarding Protocol'}
                        <ArrowRight className="ml-3 w-5 h-5" />
                      </Button>
                      <div className="flex items-center justify-center gap-6 mt-8">
                        <p className="text-[9px] font-black text-muted-foreground uppercase tracking-[0.3em] flex items-center gap-2">
                          <Lock className="w-3 h-3 text-primary" /> End-to-End Encryption
                        </p>
                        <div className="w-1 h-1 rounded-full bg-white/10" />
                        <p className="text-[9px] font-black text-muted-foreground uppercase tracking-[0.3em] flex items-center gap-2">
                          <ShieldCheck className="w-3 h-3 text-primary" /> SOC2 Compliant Transmission
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}