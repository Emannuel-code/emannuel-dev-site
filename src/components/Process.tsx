import { MessageCircle, Lightbulb, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    number: "1",
    title: "Você me conta sobre seu negócio",
    description: "Escuto sua necessidade, o problema que quer resolver e como funciona o seu dia a dia.",
  },
  {
    icon: Lightbulb,
    number: "2",
    title: "Planejo a melhor solução",
    description: "Desenho a estratégia ideal para o seu caso",
  },
  {
    icon: Rocket,
    number: "3",
    title: "Desenvolvo e entrego",
    description: "Entrego tudo com qualidade, ajusto conforme necessário e disponibilizo suporte após a implementação.",
  },
];

export function Process() {
  return (
    <section className="py-20 px-6 bg-gradient-subtle">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-4">
          Como <span className="text-accent">funciona</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          Processo simples e transparente
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-card-elevated rounded-2xl p-8 border border-border relative hover:shadow-card transition-all duration-300"
            >
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-xl shadow-glow">
                {step.number}
              </div>
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 mt-4">
                <step.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
