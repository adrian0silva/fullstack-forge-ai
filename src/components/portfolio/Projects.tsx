import React from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

const projects: Project[] = [
  {
    title: "Dashboard SaaS",
    description:
      "Plataforma completa com autenticação, cobrança e relatórios em tempo real.",
    tags: ["React", "Supabase", "Recharts"],
    link: "#",
  },
  {
    title: "E-commerce headless",
    description:
      "Loja performática com catálogos dinâmicos, carrinho persistente e checkout.",
    tags: ["React", "Stripe", "Edge Functions"],
    link: "#",
  },
  {
    title: "CMS para conteúdos",
    description:
      "Editor rico, versionamento e publicação com pré-visualização instantânea.",
    tags: ["React", "Markdown", "Cloud"],
    link: "#",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projetos" className="border-t">
      <div className="container mx-auto py-16">
        <h2 className="text-2xl font-semibold tracking-tight">Projetos em destaque</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Alguns trabalhos que demonstram meu processo e qualidade técnica.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((p) => (
            <Card key={p.title} className="group transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-[var(--shadow-elegant)]">
              <CardHeader>
                <CardTitle>{p.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span key={tag} className="rounded-full border px-2 py-1 text-xs text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="justify-end">
                <a href={p.link} aria-label={`Abrir projeto ${p.title}`}>
                  <Button variant="outline" size="sm">Ver mais</Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
