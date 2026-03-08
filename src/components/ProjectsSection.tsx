import { TechBadge } from "@/components/TechBadge";
import { Building2, Lock, TrendingUp } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Hotel Booking Platform",
    description: "Scalable backend system managing hotel reservations, pricing rules, and inventory across 1000+ hotels with real-time availability.",
    features: ["Rate & inventory management", "Pricing rules engine", "Reservation reporting", "Booking workflow automation"],
    tech: ["Spring Boot", "MySQL", "Redis", "React"],
    company: "Infibeam Avenues Ltd",
    impact: "Serving 1000+ hotels",
    type: "Backend System",
    period: "2024",
  },
  {
    title: "Merchant Payout Processing",
    description: "Financial settlement platform handling merchant payouts, negative recovery workflows, and reconciliation with automated reporting.",
    features: ["Payout processing", "Negative payout recovery", "Financial reporting", "Bulk bank file processing"],
    tech: ["Java", "Kafka", "MySQL"],
    company: "Infibeam Avenues Ltd",
    impact: "10K+ daily settlements",
    type: "Fintech",
    period: "2023-24",
  },
  {
    title: "Payment Scheduler System",
    description: "Quartz-based scheduler system syncing payment data with third-party APIs, featuring retry logic and automated job recovery.",
    features: ["Quartz-based scheduling", "Third-party data sync", "Retry logic & recovery", "Transaction monitoring"],
    tech: ["Spring Boot", "Quartz", "MySQL"],
    company: "Infibeam Avenues Ltd",
    impact: "Reduced manual ops by ~50%",
    type: "Infrastructure",
    period: "2023",
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

                <div className="flex-1 glass glass-hover rounded-2xl p-6 md:p-8">
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
                      <Badge key={t} variant="outline" className="rounded-full text-xs font-medium border-border/40 text-muted-foreground">
                        {t}
                      </Badge>
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
