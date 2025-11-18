import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const contactSchema = z.object({
  name: z.string()
    .trim()
    .min(2, { message: "Nome deve ter pelo menos 2 caracteres" })
    .max(100, { message: "Nome deve ter no máximo 100 caracteres" }),
  email: z.string()
    .trim()
    .email({ message: "Email inválido" })
    .max(255, { message: "Email deve ter no máximo 255 caracteres" }),
  phone: z.string()
    .trim()
    .min(10, { message: "Telefone deve ter pelo menos 10 dígitos" })
    .max(20, { message: "Telefone deve ter no máximo 20 caracteres" }),
  message: z.string()
    .trim()
    .min(10, { message: "Mensagem deve ter pelo menos 10 caracteres" })
    .max(1000, { message: "Mensagem deve ter no máximo 1000 caracteres" })
});

type ContactFormData = z.infer<typeof contactSchema>;

export function CTA() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
    
      const whatsappMessage = encodeURIComponent(
        `Olá! Meu nome é ${data.name}\n\n` +
        `📧 Email: ${data.email}\n` +
        `📱 Telefone: ${data.phone}\n\n` +
        `Mensagem: ${data.message}`
      );
      window.open(`https://wa.me/5575981565029?text=${whatsappMessage}`, "_blank");
      
      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pelo contato. Responderei em breve!",
      });
      
      reset();
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente ou entre em contato pelo WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-2xl">
   
        <div className="mb-6 text-center">
          <h3 className="mx-auto max-w-3xl text-center">
            <span className="block text-xl md:text-2xl lg:text-3xl font-extrabold tracking-tight">
              <span className="text-foreground">Precisa de um </span>
              <span className="cta-highlight">site, sistema ou automação</span>
              <span className="text-foreground"> para melhorar o seu negócio?</span>
            </span>
            <span className="block mt-3 text-sm md:text-base text-muted-foreground/90 max-w-2xl mx-auto">
              Me mande uma mensagem e conversamos sobre o que você quer construir.
            </span>
          </h3>
        </div>

        <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-border/50">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-foreground tracking-wider uppercase">
            Contato
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <Label htmlFor="name" className="text-foreground/80 mb-2 block text-sm">Seu Nome</Label>
              <Input
                id="name"
                {...register("name")}
                placeholder="Seu Nome"
                className="bg-muted/40 border-border/30 text-foreground placeholder:text-muted-foreground/50 focus:border-accent/50 rounded-lg transition-all duration-300 hover:border-accent/30 hover:bg-muted/50"
              />
              {errors.name && (
                <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="email" className="text-foreground/80 mb-2 block text-sm">Email</Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                placeholder="Seu Email"
                className="bg-muted/40 border-border/30 text-foreground placeholder:text-muted-foreground/50 focus:border-accent/50 rounded-lg transition-all duration-300 hover:border-accent/30 hover:bg-muted/50"
              />
              {errors.email && (
                <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="phone" className="text-foreground/80 mb-2 block text-sm">Telefone</Label>
              <Input
                id="phone"
                {...register("phone")}
                placeholder="(75) 98156-5029"
                className="bg-muted/40 border-border/30 text-foreground placeholder:text-muted-foreground/50 focus:border-accent/50 rounded-lg transition-all duration-300 hover:border-accent/30 hover:bg-muted/50"
              />
              {errors.phone && (
                <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="message" className="text-foreground/80 mb-2 block text-sm">Mensagem</Label>
              <Textarea
                id="message"
                {...register("message")}
                placeholder="Sua Mensagem"
                rows={5}
                className="bg-muted/40 border-border/30 text-foreground placeholder:text-muted-foreground/50 focus:border-accent/50 rounded-lg resize-none transition-all duration-300 hover:border-accent/30 hover:bg-muted/50"
              />
              {errors.message && (
                <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              variant="outline"
              size="lg"
              className="w-full border-2 border-foreground/20 bg-transparent hover:bg-foreground/5 hover:border-foreground/30 text-foreground font-semibold text-base py-6 h-auto rounded-lg tracking-widest uppercase transition-all duration-300 hover:scale-[1.01]"
            >
              {isSubmitting ? "Enviando..." : "Enviar"}
            </Button>
          </form>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4 text-sm">
            Quer ver meus projetos técnicos?
          </p>
          <a
            href="https://github.com/Emannuel-code"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent/80 font-medium text-sm transition-colors underline underline-offset-4"
          >
            Acesse meu portfólio técnico
          </a>
        </div>
      </div>
    </section>
  );
}
