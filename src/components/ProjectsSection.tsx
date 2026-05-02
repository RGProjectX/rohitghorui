import { TechBadge } from "@/components/TechBadge";
import { Building2, Lock, TrendingUp } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";

const projects = [
  {
    title: "ResAvenue – Hotel Booking & Payment Platform",
    description:
      "Built and optimized a high performance booking engine for direct hotel reservations with real time availability and payment processing.",
    features: [
      "Built booking flow APIs for search, availability, payment, and confirmation",
      "Handled 1000+ concurrent availability queries using Redis caching",
      "Integrated payment workflows with retries and failure handling",
      "Migrated Angular booking interface to React for better maintainability",
    ],
    tech: [
      "Java",
      "Spring Boot",
      "Microservices",
      "REST APIs",
      "Redis",
      "MySQL",
      "React",
      "Angular",
      "Git",
      "Payments"
    ],
    company: "AvenuesAI",
    impact: "Serving 3000+ hotels with real time booking and payments",
    type: "Booking Engine",
    period: "Oct 2024 – Present",
  },
  {
    title: "ResAvenue CRS – Central Reservation System",
    description:
      "Centralized system managing rates, inventory, and reservations across multiple distribution channels with real time synchronization.",
    features: [
      "Built ARI modules for centralized rate and inventory management",
      "Implemented bulk ingestion pipelines with validation and consistency checks",
      "Developed APIs for booking, modification, and cancellation flows",
      "Designed OTA sync logic to prevent overbooking",
    ],
    tech: [
      "Java",
      "Spring Boot",
      "Microservices",
      "REST APIs",
      "MySQL",
      "Redis",
      "Angular",
      "Git",
      "Service Orchestration"
    ],
    company: "AvenuesAI",
    impact: "Managing inventory and distribution for 3000+ hotels",
    type: "Distributed System",
    period: "Oct 2024 – Present",
  },
  {
    title: "ResAdmin – Financial Operations Platform",
    description:
      "Fintech platform handling merchant settlements, reconciliation, and payout processing with high reliability and audit compliance.",
    features: [
      "Built payout workflows for merchant settlement processing",
      "Developed reconciliation pipelines for internal and external transactions",
      "Implemented negative payout and recovery handling systems",
      "Optimized payouts using Kafka based asynchronous processing",
    ],
    tech: [
      "Java",
      "Spring MVC",
      "Kafka",
      "MySQL",
      "Redis",
      "Microservices",
      "Payments",
      "Reconciliation",
      "Settlement",
      "Fintech"
    ],
    company: "AvenuesAI",
    impact: "Reduced manual financial operations by 30% and improved reconciliation accuracy",
    type: "Fintech",
    period: "Oct 2024 – Present",
  },
  {
    title: "CC Avenue - MCPG Payment Scheduler System",
    description:
      "Quartz based scheduler system ensuring reliable transaction synchronization and automated reconciliation in payment workflows.",
    features: [
      "Built Quartz schedulers for transaction and settlement sync",
      "Implemented retry logic and job recovery for failed transactions",
      "Automated reconciliation workflows reducing manual intervention",
    ],
    tech: [
      "Java",
      "Spring Boot",
      "Quartz Scheduler",
      "MySQL",
      "REST APIs",
      "Payments",
      "Reconciliation"
    ],
    company: "AvenuesAI",
    impact: "Reduced manual reconciliation effort by ~50%",
    type: "Fintech",
    period: "Jul 2024 – Sep 2024",
  },
];
const ProjectsSection = () => (
  <section id="projects" className="section-padding relative">
    <div className="container-narrow relative z-10">
      <ScrollReveal>
        <div className="flex items-baseline gap-4 mb-4">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">
            Ships That Sailed
          </p>
          <span className="text-xs text-muted-foreground">Curated work</span>
        </div>
      </ScrollReveal>

      <div className="space-y-8 mt-10">
        {projects.map((project, i) => (
          <ScrollReveal key={project.title} direction="up" delay={i * 0.1}>
            <div className="group relative">
              {/* Number */}
              <div className="flex items-start gap-6 md:gap-10">
                <div className="shrink-0 pt-1">
                  <span className="text-sm font-mono text-muted-foreground/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex-1 rounded-xl border border-border/20 bg-card/30 p-6 md:p-8 transition-all duration-300 hover:border-primary/20 hover:bg-card/50">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[11px] uppercase tracking-wider font-medium text-primary bg-accent px-2.5 py-1 rounded-md">
                          {project.type}
                        </span>
                        <span className="text-xs text-muted-foreground">{project.period}</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground shrink-0 glass rounded-full px-2.5 py-1">
                      <Lock className="h-3 w-3" />
                      Proprietary
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-4 text-xs text-muted-foreground">
                    <Building2 className="h-3.5 w-3.5" />
                    <span>{project.company}</span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed max-w-2xl">
                    {project.description}
                  </p>

                  {project.impact && (
                    <div className="flex items-center gap-2 mb-5 text-xs">
                      <TrendingUp className="h-3.5 w-3.5 text-primary" />
                      <span className="text-primary font-semibold">{project.impact}</span>
                    </div>
                  )}

                  <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 mb-6">
                    {project.features.map((f) => (
                      <li key={f} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-primary shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-border/30">
                    {project.tech.map((t) => (
                      <TechBadge key={t} name={t} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
