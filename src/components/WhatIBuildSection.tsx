import { Server, CreditCard, Layout, Cpu } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { TechBadge } from "./TechBadge";

const capabilities = [
  {
    icon: Cpu,
    title: "AI-Driven Systems",
    description:
      "Built MCP services using Spring AI to automate booking workflows and invoice generation, reducing manual intervention across reservation systems.",
    tech: ["Spring AI", "MCP", "Docker", "AI Workflows"],
  },
  {
    icon: Server,
    title: "Backend Systems",
    description:
      "Designed and implemented microservices for booking, inventory, and payment workflows, ensuring reliable processing of reservation traffic.",
    tech: ["Spring Boot", "Kafka", "RabbitMQ", "Microservices"],
  },
  {
    icon: CreditCard,
    title: "Payment Infrastructure",
    description:
      "Developed payout, reconciliation, and settlement workflows to ensure accurate financial processing across booking transactions.",
    tech: ["Payments", "Reconciliation", "Settlement", "Fintech"],
  },
  {
    icon: Layout,
    title: "Frontend Systems",
    description:
      "Built customer-facing booking engine and CRS applications using React and Angular, enabling real-time operations and internal workflows.",
    tech: ["React", "Angular", "TypeScript", "REST APIs"],
  }
];

const WhatIBuildSection = () => (
  <section id="about" className="section-padding relative">
    <div className="glow-orb top-0 right-0 h-[350px] w-[350px] bg-secondary/6" />

    <div className="container-narrow relative z-10">

      {/* HEADER */}
      <ScrollReveal>
        <p className="text-sm uppercase tracking-[0.25em] text-primary font-semibold mb-3">
          What I Build
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Engineering Systems at Scale
        </h2>

        <div className="h-1 w-16 rounded-full mb-12 bg-gradient-to-r from-primary to-secondary" />
      </ScrollReveal>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {capabilities.map((cap, i) => (
          <ScrollReveal key={cap.title} direction="up" delay={i * 0.1}>
            <div className="rounded-xl border border-border/20 bg-card/30 p-7 group h-full transition-all duration-300 hover:border-primary/20 hover:bg-card/50 hover:shadow-lg hover:shadow-primary/10">

              {/* ICON */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground mb-5 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                <cap.icon className="h-6 w-6" />
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-bold text-foreground mb-3">
                {cap.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {cap.description}
              </p>

              {/* TECH */}
              <div className="flex flex-wrap gap-2 mt-4">
                {cap.tech.map((tech) => (
                  <TechBadge key={tech} name={tech} />
                ))}
              </div>

            </div>
          </ScrollReveal>
        ))}
      </div>

    </div>
  </section>
);

export default WhatIBuildSection;