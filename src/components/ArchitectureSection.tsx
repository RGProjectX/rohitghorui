import { ArrowDown, Database, Globe, Layers, Radio, Server, Zap } from "lucide-react";

const layers = [
  { icon: Globe, label: "Client Applications", desc: "Web & mobile apps consuming REST APIs", color: "text-secondary" },
  { icon: Server, label: "API Gateway", desc: "Load balancing, rate limiting, authentication", color: "text-primary" },
  { icon: Layers, label: "Spring Boot Microservices", desc: "Domain-driven services with REST & gRPC", color: "text-primary" },
  { icon: Radio, label: "Kafka Event Stream", desc: "Async messaging for decoupled communication", color: "text-accent-foreground" },
  { icon: Zap, label: "Redis Cache", desc: "In-memory caching for low-latency reads", color: "text-secondary" },
  { icon: Database, label: "MySQL Database", desc: "Persistent storage with read replicas", color: "text-primary" },
];

const ArchitectureSection = () => (
  <section id="architecture" className="section-padding relative">
    <div className="glow-orb bottom-0 left-0 h-[400px] w-[400px] bg-primary/6" />

    <div className="container-narrow relative z-10">
      <p className="text-sm uppercase tracking-[0.25em] text-primary font-semibold mb-3">
        System Design
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Architecture Overview
      </h2>
      <div className="h-1 w-16 rounded-full mb-6 bg-gradient-to-r from-primary to-secondary" />
      <p className="text-muted-foreground max-w-2xl mb-12">
        Building scalable distributed systems using event-driven architecture, 
        caching layers, and microservices patterns for high-throughput fintech platforms.
      </p>

      <div className="max-w-lg mx-auto space-y-0">
        {layers.map((layer, i) => (
          <div key={layer.label}>
            <div className="glass glass-hover rounded-xl p-5 flex items-center gap-4">
              <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-accent ${layer.color} shrink-0`}>
                <layer.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <h4 className="text-sm font-bold text-foreground">{layer.label}</h4>
                <p className="text-xs text-muted-foreground">{layer.desc}</p>
              </div>
            </div>
            {i < layers.length - 1 && (
              <div className="flex justify-center py-2">
                <ArrowDown className="h-4 w-4 text-primary/40" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ArchitectureSection;
