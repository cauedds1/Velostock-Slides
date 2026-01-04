import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronRight, 
  ChevronLeft, 
  Car, 
  Zap, 
  ShieldCheck, 
  DollarSign,
  Play,
  Settings,
  Target,
  Users,
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  BrainCircuit,
  LayoutDashboard,
  Layers
} from "lucide-react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from "recharts";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Import the generated background
import heroBg from "@assets/generated_images/velostock_dashboard_concept_car_dealership.png";

// --- Types & Data ---

const slidesData = [
  { id: "abertura", type: "title", title: "Velostock", subtitle: "Gestão Operacional Inteligente de Veículos" },
  { id: "dor", type: "text", title: "A Dor do Mercado", subtitle: "O Caos da Gestão Tradicional" },
  { id: "solucao", type: "feature", title: "A Solução", subtitle: "Velostock: Controle Total" },
  { id: "funcionalidades", type: "list", title: "Funcionalidades", subtitle: "Muito Além do Estoque" },
  { id: "diferencial", type: "compare", title: "Diferencial Competitivo", subtitle: "Por que somos melhores?" },
  { id: "publico", type: "stats", title: "Público & Mercado", subtitle: "Quem servimos" },
  { id: "monetizacao", type: "money", title: "Monetização", subtitle: "Modelo de Negócio" },
  { id: "desafios", type: "text", title: "Desafios", subtitle: "Próximos Passos" },
  { id: "encerramento", type: "final", title: "Junte-se a Nós", subtitle: "O Futuro da Gestão Automotiva" },
];

const chartData = [
  { name: "Tradicional", value: 40, label: "Eficiência Baixa" },
  { name: "Com Velostock", value: 95, label: "Alta Performance" },
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
          className="absolute inset-0 w-full h-full overflow-hidden bg-background text-foreground"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// 1. Abertura
const SlideAbertura = () => (
  <div className="w-full h-full flex relative bg-background">
    <div className="w-1/2 h-full flex flex-col justify-center px-24 z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <span className="text-secondary font-display font-semibold tracking-wider uppercase text-sm mb-4 block glow-text">
          Revolução Automotiva
        </span>
        <h1 className="text-8xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary leading-tight mb-4">
          Velostock
        </h1>
        <h2 className="text-3xl font-display font-medium text-slate-300 mb-8">
          Foco em Gestão <span className="text-primary font-bold">OPERACIONAL</span>. <br/>Não apenas estoque.
        </h2>
        
        <p className="mt-4 text-slate-400 max-w-lg text-lg leading-relaxed font-body border-l-4 border-secondary pl-6">
          "Hoje, milhares de revendas perdem dinheiro e tempo tentando gerenciar operações complexas com planilhas e sistemas incompletos."
        </p>

        <div className="mt-12 flex gap-4">
          <Button size="lg" className="rounded-full bg-gradient-to-r from-primary to-purple-800 hover:from-purple-600 hover:to-primary text-white shadow-lg shadow-purple-900/50 px-8 py-6 text-lg font-medium border-0 transition-all hover:scale-105">
            <Play className="w-5 h-5 mr-2 fill-current" /> Ver Apresentação
          </Button>
        </div>
      </motion.div>
    </div>

    <div className="absolute top-0 right-0 w-3/5 h-full z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
    </div>
  </div>
);

// 2. Dor do Mercado
const SlideDor = () => (
  <div className="w-full h-full p-24 flex gap-16 items-center bg-background">
    <div className="w-1/2 space-y-8">
       <div className="inline-block px-4 py-1 rounded-full bg-red-500/10 text-red-400 font-bold text-sm tracking-wider mb-2 border border-red-500/20">
         O PROBLEMA
       </div>
       <h2 className="text-5xl font-display font-bold text-white mb-6">
         Caos Operacional &<br/> <span className="text-red-500">Lucro Invisível</span>
       </h2>
       
       <div className="space-y-6">
         {[
           { title: "Descontrole Financeiro", desc: "Sem aprovação de custos, margens reais são desconhecidas." },
           { title: "Processos Manuais", desc: "Planilhas, papelada e WhatsApp descentralizado." },
           { title: "Cegueira Operacional", desc: "Não sabem onde o carro está ou o que foi feito nele." },
           { title: "Perda de Oportunidades", desc: "Leads perdidos por falta de follow-up organizado." }
         ].map((item, i) => (
           <motion.div 
             key={i}
             className="flex gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-red-500/50 transition-colors"
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.4 + (i * 0.1) }}
           >
             <AlertTriangle className="text-red-500 shrink-0 mt-1" />
             <div>
               <h3 className="text-xl font-bold text-slate-200">{item.title}</h3>
               <p className="text-slate-400">{item.desc}</p>
             </div>
           </motion.div>
         ))}
       </div>
    </div>
    
    <div className="w-1/2 relative flex justify-center">
      <div className="relative w-full max-w-md aspect-square bg-gradient-to-br from-red-900/20 to-purple-900/20 rounded-full flex items-center justify-center border border-white/5 animate-pulse-slow">
         <div className="text-center space-y-4 z-10">
           <h3 className="text-6xl font-bold text-white">40%</h3>
           <p className="text-xl text-slate-400">Perda de Eficiência</p>
           <p className="text-sm text-slate-500 max-w-xs mx-auto">Em lojas que não utilizam gestão integrada.</p>
         </div>
      </div>
    </div>
  </div>
);

// 3. Solução
const SlideSolucao = () => (
  <div className="w-full h-full p-24 flex flex-col items-center justify-center bg-background relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background z-0" />
    
    <div className="z-10 text-center max-w-4xl mb-16">
      <span className="text-secondary font-bold tracking-[0.2em] mb-4 block">A SOLUÇÃO VELOSTOCK</span>
      <h2 className="text-6xl font-display font-bold text-white mb-8">
        Um ecossistema completo para<br/>
        <span className="text-gradient">acelerar sua revenda</span>
      </h2>
      <p className="text-xl text-slate-300 leading-relaxed">
        Centralizamos operação, financeiro, CRM e publicidade em uma única plataforma inteligente que automatiza o trabalho pesado.
      </p>
    </div>

    <div className="grid grid-cols-3 gap-8 w-full max-w-6xl z-10">
      {[
        { icon: LayoutDashboard, title: "Gestão 360°", desc: "Do recebimento do veículo até a venda e pós-venda." },
        { icon: BrainCircuit, title: "IA Integrada", desc: "VeloBot para coaching, anúncios e precificação inteligente." },
        { icon: CheckCircle, title: "Rastreabilidade", desc: "Histórico completo de cada veículo e ação na loja." }
      ].map((card, i) => (
        <motion.div 
          key={i}
          className="bg-card/50 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-all hover:-translate-y-2 group"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + (i * 0.1) }}
        >
          <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
            <card.icon className="w-7 h-7 text-primary" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">{card.title}</h3>
          <p className="text-slate-400">{card.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

// 4. Funcionalidades
const SlideFuncionalidades = () => (
  <div className="w-full h-full p-20 flex bg-background">
    <div className="w-1/3 pr-12 border-r border-white/5">
      <h2 className="text-4xl font-display font-bold text-white mb-8">
        15 Funcionalidades<br/>Poderosas
      </h2>
      <p className="text-slate-400 mb-8 text-lg">
        Tudo o que uma loja precisa para operar com eficiência máxima e controle total.
      </p>
      
      <div className="space-y-4">
        <div className="flex items-center gap-3 text-secondary">
          <Zap className="w-5 h-5" />
          <span className="font-semibold">Automação Inteligente</span>
        </div>
        <div className="flex items-center gap-3 text-primary">
          <ShieldCheck className="w-5 h-5" />
          <span className="font-semibold">Controle Financeiro</span>
        </div>
        <div className="flex items-center gap-3 text-blue-400">
          <Users className="w-5 h-5" />
          <span className="font-semibold">CRM & Leads</span>
        </div>
      </div>
    </div>

    <div className="w-2/3 pl-12 grid grid-cols-2 gap-x-12 gap-y-8 overflow-y-auto">
      {[
        "Veículos (Kanban, Checklist)", "Custos com Aprovação", "Vendas & Comissões", 
        "Garantia & Pós-Venda", "Observações Internas", "Contas a Pagar/Receber",
        "CRM & Leads", "Follow-ups Automáticos", "IA (VeloBot & Coaching)",
        "Dashboard & Métricas", "Gestão de Usuários", "Relatórios Customizados",
        "Gestão de Documentos", "Checklists Personalizados", "Tarefas da Loja"
      ].map((func, i) => (
        <motion.div 
          key={i}
          className="flex items-center gap-3 border-b border-white/5 pb-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 + (i * 0.05) }}
        >
          <div className="w-2 h-2 rounded-full bg-secondary" />
          <span className="text-lg text-slate-300">{func}</span>
        </motion.div>
      ))}
    </div>
  </div>
);

// 5. Diferencial Competitivo
const SlideDiferencial = () => (
  <div className="w-full h-full p-24 flex flex-col items-center bg-background">
    <h2 className="text-4xl font-display font-bold text-white mb-16 text-center">
      Por que o <span className="text-primary">Velostock</span> vence?
    </h2>

    <div className="w-full max-w-5xl grid grid-cols-3 gap-8">
      {/* Concorrentes */}
      <div className="col-span-1 space-y-4 opacity-50 blur-[1px] hover:blur-0 transition-all duration-500">
        <h3 className="text-xl font-bold text-slate-500 text-center mb-6">Concorrentes Tradicionais</h3>
        <Card className="bg-transparent border-red-500/30 border-dashed">
          <CardContent className="p-6 text-center">
            <p className="text-red-400 font-bold mb-2">Foco Limitado</p>
            <p className="text-sm text-slate-500">Apenas Estoque + Anúncios</p>
          </CardContent>
        </Card>
        <Card className="bg-transparent border-red-500/30 border-dashed">
          <CardContent className="p-6 text-center">
            <p className="text-red-400 font-bold mb-2">Sem Processos</p>
            <p className="text-sm text-slate-500">Não gerencia a operação diária</p>
          </CardContent>
        </Card>
        <Card className="bg-transparent border-red-500/30 border-dashed">
          <CardContent className="p-6 text-center">
            <p className="text-red-400 font-bold mb-2">Dados Isolados</p>
            <p className="text-sm text-slate-500">Sem inteligência real</p>
          </CardContent>
        </Card>
      </div>

      {/* Velostock - Destaque */}
      <div className="col-span-2 space-y-4 relative">
        <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-xl -z-10" />
        <h3 className="text-2xl font-bold text-white text-center mb-6 flex items-center justify-center gap-2">
           <span className="bg-primary text-white text-xs px-2 py-1 rounded-sm">VANTAGEM</span>
           Velostock
        </h3>
        
        <div className="grid grid-cols-2 gap-4">
          {[
            { t: "Operação Completa", d: "Rastreio 100% de veículos e tarefas da loja." },
            { t: "CRM com IA", d: "VeloBot com contexto total para ajudar vendedores." },
            { t: "Financeiro Real", d: "Aprovação de custos e cálculo de margem automático." },
            { t: "Pós-Venda", d: "Gestão de garantia integrada ao histórico." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              className="bg-card p-6 rounded-xl border-l-4 border-secondary shadow-lg hover:shadow-secondary/20 transition-all"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 + (i * 0.1) }}
            >
              <h4 className="font-bold text-lg text-white mb-2">{item.t}</h4>
              <p className="text-sm text-slate-400">{item.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// 6. Público & Mercado
const SlidePublico = () => (
  <div className="w-full h-full p-24 flex gap-12 bg-background">
    <div className="w-1/2 flex flex-col justify-center">
      <h2 className="text-4xl font-display font-bold text-white mb-8">
        Mercado & Estratégia
      </h2>
      <div className="space-y-8">
        <div>
          <h3 className="text-secondary font-bold text-xl mb-2">Cliente Ideal (ICP)</h3>
          <p className="text-slate-300">Revendas de veículos usados multimarca, com estoque entre 20 a 200 carros, que sofrem com desorganização operacional.</p>
        </div>
        <div>
          <h3 className="text-primary font-bold text-xl mb-2">Estratégia de Expansão</h3>
          <p className="text-slate-300">Início focado em nichos regionais com dores latentes, expandindo para redes de concessionárias através de módulos enterprise.</p>
        </div>
        <div className="pt-4 border-t border-white/10">
           <div className="flex gap-12">
             <div>
               <p className="text-4xl font-bold text-white">45k+</p>
               <p className="text-sm text-slate-500 uppercase tracking-wider mt-1">Lojas no Brasil</p>
             </div>
             <div>
               <p className="text-4xl font-bold text-white">R$ 12B</p>
               <p className="text-sm text-slate-500 uppercase tracking-wider mt-1">Mercado SaaS Auto</p>
             </div>
           </div>
        </div>
      </div>
    </div>
    <div className="w-1/2 flex items-center justify-center">
      <Card className="w-full h-80 bg-card/50 border-white/10 backdrop-blur-sm">
        <CardContent className="p-6 h-full flex flex-col">
          <h3 className="text-lg font-medium text-white mb-4">Eficiência Operacional Projetada</h3>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#333" />
              <XAxis type="number" hide />
              <YAxis dataKey="name" type="category" width={100} tick={{fill: '#94a3b8'}} axisLine={false} tickLine={false} />
              <Tooltip cursor={{fill: 'transparent'}} contentStyle={{backgroundColor: '#1e1b4b', borderColor: '#4c1d95', color: '#fff'}} />
              <Bar dataKey="value" fill="url(#colorGradient)" barSize={40} radius={[0, 4, 4, 0]}>
                {
                  chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 1 ? 'hsl(151, 84%, 39%)' : 'hsl(258, 90%, 66%)'} />
                  ))
                }
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  </div>
);

// 7. Monetização
const SlideMonetizacao = () => (
  <div className="w-full h-full p-24 flex flex-col items-center justify-center bg-background">
     <h2 className="text-5xl font-display font-bold text-white mb-16">
       Modelo de Receita
     </h2>
     
     <div className="flex gap-8 w-full max-w-5xl">
       {/* Plano Basic */}
       <div className="flex-1 bg-card/30 border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center opacity-70 hover:opacity-100 transition-all">
         <div className="text-slate-400 font-bold mb-4">MENSALIDADE SaaS</div>
         <div className="text-4xl font-bold text-white mb-2">R$ 397<span className="text-lg font-normal text-slate-500">/mês</span></div>
         <p className="text-sm text-slate-400 mb-8">Ticket Médio Inicial</p>
         <ul className="text-slate-300 space-y-3 mb-8 text-sm">
           <li>Até 50 Carros</li>
           <li>3 Usuários</li>
           <li>Gestão Básica</li>
         </ul>
       </div>

       {/* Plano Pro (Destaque) */}
       <div className="flex-1 bg-gradient-to-b from-primary/10 to-card border border-primary rounded-2xl p-8 flex flex-col items-center text-center relative transform scale-110 shadow-2xl shadow-primary/20">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
           Mais Popular
         </div>
         <div className="text-primary font-bold mb-4">GROWTH</div>
         <div className="text-5xl font-bold text-white mb-2">R$ 697<span className="text-lg font-normal text-slate-500">/mês</span></div>
         <p className="text-sm text-slate-400 mb-8">Expansão e Controle</p>
         <ul className="text-white space-y-3 mb-8 text-sm font-medium">
           <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-secondary" /> Até 150 Carros</li>
           <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-secondary" /> 10 Usuários</li>
           <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-secondary" /> VeloBot IA Completo</li>
           <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-secondary" /> CRM Avançado</li>
         </ul>
       </div>

       {/* Futuro */}
       <div className="flex-1 bg-card/30 border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center opacity-70 hover:opacity-100 transition-all">
         <div className="text-slate-400 font-bold mb-4">FUTURO</div>
         <div className="text-2xl font-bold text-white mb-2">Upsell & Marketplace</div>
         <p className="text-sm text-slate-400 mb-8">Fontes Adicionais</p>
         <ul className="text-slate-300 space-y-3 mb-8 text-sm">
           <li>Taxas de Financiamento</li>
           <li>Integração com Seguros</li>
           <li>Marketplace de Peças</li>
         </ul>
       </div>
     </div>
  </div>
);

// 8. Desafios & Encerramento
const SlideFinal = () => (
  <div className="w-full h-full p-24 flex flex-col items-center justify-center bg-background text-center">
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8 max-w-3xl"
    >
      <h2 className="text-6xl font-display font-bold text-white mb-8">
        O Desafio Atual
      </h2>
      <p className="text-2xl text-slate-300 leading-relaxed">
        "Estamos prontos para escalar, mas precisamos de parceiros estratégicos para acelerar nossa penetração no mercado e refinar nossa inteligência artificial."
      </p>
      
      <div className="pt-16 mt-16 border-t border-white/10">
        <p className="text-slate-500 uppercase tracking-widest text-sm mb-4">Entre em contato</p>
        <h3 className="text-4xl font-bold text-primary mb-8">parceria@velostock.com.br</h3>
        
        <div className="flex justify-center gap-4">
          <Button size="lg" className="rounded-full bg-secondary hover:bg-emerald-600 text-white px-8">
            Agendar Reunião
          </Button>
          <Button size="lg" variant="outline" className="rounded-full border-white/20 text-white hover:bg-white/10">
            Ver Demo
          </Button>
        </div>
      </div>
    </motion.div>
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
    <div className="w-screen h-screen bg-black flex items-center justify-center overflow-hidden font-sans">
      {/* Slide Container (16:9 Aspect Ratio) */}
      <div className="relative w-full max-w-[1600px] aspect-video bg-background shadow-2xl rounded-xl overflow-hidden border border-white/10">
        
        {/* Slides */}
        <div className="w-full h-full relative">
            <SlideWrapper isActive={currentSlide === 0} direction={direction}><SlideAbertura /></SlideWrapper>
            <SlideWrapper isActive={currentSlide === 1} direction={direction}><SlideDor /></SlideWrapper>
            <SlideWrapper isActive={currentSlide === 2} direction={direction}><SlideSolucao /></SlideWrapper>
            <SlideWrapper isActive={currentSlide === 3} direction={direction}><SlideFuncionalidades /></SlideWrapper>
            <SlideWrapper isActive={currentSlide === 4} direction={direction}><SlideDiferencial /></SlideWrapper>
            <SlideWrapper isActive={currentSlide === 5} direction={direction}><SlidePublico /></SlideWrapper>
            <SlideWrapper isActive={currentSlide === 6} direction={direction}><SlideMonetizacao /></SlideWrapper>
            <SlideWrapper isActive={currentSlide === 7} direction={direction}><SlideFinal /></SlideWrapper>
            {/* O roteiro tem 9 pontos, combinei Desafios e Encerramento no SlideFinal para impacto */}
        </div>

        {/* Floating Navigation Controls */}
        <div className="absolute bottom-8 right-8 flex items-center gap-4 z-50">
           <div className="bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-sm font-medium text-slate-400">
             {currentSlide + 1} / {slidesData.length - 1} {/* Adjust count for display */}
           </div>
           
           <div className="flex gap-2">
             <Button 
               variant="ghost" 
               size="icon" 
               onClick={prevSlide} 
               disabled={currentSlide === 0}
               className="rounded-full w-12 h-12 bg-black/50 hover:bg-white/10 text-white border border-white/10 disabled:opacity-30"
             >
               <ChevronLeft className="w-5 h-5" />
             </Button>
             
             <Button 
               variant="default" 
               size="icon" 
               onClick={nextSlide} 
               disabled={currentSlide === slidesData.length - 1} // Corrected index check
               className="rounded-full w-12 h-12 bg-primary hover:bg-purple-600 shadow-lg shadow-purple-900/50 text-white border-0"
             >
               <ChevronRight className="w-5 h-5" />
             </Button>
           </div>
        </div>

        {/* Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
          <motion.div 
            className="h-full bg-gradient-to-r from-primary to-secondary"
            initial={{ width: "0%" }}
            animate={{ width: `${((currentSlide + 1) / (slidesData.length)) * 100}%` }} // Corrected logic
            transition={{ duration: 0.5 }}
          />
        </div>

      </div>
    </div>
  );
}