import { Badge } from "@/components/ui/badge";
import { TechBadge } from "@/components/TechBadge";
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
    role: "Junior Software Programmer",
    company: "AvenuesAI - ResAvenue",
    location: "Mumbai, India",
    period: "Sep 2024 – Present",
    impact: "Serving 3000+ hotels",
    projects: [
      {
        name: "ResAvenue – Hotel Booking & Payment Platform",
        highlights: [
          <>Built and optimized end to end booking flow APIs covering search, availability, payment, and confirmation for <Metric>3000+ hotels</Metric></>,
          <>Developed high performance availability search handling <Metric>1000s of concurrent queries</Metric> using caching and precomputed inventory reads</>,
          <>Migrated legacy <Metric>Angular based booking engine to React</Metric>, reducing frontend complexity and improving development turnaround time by <Metric>30%</Metric></>,
          "Integrated payment gateway workflows with CCAvenue including tokenization, retries, and failure handling for reliable transaction processing",
          "Implemented dynamic pricing and offer application logic such as promo codes, packages, and add-ons to improve conversion rates",
          "Built WhatsApp and email notification systems for real time booking confirmations, cancellations, and payment updates",
        ],
        tech: ["Java", "Spring Boot", "React", "Angular", "MySQL", "Redis", "Git"],
      },
      {
        name: "ResAvenue CRS – Central Reservation System",
        highlights: [
          <>Designed and developed centralized rates & inventory modules managing real-time availability across <Metric>3000+ hotels</Metric></>,
          <>Implemented bulk rates & inventory upload pipelines (Excel ingestion + validation) handling <Metric>100+ room-date</Metric> combinations with transactional consistency</>,
          "Built OTA/channel synchronization workflows ensuring real-time inventory updates and preventing overbooking scenarios",
          "Implemented pricing rules engine for dynamic rate plans, promotions, and derived rate mapping",
          "Optimized high-concurrency booking flows using Redis caching and async processing for low-latency availability checks",
          "Built reporting modules for occupancy, revenue, and channel performance analytics",
        ],
        tech: ["Java", "Spring Boot", "Angular", "MySQL", "Redis", "Jenkins", "Kafka"],
      },
      {
        name: "ResAdmin – Financial Operations Platform",
        highlights: [
          "Designed and implemented payout processing workflows for merchant settlements ensuring accuracy and audit compliance",
          <>Built merchant recovery and negative payout handling systems reducing manual intervention by <Metric>30%</Metric></>,
          <>Developed reconciliation pipelines comparing internal transactions with bank and payment gateway reports improving settlement accuracy by <Metric>25%</Metric></>,
          <>Implemented monitoring and alerting for payout failures and mismatches reducing issue resolution time by <Metric>40%</Metric></>,
          <>Optimized payout processing using Kafka based asynchronous workflows increasing throughput by <Metric>2x</Metric></>,
        ],
        tech: ["Java", "Spring MVC", "MySQL", "Redis", "Kafka"],
      }
    ],
  },
  {
    role: "Junior Software Programmer",
    company: "AvenuesAI - CCAvenue Trans",
    location: "Mumbai, India",
    period: "Jul 2024 – Sep 2024",
    impact: "~50% efficiency gain",
    projects: [
      {
        name: "MCPG Payment Scheduler System – CC Avenue",
        highlights: [
          "Built Quartz based schedulers to sync transaction and settlement data with external payment systems",
          "Implemented retry logic and job recovery mechanisms ensuring reliable payment reconciliation and data consistency",
          <>Reduced manual reconciliation effort by <Metric>~50%</Metric></>,
        ],
        tech: ["Java", "Spring Boot", "Quartz Scheduler", "MySQL"],
      },
    ],
  }
];

const ProjectCard = ({ project, delay }: { project: Project; delay: number }) => (
  <div
    data-aos="fade-up"
    data-aos-duration="400"
    data-aos-delay={delay}
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
  </div>
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
            <div
              key={idx}
              data-aos="fade-left"
              data-aos-duration="500"
              data-aos-delay={idx * 150}
              className="relative pl-14 md:pl-16"
            >
              {/* Timeline node */}
              <div className="absolute left-[19px] md:left-[21px] top-1 -translate-x-1/2">
                <div className="relative flex items-center justify-center">
                  {idx === 0 && (
                    <div
                      className="absolute h-10 w-10 rounded-full border border-primary/20 animate-pulse"
                      style={{
                        animation: 'pulse 3s ease-in-out infinite',
                      }}
                    />
                  )}
                  <div
                    className={`h-3.5 w-3.5 rounded-full border-2 ${idx === 0
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
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
