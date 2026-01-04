import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Code2, Server, Database, Globe, Cpu, ShieldCheck } from "lucide-react";

export default function CodeDetails() {
  return (
    <div className="min-h-screen bg-background p-6 md:p-12">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" className="gap-2">
              <ChevronLeft className="h-4 w-4" /> Voltar para Apresentação
            </Button>
          </Link>
          <Badge variant="outline" className="text-primary border-primary">VeloStock Architecture v1.0</Badge>
        </div>

        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight">Arquitetura e Engenharia do Sistema</h1>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Uma visão técnica detalhada sobre como o VeloStock foi construído, utilizando as tecnologias mais modernas do mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code2 className="text-primary" /> Frontend (Interface)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Construído com <strong>React + TypeScript</strong>, garantindo uma interface rápida, segura e com detecção de erros em tempo de desenvolvimento.</p>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                <li><strong>Tailwind CSS:</strong> Estilização atômica e responsiva de última geração.</li>
                <li><strong>Shadcn/UI:</strong> Componentes de interface premium baseados em Radix UI.</li>
                <li><strong>TanStack Query:</strong> Gerenciamento inteligente de estado e cache de dados.</li>
                <li><strong>Wouter:</strong> Roteamento ultra-leve focado em performance.</li>
              </ul>
              <Badge>Moderno (2024+)</Badge>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Server className="text-primary" /> Backend (Servidor)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Utiliza <strong>Node.js com Express</strong> para uma API RESTful escalável e de baixa latência.</p>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                <li><strong>Drizzle ORM:</strong> Acesso ao banco de dados com segurança de tipos (Type-safe).</li>
                <li><strong>Passport.js:</strong> Sistema robusto de autenticação e sessões.</li>
                <li><strong>RBAC:</strong> Controle de acesso baseado em funções para multi-tenancy.</li>
                <li><strong>Zod:</strong> Validação rigorosa de dados em tempo real.</li>
              </ul>
              <Badge>Moderno (TypeScript First)</Badge>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="text-primary" /> Banco de Dados & Infra
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Armazenamento crítico utilizando <strong>PostgreSQL (Neon)</strong>, um banco de dados relacional serverless.</p>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                <li><strong>Multi-Tenancy:</strong> Isolamento total de dados por empresaId.</li>
                <li><strong>Drizzle Kit:</strong> Gerenciamento de migrações simplificado.</li>
                <li><strong>Neon DB:</strong> Escalabilidade automática e alta disponibilidade.</li>
              </ul>
              <Badge>Cloud Native</Badge>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cpu className="text-primary" /> Inteligência Artificial
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Integração profunda com a <strong>OpenAI (GPT-4o-mini)</strong> para automação operacional.</p>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                <li><strong>VeloBot:</strong> Assistente contextual que entende o estoque.</li>
                <li><strong>Geração de Anúncios:</strong> Copywriting automático para vendas.</li>
                <li><strong>Sugestão de Preços:</strong> Análise preditiva baseada em dados.</li>
              </ul>
              <Badge>IA Integrada</Badge>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShieldCheck className="text-primary" /> Estrutura do Código e Organização
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h4 className="font-semibold text-primary">/shared/schema.ts</h4>
                <p className="text-sm text-muted-foreground">O "coração" do sistema. Define tabelas e validações Zod compartilhadas entre Front e Back, eliminando erros de comunicação.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-primary">/server/routes.ts</h4>
                <p className="text-sm text-muted-foreground">Onde vive a lógica de negócio. Módulos de veículos, leads e financeiro protegidos por segurança rigorosa.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-primary">/client/src/pages</h4>
                <p className="text-sm text-muted-foreground">Interface modular seguindo princípios de design limpo (estilo Linear/Notion), focada em experiência do usuário.</p>
              </div>
            </div>
            
            <div className="p-4 bg-muted rounded-lg border border-border">
              <h4 className="font-semibold mb-2">Por que esta arquitetura?</h4>
              <p className="text-sm text-muted-foreground italic">
                "O VeloStock não é apenas um software de estoque; é uma plataforma de engenharia de dados. Escolhemos TypeScript de ponta a ponta para garantir que o crescimento do sistema seja sustentável, seguro e extremamente rápido para o usuário final."
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
