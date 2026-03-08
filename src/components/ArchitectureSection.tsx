import { FaReact, FaServer } from "react-icons/fa";
import { SiSpringboot, SiApachekafka, SiRedis, SiMysql, SiMongodb, SiRabbitmq } from "react-icons/si";
import { Shield, Globe, Database, Workflow } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { ReactNode } from "react";

interface BentoItem {
  title: string;
  description: string;
  tech?: string[];
  icon: ReactNode;
  colSpan: string;
}

const items: BentoItem[] = [
  {
    title: "Client Applications",
    description: "Web and mobile apps initiate API requests to backend services — React dashboards, mobile apps, and third-party integrations.",
    icon: <Globe className="h-6 w-6" />,
    tech: ["React", "TypeScript", "REST APIs"],
    colSpan: "md:col-span-2",
  },
  {
    title: "API Gateway",
    description: "Handles routing, rate limiting, authentication validation, and request filtering.",
    icon: <FaServer />,
    tech: ["Spring Gateway", "Nginx"],
    colSpan: "md:col-span-1",
  },
  {
    title: "Auth Service",
    description: "Validates user identity using JWT tokens and security rules via Spring Security & OAuth.",
    icon: <Shield className="h-6 w-6" />,
    tech: ["JWT", "OAuth", "Spring Security"],
    colSpan: "md:col-span-1",
  },
  {
    title: "Spring Boot Microservices",
    description: "Core business logic for payments, booking workflows, and financial operations — Payment Service, Reservation Service, Payout Service.",
    icon: <SiSpringboot />,
    tech: ["Spring Boot", "REST", "Microservices"],
    colSpan: "md:col-span-2",
  },
  {
    title: "Event Streaming",
    description: "Processes async workflows and decouples services for scalable event-driven architecture.",
    icon: <SiApachekafka />,
    tech: ["Kafka", "RabbitMQ"],
    colSpan: "md:col-span-1",
  },
  {
    title: "Redis Cache",
    description: "In-memory store for frequently accessed data — fast reads and reduced database load.",
    icon: <SiRedis />,
    tech: ["Redis", "Caching"],
    colSpan: "md:col-span-1",
  },
  {
    title: "Database Layer",
    description: "Persistent storage for transactions, bookings, and payment records with relational and document models.",
    icon: <Database className="h-6 w-6" />,
    tech: ["MySQL", "MongoDB"],
    colSpan: "md:col-span-2",
  },
  {
    title: "Request Flow",
    description: "Client → Gateway → Auth → Microservices → Kafka → Redis → Database → Response",
    icon: <Workflow className="h-6 w-6" />,
    colSpan: "md:col-span-2",
  },
];

const ArchitectureSection = () => (
  <section id="architecture" className="section-padding relative overflow-hidden">
    <div className="glow-orb bottom-0 left-0 h-[400px] w-[400px] bg-primary/6" />
    <div className="glow-orb top-20 right-20 h-[300px] w-[300px] bg-secondary/5" />

    <div className="container-narrow relative z-10">
      <ScrollReveal>
        <p className="text-sm uppercase tracking-[0.25em] text-primary font-semibold mb-3">
          System Design
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          System Architecture
        </h2>
        <div className="h-1 w-16 rounded-full mb-4 bg-gradient-to-r from-primary to-secondary" />
        <p className="text-muted-foreground max-w-2xl mb-12">
          How requests flow through my backend systems — from client to database and back, using API gateways, microservices, event streaming, caching, and databases.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-[1100px] mx-auto">
        {items.map((item, i) => (
          <ScrollReveal
            key={item.title}
            direction="scale"
            delay={i * 0.08}
            className={item.colSpan}
          >
            <div className="glass glass-hover rounded-2xl p-6 h-full group cursor-default transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(124,108,255,0.2)] hover:border-primary/20">
              <div className="text-2xl text-muted-foreground group-hover:text-primary transition-colors duration-300 mb-4 group-hover:drop-shadow-[0_0_8px_rgba(124,108,255,0.5)]">
                {item.icon}
              </div>

              <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-primary/90 transition-colors duration-300">
                {item.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed mb-4 group-hover:text-muted-foreground/90 transition-colors duration-300">
                {item.description}
              </p>

              {item.tech && (
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-2.5 py-0.5 rounded-full bg-primary/8 text-primary/70 border border-primary/10 transition-colors duration-200 group-hover:bg-primary/12 group-hover:text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ArchitectureSection;
