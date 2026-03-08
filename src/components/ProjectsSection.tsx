import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

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
  },
  {
    title: "Payment Payout System",
    description:
      "Backend system for managing merchant payouts and financial settlements with reconciliation workflows.",
    features: [
      "Payout processing",
      "Negative payout recovery",
      "Financial reconciliation reports",
    ],
    tech: ["Java", "Kafka", "MySQL"],
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding bg-card">
    <div className="container-narrow">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Projects</h2>
      <div className="h-1 w-12 bg-primary rounded-full mb-10" />

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group rounded-xl border bg-background p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
              <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>

            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              {project.description}
            </p>

            <ul className="space-y-1.5 mb-5">
              {project.features.map((f) => (
                <li key={f} className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <Badge key={t} className="rounded-lg text-xs">
                  {t}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
