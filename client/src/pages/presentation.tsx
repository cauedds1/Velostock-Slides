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
  Repeat
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

// --- Data ---

const slidesData = [
  { id: 0, label: "Abertura" },
  { id: 1, label: "A Dor" },
  { id: 2, label: "A Solução" },
  { id: 3, label: "Ciclo" },
  { id: 4, label: "Funcionalidades" },
  { id: 5, label: "Admin Panel" },
  { id: 6, label: "Diferencial" },
  { id: 7, label: "Mercado" },
  { id: 8, label: "Monetização" },
  { id: 9, label: "Desafios" },
  { id: 10, label: "Encerramento" },
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

// 4. Funcionalidades
const Slide4_Funcionalidades = ({ onImageClick }: { onImageClick: (src: string) => void }) => {
  const [selectedFeatureIndex, setSelectedFeatureIndex] = useState<number | null>(null);

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

  return (
    <div className="w-full h-full p-8 lg:p-12 bg-background relative flex flex-col">
      <div className="text-center mb-8 shrink-0">
        <h2 className="text-3xl font-display font-bold text-white mb-2">15 Funcionalidades Principais</h2>
        <p className="text-slate-400">O stack completo para a operação. Clique para expandir os detalhes.</p>
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

         {/* Right Column: Feature List - Accordion Style */}
         <div className="col-span-12 lg:col-span-5 flex flex-col gap-2 overflow-y-auto pr-2 custom-scrollbar relative">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.03 }}
                className={`rounded-xl border transition-all duration-300 overflow-hidden shrink-0 ${
                  selectedFeatureIndex === i 
                    ? "bg-white/10 border-primary/50 shadow-lg" 
                    : "bg-transparent border-transparent hover:bg-white/5 hover:border-white/10"
                }`}
              >
                <button 
                  onClick={() => setSelectedFeatureIndex(selectedFeatureIndex === i ? null : i)}
                  className="w-full flex items-center gap-3 p-3 text-left focus:outline-none"
                >
                   <div className={`w-2 h-2 rounded-full shrink-0 transition-transform duration-300 ${
                     selectedFeatureIndex === i ? "bg-primary scale-125" : "bg-secondary group-hover:scale-110"
                   }`} />
                   
                   <span className={`text-sm font-medium transition-colors ${
                     selectedFeatureIndex === i ? "text-white font-bold" : "text-slate-300 group-hover:text-white"
                   }`}>
                     {feature.title}
                   </span>
                   
                   <ChevronRight className={`w-4 h-4 text-slate-500 ml-auto transition-transform duration-300 ${
                     selectedFeatureIndex === i ? "rotate-90 text-primary" : ""
                   }`} />
                </button>

                <AnimatePresence>
                  {selectedFeatureIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-6 pt-0 text-slate-300 text-sm leading-relaxed border-t border-white/5 mt-1">
                        <div className="h-2" /> {/* Spacer */}
                        {feature.desc}
                        <div className="h-2" /> {/* Bottom Spacer to prevent cutoff */}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
         </div>
      </div>
    </div>
  );
};

// 4.5. Admin Panel
const Slide_Admin = ({ onImageClick }: { onImageClick: (src: string) => void }) => {
  const [selectedFeatureIndex, setSelectedFeatureIndex] = useState<number | null>(null);

  const adminFeatures = [
    { t: "Dashboard de Métricas", d: "Acompanhe a saúde do seu SaaS em tempo real. Visualize o MRR (Receita Recorrente Mensal), Taxa de Churn (Cancelamento), LTV (Valor do Tempo de Vida) e o crescimento total de empresas ativas. Gráficos intuitivos para tomada de decisão rápida." },
    { t: "Gestão de Empresas", d: "Tenha controle total sobre seus clientes. Visualize todas as empresas cadastradas, status da assinatura (Ativo, Trial, Bloqueado), histórico de pagamentos e dados de contato. Estenda períodos de teste ou bloqueie acesso de inadimplentes com um clique." },
    { t: "Códigos de Convite", d: "Crie campanhas de aquisição controladas. Gere códigos de convite com parâmetros específicos (ex: '7 dias grátis', '30 dias grátis', 'Promoção Black Friday'). Monitore quais códigos foram usados e por quem, facilitando a gestão de parcerias e afiliados." },
    { t: "Gestão de Admins", d: "Controle quem tem acesso ao painel administrativo. Crie níveis de permissão granulares (Master vs. Visualizador). O Admin Master tem acesso total, enquanto Visualizadores podem apenas ver métricas sem alterar configurações críticas ou dados financeiros." },
    { t: "Reports de Bugs", d: "Sistema de tickets integrado para suporte ágil. Receba notificações de erros reportados pelos usuários diretamente no painel. Acompanhe o status da resolução, priorize correções críticas e mantenha seus clientes informados sobre as melhorias." },
    { t: "Financeiro Global", d: "Visão consolidada de todas as transações. Liste todas as assinaturas, identifique pagamentos falhos, gere notas fiscais e controle a inadimplência geral do sistema. Exporte dados para contabilidade e mantenha a saúde financeira do seu SaaS em dia." }
  ];

  return (
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

         {/* Features - Right (Accordion Style) */}
         <div className="col-span-5 flex flex-col gap-2 overflow-y-auto pr-2 custom-scrollbar h-full relative">
            {adminFeatures.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * i }}
                className={`rounded-xl border transition-all duration-300 overflow-hidden shrink-0 ${
                  selectedFeatureIndex === i 
                    ? "bg-white/10 border-primary/50 shadow-lg" 
                    : "bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10"
                }`}
              >
                 <button 
                    onClick={() => setSelectedFeatureIndex(selectedFeatureIndex === i ? null : i)}
                    className="w-full flex items-center gap-3 p-3 text-left focus:outline-none"
                 >
                    <div className={`w-1.5 h-1.5 rounded-full shrink-0 transition-transform duration-300 ${
                       selectedFeatureIndex === i ? "bg-primary scale-150" : "bg-primary"
                    }`} />
                    
                    <span className={`text-sm font-bold transition-colors ${
                       selectedFeatureIndex === i ? "text-white" : "text-slate-200 group-hover:text-white"
                    }`}>
                      {item.t}
                    </span>
                    
                    <ChevronRight className={`w-4 h-4 text-slate-500 ml-auto transition-transform duration-300 ${
                       selectedFeatureIndex === i ? "rotate-90 text-primary" : ""
                    }`} />
                 </button>

                 <AnimatePresence>
                    {selectedFeatureIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-6 pt-0 text-slate-300 text-xs leading-relaxed border-t border-white/5 mt-1">
                          <div className="h-2" />
                          {item.d}
                          <div className="h-2" /> {/* Bottom Spacer */}
                        </div>
                      </motion.div>
                    )}
                 </AnimatePresence>
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
};

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
                   <span className="text-sm text-slate-400">Estoque + Publicidade + Operação</span>
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
                   <strong className="text-secondary">Controle Total:</strong> Gerencie desde a compra de café até a manutenção do portão da loja.
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
               <div className="text-xs text-slate-400 uppercase">Potencial de Mercado</div>
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

  // Components mapping
  const slides = [
    Slide1_Abertura,
    Slide2_Dor,
    Slide3_Solucao,
    Slide_Ciclo,
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

// 4. Funcionalidades (Detailed)
    // We will split features across multiple slides to fit text
    const features = [
        { title: "Gestão de Veículos (Kanban)", desc: "Visualize e organize todo o seu estoque através de um quadro Kanban intuitivo." },
        { title: "Controle de Custos Detalhado", desc: "Registre cada centavo investido no veículo para saber o lucro real." },
        { title: "Vendas e Comissões Automatizadas", desc: "O sistema registra a venda e calcula comissões automaticamente." },
        { title: "Gestão Profissional de Garantia", desc: "Controle de retornos, ocorrências e custos de reparo pós-venda." },
        { title: "Observações Internas", desc: "Notas internas sigilosas vinculadas a cada veículo ou cliente." },
        { title: "Financeiro Integrado", desc: "Contas a pagar e receber alimentados automaticamente pela operação." },
        { title: "CRM e Gestão de Leads", desc: "Pipeline de vendas centralizado com distribuição automática de leads." },
        { title: "Follow-ups Inteligentes", desc: "Lembretes automáticos para não deixar o cliente esfriar." },
        { title: "IA (VeloBot)", desc: "Assistente virtual que gera descrições de anúncios e sugere preços." },
        { title: "Dashboard de Indicadores", desc: "KPIs em tempo real: Ticket Médio, Giro, Lucratividade." },
        { title: "Controle de Acesso", desc: "Perfis granulares (Vendedor, Gerente) para proteger dados sensíveis." },
        { title: "Configurações Personalizáveis", desc: "Adapte categorias de despesas e metas à realidade da loja." },
        { title: "Relatórios Avançados", desc: "DRE, Curva ABC e Ranking de Vendas." },
        { title: "Gestão de Documentos Digitais", desc: "Organização e armazenamento seguro de documentos (CRLV, Laudos)." },
        { title: "Checklists Digitais", desc: "Vistorias de entrada e saída padronizadas." }
    ];

    // Create summary slides for features
    for (let i = 0; i < features.length; i += 5) {
        slide = pres.addSlide();
        slide.background = { color: "000000" };
        slide.addText(`Funcionalidades (${i + 1}-${Math.min(i + 5, features.length)})`, { x: 0.5, y: 0.5, fontSize: 24, color: "FFFFFF", bold: true });
        
        const chunk = features.slice(i, i + 5);
        chunk.forEach((feat, idx) => {
            slide.addText(feat.title, { x: 0.5, y: 1.5 + (idx * 1.0), fontSize: 18, color: "007AFF", bold: true });
            slide.addText(feat.desc, { x: 0.5, y: 1.8 + (idx * 1.0), w: "90%", fontSize: 14, color: "CCCCCC" });
        });
    }

    // 5. Admin Panel
    slide = pres.addSlide();
    slide.background = { color: "000000" };
    slide.addText("Painel Administrativo (Backoffice)", { x: 0.5, y: 0.5, fontSize: 32, color: "FFFFFF", bold: true });
    slide.addText("Gestão completa do SaaS", { x: 0.5, y: 1.0, fontSize: 18, color: "CCCCCC" });
    
    slide.addText("• Dashboard Global (MRR, Churn)", { x: 1, y: 2, fontSize: 16, color: "FFFFFF" });
    slide.addText("• Gestão de Clientes e Trials", { x: 1, y: 2.5, fontSize: 16, color: "FFFFFF" });
    slide.addText("• Códigos de Convite Controlados", { x: 1, y: 3, fontSize: 16, color: "FFFFFF" });
    slide.addText("• Sistema de Tickets/Bugs", { x: 1, y: 3.5, fontSize: 16, color: "FFFFFF" });

    // 6. Diferencial
    slide = pres.addSlide();
    slide.background = { color: "000000" };
    slide.addText("Diferencial Competitivo", { x: 0.5, y: 0.5, fontSize: 32, color: "FFFFFF", bold: true });
    
    slide.addText("Concorrentes", { x: 1, y: 2, fontSize: 20, color: "FF3B30", bold: true });
    slide.addText("Focam apenas em estoque e anúncios basicos.", { x: 1, y: 2.5, w: "40%", fontSize: 14, color: "CCCCCC" });
    
    slide.addText("Velostock", { x: 5.5, y: 2, fontSize: 20, color: "007AFF", bold: true });
    slide.addText("Visão 360°: Estoque + Publicidade + Operação.", { x: 5.5, y: 2.5, w: "40%", fontSize: 14, color: "CCCCCC" });
    slide.addText("IA Contextual que ajuda a vender.", { x: 5.5, y: 3.5, w: "40%", fontSize: 14, color: "CCCCCC" });

    // 7. Mercado (New Slide)
    slide = pres.addSlide();
    slide.background = { color: "000000" };
    slide.addText("Público Alvo & Mercado", { x: 0.5, y: 0.5, fontSize: 32, color: "FFFFFF", bold: true });
    
    slide.addText("O Cliente Ideal", { x: 1, y: 1.5, fontSize: 18, color: "007AFF", bold: true });
    slide.addText("Lojas de seminovos independentes (20-200 carros).", { x: 1, y: 2.0, w: "80%", fontSize: 14, color: "CCCCCC" });
    slide.addText("Buscam profissionalização e controle.", { x: 1, y: 2.5, w: "80%", fontSize: 14, color: "CCCCCC" });
    
    slide.addText("Números do Mercado", { x: 1, y: 3.5, fontSize: 18, color: "007AFF", bold: true });
    slide.addText("45k+ Revendas no Brasil", { x: 1, y: 4.0, fontSize: 16, color: "FFFFFF" });
    slide.addText("R$ 12B Potencial de Mercado", { x: 5, y: 4.0, fontSize: 16, color: "FFFFFF" });

    // 8. Monetização
    slide = pres.addSlide();
    slide.background = { color: "000000" };
    slide.addText("Monetização", { x: 0.5, y: 0.5, fontSize: 32, color: "FFFFFF", bold: true });
    
    slide.addShape(pres.ShapeType.rect, { x: 3, y: 1.5, w: 4, h: 3.5, fill: { color: "1A1A1A" }, line: { color: "007AFF", width: 2 } });
    slide.addText("Plano Único", { x: 3.5, y: 2, w: 3, fontSize: 24, color: "FFFFFF", align: "center", bold: true });
    slide.addText("R$ 149 / mês", { x: 3.5, y: 2.8, w: 3, fontSize: 40, color: "FFFFFF", align: "center", bold: true });
    slide.addText("Tudo Incluso. Sem taxas.", { x: 3.5, y: 4, w: 3, fontSize: 16, color: "CCCCCC", align: "center" });

    // 8. Encerramento
    slide = pres.addSlide();
    slide.background = { color: "000000" };
    slide.addText("O Futuro é Agora.", { x: 1, y: 2.5, w: "80%", fontSize: 50, color: "FFFFFF", align: "center", bold: true });
    slide.addText("VELOSTOCK", { x: 1, y: 3.5, w: "80%", fontSize: 30, color: "007AFF", align: "center", bold: true });
    slide.addText("Agende uma demo exclusiva", { x: 1, y: 4.5, w: "80%", fontSize: 20, color: "CCCCCC", align: "center" });


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
              <Button onClick={handleDownloadPPTX} className="ml-2 bg-primary hover:bg-primary/90 text-white rounded-full px-4 py-2 flex items-center gap-2 pointer-events-auto shadow-lg">
                <Download size={16} />
                <span className="text-xs font-bold">Baixar PPTX</span>
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