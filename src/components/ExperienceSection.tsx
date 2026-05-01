import { Badge } from "@/components/ui/badge";
import { TechBadge } from "@/components/TechBadge";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Building2, Calendar, TrendingUp, ChevronRight } from "lucide-react";
import { ReactNode } from "react";
import ScrollReveal from "@/components/ScrollReveal";

interface Project {
  name: string;
  highlights: (string | ReactNode)[];
  tech: string[];
}

interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  impact?: string;
  projects: Project[];
}

const Metric = ({ children }: { children: string }) => (
  <span className="text-primary font-semibold">{children}</span>
);

const experiences: Experience[] = [
  {
    role: "Software Programmer",
    company: "AvenuesAI",
    location: "Mumbai, India",
    period: "Oct 2023 – Present",
    impact: "Serving 1000+ hotels",
    projects: [
      {
        name: "Res Avenue – Hotel Booking & Payment Platform",
        highlights: [
          <>Built Spring Boot backend modules for property and room configuration used by <Metric>1000+ hotels</Metric></>,
          <>Implemented Rates & Inventory system with Excel-based bulk updates handling <Metric>100+ room-date</Metric> combinations</>,
          "Built token provisioning and transaction reports supporting payment reconciliation workflows",
          "Automated offline booking reminders using Spring Scheduler, reducing manual follow-ups",
          "Integrated WhatsApp API notifications for booking confirmation, cancellations, and payment status",
          "Developed React admin dashboards for discounts, promotions, and revenue analytics",
        ],
        tech: ["Java", "Spring Boot", "React", "MySQL", "Redis", "Git"],
      },
      {
        name: "Res Admin – Financial Operations Platform",
        highlights: [
          "Implemented payout processing workflows for financial settlements",
          "Built merchant recovery and negative payout workflows",
          "Developed payout monitoring and reconciliation reports",
          "Implemented bulk bank payout file processing",
        ],
        tech: ["Java 11", "Spring MVC", "MySQL", "Redis", "Kafka"],
      },
    ],
  },
  {
    role: "Junior Software Programmer",
    company: "AvenuesAI",
    location: "Mumbai, India",
    period: "Jun 2022 – Sep 2023",
    impact: "~50% efficiency gain",
    projects: [
      {
        name: "MCPG Payment Scheduler System – CC Avenue",
        highlights: [
          "Built Quartz schedulers syncing payment data with third-party systems",
          "Implemented retry logic and job recovery improving reliability",
          <>Reduced manual reconciliation effort by <Metric>~50%</Metric></>,
        ],
        tech: ["Java 11", "Spring Boot", "Quartz Scheduler", "MySQL"],
      },
    ],
  },
];

const ProjectCard = ({ project, delay }: { project: Project; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay }}
    className="rounded-xl border border-border/20 bg-card/30 p-5 transition-all duration-300 hover:border-primary/20 hover:bg-card/50"
  >
    <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
      <span className="flex items-center justify-center h-6 w-6 rounded-md bg-primary/10">
        <Briefcase className="h-3 w-3 text-primary" />
      </span>
      {project.name}
    </h4>

    <ul className="space-y-2.5 mb-4">
      {project.highlights.map((h, i) => (
        <li key={i} className="text-sm text-muted-foreground flex gap-2.5 leading-relaxed">
          <ChevronRight className="h-3.5 w-3.5 text-primary/50 mt-0.5 shrink-0" />
          <span>{h}</span>
        </li>
      ))}
    </ul>

    <div className="flex flex-wrap gap-1.5">
      {project.tech.map((t) => (
        <TechBadge key={t} name={t} />
      ))}
    </div>
  </motion.div>
);

const ExperienceSection = () => (
  <section id="experience" className="section-padding relative overflow-hidden">
    <div className="container-narrow relative z-10">
      <ScrollReveal>
        <p className="text-sm uppercase tracking-[0.25em] text-primary font-semibold mb-3">
          Career Path
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Experience</h2>
        <div className="h-1 w-12 rounded-full mb-12 bg-gradient-to-r from-primary to-secondary" />
      </ScrollReveal>

      <div className="relative">
        {/* Timeline spine */}
        <div className="absolute left-[19px] md:left-[21px] top-2 bottom-0 w-px">
          <div className="h-full w-full bg-gradient-to-b from-primary/60 via-primary/20 to-transparent" />
        </div>

        <div className="space-y-16">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="relative pl-14 md:pl-16"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {/* Timeline node */}
              <div className="absolute left-[19px] md:left-[21px] top-1 -translate-x-1/2">
                <div className="relative flex items-center justify-center">
                  {idx === 0 && (
                    <motion.div
                      className="absolute h-10 w-10 rounded-full border border-primary/20"
                      animate={{ scale: [1, 1.8, 1], opacity: [0.4, 0, 0.4] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                  )}
                  <div
                    className={`h-3.5 w-3.5 rounded-full border-2 ${
                      idx === 0
                        ? "bg-primary border-primary shadow-[0_0_16px_rgba(124,108,255,0.6)]"
                        : "bg-background border-primary/40"
                    }`}
                  />
                </div>
              </div>

              {/* Role header - floating above card */}
              <div className="mb-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground leading-tight">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1.5">
                      <span className="flex items-center gap-1.5 text-sm font-medium text-primary">
                        <Building2 className="h-3.5 w-3.5" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <Badge className="rounded-full px-3 py-1 text-[11px] font-medium bg-muted/50 text-muted-foreground border-border/30 hover:bg-muted/70 shrink-0">
                      <Calendar className="h-3 w-3 mr-1.5" />
                      {exp.period}
                    </Badge>
                    {exp.impact && (
                      <Badge className="rounded-full px-3 py-1 text-[11px] font-semibold bg-primary/10 text-primary border-primary/20 hover:bg-primary/15 shrink-0">
                        <TrendingUp className="h-3 w-3 mr-1.5" />
                        {exp.impact}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>

              {/* Project cards grid */}
              <div className="space-y-4">
                {exp.projects.map((project, pIdx) => (
                  <ProjectCard
                    key={project.name}
                    project={project}
                    delay={idx * 0.1 + pIdx * 0.1 + 0.2}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
