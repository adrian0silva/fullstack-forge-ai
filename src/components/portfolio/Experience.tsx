import React from "react";

const experiences = [
  {
    role: "Desenvolvedor Fullstack",
    company: "Empresa X",
    period: "2023 — Presente",
    summary:
      "Construção de produtos end-to-end, desde a concepção até a entrega, garantindo qualidade e performance.",
  },
  {
    role: "Desenvolvedor Frontend",
    company: "Startup Y",
    period: "2021 — 2023",
    summary:
      "Criação de interfaces escaláveis, acessíveis e com alto nível de interação.",
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experiencia" className="border-t">
      <div className="container mx-auto py-16">
        <h2 className="text-2xl font-semibold tracking-tight">Experiência</h2>
        <ol className="mt-8 space-y-6">
          {experiences.map((e) => (
            <li key={e.role} className="rounded-lg border bg-card p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="font-medium">{e.role} • {e.company}</p>
                <span className="text-sm text-muted-foreground">{e.period}</span>
              </div>
              <p className="mt-2 text-muted-foreground">{e.summary}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
