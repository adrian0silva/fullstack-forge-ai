import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (!data.get("nome") || !data.get("email") || !data.get("mensagem")) {
      toast({ title: "Preencha todos os campos." });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      form.reset();
      toast({ title: "Mensagem enviada!", description: "Retornarei em breve." });
    }, 800);
  };

  return (
    <section id="contato" className="border-t">
      <div className="container mx-auto py-16">
        <h2 className="text-2xl font-semibold tracking-tight">Contato</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Tem uma ideia ou vaga? Envie uma mensagem — vamos construir algo incrível.
        </p>
        <form onSubmit={onSubmit} className="mt-8 grid max-w-xl gap-4">
          <div>
            <label htmlFor="nome" className="text-sm text-muted-foreground">Nome</label>
            <Input id="nome" name="nome" placeholder="Seu nome" />
          </div>
          <div>
            <label htmlFor="email" className="text-sm text-muted-foreground">Email</label>
            <Input id="email" name="email" type="email" placeholder="voce@exemplo.com" />
          </div>
          <div>
            <label htmlFor="mensagem" className="text-sm text-muted-foreground">Mensagem</label>
            <Textarea id="mensagem" name="mensagem" placeholder="Conte-me sobre o projeto" rows={5} />
          </div>
          <div>
            <Button type="submit" variant="hero" disabled={loading}>
              {loading ? "Enviando..." : "Enviar mensagem"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
