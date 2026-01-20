import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronRight, 
  ChevronLeft, 
  Zap, 
  ShieldCheck, 
  Play,
  Settings,
  Target,
  Users,
  AlertTriangle,
  CheckCircle,
  BrainCircuit,
  LayoutDashboard,
  TrendingUp,
  DollarSign,
  Maximize2,
  Minimize2,
  X,
  Car,
  ClipboardCheck,
  Wrench,
  Sparkles,
  Camera,
  Megaphone,
  Repeat,
  Layers,
  Server,
  Database,
  Globe,
  Code,
  Cpu,
  Code2
} from "lucide-react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie
} from "recharts";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import heroBg from "@assets/generated_images/velostock_dashboard_concept_car_dealership.png";
import imgHome from "@assets/image_1767533322826.png";
import imgDashboard from "@assets/image_1767533379093.png";
import imgPipeline from "@assets/image_1767533417621.png";
import imgVeiculos from "@assets/image_1767533439129.png";
import imgLead from "@assets/image_1767533495120.png";
import imgGarantia from "@assets/image_1767533511714.png";
import imgFinanceiro from "@assets/image_1767533541756.png";
import imgRelatorio from "@assets/image_1767533606589.png";
import imgCustos from "@assets/image_1767533643852.png";
import imgObs from "@assets/image_1767533726985.png";
import imgAdminDash from "@assets/image_1767534073146.png";
import imgAdminBugs from "@assets/image_1767534076137.png";
import imgLogo from "@assets/WhatsApp_Image_2026-01-04_at_11.17.29_1767536263145.jpeg";
import pptxgen from "pptxgenjs";
import { Download } from "lucide-react";
import { useLocation } from "wouter";

// --- i18n ---
const translations = {
  pt: {
    langLabel: "EN",
    abertura: {
      sub: "Revolução na Gestão Automotiva",
      tagline: "Gestão Operacional Inteligente. Não apenas controle de estoque.",
      quote: "Hoje, revendas perdem até 40% de eficiência tentando gerenciar operações complexas com planilhas e sistemas incompletos.",
      online: "Sistema Online",
      ia: "IA Integrada"
    },
    dor: {
      tag: "O PROBLEMA",
      title: "O Caos da Gestão Tradicional",
      sub: "Quem sofre? Proprietários de revendas médias (20-200 carros).",
      items: [
        { title: "Descontrole Financeiro", desc: "Sem aprovação de custos, as margens reais de lucro são desconhecidas. O dinheiro 'desaparece' em pequenos gastos." },
        { title: "Processos Manuais", desc: "Dependência de planilhas, cadernos e WhatsApp descentralizado. Informação se perde e erros acontecem." },
        { title: "Cegueira Operacional", desc: "Onde está o carro X? O que falta fazer nele? Sem rastreio, a operação para e a venda atrasa." }
      ]
    },
    solucao: {
      tag: "A SOLUÇÃO",
      title: "Velostock: O Ecossistema de Controle Total",
      desc: "Uma plataforma única que centraliza operação, financeiro e vendas. Saímos do \"apenas estocar\" para \"gerir o negócio\".",
      steps: [
        { title: "Entrada & Preparação", desc: "Checklist digital, fotos, aprovação de custos de reparo." },
        { title: "Venda & Marketing", desc: "Anúncios automáticos, IA gerando textos, CRM integrado." },
        { title: "Pós-Venda & Financeiro", desc: "Gestão de garantia, DRE em tempo real, comissões." }
      ]
    },
    ciclo: {
      tag: "FLUXO INTELIGENTE",
      title: "O Ciclo da Revenda",
      desc: "Acompanhe cada etapa da jornada do veículo, desde a entrada até a venda, com controle total em cada fase.",
      steps: [
        { label: "Chegada", sub: "Cadastro Inicial" },
        { label: "Vistoria", sub: "Checklist Entrada" },
        { label: "Revisão", sub: "Mecânica/Peças" },
        { label: "Estética", sub: "Higienização" },
        { label: "Marketing", sub: "Fotos/Anúncios" },
        { label: "Venda", sub: "Apresentação" }
      ],
      boxTitle: "Ciclo Integrado",
      boxDesc: "No Velostock, cada etapa libera automaticamente a próxima. O carro não vai para o pátio sem vistoria, e não é anunciado sem revisão de custos. Isso garante que nenhum veículo seja vendido com prejuízo invisível."
    },
    arquitetura: {
      tag: "STACK TECNOLÓGICA",
      title: "Engenharia de Alta Performance",
      desc: "Desenvolvido com tecnologias modernas para garantir escalabilidade horizontal, segurança de dados e uma experiência de usuário fluida.",
      frontend: "Frontend & Interface",
      backend: "Backend & APIs",
      infra: "Infraestrutura & Cloud"
    },
    funcionalidades: {
      tag: "DIFFERENTIATORS",
      title: "15 Key Features",
      sub: "The complete stack for your operation. Click to expand details.",
      items: [
        "Vehicle Management (Kanban)", "Detailed Cost Control", "Automated Sales & Commissions",
        "Professional Warranty Management", "Centralized Internal Notes", "Integrated Finance (A/P & A/R)",
        "CRM & Lead Management", "Intelligent Follow-ups", "AI (VeloBot) - Virtual Assistant",
        "Indicator Dashboard (BI)", "Access Control & Permissions", "Customizable Settings",
        "Advanced Management Reports", "Document Management & Storage", "Digital Checklists (In/Out)"
      ]
    },
    admin: {
      tag: "BACKOFFICE",
      title: "Powerful Admin Panel",
      desc: "Complete vision of the business health. MRR, Churn, and active stores in a single dashboard.",
      metrics: "Global Metrics",
      tenancy: "Tenancy Management",
      invites: "Controlled Invites",
      bugs: "Bug Tracking & Support",
      mrr: "Monthly Recurring Revenue",
      churn: "Churn Rate",
      stores: "Active Stores"
    },
    diferencial: {
      tag: "THE EDGE",
      title: "Why Velostock?",
      desc: "We focus on real profit and operational efficiency, not just beautiful photos.",
      ai: "Integrated AI that understands vehicle context.",
      process: "Process-based management (Kanban), not just lists.",
      profit: "Absolute focus on real profit, not just revenue.",
      ux: "Modern and ultra-fast interface inspired by Linear.",
      efficiency: "Operational Efficiency",
      traditional: "Traditional",
      low: "Low",
      manual: "Manual Processes",
      withVelostock: "With Velostock",
      maximum: "Maximum",
      automated: "Automated Flow",
      quote: "Velostock automates repetitive operational tasks, giving strategic time back to the team to focus on what really matters: closing sales."
    },
    mercado: {
      tag: "MARKET & AUDIENCE",
      title: "Who is our customer?",
      dealershipsTitle: "Independent Dealerships",
      dealershipsDesc: "Medium-sized multi-brand stores (20-200 cars) currently operating at the limit of administrative chaos.",
      teamsTitle: "Growing Teams",
      teamsDesc: "Stores that need to professionalize processes to scale without increasing administrative overhead.",
      marketTitle: "Gigantic Market",
      marketDesc: "In Brazil alone there are +45,000 active dealerships. Less than 15% use real operational management systems.",
      potential: "Potential Dealerships",
      footnote: "Most stores use only ad 'posters'. Velostock enters the heart of the operation."
    },
    monetizacao: {
      tag: "STRATEGY",
      title: "Plans & Projections",
      projection: "Growth Projection",
      stores: "Stores",
      monthly: "Monthly",
      annual: "Annual",
      metrics: [
        { label: "CAC", value: "$ 450", desc: "Acquisition Cost" },
        { label: "LTV", value: "$ 12k", desc: "Lifetime Value" },
        { label: "Churn", value: "< 2%", desc: "Exit Rate" }
      ],
      plans: [
        { name: "Starter", price: "$ 499/mo", desc: "Up to 30 cars" },
        { name: "Pro", price: "$ 899/mo", desc: "Up to 100 cars" },
        { name: "Enterprise", price: "On Request", desc: "Unlimited + Multi-Store" }
      ]
    },
    nav: {
      next: "Next",
      prev: "Previous",
      export: "Export PPTX"
    }
  }
};

// --- Data ---

const slidesData = [
  { id: 0, label: "Abertura" },
  { id: 1, label: "A Dor" },
  { id: 2, label: "A Solução" },
  { id: 3, label: "Ciclo" },
  { id: 4, label: "Arquitetura" },
  { id: 5, label: "Funcionalidades" },
  { id: 6, label: "Admin Panel" },
  { id: 7, label: "Diferencial" },
  { id: 8, label: "Mercado" },
  { id: 9, label: "Monetização" },
  { id: 10, label: "Desafios" },
  { id: 11, label: "Encerramento" },
];

const efficiencyData = [
  { name: "Tradicional", value: 40, label: "Eficiência Baixa" },
  { name: "Com Velostock", value: 95, label: "Alta Performance" },
];

const revenueData = [
  { name: "Ano 1", value: 1.2 },
  { name: "Ano 2", value: 3.5 },
  { name: "Ano 3", value: 8.0 },
];

// --- Components ---

const ImageModal = ({ src, onClose }: { src: string | null, onClose: () => void }) => {
  if (!src) return null;
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-8 cursor-zoom-out"
    >
      <motion.img 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        src={src} 
        className="max-w-full max-h-full object-contain rounded-lg shadow-2xl border border-white/10"
        onClick={(e) => e.stopPropagation()} 
      />
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={onClose} 
        className="absolute top-4 right-4 text-white hover:bg-white/10 rounded-full w-12 h-12"
      >
        <X size={24} />
      </Button>
    </motion.div>
  );
};

// --- Slide Components ---

// 1. Abertura
const Slide1_Abertura = ({ onImageClick, lang }: { onImageClick: (src: string) => void, lang: 'pt' | 'en' }) => {
  const t = translations[lang].abertura;
  return (
    <div className="w-full h-full flex flex-col lg:flex-row relative z-10">
      <div className="w-full lg:w-1/2 h-full flex flex-col justify-center px-12 lg:px-24">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-secondary font-display font-bold tracking-widest uppercase text-sm mb-6 block glow-text">
            {t.sub}
          </span>
          <h1 className="text-5xl lg:text-7xl font-display font-black text-white leading-none mb-6 pr-4">
            VELO<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary pr-2">STOCK</span>
          </h1>
          <h2 className="text-2xl lg:text-3xl font-light text-slate-300 mb-8 border-l-4 border-primary pl-6 py-2">
            {t.tagline.split('.')[0]}.<br/>
            {t.tagline.split('.')[1]}
          </h2>
          
          <p className="text-slate-400 text-lg max-w-lg leading-relaxed mb-10">
            "{t.quote}"
          </p>

          <div className="flex gap-4">
             <div className="px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-3">
               <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
               <span className="text-sm font-medium text-white">{t.online}</span>
             </div>
             <div className="px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-3">
               <BrainCircuit className="w-4 h-4 text-purple-400" />
               <span className="text-sm font-medium text-white">{t.ia}</span>
             </div>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute lg:relative inset-0 lg:w-1/2 h-full overflow-hidden opacity-40 lg:opacity-100 mix-blend-normal">
         <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-background via-background/50 to-transparent z-10" />
         <div className="w-full h-full flex items-center justify-center p-8">
            <img 
              src={imgDashboard} 
              alt="Velostock Dashboard" 
              onClick={() => onImageClick(imgDashboard)}
              className="w-full h-auto object-contain rounded-xl shadow-2xl border border-white/10 rotate-[-2deg] hover:rotate-0 transition-transform duration-700 cursor-zoom-in hover:scale-[1.02]" 
            />
         </div>
      </div>
    </div>
  );
};

// 2. Dor do Mercado
const Slide2_Dor = ({ lang }: { lang: 'pt' | 'en' }) => {
  const t = translations[lang].dor;
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-12 lg:p-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="text-center mb-16 z-10">
        <div className="inline-block px-4 py-1 rounded-full bg-red-500/10 text-red-400 font-bold text-xs tracking-wider mb-4 border border-red-500/20">
           {t.tag}
        </div>
        <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-4">
          {t.title}
        </h2>
        <p className="text-xl text-slate-400">{t.sub}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-6xl z-10">
        {t.items.map((item, i) => {
          const icons = [DollarSign, LayoutDashboard, AlertTriangle];
          const Icon = icons[i];
          return (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * i }}
              className="bg-card border border-white/5 p-8 rounded-2xl hover:border-red-500/30 transition-all hover:bg-white/5 group"
            >
              <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Icon className="text-red-500 w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{item.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

// 3. Solução
const Slide3_Solucao = ({ onImageClick, lang }: { onImageClick: (src: string) => void, lang: 'pt' | 'en' }) => {
  const t = translations[lang].solucao;
  return (
    <div className="w-full h-full flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center bg-background z-10">
         <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">{t.tag}</span>
         <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-8">
           {t.title}
         </h2>
         <p className="text-lg text-slate-300 mb-8 leading-relaxed">
           {t.desc}
         </p>
         
         <div className="space-y-6">
           {t.steps.map((step, i) => (
             <React.Fragment key={i}>
               <div className="flex items-start gap-4">
                 <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mt-1 shrink-0">
                   <span className="text-primary font-bold">{i + 1}</span>
                 </div>
                 <div>
                   <h4 className="text-white font-bold text-lg">{step.title}</h4>
                   <p className="text-slate-400 text-sm">{step.desc}</p>
                 </div>
               </div>
               {i < t.steps.length - 1 && <div className="w-px h-8 bg-white/10 ml-4 my-2" />}
             </React.Fragment>
           ))}
         </div>
      </div>
      <div className="w-full lg:w-1/2 bg-black relative flex items-center justify-center overflow-hidden p-12">
         <div className="grid grid-cols-1 gap-6 w-full h-full relative z-10 opacity-90 rotate-[-2deg] scale-95 hover:rotate-0 hover:scale-100 transition-all duration-700 ease-out justify-center content-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative group cursor-zoom-in" onClick={() => onImageClick(imgHome)}>
               <img src={imgHome} alt="Home Screen" className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 cursor-zoom-in group" onClick={() => onImageClick(imgDashboard)}>
                 <img src={imgDashboard} alt="Dashboard" className="w-full h-full object-cover object-left-top group-hover:scale-[1.02] transition-transform" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 cursor-zoom-in group" onClick={() => onImageClick(imgPipeline)}>
                 <img src={imgPipeline} alt="Pipeline" className="w-full h-full object-cover object-left-top group-hover:scale-[1.02] transition-transform" />
              </div>
            </div>
         </div>
         <div className="absolute inset-0 bg-gradient-to-l from-background via-transparent to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

// 3.5 Ciclo Operacional (New)
const Slide_Ciclo = ({ lang }: { lang: 'pt' | 'en' }) => {
  const t = translations[lang].ciclo;
  const icons = [Car, ClipboardCheck, Wrench, Sparkles, Camera, Megaphone];
  
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-background relative overflow-hidden">
       <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-y-1/2" />
       
       <div className="text-center mb-16 relative z-10">
         <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">{t.tag}</span>
         <h2 className="text-4xl lg:text-5xl font-display font-bold text-white">
           {t.title}
         </h2>
         <p className="text-lg text-slate-400 mt-4 max-w-2xl mx-auto">
           {t.desc}
         </p>
       </div>

       <div className="flex w-full max-w-7xl justify-between items-center relative z-10 px-8">
          {t.steps.map((step, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="flex flex-col items-center group relative">
                 {i < 5 && (
                   <div className="absolute top-8 left-1/2 w-[200%] h-0.5 bg-gradient-to-r from-white/10 to-white/5 -z-10" />
                 )}
                 
                 <motion.div 
                   initial={{ scale: 0, opacity: 0 }}
                   animate={{ scale: 1, opacity: 1 }}
                   transition={{ delay: i * 0.15 }}
                   className="w-16 h-16 rounded-2xl bg-card border border-white/10 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(0,122,255,0.3)] transition-all duration-500 z-10"
                 >
                   <Icon className="w-8 h-8 text-white group-hover:text-primary transition-colors duration-300" />
                 </motion.div>
                 
                 <motion.div
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.5 + (i * 0.1) }}
                   className="text-center"
                 >
                   <h3 className="text-white font-bold mb-1">{step.label}</h3>
                   <p className="text-xs text-slate-500 uppercase tracking-wide">{step.sub}</p>
                 </motion.div>
                 
                 <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-bold text-slate-400">
                   {i + 1}
                 </div>
              </div>
            );
          })}
       </div>

       <motion.div 
         initial={{ opacity: 0, y: 30 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ delay: 1.5 }}
         className="mt-20 p-6 rounded-xl bg-white/5 border border-white/10 max-w-3xl w-full flex items-center gap-6"
       >
         <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
           <Repeat className="text-green-500 w-6 h-6" />
         </div>
         <div>
           <h4 className="text-white font-bold text-lg mb-1">{t.boxTitle}</h4>
           <p className="text-slate-400 text-sm leading-relaxed">
             {t.boxDesc}
           </p>
         </div>
       </motion.div>
    </div>
  );
};

// 4. Arquitetura (New)
const Slide4_Arquitetura = ({ lang }: { lang: 'pt' | 'en' }) => {
  const t = translations[lang].arquitetura;
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 lg:p-20 bg-background relative overflow-hidden">
       <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
       <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px] pointer-events-none" />

       <div className="mb-12 text-center relative z-10">
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block">{t.tag}</span>
          <h2 className="text-4xl lg:text-6xl font-display font-black text-white mb-4">{t.title}</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm">
             {t.desc}
          </p>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl relative z-10">
          {/* Frontend */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-card/40 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] shadow-xl group hover:border-primary/50 transition-all"
          >
             <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Layers className="text-primary w-6 h-6" />
             </div>
             <h3 className="text-xl font-bold text-white mb-4">{t.frontend}</h3>
             <ul className="space-y-3">
                {[
                  { name: "React 18 + TypeScript", desc: lang === 'pt' ? "Tipagem estrita e UI declarativa" : "Strict typing and declarative UI" },
                  { name: "Tailwind CSS", desc: lang === 'pt' ? "Estilização utilitária de alta performance" : "High-performance utility styling" },
                  { name: "Shadcn/UI + Radix", desc: lang === 'pt' ? "Componentes acessíveis e consistentes" : "Accessible and consistent components" },
                  { name: "Framer Motion", desc: lang === 'pt' ? "Animações fluidas de 60 FPS" : "Fluid 60 FPS animations" },
                  { name: "TanStack Query", desc: lang === 'pt' ? "Gerenciamento de estado e cache" : "State and cache management" }
                ].map((item, i) => (
                  <li key={i} className="flex flex-col">
                     <span className="text-white text-sm font-bold">{item.name}</span>
                     <span className="text-slate-500 text-[10px] uppercase">{item.desc}</span>
                  </li>
                ))}
             </ul>
          </motion.div>

          {/* Backend */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-card/40 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] shadow-xl group hover:border-secondary/50 transition-all"
          >
             <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Cpu className="text-secondary w-6 h-6" />
             </div>
             <h3 className="text-xl font-bold text-white mb-4">{t.backend}</h3>
             <ul className="space-y-3">
                {[
                  { name: "Node.js + Express", desc: lang === 'pt' ? "Runtime assíncrono e escalável" : "Asynchronous and scalable runtime" },
                  { name: "Drizzle ORM", desc: lang === 'pt' ? "Type-safe SQL e performance máxima" : "Type-safe SQL and maximum performance" },
                  { name: "Passport.js", desc: lang === 'pt' ? "Autenticação segura e robusta" : "Secure and robust authentication" },
                  { name: "Zod", desc: lang === 'pt' ? "Validação de dados em tempo de execução" : "Runtime data validation" },
                  { name: "Socket.io", desc: lang === 'pt' ? "Comunicação real-time bidirecional" : "Real-time bidirectional communication" }
                ].map((item, i) => (
                  <li key={i} className="flex flex-col">
                     <span className="text-white text-sm font-bold">{item.name}</span>
                     <span className="text-slate-500 text-[10px] uppercase">{item.desc}</span>
                  </li>
                ))}
             </ul>
          </motion.div>

          {/* Infra & DB */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-card/40 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] shadow-xl group hover:border-green-500/50 transition-all"
          >
             <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Database className="text-green-500 w-6 h-6" />
             </div>
             <h3 className="text-xl font-bold text-white mb-4">{t.infra}</h3>
             <ul className="space-y-3">
                {[
                  { name: "PostgreSQL (Railway)", desc: lang === 'pt' ? "Banco de dados relacional de alta escala" : "High-scale relational database" },
                  { name: "Multi-Tenancy", desc: lang === 'pt' ? "Isolamento lógico total por empresa" : "Total logical isolation per company" },
                  { name: "Railway Hosting", desc: lang === 'pt' ? "Infraestrutura Cloud CI/CD moderna" : "Modern Cloud CI/CD infrastructure" },
                  { name: "OpenAI API", desc: lang === 'pt' ? "Inteligência Artificial generativa" : "Generative AI" },
                  { name: "SSL/TLS Everywhere", desc: lang === 'pt' ? "Criptografia de ponta a ponta" : "End-to-end encryption" }
                ].map((item, i) => (
                  <li key={i} className="flex flex-col">
                     <span className="text-white text-sm font-bold">{item.name}</span>
                     <span className="text-slate-500 text-[10px] uppercase">{item.desc}</span>
                  </li>
                ))}
             </ul>
          </motion.div>
       </div>

       {/* Code Organization */}
       <motion.div 
         initial={{ y: 20, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ delay: 0.3 }}
         className="mt-8 w-full max-w-7xl bg-black/40 backdrop-blur-md border border-white/5 p-6 rounded-2xl flex items-center justify-between"
       >
          <div className="flex items-center gap-4">
             <div className="p-2 bg-blue-500/10 rounded-lg">
                <Code2 className="text-blue-500 w-5 h-5" />
             </div>
             <div>
                <p className="text-white font-bold text-sm">
                  {lang === 'pt' ? "Arquitetura de Código Limpo" : "Clean Code Architecture"}
                </p>
                <p className="text-slate-500 text-[10px] uppercase">
                  {lang === 'pt' ? "Padronização seguindo princípios SOLID e DRY" : "Standardization following SOLID and DRY principles"}
                </p>
             </div>
          </div>
          <div className="flex gap-4 text-[10px] font-mono text-slate-400">
             <span className="bg-white/5 px-3 py-1 rounded">/shared/schema.ts</span>
             <span className="bg-white/5 px-3 py-1 rounded">/server/routes.ts</span>
             <span className="bg-white/5 px-3 py-1 rounded">/client/src/pages</span>
          </div>
       </motion.div>
    </div>
  );
};

// 5. Funcionalidades (Old Style as requested)
const Slide5_Funcionalidades = ({ onImageClick, lang }: { onImageClick: (src: string) => void, lang: 'pt' | 'en' }) => {
  const [activeFeature, setActiveFeature] = useState(-1);
  const t = translations[lang].funcionalidades;

  const features = [
    { 
      title: lang === 'pt' ? "Gestão de Veículos (Kanban)" : "Vehicle Management (Kanban)", 
      desc: lang === 'pt' 
        ? "Visualize e organize todo o seu estoque através de um quadro Kanban intuitivo e interativo. Arraste e solte cartões de veículos entre estágios personalizáveis como 'Em Preparação', 'Disponível', 'Em Negociação', 'Reservado' e 'Vendido'. Tenha uma visão panorâmica e clara do fluxo de entrada e saída, identifique gargalos operacionais na preparação (ex: demora na funilaria) e saiba exatamente onde cada carro está no funil de vendas a qualquer momento, eliminando a necessidade de perguntar para a equipe."
        : "Visualize and organize your entire inventory through an intuitive and interactive Kanban board. Drag and drop vehicle cards between customizable stages like 'In Preparation', 'Available', 'In Negotiation', 'Reserved', and 'Sold'. Get a panoramic and clear view of the inflow and outflow, identify operational bottlenecks in preparation (e.g., bodywork delays), and know exactly where each car is in the sales funnel at any time, eliminating the need to ask the team."
    },
    { 
      title: lang === 'pt' ? "Controle de Custos Detalhado" : "Detailed Cost Control", 
      desc: lang === 'pt'
        ? "Acabe com a ilusão de lucro. Registre cada centavo investido no veículo, desde o valor de compra até a preparação final. Lance custos de funilaria, mecânica, peças, lavagem, comissões de compra e taxas de despachante vinculados diretamente ao chassi do carro. O sistema soma tudo automaticamente, permitindo que você visualize o Custo Total real do veículo e a Margem de Contribuição líquida exata no momento da venda, evitando prejuízos disfarçados."
        : "End the illusion of profit. Record every cent invested in the vehicle, from the purchase price to final preparation. Post costs for bodywork, mechanics, parts, washing, purchase commissions, and dispatcher fees linked directly to the car's chassis. The system automatically sums everything, allowing you to visualize the real Total Cost of the vehicle and the exact net Contribution Margin at the time of sale, avoiding disguised losses."
    },
    { 
      title: lang === 'pt' ? "Vendas e Comissões Automatizadas" : "Automated Sales & Commissions", 
      desc: lang === 'pt'
        ? "Formalize vendas com rapidez e segurança. O sistema registra a venda e calcula comissões automaticamente. Configure regras de comissão flexíveis (porcentagem, valor fixo, escalonada) para vendedores, gerentes e captadores/parceiros. O cálculo é feito automaticamente no fechamento da venda, gerando um extrato financeiro de comissões a pagar transparente, eliminando planilhas paralelas, erros de cálculo e disputas com a equipe comercial no final do mês."
        : "Formalize sales quickly and securely. The system records the sale and calculates commissions automatically. Set up flexible commission rules (percentage, fixed amount, tiered) for salespeople, managers, and scouts/partners. Calculation is done automatically upon closing the sale, generating a transparent financial statement of commissions payable, eliminating parallel spreadsheets, calculation errors, and disputes with the sales team at the end of the month."
    },
    { 
      title: lang === 'pt' ? "Gestão Profissional de Garantia" : "Professional Warranty Management", 
      desc: lang === 'pt'
        ? "Controle total sobre veículos que retornam para garantia. Registre o problema reportado pelo cliente, o diagnóstico da oficina e os custos de reparo (peças e mão de obra). O sistema calcula automaticamente o gasto total com garantias por veículo e por período, permitindo identificar quais modelos ou fornecedores geram mais prejuízo pós-venda, protegendo a margem real da loja."
        : "Total control over vehicles returning for warranty. Record the problem reported by the customer, the workshop diagnosis, and the repair costs (parts and labor). The system automatically calculates the total warranty expenditure per vehicle and per period, allowing you to identify which models or suppliers generate more post-sales loss, protecting the store's real margin."
    },
    { 
      title: lang === 'pt' ? "Observações Internas Centralizadas" : "Centralized Internal Notes", 
      desc: lang === 'pt'
        ? "Elimine a comunicação descentralizada e perdida no WhatsApp. Adicione notas internas sigilosas vinculadas a cada veículo ou cliente que apenas a equipe autorizada pode ver. Registre detalhes cruciais como 'pneu precisa trocar antes da entrega', 'cliente prefere contato à tarde', 'documento pendente no despachante' ou 'avaliação de troca pendente'. Centralize a inteligência da operação em um único lugar acessível a todos os envolvidos."
        : "Eliminate decentralized and lost communication on WhatsApp. Add confidential internal notes linked to each vehicle or customer that only authorized staff can see. Record crucial details like 'tire needs changing before delivery', 'customer prefers contact in the afternoon', 'document pending at the dispatcher', or 'trade-in appraisal pending'. Centralize operational intelligence in a single place accessible to all involved."
    },
    { 
      title: lang === 'pt' ? "Financeiro Integrado (Contas a Pagar/Receber)" : "Integrated Finance (A/P & A/R)", 
      desc: lang === 'pt'
        ? "Integração total e automática entre operação e financeiro. Ao registrar uma compra de veículo ou lançar um custo de reparo, o contas a pagar é alimentado automaticamente. Ao fechar uma venda, o contas a receber é gerado com as parcelas, datas de vencimento e formas de pagamento corretas. Controle seu fluxo de caixa previsto e realizado, inadimplência e projeção financeira sem precisar lançar a mesma informação duas vezes em sistemas diferentes."
        : "Total and automatic integration between operations and finance. When recording a vehicle purchase or posting a repair cost, accounts payable is automatically fed. Upon closing a sale, accounts receivable is generated with the correct installments, due dates, and payment methods. Control your forecasted and realized cash flow, delinquency, and financial projection without needing to enter the same information twice in different systems."
    },
    { 
      title: lang === 'pt' ? "CRM e Gestão de Leads" : "CRM & Lead Management", 
      desc: lang === 'pt'
        ? "Centralize todos os seus leads vindos de portais (Webmotors, OLX), site próprio e redes sociais (Instagram, Facebook) em um único pipeline de vendas organizado. Distribua leads automaticamente para os vendedores (roleta), agende tarefas de contato, registre todo o histórico de conversas e acompanhe a taxa de conversão por canal e por vendedor. Garanta que nenhum cliente fique sem resposta e aumente suas vendas recuperando contatos antigos."
        : "Centralize all your leads from portals (Webmotors, OLX), your own website, and social networks (Instagram, Facebook) into a single organized sales pipeline. Automatically distribute leads to salespeople (round-robin), schedule contact tasks, record the entire conversation history, and track conversion rates by channel and salesperson. Ensure no customer is left without a response and increase your sales by recovering old contacts."
    },
    { 
      title: lang === 'pt' ? "Follow-ups Inteligentes" : "Intelligent Follow-ups", 
      desc: lang === 'pt'
        ? "O sistema trabalha proativamente para você. Crie lembretes automáticos e cadências de contato para não deixar o cliente esfriar. Se um cliente disse 'me liga dia 10', o sistema vai te cobrar e notificar o vendedor. Mantenha o relacionamento ativo com quem já comprou para estimular futuras trocas, revisões ou indicações. Transforme o pós-venda em uma nova fonte de receita recorrente."
        : "The system works proactively for you. Create automatic reminders and contact cadences to keep the customer from cooling off. If a customer said 'call me on the 10th', the system will remind you and notify the salesperson. Keep the relationship active with those who have already bought to stimulate future trade-ins, service, or referrals. Turn after-sales into a new source of recurring revenue."
    },
    { 
      title: lang === 'pt' ? "IA (VeloBot) - Assistente Virtual" : "AI (VeloBot) - Virtual Assistant", 
      desc: lang === 'pt'
        ? "Potencialize sua equipe com Inteligência Artificial. O VeloBot é seu assistente virtual disponível 24/7. Ele gera descrições de anúncios completas, persuasivas e otimizadas para SEO para cada veículo com um único clique, economizando horas de digitação. Além disso, ele pode analisar dados do seu estoque para sugerir preços de venda baseados no mercado e responder dúvidas operacionais da equipe instantaneamente."
        : "Empower your team with Artificial Intelligence. VeloBot is your virtual assistant available 24/7. It generates complete, persuasive, and SEO-optimized ad descriptions for each vehicle with a single click, saving hours of typing. Additionally, it can analyze your inventory data to suggest selling prices based on the market and answer the team's operational questions instantly."
    },
    { 
      title: lang === 'pt' ? "Dashboard de Indicadores (BI)" : "Indicator Dashboard (BI)", 
      desc: lang === 'pt'
        ? "Tome decisões estratégicas baseadas em dados reais, não em intuição. Acompanhe em tempo real indicadores chave de desempenho (KPIs) em painéis visuais. Monitore o Ticket Médio, Giro de Estoque, Tempo Médio de Pátio, Carros parados há mais de 60 dias, Lucratividade por Venda e Performance Financeira. Uma visão de 'piloto de avião' para o dono da revenda identificar tendências e corrigir rotas rapidamente."
        : "Make strategic decisions based on real data, not intuition. Track key performance indicators (KPIs) in real-time on visual dashboards. Monitor Average Ticket, Inventory Turnover, Average Yard Time, Cars sitting for over 60 days, Profitability per Sale, and Financial Performance. An 'airplane pilot' view for the dealership owner to identify trends and correct course quickly."
    },
    { 
      title: lang === 'pt' ? "Controle de Acesso e Permissões" : "Access Control & Permissions", 
      desc: lang === 'pt'
        ? "Segurança total para os dados do seu negócio. Defina perfis de acesso granulares (Vendedor, Gerente, Financeiro, Sócio). O vendedor vê apenas seus próprios leads e não tem acesso ao custo de compra ou lucro real dos carros. O gerente tem visão operacional mas não altera configurações sensíveis. Garanta que cada colaborador tenha acesso apenas ao necessário para sua função, protegendo informações estratégicas."
        : "Total security for your business data. Define granular access profiles (Salesperson, Manager, Finance, Partner). The salesperson sees only their own leads and has no access to the purchase cost or real profit of the cars. The manager has operational visibility but does not change sensitive settings. Ensure each employee has access only to what is necessary for their role, protecting strategic information."
    },
    { 
      title: lang === 'pt' ? "Configurações Personalizáveis" : "Customizable Settings", 
      desc: lang === 'pt'
        ? "O Velostock se adapta à sua loja, e não o contrário. Personalize o sistema para refletir a realidade do seu negócio. Cadastre suas próprias categorias de despesas, origens de leads, formas de pagamento e metas de vendas mensais. Configure os dados visuais da sua empresa para que saiam padronizados na plataforma."
        : "Velostock adapts to your store, not the other way around. Customize the system to reflect your business reality. Register your own expense categories, lead sources, payment methods, and monthly sales goals. Configure your company's visual data so they are standardized across the platform."
    },
    { 
      title: lang === 'pt' ? "Relatórios Gerenciais Avançados" : "Advanced Management Reports", 
      desc: lang === 'pt'
        ? "Vá além do básico com relatórios detalhados para análise profunda. Gere DRE (Demonstrativo de Resultado do Exercício) gerencial automático, Curva ABC de estoque (quais carros dão mais lucro ou giram mais rápido), Ranking de Vendas e Relatório de Custos por Categoria. Filtre por período, exporte tudo para PDF ou Excel para reuniões de diretoria e análise de performance."
        : "Go beyond the basics with detailed reports for deep analysis. Generate automatic management P&L, inventory ABC Curve (which cars yield more profit or turn faster), Sales Ranking, and Cost Report by Category. Filter by period, export everything to PDF or Excel for board meetings and performance analysis."
    },
    { 
      title: lang === 'pt' ? "Gestão e Armazenamento de Documentos" : "Document Management & Storage", 
      desc: lang === 'pt'
        ? "Mantenha a documentação organizada e acessível. Armazene documentos digitalizados como CRLV, laudos de vistoria, contratos e notas fiscais vinculados diretamente ao cadastro do veículo ou do cliente. Centralize o histórico documental da loja em um ambiente seguro na nuvem, eliminando arquivos físicos bagunçados e facilitando a consulta rápida por qualquer membro da equipe autorizado."
        : "Keep documentation organized and accessible. Store scanned documents like vehicle registrations, inspection reports, contracts, and invoices linked directly to the vehicle or customer record. Centralize the store's documentary history in a secure cloud environment, eliminating messy physical files and facilitating quick lookup by any authorized team member."
    },
    { 
      title: lang === 'pt' ? "Checklists Digitais (Entrada e Saída)" : "Digital Checklists (In/Out)", 
      desc: lang === 'pt'
        ? "Garanta a qualidade dos carros e evite prejuízos ocultos. Utilize checklists digitais padronizados via celular ou tablet na entrada do veículo (avaliação de compra) para registrar avarias e não deixar passar defeitos na negociação. Na saída (entrega), use o checklist para garantir e protocolar que o cliente recebeu tudo o que foi acordado (manual, chave reserva, estepe, acessórios), protegendo a loja contra reclamações infundadas futuras."
        : "Ensure car quality and avoid hidden losses. Use standardized digital checklists via phone or tablet upon vehicle entry (purchase appraisal) to record damages and not let defects pass during negotiation. Upon exit (delivery), use the checklist to ensure and document that the customer received everything agreed upon (manual, spare key, spare tire, accessories), protecting the store against future unfounded claims."
    }
  ];

  const screenshots = [
    { src: imgVeiculos, label: lang === 'pt' ? "Veículos" : "Vehicles" },
    { src: imgLead, label: lang === 'pt' ? "CRM & Leads" : "CRM & Leads" },
    { src: imgFinanceiro, label: lang === 'pt' ? "Financeiro" : "Finance" },
    { src: imgGarantia, label: lang === 'pt' ? "Garantia" : "Warranty" },
    { src: imgCustos, label: lang === 'pt' ? "Custos" : "Costs" },
    { src: imgRelatorio, label: lang === 'pt' ? "Relatórios" : "Reports" }
  ];

  return (
    <div className="w-full h-full flex flex-col p-8 lg:p-12 bg-background relative overflow-hidden">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-display font-bold text-white mb-2">{t.title}</h2>
        <p className="text-slate-400">{t.sub}</p>
      </div>

      <div className="flex flex-1 gap-8 overflow-hidden">
        {/* Left Side: Screenshots Grid */}
        <div className="w-1/2 overflow-y-auto pr-4 custom-scrollbar">
          <div className="grid grid-cols-1 gap-6">
            {screenshots.map((s, i) => (
              <div key={i} className="relative group cursor-zoom-in" onClick={() => onImageClick(s.src)}>
                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur px-2 py-1 rounded text-[10px] font-bold text-white z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  {s.label}
                </div>
                <img 
                  src={s.src} 
                  alt={s.label} 
                  className="w-full h-auto rounded-xl border border-white/5 shadow-2xl group-hover:border-primary/50 transition-all" 
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Accordion Style Features */}
        <div className="w-1/2 overflow-y-auto pr-4 custom-scrollbar">
          <div className="space-y-3">
            {features.map((f, i) => (
              <div 
                key={i}
                className={`border border-white/5 rounded-2xl transition-all duration-300 overflow-hidden ${activeFeature === i ? 'bg-white/5 border-primary/30' : 'bg-transparent hover:bg-white/5'}`}
              >
                <button 
                  onClick={() => setActiveFeature(activeFeature === i ? -1 : i)}
                  className="w-full p-5 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-2 h-2 rounded-full ${activeFeature === i ? 'bg-primary animate-pulse' : 'bg-green-500'}`} />
                    <span className={`font-bold transition-colors ${activeFeature === i ? 'text-white' : 'text-slate-400'}`}>
                      {f.title}
                    </span>
                  </div>
                  <ChevronRight size={16} className={`text-slate-600 transition-transform duration-300 ${activeFeature === i ? 'rotate-90 text-primary' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {activeFeature === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-14 pb-6"
                    >
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {f.desc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// 5. Admin Panel (New)
const Slide_Admin = ({ onImageClick, lang }: { onImageClick: (src: string) => void, lang: 'pt' | 'en' }) => {
  const t = translations[lang].admin;
  return (
    <div className="w-full h-full flex flex-col lg:flex-row bg-background overflow-hidden">
      <div className="w-full lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center z-10">
         <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4">{t.tag}</span>
         <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-8 leading-tight">
           {t.title}
         </h2>
         <p className="text-lg text-slate-300 mb-10 leading-relaxed">
           {t.desc}
         </p>
         
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 transition-all group">
              <TrendingUp className="text-primary w-6 h-6 mb-3 group-hover:scale-110 transition-transform" />
              <h4 className="text-white font-bold mb-1 text-sm uppercase tracking-wide">{t.metrics}</h4>
              <p className="text-slate-500 text-xs">{lang === 'pt' ? 'Monitore MRR, Churn e crescimento em tempo real.' : 'Monitor MRR, Churn and growth in real-time.'}</p>
           </div>
           <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-secondary/30 transition-all group">
              <Users className="text-secondary w-6 h-6 mb-3 group-hover:scale-110 transition-transform" />
              <h4 className="text-white font-bold mb-1 text-sm uppercase tracking-wide">{t.tenancy}</h4>
              <p className="text-slate-500 text-xs">{lang === 'pt' ? 'Gerencie contas, trials e permissões de empresas.' : 'Manage accounts, trials and company permissions.'}</p>
           </div>
           <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-yellow-500/30 transition-all group">
              <Zap className="text-yellow-500 w-6 h-6 mb-3 group-hover:scale-110 transition-transform" />
              <h4 className="text-white font-bold mb-1 text-sm uppercase tracking-wide">{t.invites}</h4>
              <p className="text-slate-500 text-xs">{lang === 'pt' ? 'Gere códigos de convite para expansão estratégica.' : 'Generate invite codes for strategic expansion.'}</p>
           </div>
           <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-red-500/30 transition-all group">
              <AlertTriangle className="text-red-500 w-6 h-6 mb-3 group-hover:scale-110 transition-transform" />
              <h4 className="text-white font-bold mb-1 text-sm uppercase tracking-wide">{t.bugs}</h4>
              <p className="text-slate-500 text-xs">{lang === 'pt' ? 'Suporte integrado e resolução rápida de problemas.' : 'Integrated support and fast problem resolution.'}</p>
           </div>
         </div>
      </div>
      
      <div className="w-full lg:w-1/2 bg-black/50 relative p-12 lg:p-24 flex items-center justify-center">
         <div className="relative w-full h-full flex flex-col items-center justify-center gap-8 z-10">
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="w-full max-w-md relative cursor-zoom-in"
              onClick={() => onImageClick(imgAdminDash)}
            >
              <div className="absolute -inset-4 bg-primary/20 blur-2xl rounded-full opacity-50" />
              <img 
                src={imgAdminDash} 
                alt="Admin Dashboard" 
                className="w-full h-auto rounded-2xl shadow-2xl border border-white/10 relative z-10"
              />
              <div className="absolute top-3 left-3 bg-black/70 backdrop-blur px-2 py-1 rounded text-xs font-bold text-white z-10">{lang === 'pt' ? 'Dashboard Admin' : 'Admin Dashboard'}</div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05, rotate: -1 }}
              className="w-full max-w-md relative cursor-zoom-in self-end lg:-mr-12"
              onClick={() => onImageClick(imgAdminBugs)}
            >
              <div className="absolute -inset-4 bg-secondary/20 blur-2xl rounded-full opacity-50" />
              <img 
                src={imgAdminBugs} 
                alt="Admin Bugs Support" 
                className="w-full h-auto rounded-2xl shadow-2xl border border-white/10 relative z-10"
              />
              <div className="absolute top-3 left-3 bg-black/70 backdrop-blur px-2 py-1 rounded text-xs font-bold text-white z-10">{lang === 'pt' ? 'Suporte & Tickets' : 'Support & Tickets'}</div>
            </motion.div>
         </div>
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,122,255,0.1)_0%,transparent_100%)]" />
      </div>
    </div>
  );
};

// 6. Diferencial
const Slide6_Diferencial = ({ lang }: { lang: 'pt' | 'en' }) => {
  const t = translations[lang].diferencial;
  return (
    <div className="w-full h-full flex items-center justify-center p-12 lg:p-24 bg-background overflow-hidden relative">
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,122,255,0.05)_0%,transparent_70%)]" />
       
       <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
          <div className="space-y-8">
             <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">{t.tag}</span>
             <h2 className="text-5xl lg:text-6xl font-display font-black text-white leading-tight">
               {lang === 'pt' ? 'Por que o' : 'Why'}<br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Velostock?</span>
             </h2>
             <p className="text-xl text-slate-400 font-light leading-relaxed">
               {t.desc}
             </p>
             
             <div className="space-y-4">
                {[
                  t.ai,
                  t.process,
                  t.profit,
                  t.ux
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                      <CheckCircle className="text-green-500 w-3 h-3" />
                    </div>
                    <span className="text-slate-300">{text}</span>
                  </div>
                ))}
             </div>
          </div>
          
          <div className="bg-card border border-white/10 p-8 lg:p-12 rounded-[2.5rem] relative">
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
             
             <div className="space-y-10">
                <div className="relative">
                   <h3 className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em] mb-4 text-center">{t.efficiency}</h3>
                   <div className="grid grid-cols-2 gap-8 text-center mt-8">
                      <div className="space-y-2">
                        <div className="text-slate-500 font-bold text-xs uppercase tracking-widest">{t.traditional}</div>
                        <div className="text-4xl lg:text-5xl font-black text-slate-700">{t.low}</div>
                        <div className="text-[10px] text-slate-600 uppercase">{t.manual}</div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-primary font-bold text-xs uppercase tracking-widest">{t.withVelostock}</div>
                        <div className="text-4xl lg:text-5xl font-black text-white glow-text">{t.maximum}</div>
                        <div className="text-[10px] text-primary uppercase">{t.automated}</div>
                      </div>
                   </div>
                </div>
                
                <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                   <p className="text-slate-400 text-sm italic leading-relaxed text-center">
                     "{t.quote}"
                   </p>
                </div>
             </div>
          </div>
       </div>
    </div>
  );
};

// 7. Mercado
const Slide7_Mercado = ({ lang }: { lang: 'pt' | 'en' }) => {
  const t = translations[lang].mercado;
  return (
    <div className="w-full h-full flex flex-col lg:flex-row bg-background">
       <div className="w-full lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center bg-card relative z-10">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">{t.tag}</span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-8">
            {t.title}
          </h2>
          
          <div className="space-y-8">
             <div className="flex gap-6">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                   <Target className="text-primary w-8 h-8" />
                </div>
                <div>
                   <h4 className="text-white font-bold text-xl mb-2">{t.dealershipsTitle}</h4>
                   <p className="text-slate-400">{t.dealershipsDesc}</p>
                </div>
             </div>
             
             <div className="flex gap-6">
                <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center shrink-0">
                   <Users className="text-secondary w-8 h-8" />
                </div>
                <div>
                   <h4 className="text-white font-bold text-xl mb-2">{t.teamsTitle}</h4>
                   <p className="text-slate-400">{t.teamsDesc}</p>
                </div>
             </div>

             <div className="flex gap-6">
                <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center shrink-0">
                   <TrendingUp className="text-purple-500 w-8 h-8" />
                </div>
                <div>
                   <h4 className="text-white font-bold text-xl mb-2">{t.marketTitle}</h4>
                   <p className="text-slate-400">{t.marketDesc}</p>
                </div>
             </div>
          </div>
       </div>
       
       <div className="w-full lg:w-1/2 flex items-center justify-center p-12 bg-black relative">
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          
          <div className="relative z-10 text-center space-y-4">
             <div className="text-7xl font-display font-black text-white mb-2">45.000+</div>
             <div className="text-xl text-primary font-bold uppercase tracking-widest">{t.potential}</div>
             <div className="w-20 h-1 bg-white/20 mx-auto my-8" />
             <p className="text-slate-400 max-w-sm mx-auto">
               {t.footnote}
             </p>
          </div>
       </div>
    </div>
  );
};

// 8. Monetização
const Slide9_Monetizacao = ({ lang }: { lang: 'pt' | 'en' }) => {
  const t = translations[lang].monetizacao;
  const projectionData = [
    { name: lang === 'pt' ? "50 Lojas" : "50 Stores", clients: 50, monthly: 7450, annual: 89400 },
    { name: lang === 'pt' ? "100 Lojas" : "100 Stores", clients: 100, monthly: 14900, annual: 178800 },
    { name: lang === 'pt' ? "150 Lojas" : "150 Stores", clients: 150, monthly: 22350, annual: 268200 },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 lg:p-16 bg-background relative overflow-hidden">
       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
       
       <div className="text-center mb-12 relative z-10">
          <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-3 block">{t.tag}</span>
          <h2 className="text-4xl lg:text-5xl font-display font-black text-white mb-4">{t.title}</h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
       </div>
       
       <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 w-full max-w-7xl relative z-10 items-stretch">
          {/* Plan Details - 2 Columns */}
          <div className="lg:col-span-2 flex flex-col">
             <motion.div 
               initial={{ x: -30, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               className="bg-card/40 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden flex-1 group"
             >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-primary/30 transition-all" />
                <div className="relative z-10">
                   <div className="mb-6">
                      <h3 className="text-slate-400 font-bold text-xs uppercase mb-1 tracking-widest">{lang === 'pt' ? 'Plano VeloFull 2026' : 'VeloFull Plan 2026'}</h3>
                      <div className="flex items-baseline gap-2">
                         <span className="text-3xl text-white font-light">{lang === 'pt' ? 'R$' : '$'}</span>
                         <span className="text-6xl text-white font-black tracking-tighter">149</span>
                         <span className="text-slate-500 font-medium text-sm">{lang === 'pt' ? '/mês' : '/mo'}</span>
                      </div>
                   </div>
                   
                   <div className="space-y-4 mb-8">
                      {[
                        { text: lang === 'pt' ? "Usuários Ilimitados" : "Unlimited Users", desc: lang === 'pt' ? "Equipe completa conectada" : "Complete team connected" },
                        { text: lang === 'pt' ? "Veículos Ilimitados" : "Unlimited Vehicles", desc: lang === 'pt' ? "Gestão total de pátio" : "Total yard management" },
                        { text: lang === 'pt' ? "VeloBot IA Full" : "Full AI VeloBot", desc: lang === 'pt' ? "Automação de anúncios e preços" : "Ad and price automation" },
                        { text: lang === 'pt' ? "Suporte Premium" : "Premium Support", desc: lang === 'pt' ? "Apoio estratégico operacional" : "Operational strategic support" },
                        { text: lang === 'pt' ? "Ecossistema Multi-Tenant" : "Multi-Tenant Ecosystem", desc: lang === 'pt' ? "Dados 100% isolados e seguros" : "100% isolated and secure data" }
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <CheckCircle className="text-primary w-3 h-3" />
                          </div>
                          <div>
                             <p className="text-white font-bold text-xs leading-none mb-1">{item.text}</p>
                             <p className="text-slate-500 text-[10px] uppercase tracking-tighter">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                   </div>

                   <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-3">
                      {t.metrics.map((m, i) => (
                        <div key={i} className="flex justify-between text-xs">
                          <span className="text-slate-400">{m.label} ({m.desc})</span>
                          <span className="text-primary font-bold">{m.value}</span>
                        </div>
                      ))}
                   </div>
                </div>
             </motion.div>
          </div>
          
          {/* Projections - 3 Columns */}
          <div className="lg:col-span-3 flex flex-col space-y-6">
             <motion.div 
               initial={{ y: 30, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ delay: 0.2 }}
               className="bg-card/30 border border-white/5 p-8 rounded-[2.5rem] flex-1 relative overflow-hidden"
             >
                <div className="flex justify-between items-start mb-10">
                   <div>
                      <h4 className="text-white font-black text-xl uppercase tracking-tighter">
                        {t.projection}
                      </h4>
                      <p className="text-slate-500 text-[10px] uppercase font-bold tracking-[0.2em]">
                        {lang === 'pt' ? 'Projeção baseada em volume de clientes' : 'Projection based on customer volume'}
                      </p>
                   </div>
                   <TrendingUp className="text-primary w-6 h-6 animate-pulse" />
                </div>

                <div className="relative h-64 w-full mb-16">
                   <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={projectionData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                         <defs>
                            <linearGradient id="projGradient" x1="0" y1="0" x2="0" y2="1">
                               <stop offset="0%" stopColor="var(--primary)" stopOpacity={1} />
                               <stop offset="100%" stopColor="var(--secondary)" stopOpacity={1} />
                            </linearGradient>
                         </defs>
                         <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                         <XAxis 
                           dataKey="name" 
                           stroke="#475569" 
                           fontSize={10} 
                           fontWeight="bold"
                           axisLine={false}
                           tickLine={false}
                           dy={10}
                         />
                         <YAxis hide />
                         <Tooltip 
                           cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                           content={({ active, payload }) => {
                             if (active && payload && payload.length) {
                               return (
                                 <div className="bg-black/90 backdrop-blur-xl border border-white/10 p-3 rounded-xl shadow-2xl">
                                   <p className="text-primary font-black text-sm mb-1">{payload[0].payload.name}</p>
                                   <p className="text-white font-bold text-xs">{lang === 'pt' ? 'Faturamento Mensal:' : 'Monthly Revenue:'}</p>
                                   <p className="text-green-400 font-black text-lg">{lang === 'pt' ? 'R$' : '$'} {payload[0].payload.monthly.toLocaleString(lang === 'pt' ? 'pt-BR' : 'en-US')}</p>
                                 </div>
                               );
                             }
                             return null;
                           }}
                         />
                         <Bar 
                           dataKey="clients" 
                           fill="url(#projGradient)" 
                           radius={[12, 12, 0, 0]} 
                           animationDuration={2000}
                         >
                            {projectionData.map((entry, index) => (
                               <Cell key={`cell-${index}`} fillOpacity={0.5 + (index * 0.25)} />
                            ))}
                         </Bar>
                      </BarChart>
                   </ResponsiveContainer>
                   
                   {/* Values below chart */}
                   <div className="absolute -bottom-8 w-full flex justify-between px-4">
                      {projectionData.map((d, i) => (
                        <div key={i} className="text-center">
                           <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">{lang === 'pt' ? 'Faturamento Anual' : 'Annual Revenue'}</p>
                           <p className="text-sm font-black text-white bg-primary/20 px-4 py-2 rounded-full border border-primary/30 shadow-lg shadow-primary/10">
                             {lang === 'pt' ? 'R$' : '$'} {d.annual.toLocaleString(lang === 'pt' ? 'pt-BR' : 'en-US')}
                           </p>
                        </div>
                      ))}
                   </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-16">
                   <div className="p-5 rounded-2xl bg-primary/5 border border-primary/10">
                      <h5 className="text-primary font-black text-xs uppercase mb-2 tracking-widest">{lang === 'pt' ? 'Escalabilidade' : 'Scalability'}</h5>
                      <p className="text-slate-400 text-[11px] leading-relaxed">
                        {lang === 'pt' 
                          ? 'Infraestrutura SaaS permite margens superiores a 80% conforme o volume de clientes aumenta sem custos proporcionais.'
                          : 'SaaS infrastructure allows margins over 80% as customer volume increases without proportional costs.'}
                      </p>
                   </div>
                   <div className="p-5 rounded-2xl bg-secondary/5 border border-secondary/10">
                      <h5 className="text-secondary font-black text-xs uppercase mb-2 tracking-widest">{lang === 'pt' ? 'Retenção' : 'Retention'}</h5>
                      <p className="text-slate-400 text-[11px] leading-relaxed">
                        {lang === 'pt'
                          ? 'Sistema Core-Business (operacional + financeiro) cria alto custo de troca, garantindo LTV estendido.'
                          : 'Core-Business system (operational + financial) creates high switching costs, ensuring extended LTV.'}
                      </p>
                   </div>
                </div>
             </motion.div>
          </div>
       </div>
    </div>
  );
};

// 10. Desafios
const Slide10_Desafios = ({ lang }: { lang: 'pt' | 'en' }) => (
  <div className="w-full h-full flex items-center justify-center p-12 lg:p-24 bg-background">
     <div className="max-w-4xl w-full">
       <h2 className="text-4xl font-display font-bold text-white mb-12">
         {lang === 'pt' ? 'Nossos Desafios Atuais' : 'Our Current Challenges'}
       </h2>
       
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div className="bg-card p-8 rounded-2xl border-l-4 border-yellow-500">
           <h3 className="text-xl font-bold text-white mb-4">{lang === 'pt' ? 'Tecnologia' : 'Technology'}</h3>
           <p className="text-slate-300">
             {lang === 'pt'
               ? 'Escalar a infraestrutura de IA para processar milhares de leads simultaneamente sem perder a performance.'
               : 'Scaling AI infrastructure to process thousands of leads simultaneously without losing performance.'}
           </p>
         </div>
         <div className="bg-card p-8 rounded-2xl border-l-4 border-blue-500">
           <h3 className="text-xl font-bold text-white mb-4">{lang === 'pt' ? 'Comercial' : 'Commercial'}</h3>
           <p className="text-slate-300">
             {lang === 'pt'
               ? 'Atingir o CAC ideal e estruturar a máquina de vendas Outbound para atingir lojas fora dos grandes centros.'
               : 'Reaching the ideal CAC and structuring the Outbound sales machine to reach stores outside large centers.'}
           </p>
         </div>
         <div className="bg-card p-8 rounded-2xl border-l-4 border-purple-500">
           <h3 className="text-xl font-bold text-white mb-4">{lang === 'pt' ? 'Parcerias' : 'Partnerships'}</h3>
           <p className="text-slate-300">
             {lang === 'pt'
               ? 'Conectar com bancos e financeiras para integrar propostas de financiamento direto no checkout do sistema.'
               : 'Connecting with banks and financial institutions to integrate financing proposals directly into the system checkout.'}
           </p>
         </div>
         <div className="bg-card p-8 rounded-2xl border-l-4 border-green-500 flex items-center justify-center">
           <div className="text-center">
             <h3 className="text-2xl font-bold text-white mb-2">{lang === 'pt' ? 'Por que você?' : 'Why you?'}</h3>
             <p className="text-slate-400">
               {lang === 'pt'
                 ? 'Precisamos da sua expertise para superar essas barreiras.'
                 : 'We need your expertise to overcome these barriers.'}
             </p>
           </div>
         </div>
       </div>
     </div>
  </div>
);

// 11. Encerramento
const Slide11_Encerramento = ({ lang }: { lang: 'pt' | 'en' }) => (
  <div className="w-full h-full flex flex-col items-center justify-center bg-black relative overflow-hidden">
     <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-black to-secondary/20 animate-pulse-slow" />
     
     <motion.div 
       className="z-10 text-center space-y-8"
       initial={{ scale: 0.9, opacity: 0 }}
       animate={{ scale: 1, opacity: 1 }}
       transition={{ duration: 1 }}
     >
       <img 
         src={imgLogo} 
         alt="Velostock Logo" 
         className="w-32 h-32 mx-auto rounded-3xl shadow-glow mb-8 object-cover"
       />
       
       <h2 className="text-6xl lg:text-8xl font-display font-bold text-white tracking-tighter">
         {lang === 'pt' ? 'O Futuro é Agora.' : 'The Future is Now.'}
       </h2>
       
       <h1 className="text-4xl lg:text-6xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary tracking-widest">
         VELOSTOCK
       </h1>

       <p className="text-2xl text-slate-400 font-light max-w-2xl mx-auto">
         {lang === 'pt' ? 'Vamos acelerar o mercado automotivo juntos.' : 'Let\'s accelerate the automotive market together.'}
       </p>
       
       <div className="pt-12 flex flex-col items-center gap-4">
         <p className="text-slate-500">{lang === 'pt' ? 'Agende uma demo exclusiva' : 'Schedule an exclusive demo'}</p>
       </div>
     </motion.div>
  </div>
);


// --- Main Page ---

export default function PresentationPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [lang, setLang] = useState<'pt' | 'en'>('pt');
  const [, setLocation] = useLocation();

  // Components mapping
  const slides = [
    Slide1_Abertura,
    Slide2_Dor,
    Slide3_Solucao,
    Slide_Ciclo,
    Slide4_Arquitetura,
    Slide5_Funcionalidades,
    Slide_Admin,
    Slide6_Diferencial,
    Slide7_Mercado,
    Slide9_Monetizacao,
    Slide10_Desafios,
    Slide11_Encerramento
  ];

  const handleNext = () => setCurrentSlide((prev) => (prev + 1) % 12);
  const handlePrev = () => setCurrentSlide((prev) => (prev - 1 + 12) % 12);

  const toggleLang = () => setLang(prev => prev === 'pt' ? 'en' : 'pt');

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  const handleDownloadPPTX = () => {
    const pres = new pptxgen();

    // 1. Abertura
    let slide = pres.addSlide();
    slide.background = { color: "000000" };
    slide.addText("VELOSTOCK", { x: 1, y: 2, w: "80%", fontSize: 60, color: "FFFFFF", bold: true, fontFace: "Arial" });
    slide.addText(lang === 'pt' ? "Revolução na Gestão Automotiva" : "Automotive Management Revolution", { x: 1, y: 3, w: "80%", fontSize: 24, color: "CCCCCC", fontFace: "Arial" });
    slide.addText(lang === 'pt' ? "Gestão Operacional Inteligente. Não apenas controle de estoque." : "Intelligent Operational Management. Not just inventory control.", { x: 1, y: 4, w: "80%", fontSize: 18, color: "007AFF", fontFace: "Arial" });

    // 2. A Dor
    slide = pres.addSlide();
    slide.background = { color: "000000" };
    slide.addText(lang === 'pt' ? "O Problema: Caos da Gestão Tradicional" : "The Problem: Chaos of Traditional Management", { x: 0.5, y: 0.5, w: "90%", fontSize: 32, color: "FFFFFF", bold: true });
    
    slide.addText(lang === 'pt' ? "Descontrole Financeiro" : "Financial Loss of Control", { x: 1, y: 2, fontSize: 20, color: "FF3B30", bold: true });
    slide.addText(lang === 'pt' ? "Sem aprovação de custos, margens desconhecidas." : "Without cost approval, unknown margins.", { x: 1, y: 2.5, fontSize: 14, color: "CCCCCC" });
    
    slide.addText(lang === 'pt' ? "Processos Manuais" : "Manual Processes", { x: 5, y: 2, fontSize: 20, color: "FF3B30", bold: true });
    slide.addText(lang === 'pt' ? "Dependência de planilhas e cadernos." : "Dependence on spreadsheets and notebooks.", { x: 5, y: 2.5, fontSize: 14, color: "CCCCCC" });
    
    slide.addText(lang === 'pt' ? "Cegueira Operacional" : "Operational Blindness", { x: 3, y: 4, fontSize: 20, color: "FF3B30", bold: true });
    slide.addText(lang === 'pt' ? "Sem rastreio de onde os carros estão." : "No tracking of where the cars are.", { x: 3, y: 4.5, fontSize: 14, color: "CCCCCC" });

    // 3. Solução
    slide = pres.addSlide();
    slide.background = { color: "000000" };
    slide.addText(lang === 'pt' ? "A Solução: Velostock" : "The Solution: Velostock", { x: 0.5, y: 0.5, fontSize: 32, color: "FFFFFF", bold: true });
    slide.addText(lang === 'pt' ? "Ecossistema de Controle Total" : "Total Control Ecosystem", { x: 0.5, y: 1.2, fontSize: 24, color: "007AFF" });
    
    slide.addText(lang === 'pt' ? "1. Entrada & Preparação: Checklist digital e aprovação de custos." : "1. Entry & Preparation: Digital checklist and cost approval.", { x: 1, y: 2.5, w: "80%", fontSize: 16, color: "CCCCCC" });
    slide.addText(lang === 'pt' ? "2. Venda & Marketing: Anúncios automáticos e CRM." : "2. Sales & Marketing: Automatic ads and CRM.", { x: 1, y: 3.5, w: "80%", fontSize: 16, color: "CCCCCC" });
    slide.addText(lang === 'pt' ? "3. Pós-Venda & Financeiro: Gestão de garantia e DRE." : "3. After-Sales & Finance: Warranty management and DRE.", { x: 1, y: 4.5, w: "80%", fontSize: 16, color: "CCCCCC" });

    pres.writeFile({ fileName: `Apresentacao_Velostock_${lang.toUpperCase()}.pptx` });
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Disable slide navigation if image modal is open (Escape closes modal)
      if (selectedImage) {
        if (e.key === "Escape") setSelectedImage(null);
        return;
      }

      if (e.key === "ArrowRight" || e.key === " ") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "f") toggleFullscreen();
      if (e.key === "Escape" && isFullscreen) setIsFullscreen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide, isFullscreen, selectedImage]);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className={`relative w-full h-screen bg-background overflow-hidden font-sans ${isFullscreen ? 'fixed inset-0 z-[100]' : ''}`}>
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,1)_0%,rgba(3,7,18,1)_100%)]" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <ImageModal src={selectedImage} onClose={() => setSelectedImage(null)} />

      <header className="absolute top-0 left-0 w-full z-50 p-6 flex justify-between items-center pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4 pointer-events-auto"
        >
          <img src={imgLogo} alt="Logo" className="h-10 w-auto rounded shadow-lg border border-white/10" />
          <div className="h-6 w-px bg-white/10" />
          <span className="text-xs font-bold tracking-[0.3em] text-slate-500 uppercase">Apresentação Estratégica</span>
        </motion.div>

        <div className="flex items-center gap-2 pointer-events-auto">
          {currentSlide === 0 && (
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLang}
              className="bg-black/50 backdrop-blur border-white/10 hover:bg-white/10 text-white font-bold"
            >
              <Globe className="w-4 h-4 mr-2" />
              {translations[lang].langLabel}
            </Button>
          )}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleFullscreen}
            className="text-slate-400 hover:text-white"
          >
            {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
          </Button>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 z-[60] bg-white/5">
        <motion.div 
          className="h-full bg-gradient-to-r from-primary to-secondary"
          initial={{ width: 0 }}
          animate={{ width: `${((currentSlide + 1) / 12) * 100}%` }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        />
      </div>

      <main className="w-full h-full relative z-10 flex items-center justify-center pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 0.98, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 1.02, x: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full h-full"
          >
            <CurrentSlideComponent onImageClick={setSelectedImage} lang={lang} />
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="absolute bottom-0 left-0 w-full z-50 p-6 flex justify-between items-end">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1">
             {slidesData.map((s, i) => (
               <button 
                 key={s.id} 
                 onClick={() => setCurrentSlide(i)}
                 className={`h-1.5 transition-all duration-500 rounded-full ${currentSlide === i ? 'w-8 bg-primary shadow-[0_0_10px_rgba(0,122,255,0.5)]' : 'w-1.5 bg-white/20 hover:bg-white/40'}`}
               />
             ))}
          </div>
          <span className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">
            {lang === 'pt' ? 'Slide' : 'Slide'} {currentSlide + 1} / 12 — {slidesData[currentSlide].label}
          </span>
        </div>

        <div className="flex gap-3">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={handlePrev}
            className="bg-black/50 backdrop-blur border-white/10 hover:bg-white/10 text-white rounded-full w-12 h-12"
            data-testid="button-prev-slide"
          >
            <ChevronLeft size={24} />
          </Button>
          <Button 
            variant="default" 
            size="icon" 
            onClick={handleNext}
            className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 rounded-full w-12 h-12"
            data-testid="button-next-slide"
          >
            <ChevronRight size={24} />
          </Button>
        </div>
      </footer>
    </div>
  );
}
