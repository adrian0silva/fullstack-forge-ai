import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="border-t">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-10 sm:flex-row">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Seu Nome. Todos os direitos reservados.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#" aria-label="GitHub" className="text-muted-foreground hover:text-foreground">GitHub</a>
          <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground">LinkedIn</a>
          <a href="#contato" className="text-muted-foreground hover:text-foreground">Contato</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
