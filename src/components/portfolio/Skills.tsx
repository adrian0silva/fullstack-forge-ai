import React from "react";
import { Code2, Server, Database, Boxes, Cloud, ShieldCheck } from "lucide-react";

const skills = [
  { icon: Code2, label: "Frontend (React, TS)" },
  { icon: Server, label: "APIs REST/GraphQL" },
  { icon: Database, label: "SQL & NoSQL" },
  { icon: Cloud, label: "Cloud & DevOps" },
  { icon: Boxes, label: "Arquitetura & Design System" },
  { icon: ShieldCheck, label: "Boas práticas & Segurança" },
];

const Skills: React.FC = () => {
  return (
    <section id="habilidades" className="border-t">
      <div className="container mx-auto py-16">
        <h2 className="text-2xl font-semibold tracking-tight">Habilidades</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Stack focada em produtividade, qualidade e manutenção.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s) => (
            <div
              key={s.label}
              className="group rounded-lg border bg-card p-5 transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-[var(--shadow-elegant)]"
            >
              <div className="flex items-center gap-3">
                <div className="grid size-10 place-items-center rounded-md bg-secondary text-foreground">
                  <s.icon className="size-5" />
                </div>
                <p className="font-medium">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
