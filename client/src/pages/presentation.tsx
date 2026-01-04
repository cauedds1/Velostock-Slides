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
  X
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

// --- Data ---

const slidesData = [
  { id: 0, label: "Abertura" },
  { id: 1, label: "A Dor" },
  { id: 2, label: "A Solução" },
  { id: 3, label: "Funcionalidades" },
  { id: 4, label: "Admin Panel" },
  { id: 5, label: "Diferencial" },
  { id: 6, label: "Mercado" },
  { id: 7, label: "Monetização" },
  { id: 8, label: "Desafios" },
  { id: 9, label: "Encerramento" },
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

// 4. Funcionalidades
const Slide4_Funcionalidades = ({ onImageClick }: { onImageClick: (src: string) => void }) => {
  const [selectedFeature, setSelectedFeature] = useState<{title: string, desc: string} | null>(null);

  const features = [
    { title: "Gestão de Veículos (Kanban)", desc: "Organize seu estoque visualmente. Arraste e solte carros entre estágios (Preparação, Venda, Entrega) como um quadro Trello." },
    { title: "Controle de Custos", desc: "Registre cada centavo gasto no carro (peças, funilaria, lavagem) para saber o lucro real líquido na venda." },
    { title: "Vendas e Comissões", desc: "Calcula automaticamente comissões de vendedores e parceiros no momento da venda, evitando erros de fechamento." },
    { title: "Garantia", desc: "Controle prazos legais e estendidos. Saiba quais carros ainda estão cobertos e histórico de acionamentos." },
    { title: "Obs. Internas", desc: "Comunicação interna vinculada ao carro. 'Trocar pneu', 'Cliente X interessado'. Nada se perde no WhatsApp." },
    { title: "Contas a Pagar/Receber", desc: "Financeiro integrado. Vendeu o carro? O sistema lança o recebível. Gastou na oficina? Lança o a pagar." },
    { title: "CRM e Leads", desc: "Centralize leads de portais e site. Pipeline de vendas para acompanhar cada negociação e não perder clientes." },
    { title: "Follow-ups", desc: "Lembretes automáticos para ligar para clientes. 'O cliente ficou de voltar dia 10'. O sistema te cobra." },
    { title: "IA (VeloBot)", desc: "Seu assistente virtual. Gera descrições de anúncios persuasivas e responde dúvidas sobre o estoque." },
    { title: "Dashboard", desc: "Visão de piloto de avião. MRR, carros parados há muito tempo, fluxo de caixa e performance da loja em uma tela." },
    { title: "Usuários/Permissões", desc: "Controle quem vê o que. Vendedor não vê lucro, Gerente vê tudo. Segurança total nos dados." },
    { title: "Configurações", desc: "Personalize o sistema. Categorias de gastos, origens de leads, metas de vendas e dados da empresa." },
    { title: "Relatórios", desc: "Dados para decisão. DRE, Curva ABC de estoque, performance por vendedor e relatório de custos." },
    { title: "Documentos", desc: "Geração automática de contratos, recibos e termos de garantia. Menos papelada, mais vendas." },
    { title: "Checklists", desc: "Padronize a entrada e saída. Checklist de avaliação na compra e checklist de entrega para o cliente." }
  ];

  return (
    <div className="w-full h-full p-8 lg:p-12 bg-background relative flex flex-col">
      <div className="text-center mb-8 shrink-0">
        <h2 className="text-3xl font-display font-bold text-white mb-2">15 Funcionalidades Principais</h2>
        <p className="text-slate-400">O stack completo para a operação. Clique para detalhes.</p>
      </div>

      <div className="flex-1 grid grid-cols-12 gap-6 h-full overflow-hidden pb-4">
         {/* Left Column: Visual Showcase */}
         <div className="col-span-12 lg:col-span-7 grid grid-cols-2 gap-4 h-full overflow-y-auto pr-2 custom-scrollbar">
            <div className="space-y-4">
               <div className="group relative rounded-xl overflow-hidden border border-white/10 bg-card hover:border-primary/50 transition-all cursor-zoom-in" onClick={() => onImageClick(imgVeiculos)}>
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur px-2 py-1 rounded text-xs font-bold text-white z-10">Gestão de Veículos</div>
                  <img src={imgVeiculos} className="w-full object-contain bg-black/50 opacity-80 group-hover:opacity-100 transition-opacity" />
               </div>
               <div className="group relative rounded-xl overflow-hidden border border-white/10 bg-card hover:border-primary/50 transition-all cursor-zoom-in" onClick={() => onImageClick(imgLead)}>
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur px-2 py-1 rounded text-xs font-bold text-white z-10">CRM & Leads</div>
                  <img src={imgLead} className="w-full object-contain bg-black/50 opacity-80 group-hover:opacity-100 transition-opacity" />
               </div>
               <div className="group relative rounded-xl overflow-hidden border border-white/10 bg-card hover:border-primary/50 transition-all cursor-zoom-in" onClick={() => onImageClick(imgFinanceiro)}>
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur px-2 py-1 rounded text-xs font-bold text-white z-10">Financeiro</div>
                  <img src={imgFinanceiro} className="w-full object-contain bg-black/50 opacity-80 group-hover:opacity-100 transition-opacity" />
               </div>
            </div>
            <div className="space-y-4 mt-8">
               <div className="group relative rounded-xl overflow-hidden border border-white/10 bg-card hover:border-primary/50 transition-all cursor-zoom-in" onClick={() => onImageClick(imgGarantia)}>
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur px-2 py-1 rounded text-xs font-bold text-white z-10">Garantia</div>
                  <img src={imgGarantia} className="w-full object-contain bg-black/50 opacity-80 group-hover:opacity-100 transition-opacity" />
               </div>
               <div className="group relative rounded-xl overflow-hidden border border-white/10 bg-card hover:border-primary/50 transition-all cursor-zoom-in" onClick={() => onImageClick(imgCustos)}>
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur px-2 py-1 rounded text-xs font-bold text-white z-10">Controle de Custos</div>
                  <img src={imgCustos} className="w-full object-contain bg-black/50 opacity-80 group-hover:opacity-100 transition-opacity" />
               </div>
                <div className="group relative rounded-xl overflow-hidden border border-white/10 bg-card hover:border-primary/50 transition-all cursor-zoom-in" onClick={() => onImageClick(imgRelatorio)}>
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur px-2 py-1 rounded text-xs font-bold text-white z-10">Relatórios</div>
                  <img src={imgRelatorio} className="w-full object-contain bg-black/50 opacity-80 group-hover:opacity-100 transition-opacity" />
               </div>
            </div>
         </div>

         {/* Right Column: Feature List */}
         <div className="col-span-12 lg:col-span-5 flex flex-col gap-2 overflow-y-auto pr-2 custom-scrollbar relative">
            {features.map((feature, i) => (
              <motion.button 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.03 }}
                onClick={() => setSelectedFeature(feature)}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors w-full text-left group border border-transparent hover:border-white/10 focus:outline-none focus:border-primary/50"
              >
                 <div className="w-2 h-2 rounded-full bg-secondary shrink-0 group-hover:scale-125 transition-transform" />
                 <span className="text-sm text-slate-300 font-medium group-hover:text-white">{feature.title}</span>
                 <ChevronRight className="w-4 h-4 text-slate-600 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>
            ))}
         </div>
      </div>

      {/* Feature Modal */}
      <AnimatePresence>
        {selectedFeature && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute inset-0 z-20 flex items-center justify-center bg-black/60 backdrop-blur-sm p-8"
            onClick={() => setSelectedFeature(null)}
          >
             <div 
               className="bg-card border border-white/10 rounded-2xl p-8 max-w-lg w-full shadow-2xl relative"
               onClick={(e) => e.stopPropagation()}
             >
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setSelectedFeature(null)}
                  className="absolute top-4 right-4 text-slate-400 hover:text-white"
                >
                  <X size={20} />
                </Button>
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                   <Zap className="text-primary w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{selectedFeature.title}</h3>
                <p className="text-slate-300 leading-relaxed text-lg">{selectedFeature.desc}</p>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// 4.5. Admin Panel
const Slide_Admin = ({ onImageClick }: { onImageClick: (src: string) => void }) => (
  <div className="w-full h-full p-12 lg:p-20 bg-background flex flex-col overflow-y-auto custom-scrollbar">
    <div className="flex justify-between items-end mb-12 shrink-0">
      <div>
         <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">Backoffice</span>
         <h2 className="text-4xl font-display font-bold text-white">Painel Administrativo</h2>
         <p className="text-slate-400 mt-2">Gestão completa do SaaS: Métricas, Clientes e Segurança.</p>
      </div>
      <div className="flex gap-4">
         <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-xs text-slate-300">
           <span className="text-secondary font-bold">Autenticação:</span> Token Único ou Credenciais Admin
         </div>
         <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-xs text-slate-300">
           <span className="text-secondary font-bold">Segurança:</span> Rate Limiting & HTTPS
         </div>
      </div>
    </div>

    <div className="grid grid-cols-12 gap-8 flex-1 shrink-0 min-h-[500px]">
       {/* Visuals - Left */}
       <div className="col-span-7 flex flex-col gap-6 h-full">
          <div className="flex-1 bg-card rounded-xl border border-white/10 overflow-hidden relative group cursor-zoom-in min-h-[200px]" onClick={() => onImageClick(imgAdminDash)}>
             <div className="absolute top-4 left-4 bg-black/80 backdrop-blur px-3 py-1 rounded text-xs font-bold text-white z-10 border border-white/10">Dashboard Global (MRR & Clientes)</div>
             <img src={imgAdminDash} className="w-full h-full object-contain bg-black/50 opacity-90 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="h-1/3 bg-card rounded-xl border border-white/10 overflow-hidden relative group cursor-zoom-in min-h-[150px]" onClick={() => onImageClick(imgAdminBugs)}>
             <div className="absolute top-4 left-4 bg-black/80 backdrop-blur px-3 py-1 rounded text-xs font-bold text-white z-10 border border-white/10">Gestão de Bugs</div>
             <img src={imgAdminBugs} className="w-full h-full object-contain bg-black/50 opacity-90 group-hover:opacity-100 transition-opacity" />
          </div>
       </div>

       {/* Features - Right */}
       <div className="col-span-5 flex flex-col gap-4 overflow-y-auto pr-2 custom-scrollbar h-full">
          {[
            { t: "Dashboard de Métricas", d: "MRR, Churn Rate, LTV e total de empresas ativas em tempo real." },
            { t: "Gestão de Empresas", d: "Controle total: estender trial, bloquear acesso e ver histórico." },
            { t: "Códigos de Convite", d: "Geração de códigos de trial (7 a 90 dias) para onboarding controlado." },
            { t: "Gestão de Admins", d: "Controle de acesso granular (Master vs. Visualizador)." },
            { t: "Reports de Bugs", d: "Sistema de tickets integrado para suporte rápido aos usuários." },
            { t: "Financeiro Global", d: "Listagem de assinaturas e controle de inadimplência." }
          ].map((item, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.1 * i }}
               className="bg-white/5 p-4 rounded-xl border border-white/5 hover:border-primary/50 transition-colors shrink-0"
             >
                <h4 className="font-bold text-white text-sm mb-1 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {item.t}
                </h4>
                <p className="text-xs text-slate-400">{item.d}</p>
             </motion.div>
          ))}
          
          <div className="mt-auto pt-6 border-t border-white/10 shrink-0">
             <h4 className="font-bold text-white text-sm mb-3">Fluxo de Criação</h4>
             <div className="flex items-center gap-2 text-xs text-slate-400">
               <span className="bg-white/10 px-2 py-1 rounded">Admin cria código</span>
               <ChevronRight size={12} />
               <span className="bg-white/10 px-2 py-1 rounded">Cliente usa no Signup</span>
               <ChevronRight size={12} />
               <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded">Empresa Criada</span>
             </div>
          </div>
       </div>
    </div>
  </div>
);

// 5. Diferencial
const Slide5_Diferencial = ({ onImageClick }: { onImageClick: (src: string) => void }) => (
  <div className="w-full h-full p-12 lg:p-24 bg-background flex flex-col items-center">
    <h2 className="text-4xl font-display font-bold text-white mb-12">Diferencial Competitivo</h2>
    
    <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
       <div className="space-y-8">
          <div className="relative pl-8 border-l border-white/10">
             <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs text-slate-500">VS</div>
             <h3 className="text-2xl font-bold text-slate-500 mb-4">Concorrentes</h3>
             <ul className="space-y-3 text-slate-500">
               <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-500"/> Focam apenas em estoque e anúncios</li>
               <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-500"/> Interface complexa e antiga</li>
               <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-500"/> Sem gestão de tarefas internas</li>
             </ul>
          </div>

          <div className="relative pl-8 border-l-4 border-primary">
             <h3 className="text-3xl font-bold text-white mb-4">Velostock</h3>
             <ul className="space-y-4 text-white">
               <li className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/5">
                 <CheckCircle className="text-secondary w-5 h-5 shrink-0" />
                 <div>
                   <span className="font-bold block">Visão 360°</span>
                   <span className="text-sm text-slate-400">Estoque + Fiscal + Publicidade + Operação</span>
                 </div>
               </li>
               <li className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/5">
                 <BrainCircuit className="text-primary w-5 h-5 shrink-0" />
                 <div>
                   <span className="font-bold block">IA Contextual</span>
                   <span className="text-sm text-slate-400">VeloBot entende o negócio e ajuda a vender</span>
                 </div>
               </li>
             </ul>
          </div>
       </div>

       <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-secondary/30 blur-2xl rounded-full opacity-50" />
          <div className="relative z-10 bg-card border border-white/10 rounded-2xl overflow-hidden shadow-2xl cursor-zoom-in" onClick={() => onImageClick(imgObs)}>
              <div className="bg-black/50 p-4 border-b border-white/10 flex justify-between items-center">
                 <span className="font-bold text-white text-sm">Observações da Loja</span>
                 <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                 </div>
              </div>
              <img src={imgObs} alt="Observações Gerais" className="w-full opacity-90 hover:opacity-100 transition-opacity" />
              <div className="p-4 bg-black/80 backdrop-blur absolute bottom-0 w-full border-t border-white/10 pointer-events-none">
                 <p className="text-xs text-slate-300">
                   <strong className="text-secondary">Exclusivo:</strong> Gerencie desde a compra de café até a manutenção do portão da loja. Nenhum concorrente faz isso.
                 </p>
              </div>
          </div>
       </div>
    </div>
  </div>
);

// 6. Público Alvo
const Slide6_Publico = () => (
  <div className="w-full h-full flex flex-col items-center justify-center p-12 lg:p-24 relative bg-background">
     <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
     
     <h2 className="text-4xl font-display font-bold text-white mb-16 z-10">Público Alvo & Mercado</h2>
     
     <div className="flex flex-col lg:flex-row gap-12 w-full max-w-6xl z-10">
       <div className="flex-1 space-y-8">
          <div className="bg-card border border-white/5 p-8 rounded-2xl hover:border-secondary/50 transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <Users className="text-secondary w-8 h-8" />
              <h3 className="text-2xl font-bold text-white">O Cliente Ideal</h3>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Lojas de seminovos independentes, com estoque entre <strong className="text-white">20 e 200 carros</strong>.
              <br/><br/>
              Eles já faturam bem, mas perdem dinheiro na desorganização e falta de controle. Buscam profissionalização.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
             <div className="bg-white/5 p-6 rounded-xl text-center">
               <div className="text-4xl font-bold text-white mb-1">45k+</div>
               <div className="text-xs text-slate-400 uppercase">Revendas no Brasil</div>
             </div>
             <div className="bg-white/5 p-6 rounded-xl text-center">
               <div className="text-4xl font-bold text-white mb-1">R$ 12B</div>
               <div className="text-xs text-slate-400 uppercase">TAM (SaaS Auto)</div>
             </div>
          </div>
       </div>

       <div className="flex-1 bg-white/5 rounded-2xl p-8 flex flex-col justify-center">
          <h3 className="text-xl font-bold text-white mb-6">Estratégia de Expansão</h3>
          <div className="space-y-6 relative">
             <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-gradient-to-b from-secondary to-slate-800" />
             
             <div className="flex gap-6 relative">
               <div className="w-6 h-6 rounded-full bg-secondary border-4 border-background shrink-0 z-10" />
               <div>
                 <h4 className="font-bold text-white">Nicho Inicial</h4>
                 <p className="text-sm text-slate-400">Lojas Familiares & Médias em SP/SUL</p>
               </div>
             </div>
             
             <div className="flex gap-6 relative">
               <div className="w-6 h-6 rounded-full bg-slate-700 border-4 border-background shrink-0 z-10" />
               <div>
                 <h4 className="font-bold text-slate-300">Fase 2</h4>
                 <p className="text-sm text-slate-500">Expansão Nacional & Integrações Bancárias</p>
               </div>
             </div>
             
             <div className="flex gap-6 relative">
               <div className="w-6 h-6 rounded-full bg-slate-800 border-4 border-background shrink-0 z-10" />
               <div>
                 <h4 className="font-bold text-slate-400">Fase 3</h4>
                 <p className="text-sm text-slate-600">Marketplace B2B & Enterprise (Concessionárias)</p>
               </div>
             </div>
          </div>
       </div>
     </div>
  </div>
);

// 7. Monetização
const Slide7_Monetizacao = () => (
  <div className="w-full h-full flex flex-col items-center justify-center p-12 bg-background relative overflow-hidden">
     <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background pointer-events-none" />
     <h2 className="text-4xl font-display font-bold text-white mb-16 relative z-10">Simplicidade Comercial</h2>

     <div className="relative z-10 w-full max-w-lg">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-card to-background border border-primary/30 p-12 rounded-3xl flex flex-col items-center text-center shadow-[0_0_50px_rgba(255,59,48,0.2)] relative group"
        >
           <div className="absolute -top-4 bg-primary text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg">
             TUDO INCLUSO
           </div>
           
           <h3 className="text-slate-400 font-bold mb-6 uppercase tracking-widest text-lg">Plano Único</h3>
           
           <div className="flex items-baseline justify-center mb-2">
             <span className="text-2xl text-slate-400 mr-2">R$</span>
             <span className="text-7xl font-display font-black text-white">149</span>
             <span className="text-2xl text-slate-400 ml-1">/mês</span>
           </div>
           
           <p className="text-slate-400 mb-10 text-sm">Sem taxas de implantação. Cancele quando quiser.</p>
           
           <div className="w-full space-y-4 mb-10">
              <div className="flex items-center gap-4 text-left">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                  <CheckCircle className="text-green-500 w-5 h-5" />
                </div>
                <span className="text-white text-lg">Acesso Total às 15 Funcionalidades</span>
              </div>
              <div className="flex items-center gap-4 text-left">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                  <CheckCircle className="text-green-500 w-5 h-5" />
                </div>
                <span className="text-white text-lg">Usuários Ilimitados</span>
              </div>
              <div className="flex items-center gap-4 text-left">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                  <CheckCircle className="text-green-500 w-5 h-5" />
                </div>
                <span className="text-white text-lg">Suporte Prioritário WhatsApp</span>
              </div>
           </div>

           <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-14 rounded-xl text-lg shadow-lg shadow-primary/20">
             Começar Teste Grátis (7 Dias)
           </Button>
        </motion.div>
     </div>
  </div>
);

// 8. Desafios
const Slide8_Desafios = () => (
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

// 9. Encerramento
const Slide9_Encerramento = () => (
  <div className="w-full h-full flex flex-col items-center justify-center bg-black relative overflow-hidden">
     <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-black to-secondary/20 animate-pulse-slow" />
     
     <motion.div 
       className="z-10 text-center space-y-8"
       initial={{ scale: 0.9, opacity: 0 }}
       animate={{ scale: 1, opacity: 1 }}
       transition={{ duration: 1 }}
     >
       <div className="w-24 h-24 mx-auto bg-gradient-to-tr from-primary to-secondary rounded-2xl flex items-center justify-center mb-8 shadow-glow">
          <span className="font-display font-black text-4xl text-white">V</span>
       </div>
       
       <h2 className="text-6xl lg:text-8xl font-display font-bold text-white tracking-tighter">
         O Futuro é Agora.
       </h2>
       <p className="text-2xl text-slate-400 font-light max-w-2xl mx-auto">
         Vamos acelerar o mercado automotivo juntos.
       </p>
       
       <div className="pt-12 flex flex-col items-center gap-4">
         <h3 className="text-3xl font-bold text-white">contato@velostock.com.br</h3>
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

  // Components mapping
  const slides = [
    Slide1_Abertura,
    Slide2_Dor,
    Slide3_Solucao,
    Slide4_Funcionalidades,
    Slide_Admin,
    Slide5_Diferencial,
    Slide6_Publico,
    Slide7_Monetizacao,
    Slide8_Desafios,
    Slide9_Encerramento
  ];

  // We need to pass onImageClick to components that accept it.
  // We can render them using cloneElement if they were instances, but here they are functions.
  // We can just call them with props.
  const CurrentSlideComponent = slides[currentSlide];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) setCurrentSlide(c => c + 1);
  };

  const prevSlide = () => {
    if (currentSlide > 0) setCurrentSlide(c => c - 1);
  };

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

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Disable slide navigation if image modal is open (Escape closes modal)
      if (selectedImage) {
        if (e.key === "Escape") setSelectedImage(null);
        return;
      }

      if (e.key === "ArrowRight" || e.key === "Space") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide, selectedImage]);

  return (
    <div className="w-screen h-screen bg-black text-white overflow-hidden flex flex-col items-center justify-center font-sans">
      
      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <ImageModal src={selectedImage} onClose={() => setSelectedImage(null)} />
        )}
      </AnimatePresence>

      {/* Presentation Container */}
      <div className="relative w-full h-full max-w-[1920px] max-h-[1080px] bg-background shadow-2xl overflow-hidden">
        
        {/* Slide Content */}
        <div className="w-full h-full relative">
           <AnimatePresence mode="wait">
             <motion.div
               key={currentSlide}
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 0.4 }}
               className="w-full h-full"
             >
               {/* Pass onImageClick to all slides; only those that use it will consume it */}
               {/* TypeScript might complain if we don't type it properly, but here we can just cast or ignore if strictness allows, 
                   or better, ensure all components accept the prop (even if optional) or check which one we are rendering.
                   For simplicity in this file-rewrite, I updated relevant components to accept it.
                   Components without the prop will just ignore extra args if called as functions, but React Components expect exact props.
                   Let's safely render.
               */}
               <CurrentSlideComponent onImageClick={setSelectedImage} />
             </motion.div>
           </AnimatePresence>
        </div>

        {/* Overlay Controls (Hide in print/export if needed, but useful for interactive) */}
        <div className="absolute bottom-0 left-0 w-full p-6 flex justify-between items-end bg-gradient-to-t from-black/80 to-transparent z-50 pointer-events-none">
           <div className="pointer-events-auto flex items-center gap-4">
             <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">
               {slidesData[currentSlide].label}
             </div>
           </div>
           
           <div className="pointer-events-auto flex items-center gap-4 relative z-50">
              <span className="text-sm font-mono text-slate-500">
                {currentSlide + 1} / {slides.length}
              </span>
              <div className="flex gap-2 bg-white/10 backdrop-blur rounded-full p-1 cursor-pointer">
                 <Button variant="ghost" size="icon" onClick={prevSlide} disabled={currentSlide === 0} className="rounded-full hover:bg-white/10 w-8 h-8 text-white z-50 cursor-pointer pointer-events-auto">
                   <ChevronLeft size={16} />
                 </Button>
                 <Button variant="ghost" size="icon" onClick={nextSlide} disabled={currentSlide === slides.length - 1} className="rounded-full hover:bg-white/10 w-8 h-8 text-white z-50 cursor-pointer pointer-events-auto">
                   <ChevronRight size={16} />
                 </Button>
              </div>
              <Button variant="ghost" size="icon" onClick={toggleFullscreen} className="rounded-full hover:bg-white/10 text-white z-50 cursor-pointer pointer-events-auto">
                 {isFullscreen ? <Minimize2 size={16}/> : <Maximize2 size={16}/>}
              </Button>
           </div>
        </div>

        {/* Progress Line */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
           <motion.div 
             className="h-full bg-gradient-to-r from-primary to-secondary"
             initial={{ width: "0%" }}
             animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
           />
        </div>

      </div>
    </div>
  );
}