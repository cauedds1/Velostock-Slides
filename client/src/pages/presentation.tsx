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
  Minimize2
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

// --- Data ---

const slidesData = [
  { id: 0, label: "Abertura" },
  { id: 1, label: "A Dor" },
  { id: 2, label: "A Solução" },
  { id: 3, label: "Funcionalidades" },
  { id: 4, label: "Diferencial" },
  { id: 5, label: "Mercado" },
  { id: 6, label: "Monetização" },
  { id: 7, label: "Desafios" },
  { id: 8, label: "Encerramento" },
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

// --- Slide Components ---

// 1. Abertura
const Slide1_Abertura = () => (
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
        <h1 className="text-6xl lg:text-7xl font-display font-black text-white leading-none mb-6">
          VELO<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">STOCK</span>
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
    
    <div className="absolute lg:relative inset-0 lg:w-1/2 h-full overflow-hidden opacity-40 lg:opacity-100 mix-blend-lighten lg:mix-blend-normal">
       <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-background via-transparent to-transparent z-10" />
       <img src={heroBg} alt="Dashboard" className="w-full h-full object-cover" />
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
const Slide3_Solucao = () => (
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
    <div className="w-full lg:w-1/2 bg-white/5 relative flex items-center justify-center overflow-hidden">
       {/* Abstract visualization of the system */}
       <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
       <div className="relative z-10 w-3/4 aspect-square bg-card rounded-2xl border border-white/10 shadow-2xl p-6 flex flex-col gap-4 rotate-3 hover:rotate-0 transition-transform duration-700">
          <div className="flex items-center gap-4 border-b border-white/5 pb-4">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <div className="ml-auto w-32 h-2 bg-white/10 rounded-full" />
          </div>
          <div className="grid grid-cols-2 gap-4 flex-1">
             <div className="bg-white/5 rounded-lg p-4 space-y-2">
                <div className="w-8 h-8 bg-primary/20 rounded mb-2" />
                <div className="w-full h-2 bg-white/10 rounded" />
                <div className="w-2/3 h-2 bg-white/10 rounded" />
             </div>
             <div className="bg-white/5 rounded-lg p-4 space-y-2">
                <div className="w-8 h-8 bg-secondary/20 rounded mb-2" />
                <div className="w-full h-2 bg-white/10 rounded" />
                <div className="w-2/3 h-2 bg-white/10 rounded" />
             </div>
             <div className="col-span-2 bg-white/5 rounded-lg p-4 mt-auto">
                <div className="flex justify-between items-end h-24 gap-2">
                   {[40, 60, 30, 80, 50, 90, 70].map((h, i) => (
                     <div key={i} className="w-full bg-primary/50 rounded-t" style={{height: `${h}%`}} />
                   ))}
                </div>
             </div>
          </div>
       </div>
    </div>
  </div>
);

// 4. Funcionalidades
const Slide4_Funcionalidades = () => (
  <div className="w-full h-full p-12 lg:p-20 bg-background relative">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-display font-bold text-white mb-4">15 Funcionalidades Principais</h2>
      <p className="text-slate-400">O stack completo para a operação</p>
    </div>

    <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
      {[
        "Gestão de Veículos (Kanban)",
        "Controle de Custos",
        "Vendas e Comissões",
        "Garantia",
        "Obs. Internas",
        "Contas a Pagar/Receber",
        "CRM e Leads",
        "Follow-ups",
        "IA (VeloBot)",
        "Dashboard",
        "Usuários/Permissões",
        "Configurações",
        "Relatórios",
        "Documentos",
        "Checklists"
      ].map((func, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.05 }}
          className="bg-card border border-white/5 p-4 rounded-xl flex items-center justify-center text-center hover:border-primary/50 hover:bg-white/5 transition-colors cursor-default"
        >
           <span className="text-sm font-medium text-slate-200">{func}</span>
        </motion.div>
      ))}
    </div>

    <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
       <div className="glass-panel p-6 rounded-xl border-l-4 border-primary">
         <h3 className="text-primary font-bold mb-2 flex items-center gap-2"><BrainCircuit size={18}/> VeloBot IA</h3>
         <p className="text-xs text-slate-400">Assistente que cria anúncios, sugere preços e dá dicas de venda.</p>
       </div>
       <div className="glass-panel p-6 rounded-xl border-l-4 border-secondary">
         <h3 className="text-secondary font-bold mb-2 flex items-center gap-2"><Target size={18}/> Rastreio Total</h3>
         <p className="text-xs text-slate-400">Timeline completa de tudo que aconteceu com o veículo.</p>
       </div>
       <div className="glass-panel p-6 rounded-xl border-l-4 border-blue-500">
         <h3 className="text-blue-500 font-bold mb-2 flex items-center gap-2"><ShieldCheck size={18}/> Financeiro</h3>
         <p className="text-xs text-slate-400">Aprovação de custos por gerentes antes do gasto acontecer.</p>
       </div>
    </div>
  </div>
);

// 5. Diferencial
const Slide5_Diferencial = () => (
  <div className="w-full h-full p-12 lg:p-24 bg-background flex flex-col items-center">
    <h2 className="text-4xl font-display font-bold text-white mb-16">Diferencial Competitivo</h2>
    
    <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
               <li className="flex items-center gap-3 bg-white/5 p-3 rounded-lg">
                 <CheckCircle className="text-secondary w-5 h-5 shrink-0" />
                 <div>
                   <span className="font-bold block">Visão 360°</span>
                   <span className="text-sm text-slate-400">Estoque + Fiscal + Publicidade + Operação</span>
                 </div>
               </li>
               <li className="flex items-center gap-3 bg-white/5 p-3 rounded-lg">
                 <BrainCircuit className="text-primary w-5 h-5 shrink-0" />
                 <div>
                   <span className="font-bold block">IA Contextual</span>
                   <span className="text-sm text-slate-400">VeloBot entende o negócio e ajuda a vender</span>
                 </div>
               </li>
             </ul>
          </div>
       </div>

       <div className="bg-card p-8 rounded-2xl border border-white/10 shadow-2xl">
          <h4 className="text-center text-slate-400 text-sm uppercase tracking-widest mb-6">Comparativo de Funcionalidades</h4>
          <div className="space-y-4">
             {[
               { name: "Gestão de Estoque", comp: true, velo: true },
               { name: "Integração Portais", comp: true, velo: true },
               { name: "CRM Avançado", comp: false, velo: true },
               { name: "Aprovação Custos", comp: false, velo: true },
               { name: "IA Generativa", comp: false, velo: true },
               { name: "Tarefas da Loja", comp: false, velo: true },
             ].map((row, i) => (
               <div key={i} className="flex items-center justify-between border-b border-white/5 pb-2 last:border-0">
                 <span className="text-slate-300">{row.name}</span>
                 <div className="flex gap-12 w-32 justify-end">
                   <div className={`w-6 h-6 flex items-center justify-center ${row.comp ? 'text-slate-500' : 'text-slate-700'}`}>
                     {row.comp ? '✓' : '-'}
                   </div>
                   <div className="w-6 h-6 flex items-center justify-center text-secondary font-bold">
                     ✓
                   </div>
                 </div>
               </div>
             ))}
             <div className="flex justify-end gap-12 w-full pt-2 text-xs text-slate-500 uppercase font-bold">
               <span className="w-6 text-center">Outros</span>
               <span className="w-6 text-center text-primary">Velo</span>
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
  <div className="w-full h-full flex flex-col items-center justify-center p-12 bg-background">
     <h2 className="text-4xl font-display font-bold text-white mb-12">Como Ganhamos Dinheiro</h2>

     <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-5xl">
        <div className="bg-card border border-white/5 p-8 rounded-2xl flex flex-col items-center text-center opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
           <h3 className="text-slate-400 font-bold mb-4 uppercase tracking-widest text-sm">Plano Basic</h3>
           <div className="text-3xl font-bold text-white mb-2">R$ 397<span className="text-sm font-normal text-slate-500">/mês</span></div>
           <p className="text-xs text-slate-500 mb-8">Pequenas lojas (até 30 carros)</p>
           <ul className="text-sm text-slate-400 space-y-2">
             <li>Gestão de Estoque</li>
             <li>Integrações Básicas</li>
             <li>3 Usuários</li>
           </ul>
        </div>

        <div className="bg-gradient-to-b from-primary/10 to-card border border-primary p-8 rounded-2xl flex flex-col items-center text-center shadow-2xl shadow-primary/10 transform scale-105 z-10">
           <div className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full mb-4">RECOMENDADO</div>
           <h3 className="text-primary font-bold mb-4 uppercase tracking-widest text-sm">Plano Growth</h3>
           <div className="text-5xl font-bold text-white mb-2">R$ 697<span className="text-lg font-normal text-slate-500">/mês</span></div>
           <p className="text-xs text-slate-400 mb-8">Lojas em crescimento (até 150 carros)</p>
           <ul className="text-sm text-white space-y-3 font-medium">
             <li className="flex items-center gap-2"><CheckCircle size={14} className="text-secondary"/> Tudo do Basic</li>
             <li className="flex items-center gap-2"><CheckCircle size={14} className="text-secondary"/> IA VeloBot Completa</li>
             <li className="flex items-center gap-2"><CheckCircle size={14} className="text-secondary"/> Aprovação de Custos</li>
             <li className="flex items-center gap-2"><CheckCircle size={14} className="text-secondary"/> CRM Avançado</li>
             <li className="flex items-center gap-2"><CheckCircle size={14} className="text-secondary"/> 10 Usuários</li>
           </ul>
        </div>

        <div className="bg-card border border-white/5 p-8 rounded-2xl flex flex-col items-center text-center opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
           <h3 className="text-slate-400 font-bold mb-4 uppercase tracking-widest text-sm">Enterprise</h3>
           <div className="text-3xl font-bold text-white mb-2">Sob Consulta</div>
           <p className="text-xs text-slate-500 mb-8">Redes e Concessionárias</p>
           <ul className="text-sm text-slate-400 space-y-2">
             <li>API Personalizada</li>
             <li>Onboarding Dedicado</li>
             <li>Multi-CNPJ</li>
           </ul>
        </div>
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

  // Components mapping
  const slides = [
    Slide1_Abertura,
    Slide2_Dor,
    Slide3_Solucao,
    Slide4_Funcionalidades,
    Slide5_Diferencial,
    Slide6_Publico,
    Slide7_Monetizacao,
    Slide8_Desafios,
    Slide9_Encerramento
  ];

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
      if (e.key === "ArrowRight" || e.key === "Space") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide]);

  return (
    <div className="w-screen h-screen bg-black text-white overflow-hidden flex flex-col items-center justify-center font-sans">
      
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
               <CurrentSlideComponent />
             </motion.div>
           </AnimatePresence>
        </div>

        {/* Overlay Controls (Hide in print/export if needed, but useful for interactive) */}
        <div className="absolute bottom-0 left-0 w-full p-6 flex justify-between items-end bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
           <div className="pointer-events-auto flex items-center gap-4">
             <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">
               {slidesData[currentSlide].label}
             </div>
           </div>
           
           <div className="pointer-events-auto flex items-center gap-4">
              <span className="text-sm font-mono text-slate-500">
                {currentSlide + 1} / {slides.length}
              </span>
              <div className="flex gap-2 bg-white/10 backdrop-blur rounded-full p-1">
                 <Button variant="ghost" size="icon" onClick={prevSlide} disabled={currentSlide === 0} className="rounded-full hover:bg-white/10 w-8 h-8 text-white">
                   <ChevronLeft size={16} />
                 </Button>
                 <Button variant="ghost" size="icon" onClick={nextSlide} disabled={currentSlide === slides.length - 1} className="rounded-full hover:bg-white/10 w-8 h-8 text-white">
                   <ChevronRight size={16} />
                 </Button>
              </div>
              <Button variant="ghost" size="icon" onClick={toggleFullscreen} className="rounded-full hover:bg-white/10 text-white">
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