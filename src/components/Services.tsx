import { Settings, Monitor, Zap } from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "⚙️ Sistemas Personalizados",
    description: "Automatizo processos e organizo o fluxo de trabalho da sua empresa.",
  },
  {
    icon: Monitor,
    title: "💻 Sites Profissionais",
    description: "Sites rápidos, modernos e responsivos que refletem a identidade do seu negócio.",
  },
  {
    icon: Zap,
    title: "🤖 Automação Inteligente",
    description: "Soluções simples para reduzir tarefas manuais e aumentar sua produtividade.",
  },
];

export function Services() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-4">
          O que eu <span className="text-accent">faço</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          Soluções completas para transformar seu negócio
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 group backdrop-blur-sm"
              style={{ 
                background: 'rgba(255, 255, 255, 0.05)',
                transition: 'transform 0.3s, background 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(155, 107, 255, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
              }}
            >
              <h3 className="text-xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
