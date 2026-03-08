import { Server, CreditCard, Layout } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const capabilities = [
  {
    icon: Server,
    title: "Scalable Backend Systems",
    description: "Designing microservices architectures using Spring Boot, REST APIs, and distributed messaging with Kafka and RabbitMQ.",
  },
  {
    icon: CreditCard,
    title: "Payment Infrastructure",
    description: "Building payout processing, settlement workflows, reconciliation systems, and financial reporting tools for fintech platforms.",
  },
  {
    icon: Layout,
    title: "Full Stack Platforms",
    description: "Developing admin dashboards and operational tooling using React, TypeScript, and modern UI frameworks with data-driven insights.",
  },
];

const WhatIBuildSection = () => (
  <section id="about" className="section-padding relative">
    <div className="glow-orb top-0 right-0 h-[350px] w-[350px] bg-secondary/6" />

    <div className="container-narrow relative z-10">
      <ScrollReveal>
        <p className="text-sm uppercase tracking-[0.25em] text-primary font-semibold mb-3">
          What I Build
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Engineering at Scale
        </h2>
        <div className="h-1 w-16 rounded-full mb-12 bg-gradient-to-r from-primary to-secondary" />
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-6">
        {capabilities.map((cap, i) => (
          <ScrollReveal key={cap.title} direction="up" delay={i * 0.1}>
            <div className="glass glass-hover rounded-2xl p-7 group h-full">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground mb-5 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                <cap.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">{cap.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{cap.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default WhatIBuildSection;
