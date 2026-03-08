import { Badge } from "@/components/ui/badge";

const skillGroups = [
  {
    title: "Backend",
    skills: ["Java", "Spring Boot", "Spring MVC", "Microservices", "Hibernate", "JPA", "REST APIs"],
  },
  {
    title: "Frontend",
    skills: ["React", "JavaScript", "TypeScript", "Redux", "JSP", "jQuery"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB", "Redis"],
  },
  {
    title: "Messaging & APIs",
    skills: ["Kafka", "RabbitMQ", "ActiveMQ", "REST APIs"],
  },
  {
    title: "DevOps",
    skills: ["Docker", "Kubernetes", "Jenkins", "Git", "Maven", "Gradle"],
  },
  {
    title: "Concepts",
    skills: ["OOP", "Multithreading", "Concurrency", "Design Patterns", "Web Services"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="section-padding bg-card">
    <div className="container-narrow">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Skills</h2>
      <div className="h-1 w-12 bg-primary rounded-full mb-10" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillGroups.map((group) => (
          <div key={group.title} className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="rounded-lg px-3 py-1 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
