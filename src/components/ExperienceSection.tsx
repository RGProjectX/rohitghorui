import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Software Programmer",
    company: "Infibeam Avenues Ltd",
    location: "Mumbai",
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
  <section id="experience" className="section-padding">
    <div className="container-narrow">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Experience</h2>
      <div className="h-1 w-12 bg-primary rounded-full mb-10" />

      <div className="relative border-l-2 border-border pl-8 space-y-12 ml-3">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative">
            {/* Timeline dot */}
            <div className="absolute -left-[calc(2rem+5px)] top-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-card">
              <Briefcase className="h-4 w-4 text-primary" />
            </div>

            <div className="space-y-1 mb-4">
              <h3 className="text-lg font-bold text-foreground">{exp.role}</h3>
              <p className="text-sm font-medium text-primary">{exp.company}</p>
              <p className="text-sm text-muted-foreground">{exp.location}</p>
            </div>

            <div className="space-y-6">
              {exp.projects.map((project) => (
                <div
                  key={project.name}
                  className="rounded-xl border bg-card p-6 shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <h4 className="font-semibold text-foreground mb-3">{project.name}</h4>
                  <ul className="space-y-2 mb-4">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary mt-1 shrink-0">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="secondary" className="rounded-lg text-xs">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
