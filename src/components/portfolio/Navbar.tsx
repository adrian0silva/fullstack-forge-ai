import React from "react";
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-14 items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight">Dev Fullstack</a>
        <div className="hidden gap-6 md:flex">
          <a href="#projetos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Projetos</a>
          <a href="#habilidades" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Habilidades</a>
          <a href="#experiencia" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Experiência</a>
          <a href="#contato" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contato</a>
        </div>
        <div className="flex items-center gap-2">
          <a href="#contato">
            <Button variant="hero" size="sm">Vamos conversar</Button>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
