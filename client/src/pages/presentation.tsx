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
const Slide1_Abertura = ({ onImageClick }: { onImageClick: (src: string) => void }) => (
  <div className="w-full h-full flex flex-col lg:flex-row relative z-10">
    <div className="w-full lg:w-1/2 h-full flex flex-col justify-center px-12 lg:px-24">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-secondary font-display font-bold tracking-widest uppercase text-sm mb-6 block glow-text">
          Revolução na Gestão Automotiva
        </span>
        <h1 className="text-5xl lg:text-7xl font-display font-black text-white leading-none mb-6 pr-4">
          VELO<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary pr-2">STOCK</span>
        </h1>
        <h2 className="text-2xl lg:text-3xl font-light text-slate-300 mb-8 border-l-4 border-primary pl-6 py-2">
          Gestão <strong className="text-white">Operacional</strong> Inteligente.<br/>
          Não apenas controle de estoque.
        </h2>
        
        <p className="text-slate-400 text-lg max-w-lg leading-relaxed mb-10">
          "Hoje, revendas perdem até 40% de eficiência tentando gerenciar operações complexas com planilhas e sistemas incompletos."
        </p>

        <div className="flex gap-4">
           <div className="px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
             <span className="text-sm font-medium text-white">Sistema Online</span>
           </div>
           <div className="px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-3">
             <BrainCircuit className="w-4 h-4 text-purple-400" />
             <span className="text-sm font-medium text-white">IA Integrada</span>
           </div>
        </div>
      </motion.div>
    </div>
    
    <div className="absolute lg:relative inset-0 lg:w-1/2 h-full overflow-hidden opacity-40 lg:opacity-100 mix-blend-normal">
       <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-background via-background/50 to-transparent z-10" />
       {/* Using actual dashboard image instead of generated concept */}
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

// 2. Dor do Mercado
const Slide2_Dor = () => (
  <div className="w-full h-full flex flex-col items-center justify-center p-12 lg:p-24 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-[100px] pointer-events-none" />
    
    <div className="text-center mb-16 z-10">
      <div className="inline-block px-4 py-1 rounded-full bg-red-500/10 text-red-400 font-bold text-xs tracking-wider mb-4 border border-red-500/20">
         O PROBLEMA
      </div>
      <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-4">
        O Caos da Gestão Tradicional
      </h2>
      <p className="text-xl text-slate-400">Quem sofre? Proprietários de revendas médias (20-200 carros).</p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-6xl z-10">
      {[
        { 
          title: "Descontrole Financeiro", 
          desc: "Sem aprovação de custos, as margens reais de lucro são desconhecidas. O dinheiro 'desaparece' em pequenos gastos.",
          icon: DollarSign
        },
        { 
          title: "Processos Manuais", 
          desc: "Dependência de planilhas, cadernos e WhatsApp descentralizado. Informação se perde e erros acontecem.",
          icon: LayoutDashboard
        },
        { 
          title: "Cegueira Operacional", 
          desc: "Onde está o carro X? O que falta fazer nele? Sem rastreio, a operação para e a venda atrasa.",
          icon: AlertTriangle
        }
      ].map((item, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 * i }}
          className="bg-card border border-white/5 p-8 rounded-2xl hover:border-red-500/30 transition-all hover:bg-white/5 group"
        >
          <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <item.icon className="text-red-500 w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
          <p className="text-slate-400 leading-relaxed text-sm">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

// 3. Solução
const Slide3_Solucao = ({ onImageClick }: { onImageClick: (src: string) => void }) => (
  <div className="w-full h-full flex flex-col lg:flex-row">
    <div className="w-full lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center bg-background z-10">
       <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">A SOLUÇÃO</span>
       <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-8">
         Velostock: O Ecossistema de Controle Total
       </h2>
       <p className="text-lg text-slate-300 mb-8 leading-relaxed">
         Uma plataforma única que centraliza operação, financeiro e vendas. Saímos do "apenas estocar" para "gerir o negócio".
       </p>
       
       <div className="space-y-6">
         <div className="flex items-start gap-4">
           <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mt-1 shrink-0">
             <span className="text-primary font-bold">1</span>
           </div>
           <div>
             <h4 className="text-white font-bold text-lg">Entrada & Preparação</h4>
             <p className="text-slate-400 text-sm">Checklist digital, fotos, aprovação de custos de reparo.</p>
           </div>
         </div>
         <div className="w-px h-8 bg-white/10 ml-4 my-2" />
         <div className="flex items-start gap-4">
           <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mt-1 shrink-0">
             <span className="text-primary font-bold">2</span>
           </div>
           <div>
             <h4 className="text-white font-bold text-lg">Venda & Marketing</h4>
             <p className="text-slate-400 text-sm">Anúncios automáticos, IA gerando textos, CRM integrado.</p>
           </div>
         </div>
         <div className="w-px h-8 bg-white/10 ml-4 my-2" />
         <div className="flex items-start gap-4">
           <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mt-1 shrink-0">
             <span className="text-primary font-bold">3</span>
           </div>
           <div>
             <h4 className="text-white font-bold text-lg">Pós-Venda & Financeiro</h4>
             <p className="text-slate-400 text-sm">Gestão de garantia, DRE em tempo real, comissões.</p>
           </div>
         </div>
       </div>
    </div>
    <div className="w-full lg:w-1/2 bg-black relative flex items-center justify-center overflow-hidden p-12">
       {/* Feature Showcase Grid */}
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

// 3.5 Ciclo Operacional (New)
const Slide_Ciclo = () => (
  <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-background relative overflow-hidden">
     {/* Background decorative elements */}
     <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-y-1/2" />
     
     <div className="text-center mb-16 relative z-10">
       <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">FLUXO INTELIGENTE</span>
       <h2 className="text-4xl lg:text-5xl font-display font-bold text-white">
         O Ciclo da Revenda
       </h2>
       <p className="text-lg text-slate-400 mt-4 max-w-2xl mx-auto">
         Acompanhe cada etapa da jornada do veículo, desde a entrada até a venda, com controle total em cada fase.
       </p>
     </div>

     <div className="flex w-full max-w-7xl justify-between items-center relative z-10 px-8">
        {[
          { icon: Car, label: "Chegada", sub: "Cadastro Inicial" },
          { icon: ClipboardCheck, label: "Vistoria", sub: "Checklist Entrada" },
          { icon: Wrench, label: "Revisão", sub: "Mecânica/Peças" },
          { icon: Sparkles, label: "Estética", sub: "Higienização" },
          { icon: Camera, label: "Marketing", sub: "Fotos/Anúncios" },
          { icon: Megaphone, label: "Venda", sub: "Apresentação" }
        ].map((step, i) => (
          <div key={i} className="flex flex-col items-center group relative">
             {/* Connector Line */}
             {i < 5 && (
               <div className="absolute top-8 left-1/2 w-[200%] h-0.5 bg-gradient-to-r from-white/10 to-white/5 -z-10" />
             )}
             
             <motion.div 
               initial={{ scale: 0, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               transition={{ delay: i * 0.15 }}
               className="w-16 h-16 rounded-2xl bg-card border border-white/10 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(0,122,255,0.3)] transition-all duration-500 z-10"
             >
               <step.icon className="w-8 h-8 text-white group-hover:text-primary transition-colors duration-300" />
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
             
             {/* Step Number Bubble */}
             <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-bold text-slate-400">
               {i + 1}
             </div>
          </div>
        ))}
     </div>

     {/* Cycle explanation box */}
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
         <h4 className="text-white font-bold text-lg mb-1">Ciclo Integrado</h4>
         <p className="text-slate-400 text-sm leading-relaxed">
           No Velostock, cada etapa libera automaticamente a próxima. O carro não vai para o pátio sem vistoria, e não é anunciado sem revisão de custos. Isso garante que nenhum veículo seja vendido com prejuízo invisível.
         </p>
       </div>
     </motion.div>
  </div>
);

// 4. Arquitetura (New)
const Slide4_Arquitetura = () => (
  <div className="w-full h-full flex flex-col items-center justify-center p-8 lg:p-20 bg-background relative overflow-hidden">
     <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
     <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px] pointer-events-none" />

     <div className="mb-12 text-center relative z-10">
        <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block">STACK TECNOLÓGICA</span>
        <h2 className="text-4xl lg:text-6xl font-display font-black text-white mb-4">Engenharia de Alta Performance</h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm">
           Desenvolvido com tecnologias modernas para garantir escalabilidade horizontal, 
           segurança de dados e uma experiência de usuário fluida.
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
           <h3 className="text-xl font-bold text-white mb-4">Frontend & Interface</h3>
           <ul className="space-y-3">
              {[
                { name: "React 18 + TypeScript", desc: "Tipagem estrita e UI declarativa" },
                { name: "Tailwind CSS", desc: "Estilização utilitária de alta performance" },
                { name: "Shadcn/UI + Radix", desc: "Componentes acessíveis e consistentes" },
                { name: "Framer Motion", desc: "Animações fluidas de 60 FPS" },
                { name: "TanStack Query", desc: "Gerenciamento de estado e cache" }
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
           <h3 className="text-xl font-bold text-white mb-4">Backend & APIs</h3>
           <ul className="space-y-3">
              {[
                { name: "Node.js + Express", desc: "Runtime assíncrono e escalável" },
                { name: "Drizzle ORM", desc: "Type-safe SQL e performance máxima" },
                { name: "Passport.js", desc: "Autenticação segura e robusta" },
                { name: "Zod", desc: "Validação de dados em tempo de execução" },
                { name: "Socket.io", desc: "Comunicação real-time bidirecional" }
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
           <h3 className="text-xl font-bold text-white mb-4">Dados & Infra</h3>
           <ul className="space-y-3">
              {[
                { name: "PostgreSQL (Railway)", desc: "Banco de dados relacional de alta escala" },
                { name: "Multi-Tenancy", desc: "Isolamento lógico total por empresa" },
                { name: "Railway Hosting", desc: "Infraestrutura Cloud CI/CD moderna" },
                { name: "OpenAI API", desc: "Inteligência Artificial generativa" },
                { name: "SSL/TLS Everywhere", desc: "Criptografia de ponta a ponta" }
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
              <p className="text-white font-bold text-sm">Arquitetura de Código Limpo</p>
              <p className="text-slate-500 text-[10px] uppercase">Padronização seguindo princípios SOLID e DRY</p>
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

// 5. Funcionalidades (Old Style as requested)
const Slide5_Funcionalidades = ({ onImageClick }: { onImageClick: (src: string) => void }) => {
  const [activeFeature, setActiveFeature] = useState(-1);

  const features = [
    { 
      title: "Gestão de Veículos (Kanban)", 
      desc: "Visualize e organize todo o seu estoque através de um quadro Kanban intuitivo e interativo. Arraste e solte cartões de veículos entre estágios personalizáveis como 'Em Preparação', 'Disponível', 'Em Negociação', 'Reservado' e 'Vendido'. Tenha uma visão panorâmica e clara do fluxo de entrada e saída, identifique gargalos operacionais na preparação (ex: demora na funilaria) e saiba exatamente onde cada carro está no funil de vendas a qualquer momento, eliminando a necessidade de perguntar para a equipe." 
    },
    { 
      title: "Controle de Custos Detalhado", 
      desc: "Acabe com a ilusão de lucro. Registre cada centavo investido no veículo, desde o valor de compra até a preparação final. Lance custos de funilaria, mecânica, peças, lavagem, comissões de compra e taxas de despachante vinculados diretamente ao chassi do carro. O sistema soma tudo automaticamente, permitindo que você visualize o Custo Total real do veículo e a Margem de Contribuição líquida exata no momento da venda, evitando prejuízos disfarçados." 
    },
    { 
      title: "Vendas e Comissões Automatizadas", 
      desc: "Formalize vendas com rapidez e segurança. O sistema registra a venda e calcula comissões automaticamente. Configure regras de comissão flexíveis (porcentagem, valor fixo, escalonada) para vendedores, gerentes e captadores/parceiros. O cálculo é feito automaticamente no fechamento da venda, gerando um extrato financeiro de comissões a pagar transparente, eliminando planilhas paralelas, erros de cálculo e disputas com a equipe comercial no final do mês." 
    },
    { 
      title: "Gestão Profissional de Garantia", 
      desc: "Controle total sobre veículos que retornam para garantia. Registre o problema reportado pelo cliente, o diagnóstico da oficina e os custos de reparo (peças e mão de obra). O sistema calcula automaticamente o gasto total com garantias por veículo e por período, permitindo identificar quais modelos ou fornecedores geram mais prejuízo pós-venda, protegendo a margem real da loja." 
    },
    { 
      title: "Observações Internas Centralizadas", 
      desc: "Elimine a comunicação descentralizada e perdida no WhatsApp. Adicione notas internas sigilosas vinculadas a cada veículo ou cliente que apenas a equipe autorizada pode ver. Registre detalhes cruciais como 'pneu precisa trocar antes da entrega', 'cliente prefere contato à tarde', 'documento pendente no despachante' ou 'avaliação de troca pendente'. Centralize a inteligência da operação em um único lugar acessível a todos os envolvidos." 
    },
    { 
      title: "Financeiro Integrado (Contas a Pagar/Receber)", 
      desc: "Integração total e automática entre operação e financeiro. Ao registrar uma compra de veículo ou lançar um custo de reparo, o contas a pagar é alimentado automaticamente. Ao fechar uma venda, o contas a receber é gerado com as parcelas, datas de vencimento e formas de pagamento corretas. Controle seu fluxo de caixa previsto e realizado, inadimplência e projeção financeira sem precisar lançar a mesma informação duas vezes em sistemas diferentes." 
    },
    { 
      title: "CRM e Gestão de Leads", 
      desc: "Centralize todos os seus leads vindos de portais (Webmotors, OLX), site próprio e redes sociais (Instagram, Facebook) em um único pipeline de vendas organizado. Distribua leads automaticamente para os vendedores (roleta), agende tarefas de contato, registre todo o histórico de conversas e acompanhe a taxa de conversão por canal e por vendedor. Garanta que nenhum cliente fique sem resposta e aumente suas vendas recuperando contatos antigos." 
    },
    { 
      title: "Follow-ups Inteligentes", 
      desc: "O sistema trabalha proativamente para você. Crie lembretes automáticos e cadências de contato para não deixar o cliente esfriar. Se um cliente disse 'me liga dia 10', o sistema vai te cobrar e notificar o vendedor. Mantenha o relacionamento ativo com quem já comprou para estimular futuras trocas, revisões ou indicações. Transforme o pós-venda em uma nova fonte de receita recorrente." 
    },
    { 
      title: "IA (VeloBot) - Assistente Virtual", 
      desc: "Potencialize sua equipe com Inteligência Artificial. O VeloBot é seu assistente virtual disponível 24/7. Ele gera descrições de anúncios completas, persuasivas e otimizadas para SEO para cada veículo com um único clique, economizando horas de digitação. Além disso, ele pode analisar dados do seu estoque para sugerir preços de venda baseados no mercado e responder dúvidas operacionais da equipe instantaneamente." 
    },
    { 
      title: "Dashboard de Indicadores (BI)", 
      desc: "Tome decisões estratégicas baseadas em dados reais, não em intuição. Acompanhe em tempo real indicadores chave de desempenho (KPIs) em painéis visuais. Monitore o Ticket Médio, Giro de Estoque, Tempo Médio de Pátio, Carros parados há mais de 60 dias, Lucratividade por Venda e Performance Financeira. Uma visão de 'piloto de avião' para o dono da revenda identificar tendências e corrigir rotas rapidamente." 
    },
    { 
      title: "Controle de Acesso e Permissões", 
      desc: "Segurança total para os dados do seu negócio. Defina perfis de acesso granulares (Vendedor, Gerente, Financeiro, Sócio). O vendedor vê apenas seus próprios leads e não tem acesso ao custo de compra ou lucro real dos carros. O gerente tem visão operacional mas não altera configurações sensíveis. Garanta que cada colaborador tenha acesso apenas ao necessário para sua função, protegendo informações estratégicas." 
    },
    { 
      title: "Configurações Personalizáveis", 
      desc: "O Velostock se adapta à sua loja, e não o contrário. Personalize o sistema para refletir a realidade do seu negócio. Cadastre suas próprias categorias de despesas, origens de leads, formas de pagamento e metas de vendas mensais. Configure os dados visuais da sua empresa para que saiam padronizados na plataforma." 
    },
    { 
      title: "Relatórios Gerenciais Avançados", 
      desc: "Vá além do básico com relatórios detalhados para análise profunda. Gere DRE (Demonstrativo de Resultado do Exercício) gerencial automático, Curva ABC de estoque (quais carros dão mais lucro ou giram mais rápido), Ranking de Vendas e Relatório de Custos por Categoria. Filtre por período, exporte tudo para PDF ou Excel para reuniões de diretoria e análise de performance." 
    },
    { 
      title: "Gestão e Armazenamento de Documentos", 
      desc: "Mantenha a documentação organizada e acessível. Armazene documentos digitalizados como CRLV, laudos de vistoria, contratos e notas fiscais vinculados diretamente ao cadastro do veículo ou do cliente. Centralize o histórico documental da loja em um ambiente seguro na nuvem, eliminando arquivos físicos bagunçados e facilitando a consulta rápida por qualquer membro da equipe autorizado." 
    },
    { 
      title: "Checklists Digitais (Entrada e Saída)", 
      desc: "Garanta a qualidade dos carros e evite prejuízos ocultos. Utilize checklists digitais padronizados via celular ou tablet na entrada do veículo (avaliação de compra) para registrar avarias e não deixar passar defeitos na negociação. Na saída (entrega), use o checklist para garantir e protocolar que o cliente recebeu tudo o que foi acordado (manual, chave reserva, estepe, acessórios), protegendo a loja contra reclamações infundadas futuras." 
    }
  ];

  const screenshots = [
    { src: imgVeiculos, label: "Veículos" },
    { src: imgLead, label: "CRM & Leads" },
    { src: imgFinanceiro, label: "Financeiro" },
    { src: imgGarantia, label: "Garantia" },
    { src: imgCustos, label: "Custos" },
    { src: imgRelatorio, label: "Relatórios" }
  ];

  return (
    <div className="w-full h-full flex flex-col p-8 lg:p-12 bg-background relative overflow-hidden">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-display font-bold text-white mb-2">15 Funcionalidades Principais</h2>
        <p className="text-slate-400">O stack completo para a operação. Clique para expandir os detalhes.</p>
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
const Slide_Admin = ({ onImageClick }: { onImageClick: (src: string) => void }) => (
  <div className="w-full h-full flex flex-col lg:flex-row bg-background overflow-hidden">
    <div className="w-full lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center z-10">
       <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4">CONTROLE MESTRE</span>
       <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-8 leading-tight">
         Painel Administrativo: O Backoffice do SaaS
       </h2>
       <p className="text-lg text-slate-300 mb-10 leading-relaxed">
         Uma visão completa para os gestores da plataforma. Controle MRR, gerencie clientes, bugs e infraestrutura em um só lugar.
       </p>
       
       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
         <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 transition-all group">
            <TrendingUp className="text-primary w-6 h-6 mb-3 group-hover:scale-110 transition-transform" />
            <h4 className="text-white font-bold mb-1 text-sm uppercase tracking-wide">Métricas Globais</h4>
            <p className="text-slate-500 text-xs">Monitore MRR, Churn e crescimento em tempo real.</p>
         </div>
         <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-secondary/30 transition-all group">
            <Users className="text-secondary w-6 h-6 mb-3 group-hover:scale-110 transition-transform" />
            <h4 className="text-white font-bold mb-1 text-sm uppercase tracking-wide">Gestão de Tenancy</h4>
            <p className="text-slate-500 text-xs">Gerencie contas, trials e permissões de empresas.</p>
         </div>
         <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-yellow-500/30 transition-all group">
            <Zap className="text-yellow-500 w-6 h-6 mb-3 group-hover:scale-110 transition-transform" />
            <h4 className="text-white font-bold mb-1 text-sm uppercase tracking-wide">Convites Controlados</h4>
            <p className="text-slate-500 text-xs">Gere códigos de convite para expansão estratégica.</p>
         </div>
         <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-red-500/30 transition-all group">
            <AlertTriangle className="text-red-500 w-6 h-6 mb-3 group-hover:scale-110 transition-transform" />
            <h4 className="text-white font-bold mb-1 text-sm uppercase tracking-wide">Central de Bugs</h4>
            <p className="text-slate-500 text-xs">Suporte integrado e resolução rápida de problemas.</p>
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
            <div className="absolute top-3 left-3 bg-black/70 backdrop-blur px-2 py-1 rounded text-xs font-bold text-white z-10">Dashboard Admin</div>
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
            <div className="absolute top-3 left-3 bg-black/70 backdrop-blur px-2 py-1 rounded text-xs font-bold text-white z-10">Suporte & Tickets</div>
          </motion.div>
       </div>
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,122,255,0.1)_0%,transparent_100%)]" />
    </div>
  </div>
);

// 6. Diferencial
const Slide6_Diferencial = () => (
  <div className="w-full h-full flex items-center justify-center p-12 lg:p-24 bg-background overflow-hidden relative">
     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,122,255,0.05)_0%,transparent_70%)]" />
     
     <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
        <div className="space-y-8">
           <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">DIFERENCIAL</span>
           <h2 className="text-5xl lg:text-6xl font-display font-black text-white leading-tight">
             Por que o<br/>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Velostock?</span>
           </h2>
           <p className="text-xl text-slate-400 font-light leading-relaxed">
             Não somos apenas mais um software de estoque. Somos a inteligência operacional da sua loja.
           </p>
           
           <div className="space-y-4">
              {[
                "IA Integrada que entende o contexto do veículo.",
                "Gestão baseada em processos (Kanban), não em listas.",
                "Foco absoluto no lucro real, não apenas faturamento.",
                "Interface moderna e ultra-rápida inspirada no Linear."
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
                 <h3 className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em] mb-4 text-center">Eficiência Operacional</h3>
                 <div className="grid grid-cols-2 gap-8 text-center mt-8">
                    <div className="space-y-2">
                      <div className="text-slate-500 font-bold text-xs uppercase tracking-widest">Tradicional</div>
                      <div className="text-4xl lg:text-5xl font-black text-slate-700">Baixa</div>
                      <div className="text-[10px] text-slate-600 uppercase">Processos Manuais</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-primary font-bold text-xs uppercase tracking-widest">Com Velostock</div>
                      <div className="text-4xl lg:text-5xl font-black text-white glow-text">Máxima</div>
                      <div className="text-[10px] text-primary uppercase">Fluxo Automatizado</div>
                    </div>
                 </div>
              </div>
              
              <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                 <p className="text-slate-400 text-sm italic leading-relaxed text-center">
                   "A Velostock automatiza tarefas operacionais repetitivas, devolvendo tempo estratégico para a equipe focar no que realmente importa: fechar vendas."
                 </p>
              </div>
           </div>
        </div>
     </div>
  </div>
);

// 7. Mercado
const Slide7_Mercado = () => (
  <div className="w-full h-full flex flex-col lg:flex-row bg-background">
     <div className="w-full lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center bg-card relative z-10">
        <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">MERCADO & PÚBLICO</span>
        <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-8">
          Quem é o nosso cliente?
        </h2>
        
        <div className="space-y-8">
           <div className="flex gap-6">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                 <Target className="text-primary w-8 h-8" />
              </div>
              <div>
                 <h4 className="text-white font-bold text-xl mb-2">Revendas Independentes</h4>
                 <p className="text-slate-400">Lojas multimarcas médias (20-200 carros no pátio) que hoje operam no limite do caos administrativo.</p>
              </div>
           </div>
           
           <div className="flex gap-6">
              <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center shrink-0">
                 <Users className="text-secondary w-8 h-8" />
              </div>
              <div>
                 <h4 className="text-white font-bold text-xl mb-2">Equipes em Crescimento</h4>
                 <p className="text-slate-400">Lojas que precisam profissionalizar processos para escalar sem aumentar o overhead administrativo.</p>
              </div>
           </div>

           <div className="flex gap-6">
              <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center shrink-0">
                 <TrendingUp className="text-purple-500 w-8 h-8" />
              </div>
              <div>
                 <h4 className="text-white font-bold text-xl mb-2">Mercado Gigantesco</h4>
                 <p className="text-slate-400">Só no Brasil existem +45.000 revendas ativas. Menos de 15% utilizam sistemas de gestão operacional real.</p>
              </div>
           </div>
        </div>
     </div>
     
     <div className="w-full lg:w-1/2 flex items-center justify-center p-12 bg-black relative">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        
        <div className="relative z-10 text-center space-y-4">
           <div className="text-7xl font-display font-black text-white mb-2">45.000+</div>
           <div className="text-xl text-primary font-bold uppercase tracking-widest">Revendas Potenciais</div>
           <div className="w-20 h-1 bg-white/20 mx-auto my-8" />
           <p className="text-slate-400 max-w-sm mx-auto">
             A maioria das lojas usa apenas "postadores" de anúncio. A Velostock entra no coração da operação.
           </p>
        </div>
     </div>
  </div>
);

// 8. Monetização
const Slide8_Monetizacao = () => {
  const projectionData = [
    { name: "50 Lojas", clients: 50, monthly: 7450, annual: 89400 },
    { name: "100 Lojas", clients: 100, monthly: 14900, annual: 178800 },
    { name: "150 Lojas", clients: 150, monthly: 22350, annual: 268200 },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 lg:p-16 bg-background relative overflow-hidden">
       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
       
       <div className="text-center mb-12 relative z-10">
          <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-3 block">PROJEÇÃO E MODELO DE NEGÓCIO 2026</span>
          <h2 className="text-4xl lg:text-5xl font-display font-black text-white mb-4">Escalabilidade & Receita</h2>
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
                      <h3 className="text-slate-400 font-bold text-xs uppercase mb-1 tracking-widest">Plano VeloFull 2026</h3>
                      <div className="flex items-baseline gap-2">
                         <span className="text-3xl text-white font-light">R$</span>
                         <span className="text-6xl text-white font-black tracking-tighter">149</span>
                         <span className="text-slate-500 font-medium text-sm">/mês</span>
                      </div>
                   </div>
                   
                   <div className="space-y-4 mb-8">
                      {[
                        { text: "Usuários Ilimitados", desc: "Equipe completa conectada" },
                        { text: "Veículos Ilimitados", desc: "Gestão total de pátio" },
                        { text: "VeloBot IA Full", desc: "Automação de anúncios e preços" },
                        { text: "Suporte Premium", desc: "Apoio estratégico operacional" },
                        { text: "Ecossistema Multi-Tenant", desc: "Dados 100% isolados e seguros" }
                      ].map((t, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <CheckCircle className="text-primary w-3 h-3" />
                          </div>
                          <div>
                             <p className="text-white font-bold text-xs leading-none mb-1">{t.text}</p>
                             <p className="text-slate-500 text-[10px] uppercase tracking-tighter">{t.desc}</p>
                          </div>
                        </div>
                      ))}
                   </div>

                   <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-3">
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-400">Churn Rate Médio (SaaS Ops)</span>
                        <span className="text-green-400 font-bold">~2%</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-400">CAC (Custo de Aquisição)</span>
                        <span className="text-blue-400 font-bold">Otimizado</span>
                      </div>
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
                      <h4 className="text-white font-black text-xl uppercase tracking-tighter">Metas de Crescimento 2026</h4>
                      <p className="text-slate-500 text-[10px] uppercase font-bold tracking-[0.2em]">Projeção baseada em volume de clientes</p>
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
                                   <p className="text-white font-bold text-xs">Faturamento Mensal:</p>
                                   <p className="text-green-400 font-black text-lg">R$ {payload[0].payload.monthly.toLocaleString('pt-BR')}</p>
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
                           <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">Faturamento Anual</p>
                           <p className="text-sm font-black text-white bg-primary/20 px-4 py-2 rounded-full border border-primary/30 shadow-lg shadow-primary/10">
                             R$ {d.annual.toLocaleString('pt-BR')}
                           </p>
                        </div>
                      ))}
                   </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-16">
                   <div className="p-5 rounded-2xl bg-primary/5 border border-primary/10">
                      <h5 className="text-primary font-black text-xs uppercase mb-2 tracking-widest">Escalabilidade</h5>
                      <p className="text-slate-400 text-[11px] leading-relaxed">Infraestrutura SaaS permite margens superiores a 80% conforme o volume de clientes aumenta sem custos proporcionais.</p>
                   </div>
                   <div className="p-5 rounded-2xl bg-secondary/5 border border-secondary/10">
                      <h5 className="text-secondary font-black text-xs uppercase mb-2 tracking-widest">Retenção</h5>
                      <p className="text-slate-400 text-[11px] leading-relaxed">Sistema Core-Business (operacional + financeiro) cria alto custo de troca, garantindo LTV estendido.</p>
                   </div>
                </div>
             </motion.div>
          </div>
       </div>
    </div>
  );
};

// 9. Desafios
const Slide9_Desafios = () => (
  <div className="w-full h-full flex items-center justify-center p-12 lg:p-24 bg-background">
     <div className="max-w-4xl w-full">
       <h2 className="text-4xl font-display font-bold text-white mb-12">Nossos Desafios Atuais</h2>
       
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div className="bg-card p-8 rounded-2xl border-l-4 border-yellow-500">
           <h3 className="text-xl font-bold text-white mb-4">Tecnologia</h3>
           <p className="text-slate-300">
             Escalar a infraestrutura de IA para processar milhares de leads simultaneamente sem perder a performance.
           </p>
         </div>
         <div className="bg-card p-8 rounded-2xl border-l-4 border-blue-500">
           <h3 className="text-xl font-bold text-white mb-4">Comercial</h3>
           <p className="text-slate-300">
             Atingir o CAC ideal e estruturar a máquina de vendas Outbound para atingir lojas fora dos grandes centros.
           </p>
         </div>
         <div className="bg-card p-8 rounded-2xl border-l-4 border-purple-500">
           <h3 className="text-xl font-bold text-white mb-4">Parcerias</h3>
           <p className="text-slate-300">
             Conectar com bancos e financeiras para integrar propostas de financiamento direto no checkout do sistema.
           </p>
         </div>
         <div className="bg-card p-8 rounded-2xl border-l-4 border-green-500 flex items-center justify-center">
           <div className="text-center">
             <h3 className="text-2xl font-bold text-white mb-2">Por que você?</h3>
             <p className="text-slate-400">Precisamos da sua expertise para superar essas barreiras.</p>
           </div>
         </div>
       </div>
     </div>
  </div>
);

// 10. Encerramento
const Slide10_Encerramento = () => (
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
         O Futuro é Agora.
       </h2>
       
       <h1 className="text-4xl lg:text-6xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary tracking-widest">
         VELOSTOCK
       </h1>

       <p className="text-2xl text-slate-400 font-light max-w-2xl mx-auto">
         Vamos acelerar o mercado automotivo juntos.
       </p>
       
       <div className="pt-12 flex flex-col items-center gap-4">
         <p className="text-slate-500">Agende uma demo exclusiva</p>
       </div>
     </motion.div>
  </div>
);


// --- Main Page ---

export default function PresentationPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
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
    Slide8_Monetizacao,
    Slide9_Desafios,
    Slide10_Encerramento
  ];

  const handleNext = () => setCurrentSlide((prev) => (prev + 1) % 12);
  const handlePrev = () => setCurrentSlide((prev) => (prev - 1 + 12) % 12);

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
    slide.addText("Revolução na Gestão Automotiva", { x: 1, y: 3, w: "80%", fontSize: 24, color: "CCCCCC", fontFace: "Arial" });
    slide.addText("Gestão Operacional Inteligente. Não apenas controle de estoque.", { x: 1, y: 4, w: "80%", fontSize: 18, color: "007AFF", fontFace: "Arial" });

    // 2. A Dor
    slide = pres.addSlide();
    slide.background = { color: "000000" };
    slide.addText("O Problema: Caos da Gestão Tradicional", { x: 0.5, y: 0.5, w: "90%", fontSize: 32, color: "FFFFFF", bold: true });
    
    slide.addText("Descontrole Financeiro", { x: 1, y: 2, fontSize: 20, color: "FF3B30", bold: true });
    slide.addText("Sem aprovação de custos, margens desconhecidas.", { x: 1, y: 2.5, fontSize: 14, color: "CCCCCC" });
    
    slide.addText("Processos Manuais", { x: 5, y: 2, fontSize: 20, color: "FF3B30", bold: true });
    slide.addText("Dependência de planilhas e cadernos.", { x: 5, y: 2.5, fontSize: 14, color: "CCCCCC" });
    
    slide.addText("Cegueira Operacional", { x: 3, y: 4, fontSize: 20, color: "FF3B30", bold: true });
    slide.addText("Sem rastreio de onde os carros estão.", { x: 3, y: 4.5, fontSize: 14, color: "CCCCCC" });

    // 3. Solução
    slide = pres.addSlide();
    slide.background = { color: "000000" };
    slide.addText("A Solução: Velostock", { x: 0.5, y: 0.5, fontSize: 32, color: "FFFFFF", bold: true });
    slide.addText("Ecossistema de Controle Total", { x: 0.5, y: 1.2, fontSize: 24, color: "007AFF" });
    
    slide.addText("1. Entrada & Preparação: Checklist digital e aprovação de custos.", { x: 1, y: 2.5, w: "80%", fontSize: 16, color: "CCCCCC" });
    slide.addText("2. Venda & Marketing: Anúncios automáticos e CRM.", { x: 1, y: 3.5, w: "80%", fontSize: 16, color: "CCCCCC" });
    slide.addText("3. Pós-Venda & Financeiro: Gestão de garantia e DRE.", { x: 1, y: 4.5, w: "80%", fontSize: 16, color: "CCCCCC" });

    pres.writeFile({ fileName: "Apresentacao_Velostock.pptx" });
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
            <CurrentSlideComponent onImageClick={setSelectedImage} />
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
            Slide {currentSlide + 1} / 12 — {slidesData[currentSlide].label}
          </span>
        </div>

        <div className="flex gap-3">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={handlePrev}
            className="bg-black/50 backdrop-blur border-white/10 hover:bg-white/10 text-white rounded-full w-12 h-12"
          >
            <ChevronLeft size={24} />
          </Button>
          <Button 
            variant="default" 
            size="icon" 
            onClick={handleNext}
            className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 rounded-full w-12 h-12"
          >
            <ChevronRight size={24} />
          </Button>
        </div>
      </footer>
    </div>
  );
}
