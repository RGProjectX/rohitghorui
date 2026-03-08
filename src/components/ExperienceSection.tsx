import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Building2, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Software Programmer",
    company: "Infibeam Avenues Ltd",
    location: "Mumbai",
    period: "2023 – Present",
    projects: [
      {
        name: "Res Avenue – Hotel Booking & Payment Platform",
        highlights: [
          "Built Spring Boot backend modules for property and room configuration used by 1000+ hotels",
          "Implemented rates & inventory management with bulk Excel updates for pricing rules",
          "Built token transaction reporting for payment workflows",
          "Implemented automated booking reminder schedulers using Spring Scheduler and email services",
          "Integrated WhatsApp API notifications for booking confirmations and payment updates",
          "Built React admin dashboards for promotions and revenue analytics",
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
    location: "Mumbai",
    period: "2022 – 2023",
    projects: [
      {
        name: "MCPG Schedulers – CC Avenue",
        highlights: [
          "Built Quartz schedulers to sync payment data with third-party systems",
          "Implemented retry logic and job recovery",
        ],
        tech: ["Java 11", "Spring Boot", "Quartz Scheduler"],
      },
    ],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="section-padding relative">
    <div className="glow-orb bottom-0 left-0 h-[350px] w-[350px] bg-primary/8" />

    <div className="container-narrow relative z-10">
      <p className="text-sm uppercase tracking-[0.25em] text-primary font-semibold mb-3">
        Career Path
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Experience</h2>
      <div className="h-1 w-12 rounded-full mb-14 bg-gradient-to-r from-primary to-secondary" />

      <div className="relative ml-4 md:ml-6">
        {/* Timeline line with gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-secondary/40 to-border/20" />

        <div className="space-y-16">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="relative pl-10 md:pl-14"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              {/* Timeline node */}
              <div className="absolute left-0 top-0 -translate-x-1/2">
                <div className="relative">
                  {/* Pulse ring */}
                  {idx === 0 && (
                    <div className="absolute inset-0 rounded-full border border-primary/30 animate-ping" 
                         style={{ animationDuration: "3s" }} />
                  )}
                  <div className={`
                    flex h-10 w-10 items-center justify-center rounded-full
                    ${idx === 0
                      ? "bg-gradient-to-br from-primary to-secondary shadow-[0_0_20px_rgba(124,108,255,0.4)]"
                      : "glass border-primary/30"
                    }
                  `}>
                    <Briefcase className={`h-4 w-4 ${idx === 0 ? "text-primary-foreground" : "text-primary"}`} />
                  </div>
                </div>
              </div>

              {/* Role header card */}
              <div className="glass rounded-2xl p-5 md:p-6 mb-5 border-primary/10 hover:border-primary/25 transition-colors duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                    <div className="flex flex-wrap items-center gap-3 mt-2">
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
                  <Badge className="self-start md:self-center rounded-lg px-3 py-1.5 text-xs font-semibold bg-primary/10 text-primary border-primary/20 hover:bg-primary/15">
                    <Calendar className="h-3 w-3 mr-1.5" />
                    {exp.period}
                  </Badge>
                </div>
              </div>

              {/* Project cards */}
              <div className="space-y-4">
                {exp.projects.map((project, pIdx) => (
                  <motion.div
                    key={project.name}
                    className="glass glass-hover rounded-xl p-5 md:p-6 ml-2 border-l-2 border-l-primary/20 hover:border-l-primary/60 transition-all duration-300"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 + pIdx * 0.1 + 0.2 }}
                  >
                    <h4 className="font-semibold text-foreground mb-4 text-[15px]">{project.name}</h4>
                    <ul className="space-y-2.5 mb-5">
                      {project.highlights.map((h, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex gap-2.5 leading-relaxed">
                          <span className="text-primary mt-0.5 shrink-0 text-xs">●</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <Badge
                          key={t}
                          variant="outline"
                          className="rounded-md text-[11px] px-2.5 py-0.5 border-border/50 text-muted-foreground bg-muted/30 hover:border-primary/30 hover:text-primary transition-colors duration-200"
                        >
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
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
