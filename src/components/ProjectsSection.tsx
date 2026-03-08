import { Badge } from "@/components/ui/badge";
import { ExternalLink, GitFork, Star, Circle, TrendingDown } from "lucide-react";

const projects = [
  {
    title: "Hotel Booking Platform",
    description: "Scalable backend system managing hotel reservations, pricing rules, and inventory across 1000+ hotels with real-time availability.",
    features: ["Rate & inventory management", "Pricing rules engine", "Reservation reporting", "Booking workflow automation"],
    tech: ["Spring Boot", "MySQL", "Redis", "React"],
    language: "Java",
    stars: 12,
    forks: 3,
    status: "Production",
  },
  {
    title: "Merchant Payout Processing System",
    description: "Financial settlement platform handling merchant payouts, negative recovery workflows, and reconciliation with automated reporting.",
    features: ["Payout processing", "Negative payout recovery", "Financial reporting", "Bulk bank file processing"],
    tech: ["Java", "Kafka", "MySQL"],
    language: "Java",
    stars: 8,
    forks: 2,
    status: "Production",
    impact: "Processed 10K+ daily settlements",
  },
  {
    title: "Payment Scheduler System",
    description: "Quartz-based scheduler system syncing payment data with third-party APIs, featuring retry logic and automated job recovery.",
    features: ["Quartz-based scheduling", "Third-party data sync", "Retry logic & recovery", "Transaction monitoring"],
    tech: ["Spring Boot", "Quartz", "MySQL"],
    language: "Java",
    stars: 5,
    forks: 1,
    status: "Production",
    impact: "Reduced manual ops by ~50%",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding relative">
    <div className="glow-orb top-20 right-0 h-[300px] w-[300px] bg-primary/6" />

    <div className="container-narrow relative z-10">
      <p className="text-sm uppercase tracking-[0.25em] text-primary font-semibold mb-3">
        Featured Work
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Projects</h2>
      <div className="h-1 w-16 rounded-full mb-4 bg-gradient-to-r from-primary to-secondary" />
      <p className="text-muted-foreground max-w-xl mb-12">
        Production systems I've architected and built, serving real users at scale.
      </p>

      <div className="space-y-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group glass glass-hover rounded-2xl p-7 md:p-8"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 ml-2 mt-1" />
                </div>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {project.impact && (
                  <div className="flex items-center gap-2 mb-4 text-xs">
                    <TrendingDown className="h-3.5 w-3.5 text-primary" />
                    <span className="text-primary font-semibold">{project.impact}</span>
                  </div>
                )}

                <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 mb-5">
                  {project.features.map((f) => (
                    <li key={f} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap items-center gap-2">
                  {project.tech.map((t) => (
                    <Badge key={t} variant="outline" className="rounded-lg text-xs font-medium border-border/50 text-muted-foreground">
                      {t}
                    </Badge>
                  ))}

                  <div className="flex items-center gap-3 ml-auto text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Circle className="h-3 w-3 fill-primary text-primary" />
                      {project.language}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="h-3 w-3" /> {project.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="h-3 w-3" /> {project.forks}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
