import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--x", `${x}%`);
    el.style.setProperty("--y", `${y}%`);
  };

  return (
    <section id="home" className="relative overflow-hidden">
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        className="relative isolate"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(600px circle at var(--x,50%) var(--y,50%), hsl(var(--primary)/0.25), transparent 60%)",
            transition: "background-position 0.2s ease-out",
          }}
        />
        <div className="container mx-auto grid min-h-[72vh] place-items-center py-20">
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full border px-3 py-1 text-xs text-muted-foreground">Portfólio</span>
            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Desenvolvedor Fullstack
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-balance text-muted-foreground">
              Crio aplicações web modernas, performáticas e escaláveis — do frontend ao backend — com foco em experiência e resultados.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <a href="#projetos">
                <Button variant="hero" size="lg" className="">
                  Ver projetos <ArrowRight className="ml-1" />
                </Button>
              </a>
              <a href="#contato">
                <Button variant="outline" size="lg">Entrar em contato</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
