import { Badge } from "@/components/ui/badge";
import { ExternalLink, GitFork, Star, Circle } from "lucide-react";

const projects = [
  {
    title: "Hotel Booking Platform",
    description:
      "Scalable backend system for managing hotel reservations, pricing rules, and inventory across 1000+ hotels.",
    features: [
      "Rate & inventory management",
      "Pricing rules engine",
      "Reservation reporting",
      "Booking workflow automation",
    ],
    tech: ["Spring Boot", "MySQL", "Redis"],
    language: "Java",
    stars: 12,
    forks: 3,
    status: "Production",
  },
  {
    title: "Payment Payout System",
    description:
      "Backend system for managing merchant payouts and financial settlements with reconciliation workflows.",
    features: [
      "Payout processing",
      "Negative payout recovery",
      "Financial reconciliation reports",
      "Bulk bank file processing",
    ],
    tech: ["Java", "Kafka", "MySQL"],
    language: "Java",
    stars: 8,
    forks: 2,
    status: "Production",
  },
  {
    title: "MCPG Schedulers",
    description:
      "Automated scheduler system for syncing payment data with third-party systems, featuring retry logic and job recovery.",
    features: [
      "Quartz-based scheduling",
      "Third-party data sync",
      "Retry logic & recovery",
      "Transaction monitoring",
    ],
    tech: ["Spring Boot", "Quartz", "MySQL"],
    language: "Java",
    stars: 5,
    forks: 1,
    status: "Production",
  },
  {
    title: "Admin Dashboard",
    description:
      "React-based admin panel for promotions management, revenue analytics, and real-time booking insights.",
    features: [
      "Promotions management",
      "Revenue analytics",
      "Real-time booking metrics",
      "User management",
    ],
    tech: ["React", "TypeScript", "Redux"],
    language: "TypeScript",
    stars: 6,
    forks: 2,
    status: "Production",
  },
];

const languageColors: Record<string, string> = {
  Java: "bg-primary",
  TypeScript: "bg-accent-foreground",
};

const ProjectsSection = () => (
  <section id="projects" className="section-padding bg-card">
    <div className="container-narrow">
      <div className="flex items-end justify-between mb-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Projects</h2>
          <div className="h-1 w-12 bg-primary rounded-full mb-4" />
          <p className="text-muted-foreground max-w-xl">
            Production systems I've architected and built, serving real users at scale.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group rounded-2xl border bg-background p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-primary/20 transition-all duration-300 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <GitFork className="h-4 w-4" />
                </div>
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
            </div>

            <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">
              {project.description}
            </p>

            {/* Features */}
            <ul className="space-y-1.5 mb-5">
              {project.features.map((f) => (
                <li key={f} className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-primary shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            {/* Tech */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t) => (
                <Badge key={t} variant="secondary" className="rounded-lg text-xs font-medium">
                  {t}
                </Badge>
              ))}
            </div>

            {/* Footer — GitHub style */}
            <div className="flex items-center gap-4 pt-3 border-t text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Circle className={`h-3 w-3 fill-current ${languageColors[project.language] || "bg-muted-foreground"} rounded-full text-primary`} />
                {project.language}
              </span>
              <span className="flex items-center gap-1">
                <Star className="h-3.5 w-3.5" />
                {project.stars}
              </span>
              <span className="flex items-center gap-1">
                <GitFork className="h-3.5 w-3.5" />
                {project.forks}
              </span>
              <Badge variant="outline" className="ml-auto text-[10px] px-2 py-0 h-5 rounded-full font-medium">
                {project.status}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
