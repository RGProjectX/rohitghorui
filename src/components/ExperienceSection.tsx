import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Building2, Calendar, TrendingUp } from "lucide-react";
import { ReactNode } from "react";

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
    company: "Infibeam Avenues Ltd",
    location: "Mumbai, India",
    period: "Oct 2023 — Present",
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
    company: "Infibeam Avenues Ltd",
    location: "Mumbai, India",
    period: "Jun 2022 — Sep 2023",
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

const ExperienceSection = () => (
  <section id="experience" className="section-padding relative overflow-hidden">
    <div className="glow-orb bottom-0 left-0 h-[400px] w-[400px] bg-primary/8" />
    <div className="glow-orb top-20 right-0 h-[250px] w-[250px] bg-secondary/5" />

    <div className="container-narrow relative z-10">
      <p className="text-sm uppercase tracking-[0.25em] text-primary font-semibold mb-3">
        Career Path
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Experience</h2>
      <div className="h-1 w-12 rounded-full mb-10 bg-gradient-to-r from-primary to-secondary" />

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[18px] md:left-5 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

        <div className="space-y-14">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="relative pl-14 md:pl-16"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              {/* Timeline node */}
              <div className="absolute left-[18px] md:left-5 top-6 -translate-x-1/2">
                <div className="relative flex items-center justify-center">
                  {idx === 0 && (
                    <div
                      className="absolute h-8 w-8 rounded-full border border-primary/30 animate-ping"
                      style={{ animationDuration: "3s" }}
                    />
                  )}
                  <div
                    className={`h-3 w-3 rounded-full ${
                      idx === 0
                        ? "bg-primary shadow-[0_0_12px_rgba(124,108,255,0.8)]"
                        : "bg-primary/50 shadow-[0_0_8px_rgba(124,108,255,0.4)]"
                    }`}
                  />
                </div>
              </div>

              {/* Main experience card */}
              <motion.div
                className="glass rounded-2xl p-6 md:p-8 transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_40px_rgba(124,108,255,0.12)] hover:border-primary/20"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div className="space-y-2">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">{exp.role}</h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                      <span className="flex items-center gap-1.5 text-sm font-medium text-primary">
                        <Building2 className="h-3.5 w-3.5" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <MapPin className="h-3.5 w-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge className="rounded-full px-3.5 py-1 text-xs font-medium bg-primary/10 text-primary border-primary/20 hover:bg-primary/15 shrink-0">
                      <Calendar className="h-3 w-3 mr-1.5" />
                      {exp.period}
                    </Badge>
                    {exp.impact && (
                      <Badge className="rounded-full px-3.5 py-1 text-xs font-medium bg-secondary/10 text-secondary border-secondary/20 hover:bg-secondary/15 shrink-0">
                        <TrendingUp className="h-3 w-3 mr-1.5" />
                        {exp.impact}
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-border/30 mb-6" />

                {/* Projects */}
                <div className="space-y-6">
                  {exp.projects.map((project, pIdx) => (
                    <motion.div
                      key={project.name}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: idx * 0.1 + pIdx * 0.1 + 0.2 }}
                    >
                      <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Briefcase className="h-3.5 w-3.5 text-primary/70" />
                        {project.name}
                      </h4>

                      <ul className="space-y-2 mb-4 ml-5">
                        {project.highlights.map((h, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex gap-2 leading-relaxed">
                            <span className="text-primary/60 mt-1 shrink-0 text-[6px]">●</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 ml-5">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="text-xs px-3 py-1 rounded-full bg-primary/8 text-primary/80 border border-primary/15 transition-colors duration-200 hover:bg-primary/15 hover:text-primary"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Project divider (not on last) */}
                      {pIdx < exp.projects.length - 1 && (
                        <div className="h-px w-full bg-border/20 mt-6" />
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
