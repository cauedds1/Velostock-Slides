import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Code2, Server, Database, Cpu, ShieldCheck } from "lucide-react";

export default function CodeDetails() {
  return (
    <div className="min-h-screen bg-background p-6 md:p-12 text-foreground">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" className="gap-2 hover-elevate">
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
          <Card className="border-primary/20 bg-card hover-elevate">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code2 className="text-primary" /> Frontend (Interface)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm md:text-base">
              <p>Construído com <strong>React + TypeScript</strong>, garantindo uma interface rápida e segura.</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Tailwind CSS:</strong> Estilização moderna e responsiva.</li>
                <li><strong>Shadcn/UI:</strong> Componentes de interface premium.</li>
                <li><strong>TanStack Query:</strong> Gerenciamento de estado e cache.</li>
                <li><strong>Wouter:</strong> Roteamento ultra-leve.</li>
              </ul>
              <Badge variant="secondary">Moderno (2024+)</Badge>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-card hover-elevate">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Server className="text-primary" /> Backend (Servidor)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm md:text-base">
              <p>Utiliza <strong>Node.js com Express</strong> para uma API RESTful escalável.</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Drizzle ORM:</strong> Acesso ao banco de dados Type-safe.</li>
                <li><strong>Passport.js:</strong> Autenticação e sessões.</li>
                <li><strong>RBAC:</strong> Controle de acesso por funções.</li>
                <li><strong>Zod:</strong> Validação rigorosa de dados.</li>
              </ul>
              <Badge variant="secondary">Moderno (TypeScript First)</Badge>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-card hover-elevate">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="text-primary" /> Banco de Dados & Infra
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm md:text-base">
              <p>Armazenamento utilizando <strong>PostgreSQL (Neon)</strong> serverless.</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Multi-Tenancy:</strong> Isolamento total de dados por empresaId.</li>
                <li><strong>Drizzle Kit:</strong> Gerenciamento de migrações.</li>
                <li><strong>Neon DB:</strong> Escalabilidade automática.</li>
              </ul>
              <Badge variant="secondary">Cloud Native</Badge>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-card hover-elevate">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cpu className="text-primary" /> Inteligência Artificial
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm md:text-base">
              <p>Integração profunda com a <strong>OpenAI (GPT-4o-mini)</strong>.</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>VeloBot:</strong> Assistente contextual inteligente.</li>
                <li><strong>Geração de Anúncios:</strong> Copywriting automático.</li>
                <li><strong>Sugestão de Preços:</strong> Análise baseada em dados.</li>
              </ul>
              <Badge variant="secondary">IA Integrada</Badge>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShieldCheck className="text-primary" /> Estrutura do Código e Organização
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h4 className="font-semibold text-primary">/shared/schema.ts</h4>
                <p className="text-sm text-muted-foreground">O "coração" do sistema. Define tabelas e validações Zod compartilhadas.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-primary">/server/routes.ts</h4>
                <p className="text-sm text-muted-foreground">Onde vive a lógica de negócio e segurança rigorosa.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-primary">/client/src/pages</h4>
                <p className="text-sm text-muted-foreground">Interface modular focada em experiência do usuário.</p>
              </div>
            </div>
            
            <div className="p-4 bg-muted rounded-lg border border-border">
              <h4 className="font-semibold mb-2">Engenharia de Ponta</h4>
              <p className="text-sm text-muted-foreground italic">
                "O VeloStock utiliza TypeScript de ponta a ponta para garantir que o crescimento do sistema seja sustentável, seguro e extremamente rápido."
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
