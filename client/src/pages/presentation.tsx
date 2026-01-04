import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronRight, 
  ChevronLeft, 
  BarChart3, 
  TrendingUp, 
  Users, 
  Target, 
  Mail,
  Play,
  Settings,
  Linkedin,
  Twitter,
  Globe
} from "lucide-react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Import the generated background
import heroBg from "@assets/generated_images/abstract_blue_wave_corporate_background.png";

// --- Types & Data ---

const slidesData = [
  { id: "title", type: "title", title: "Investor Promotion", subtitle: "Strategic Growth Plan 2026" },
  { id: "intro", type: "text", title: "Introduction", subtitle: "Who We Are" },
  { id: "market", type: "chart", title: "Market Analysis", subtitle: "Growth Potential" },
  { id: "team", type: "team", title: "Our Team", subtitle: "Leadership" },
  { id: "contact", type: "form", title: "Get in Touch", subtitle: "Contact Us" },
];

const chartData = [
  { name: "Q1", value: 4000 },
  { name: "Q2", value: 3000 },
  { name: "Q3", value: 2000 },
  { name: "Q4", value: 2780 },
  { name: "Q5", value: 1890 },
  { name: "Q6", value: 2390 },
];

const teamData = [
  { name: "Sarah Connor", role: "CEO & Founder", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200" },
  { name: "John Smith", role: "CTO", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200" },
  { name: "Emily Chen", role: "Head of Product", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200" },
  { name: "Michael Ross", role: "VP Sales", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200" },
];

// --- Components ---

const SlideWrapper = ({ children, isActive, direction }: { children: React.ReactNode, isActive: boolean, direction: number }) => {
  return (
    <AnimatePresence mode="popLayout" custom={direction}>
      {isActive && (
        <motion.div
          key="slide"
          custom={direction}
          initial={{ x: direction > 0 ? 1000 : -1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction > 0 ? -1000 : 1000, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="absolute inset-0 w-full h-full overflow-hidden bg-background"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// 1. Title Slide
const TitleSlide = () => (
  <div className="w-full h-full flex relative">
    {/* Left Content */}
    <div className="w-1/2 h-full flex flex-col justify-center px-24 z-10 bg-white/80 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <span className="text-primary font-display font-semibold tracking-wider uppercase text-sm mb-4 block">
          Investor Promotion
        </span>
        <h1 className="text-7xl font-display font-bold text-slate-900 leading-tight mb-2">
          Investor
        </h1>
        <h1 className="text-7xl font-display font-bold text-primary leading-tight mb-8">
          Promotion
        </h1>
        
        <div className="flex gap-4">
          <Button size="lg" className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 shadow-lg shadow-blue-500/30 px-8 py-6 text-lg font-medium border-0 cursor-pointer">
            <Play className="w-5 h-5 mr-2 fill-current" /> Start Pitch
          </Button>
          <Button size="lg" variant="outline" className="rounded-full w-14 h-14 p-0 border-slate-200 cursor-pointer">
            <Settings className="w-6 h-6 text-slate-400" />
          </Button>
        </div>

        <p className="mt-12 text-slate-500 max-w-md leading-relaxed font-body">
          The promotion will be conducted in a 15-minute English roadshow, consisting of key market insights and growth strategies.
        </p>
      </motion.div>
    </div>

    {/* Right Image Background */}
    <div className="absolute top-0 right-0 w-3/5 h-full z-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-bl-[100px]"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        {/* Decorative Overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/10" />
    </div>
  </div>
);

// 2. Intro Slide
const IntroSlide = () => (
  <div className="w-full h-full p-24 flex gap-12 items-center">
    <div className="w-1/2">
       <motion.span 
         className="text-primary font-display font-semibold tracking-wider uppercase text-sm mb-4 block"
         initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
       >
        Introduction
      </motion.span>
      <motion.h2 
        className="text-5xl font-display font-bold text-slate-900 mb-8"
        initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
      >
        Transforming Business Intelligence
      </motion.h2>
      <motion.p 
        className="text-slate-500 text-lg leading-relaxed mb-8 font-body"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
      >
        We provide cutting-edge solutions for modern enterprises looking to scale their operations through data-driven decision making.
      </motion.p>
      
      <div className="grid grid-cols-2 gap-6">
        {[
          { icon: Target, label: "Precision", text: "99.9% Accuracy in data modeling" },
          { icon: TrendingUp, label: "Growth", text: "Consistent 20% YoY expansion" },
          { icon: Users, label: "Community", text: "Over 50k active users worldwide" },
          { icon: BarChart3, label: "Analytics", text: "Real-time insights dashboard" }
        ].map((item, i) => (
          <motion.div 
            key={i} 
            className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 hover:bg-blue-50 transition-colors"
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.5 + (i * 0.1) }}
          >
            <div className="bg-white p-3 rounded-lg shadow-sm text-primary">
              <item.icon size={24} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 font-display">{item.label}</h4>
              <p className="text-sm text-slate-500 mt-1">{item.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    
    <div className="w-1/2 relative h-full flex items-center justify-center">
       {/* Abstract shape composition */}
       <motion.div 
         className="relative w-full aspect-square"
         initial={{ scale: 0.8, opacity: 0 }}
         animate={{ scale: 1, opacity: 1 }}
         transition={{ delay: 0.4 }}
       >
         <div className="absolute inset-0 bg-linear-to-tr from-cyan-100 to-blue-50 rounded-full opacity-50 blur-3xl" />
         <div className="absolute top-10 right-10 w-3/4 h-3/4 bg-white rounded-3xl shadow-2xl p-8 flex flex-col gap-6 z-10 border border-slate-100">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <div className="h-2 w-24 bg-slate-100 rounded-full" />
                <div className="h-2 w-16 bg-slate-100 rounded-full" />
              </div>
              <div className="h-8 w-8 rounded-full bg-blue-100" />
            </div>
            <div className="flex-1 bg-slate-50 rounded-xl flex items-end justify-between p-4 gap-2">
               {[40, 70, 50, 90, 60, 80].map((h, i) => (
                 <div key={i} className="w-full bg-blue-500 rounded-t-md opacity-80" style={{ height: `${h}%` }} />
               ))}
            </div>
         </div>
         {/* Floating decorative elements */}
         <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary/10 backdrop-blur-md rounded-2xl z-20 flex items-center justify-center">
            {/* Using a generic icon if PieChart is not desired here, but reusing BarChart3 for consistency */}
            <BarChart3 className="w-16 h-16 text-primary" />
         </div>
       </motion.div>
    </div>
  </div>
);

// 3. Chart Slide
const ChartSlide = () => (
  <div className="w-full h-full p-24 flex flex-col">
    <div className="mb-12">
      <span className="text-primary font-display font-semibold tracking-wider uppercase text-sm mb-2 block">Data Analysis</span>
      <h2 className="text-4xl font-display font-bold text-slate-900">Quarterly Growth Projection</h2>
    </div>

    <div className="flex-1 flex gap-12">
      <Card className="w-2/3 h-full border-0 shadow-xl bg-white/50 backdrop-blur-sm">
        <CardContent className="p-8 h-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} dx={-10} />
              <Tooltip 
                cursor={{ fill: '#f1f5f9' }}
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
              />
              <Bar dataKey="value" fill="hsl(199, 89%, 48%)" radius={[4, 4, 0, 0]} barSize={50} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="w-1/3 flex flex-col gap-6">
        <div className="bg-primary text-white p-8 rounded-2xl shadow-lg shadow-blue-500/20">
          <h3 className="text-2xl font-bold mb-2 font-display">Highlights</h3>
          <p className="opacity-90 leading-relaxed text-sm">
            Q4 showed exceptional growth driven by enterprise adoption. We project a 15% increase in the upcoming quarter.
          </p>
          <div className="mt-8 flex items-end gap-2">
            <span className="text-5xl font-bold">85%</span>
            <span className="mb-2 opacity-80">Retention</span>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex-1">
          <h4 className="font-semibold text-slate-900 mb-4">Key Metrics</h4>
          <div className="space-y-4">
             <div className="flex justify-between items-center">
               <span className="text-slate-500">Revenue</span>
               <span className="font-bold text-slate-900">$2.4M</span>
             </div>
             <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
               <div className="bg-green-500 h-full w-[80%]" />
             </div>
             
             <div className="flex justify-between items-center mt-4">
               <span className="text-slate-500">Users</span>
               <span className="font-bold text-slate-900">54k</span>
             </div>
             <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
               <div className="bg-blue-500 h-full w-[60%]" />
             </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// 4. Team Slide
const TeamSlide = () => (
  <div className="w-full h-full p-24 flex flex-col items-center">
    <div className="mb-16 text-center max-w-2xl">
      <span className="text-primary font-display font-semibold tracking-wider uppercase text-sm mb-2 block">Our Team</span>
      <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">Meet the Leadership</h2>
      <p className="text-slate-500">Driving innovation with over 50 years of combined experience in data science and enterprise solutions.</p>
    </div>

    <div className="grid grid-cols-4 gap-8 w-full">
      {teamData.map((member, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + (i * 0.1) }}
          className="group"
        >
          <div className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group-hover:-translate-y-2">
            <div className="aspect-square rounded-xl overflow-hidden mb-4 bg-slate-100">
              <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
            </div>
            <div className="text-center">
              <h3 className="font-bold text-slate-900 text-lg font-display">{member.name}</h3>
              <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
              <div className="flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <Linkedin size={16} className="text-slate-400 hover:text-blue-600 cursor-pointer" />
                <Twitter size={16} className="text-slate-400 hover:text-blue-400 cursor-pointer" />
                <Globe size={16} className="text-slate-400 hover:text-primary cursor-pointer" />
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

// 5. Contact Slide
const ContactSlide = () => (
  <div className="w-full h-full flex">
    <div className="w-1/2 bg-slate-900 text-white p-24 flex flex-col justify-center relative overflow-hidden">
       <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500 to-transparent" />
       
       <div className="relative z-10">
         <span className="text-blue-400 font-display font-semibold tracking-wider uppercase text-sm mb-4 block">Get In Touch</span>
         <h2 className="text-6xl font-display font-bold mb-8">Ready to start?</h2>
         <p className="text-slate-300 text-lg max-w-md leading-relaxed mb-12">
           Schedule a demo with our team to see how we can transform your business analytics.
         </p>
         
         <div className="space-y-6">
           <div className="flex items-center gap-4">
             <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-blue-400">
               <Mail />
             </div>
             <div>
               <p className="text-sm text-slate-400">Email us</p>
               <p className="text-lg font-medium">hello@company.com</p>
             </div>
           </div>
         </div>
       </div>
    </div>
    
    <div className="w-1/2 p-24 flex items-center justify-center bg-white">
      <div className="w-full max-w-md space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 mb-6 font-display">Contact Form</h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Name</label>
            <Input placeholder="John Doe" className="bg-slate-50 border-slate-200" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Email</label>
            <Input placeholder="john@example.com" className="bg-slate-50 border-slate-200" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Message</label>
            <Textarea placeholder="Tell us about your project..." className="bg-slate-50 border-slate-200 min-h-[120px]" />
          </div>
          <Button className="w-full bg-primary hover:bg-blue-600 h-12 text-lg cursor-pointer">Send Message</Button>
        </div>
      </div>
    </div>
  </div>
);


// --- Main Page Component ---

export default function PresentationPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slidesData.length - 1) {
      setDirection(1);
      setCurrentSlide(c => c + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(c => c - 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "Space") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide]);

  return (
    <div className="w-screen h-screen bg-slate-100 flex items-center justify-center overflow-hidden font-sans">
      {/* Slide Container (16:9 Aspect Ratio) */}
      <div className="relative w-full max-w-[1600px] aspect-video bg-white shadow-2xl rounded-xl overflow-hidden border border-slate-200">
        
        {/* Slides */}
        <div className="w-full h-full relative">
            <SlideWrapper isActive={currentSlide === 0} direction={direction}><TitleSlide /></SlideWrapper>
            <SlideWrapper isActive={currentSlide === 1} direction={direction}><IntroSlide /></SlideWrapper>
            <SlideWrapper isActive={currentSlide === 2} direction={direction}><ChartSlide /></SlideWrapper>
            <SlideWrapper isActive={currentSlide === 3} direction={direction}><TeamSlide /></SlideWrapper>
            <SlideWrapper isActive={currentSlide === 4} direction={direction}><ContactSlide /></SlideWrapper>
        </div>

        {/* Floating Navigation Controls */}
        <div className="absolute bottom-8 right-8 flex items-center gap-4 z-50">
           <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-slate-100 text-sm font-medium text-slate-500">
             {currentSlide + 1} / {slidesData.length}
           </div>
           
           <div className="flex gap-2">
             <Button 
               variant="outline" 
               size="icon" 
               onClick={prevSlide} 
               disabled={currentSlide === 0}
               className="rounded-full w-12 h-12 bg-white/90 hover:bg-white shadow-lg border-slate-100 disabled:opacity-50 cursor-pointer"
             >
               <ChevronLeft className="w-5 h-5" />
             </Button>
             
             <Button 
               variant="default" 
               size="icon" 
               onClick={nextSlide} 
               disabled={currentSlide === slidesData.length - 1}
               className="rounded-full w-12 h-12 bg-primary hover:bg-blue-600 shadow-lg shadow-blue-500/30 cursor-pointer"
             >
               <ChevronRight className="w-5 h-5" />
             </Button>
           </div>
        </div>

        {/* Simple Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-100">
          <motion.div 
            className="h-full bg-primary"
            initial={{ width: "0%" }}
            animate={{ width: `${((currentSlide + 1) / slidesData.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

      </div>
    </div>
  );
}